import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ScrollAnimatedSection = ({ 
  children, 
  className = '', 
  animationType = 'fade-up',
  delay = 0,
  threshold = 0.1 
}) => {
  const [elementRef, isVisible] = useScrollAnimation(threshold);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0 translate-y-8';
    
    switch (animationType) {
      case 'fade-up':
        return 'opacity-100 translate-y-0';
      case 'fade-left':
        return 'opacity-100 translate-x-0';
      case 'fade-right':
        return 'opacity-100 -translate-x-0';
      case 'scale':
        return 'opacity-100 scale-100';
      case 'rotate':
        return 'opacity-100 rotate-0';
      default:
        return 'opacity-100 translate-y-0';
    }
  };

  const getInitialClass = () => {
    switch (animationType) {
      case 'fade-up':
        return 'opacity-0 translate-y-8';
      case 'fade-left':
        return 'opacity-0 -translate-x-8';
      case 'fade-right':
        return 'opacity-0 translate-x-8';
      case 'scale':
        return 'opacity-0 scale-95';
      case 'rotate':
        return 'opacity-0 rotate-3';
      default:
        return 'opacity-0 translate-y-8';
    }
  };

  return (
    <div
      ref={setElementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? getAnimationClass() : getInitialClass()
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedSection;