import React, { useEffect, useState } from 'react';

const ScrollEffects = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Intersection Observer for scroll reveals
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
    scrollRevealElements.forEach((el) => observer.observe(el));

    // Staggered animations for child elements
    const staggeredContainers = document.querySelectorAll('.stagger-container');
    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll('.stagger-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-stagger-fade-in');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    staggeredContainers.forEach((container) => staggerObserver.observe(container));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      staggerObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Floating Morphing Shapes */}
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        {/* Morphing Blob 1 */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 animate-morphing-blob"
          style={{
            top: `${20 + scrollY * 0.02}%`,
            left: `${10 + Math.sin(scrollY * 0.001) * 10}%`,
            transform: `rotate(${scrollY * 0.1}deg)`,
          }}
        />
        
        {/* Morphing Blob 2 */}
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-cyan-500/8 via-blue-500/8 to-purple-500/8 animate-morphing-blob"
          style={{
            top: `${60 + scrollY * 0.03}%`,
            right: `${15 + Math.cos(scrollY * 0.002) * 8}%`,
            transform: `rotate(${-scrollY * 0.15}deg)`,
            animationDelay: '5s',
          }}
        />

        {/* Floating Geometric Shapes */}
        <div
          className="absolute w-6 h-6 bg-purple-400/30 rotate-45 animate-float-diagonal"
          style={{
            top: `${30 + scrollY * 0.05}%`,
            left: `${80 + Math.sin(scrollY * 0.003) * 5}%`,
          }}
        />
        
        <div
          className="absolute w-4 h-4 bg-cyan-400/40 rounded-full animate-float-diagonal"
          style={{
            top: `${70 + scrollY * 0.04}%`,
            left: `${20 + Math.cos(scrollY * 0.002) * 7}%`,
            animationDelay: '2s',
          }}
        />

        <div
          className="absolute w-8 h-8 bg-pink-400/25 animate-float-diagonal"
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            top: `${45 + scrollY * 0.06}%`,
            right: `${25 + Math.sin(scrollY * 0.004) * 6}%`,
            animationDelay: '4s',
          }}
        />
      </div>

      {/* Magnetic Cursor Effect */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full pointer-events-none z-50 opacity-30 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'scale(1)',
        }}
      />
      <div
        className="fixed w-12 h-12 border-2 border-purple-400/30 rounded-full pointer-events-none z-50 transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
          transform: 'scale(1)',
        }}
      />

      {/* Scroll-triggered light beams */}
      <div className="fixed inset-0 pointer-events-none z-1 overflow-hidden">
        <div
          className="absolute w-1 h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
          style={{
            left: `${20 + scrollY * 0.01}%`,
            transform: `rotate(${scrollY * 0.05}deg)`,
            opacity: Math.sin(scrollY * 0.002) * 0.3 + 0.3,
          }}
        />
        <div
          className="absolute w-1 h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
          style={{
            right: `${25 + scrollY * 0.015}%`,
            transform: `rotate(${-scrollY * 0.03}deg)`,
            opacity: Math.cos(scrollY * 0.003) * 0.3 + 0.3,
          }}
        />
      </div>
    </>
  );
};

export default ScrollEffects;