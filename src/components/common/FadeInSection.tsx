import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface FadeInSectionProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ 
  children, 
  direction = 'up',
  delay = 0,
  className = ''
}) => {
  const [ref, isVisible] = useIntersectionObserver();

  const getAnimationClass = () => {
    switch (direction) {
      case 'up':
        return 'animate-fade-in-up';
      case 'left':
        return 'animate-fade-in-left';
      case 'right':
        return 'animate-fade-in-right';
      default:
        return 'animate-fade-in';
    }
  };

  const getDelayClass = () => {
    switch (delay) {
      case 100:
        return 'delay-100';
      case 200:
        return 'delay-200';
      case 300:
        return 'delay-300';
      case 400:
        return 'delay-400';
      default:
        return '';
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? `${getAnimationClass()} ${getDelayClass()}` : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;