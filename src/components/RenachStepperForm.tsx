
import { useState } from 'react';
import StepperForm from './StepperForm';
import PersonalDataStep from './steps/PersonalDataStep';
import FingerprintsStep from './steps/FingerprintsStep';
import FacialBiometricsStep from './steps/FacialBiometricsStep';
import IdDocumentStep from './steps/IdDocumentStep';
import AddressLicenseStep from './steps/AddressLicenseStep';
import ValidationPaymentStep from './steps/ValidationPaymentStep';
import RenachConfirmationStep from './steps/RenachConfirmationStep';
import { toast } from "sonner";
import AnimatedCard from './AnimatedCard';

const RenachStepperForm = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [finalRenachData, setFinalRenachData] = useState<Record<string, any> | null>(null);

  const handleComplete = (data: Record<string, any>) => {
    setFinalRenachData(data);
    setIsComplete(true);
    toast.success("Processo RENACH concluído com sucesso!");
  };

  const steps = [
    {
      title: "Dados Pessoais",
      component: <PersonalDataStep onNext={() => {}} formData={{}} />,
    },
    {
      title: "Impressões Digitais",
      component: <FingerprintsStep onNext={() => {}} formData={{}} />,
    },
    {
      title: "Biometria Facial",
      component: <FacialBiometricsStep onNext={() => {}} formData={{}} />,
    },
    {
      title: "Documento de Identificação",
      component: <IdDocumentStep onNext={() => {}} formData={{}} />,
    },
    {
      title: "Endereço e Categoria",
      component: <AddressLicenseStep onNext={() => {}} formData={{}} />,
    },
    {
      title: "Validação e Pagamento",
      component: <ValidationPaymentStep onNext={() => {}} formData={{}} />,
    },
    {
      title: "Emissão do RENACH",
      component: <RenachConfirmationStep onNext={() => {}} formData={{}} />,
    },
  ];

  if (isComplete && finalRenachData) {
    return (
      <AnimatedCard animation="scale" className="w-full max-w-xl mx-auto">
        <div className="text-center py-12">
          <div className="bg-green-100 text-green-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Processo Concluído!</h2>
          <p className="text-muted-foreground mb-6">
            Seu RENACH foi gerado com sucesso. Guarde o número para referência futura.
          </p>
          
          <div className="bg-primary/10 rounded-lg p-4 inline-block mx-auto mb-6">
            <p className="text-2xl font-mono font-bold">{finalRenachData.renachNumber || "SP1234567890"}</p>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => window.location.reload()} 
              className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Iniciar Novo Processo
            </button>
          </div>
        </div>
      </AnimatedCard>
    );
  }

  return (
    <StepperForm 
      steps={steps} 
      onComplete={handleComplete} 
    />
  );
};

export default RenachStepperForm;
