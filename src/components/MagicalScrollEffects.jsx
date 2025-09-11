import React, { useEffect, useState } from 'react';

const MagicalScrollEffects = () => {
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);

      // Create particles when scrolling fast
      if (Math.abs(newScrollY - scrollY) > 5) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: Math.random() * window.innerWidth,
          y: newScrollY + window.innerHeight * Math.random(),
          life: 1,
          color: Math.random() > 0.5 ? 'purple' : 'cyan',
        };
        
        setParticles(prev => [...prev.slice(-20), newParticle]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animate particles
    const animateParticles = () => {
      setParticles(prev => prev
        .map(p => ({ ...p, life: p.life - 0.02 }))
        .filter(p => p.life > 0)
      );
    };

    const interval = setInterval(animateParticles, 16);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [scrollY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {/* Scroll speed particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className={`absolute w-2 h-2 rounded-full transition-all duration-1000 ${
            particle.color === 'purple' 
              ? 'bg-purple-400/60' 
              : 'bg-cyan-400/60'
          }`}
          style={{
            left: particle.x,
            top: particle.y - scrollY,
            opacity: particle.life,
            transform: `scale(${particle.life})`,
            boxShadow: `0 0 ${10 * particle.life}px ${
              particle.color === 'purple' ? '#8b5cf6' : '#06b6d4'
            }`,
          }}
        />
      ))}

      {/* Scroll progress rays */}
      <div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 opacity-30"
        style={{
          width: `${(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`,
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
        }}
      />

      {/* Floating energy orbs */}
      <div
        className="absolute w-32 h-32 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-xl"
        style={{
          left: `${20 + Math.sin(scrollY * 0.002) * 10}%`,
          top: `${30 + scrollY * 0.1}%`,
          transform: `rotate(${scrollY * 0.1}deg)`,
        }}
      />
      
      <div
        className="absolute w-24 h-24 bg-gradient-to-l from-cyan-500/10 to-transparent rounded-full blur-xl"
        style={{
          right: `${15 + Math.cos(scrollY * 0.003) * 8}%`,
          top: `${60 + scrollY * 0.05}%`,
          transform: `rotate(${-scrollY * 0.15}deg)`,
        }}
      />

      {/* Magic sparkles */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-70"
          style={{
            left: `${20 + i * 30 + Math.sin(scrollY * 0.005 + i) * 10}%`,
            top: `${40 + Math.cos(scrollY * 0.003 + i) * 20}%`,
            animation: `twinkle ${2 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>
    </div>
  );
};

export default MagicalScrollEffects;