
import React, { useState, ReactElement } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import AnimatedCard from './AnimatedCard';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

type StepProps = {
  onNext: (data?: Record<string, any>) => void;
  formData: Record<string, any>;
  updateFormData?: (data: Record<string, any>) => void;
};

type StepperFormProps = {
  steps: {
    title: string;
    component: React.ReactNode;
  }[];
  onComplete: (data: any) => void;
};

const StepperForm = ({ steps, onComplete }: StepperFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const updateFormData = (data: Record<string, any>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const goToNextStep = (data?: Record<string, any>) => {
    if (data) {
      updateFormData(data);
    }
    
    // Mark current step as completed
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps(prev => [...prev, currentStep]);
    }
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onComplete(formData);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  const CurrentStepComponent = () => {
    const StepComponent = steps[currentStep].component;
    
    if (React.isValidElement(StepComponent)) {
      // Type assertion to let TypeScript know this is a valid React element that can accept our props
      return React.cloneElement(StepComponent as ReactElement<StepProps>, {
        onNext: goToNextStep,
        formData,
        updateFormData,
      });
    }
    
    return StepComponent;
  };

  return (
    <div className="w-full">
      <AnimatedCard animation="fade" className="mb-8 w-full">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Etapa {currentStep + 1} de {steps.length}
            </span>
            <span className="text-sm font-medium">{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`text-xs px-3 py-1 rounded-full flex items-center gap-1.5 ${
                completedSteps.includes(index)
                  ? 'bg-primary/20 text-primary'
                  : currentStep === index
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {completedSteps.includes(index) && <CheckCircle2 size={12} />}
              {step.title}
            </div>
          ))}
        </div>
      </AnimatedCard>

      <AnimatedCard 
        key={`step-${currentStep}`}
        animation="slide-up" 
        className="w-full max-w-lg mx-auto glass-card rounded-xl mb-8"
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">{steps[currentStep].title}</h2>
          <CurrentStepComponent />
        </div>
      </AnimatedCard>

      <div className="flex justify-between max-w-lg mx-auto">
        <Button
          variant="outline"
          onClick={goToPreviousStep}
          disabled={currentStep === 0}
          className="gap-2"
        >
          <ArrowLeft size={16} /> Anterior
        </Button>
        {currentStep === steps.length - 1 ? (
          <Button onClick={() => onComplete(formData)} className="gap-2">
            Concluir <CheckCircle2 size={16} />
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default StepperForm;
