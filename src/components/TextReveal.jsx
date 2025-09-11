import React, { useEffect, useRef, useState } from 'react';

const TextReveal = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  // Split text into spans for character-by-character animation
  const animateText = (text) => {
    if (typeof text !== 'string') return text;
    
    return text.split('').map((char, index) => (
      <span
        key={index}
        className={`inline-block transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 transform-none' 
            : 'opacity-0 translate-y-8 blur-sm'
        }`}
        style={{
          transitionDelay: `${index * 30}ms`,
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const processChildren = (children) => {
    if (typeof children === 'string') {
      return animateText(children);
    }
    
    return React.Children.map(children, (child) => {
      if (typeof child === 'string') {
        return animateText(child);
      }
      return child;
    });
  };

  return (
    <div
      ref={elementRef}
      className={`${className} ${isVisible ? 'animate-text-glow' : ''}`}
    >
      {processChildren(children)}
    </div>
  );
};

export default TextReveal;