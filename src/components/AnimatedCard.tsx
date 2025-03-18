
import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade' | 'slide-up' | 'scale' | 'blur';
}

const AnimatedCard = ({
  children,
  className,
  delay = 0,
  animation = 'fade',
}: AnimatedCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade':
        return isVisible ? 'animate-fade-in' : 'opacity-0';
      case 'slide-up':
        return isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8';
      case 'scale':
        return isVisible ? 'animate-scale-in' : 'opacity-0 scale-95';
      case 'blur':
        return isVisible ? 'animate-blur-in' : 'opacity-0 blur-[8px]';
      default:
        return isVisible ? 'animate-fade-in' : 'opacity-0';
    }
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        getAnimationClass(),
        className
      )}
      style={{
        animationFillMode: 'forwards',
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
