
import AnimatedCard from './AnimatedCard';
import { cn } from '@/lib/utils';

interface InfoSectionProps {
  title: string;
  description: string;
  steps?: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  className?: string;
}

const InfoSection = ({ title, description, steps, className }: InfoSectionProps) => {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className="container px-4 md:px-6">
        <AnimatedCard animation="fade">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">{title}</h2>
            <p className="text-lg text-muted-foreground">{description}</p>
          </div>
        </AnimatedCard>

        {steps && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <AnimatedCard 
                key={index} 
                delay={index * 150} 
                animation="slide-up"
                className="glass-card rounded-xl p-6 hover-lift"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </AnimatedCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default InfoSection;
