/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // GPU acceleration hints
      willChange: {
        'transform': 'transform',
        'opacity': 'opacity',
        'scroll': 'scroll-position',
      },
      // Performance-optimized animation configs
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-x': 'float-x 4s ease-in-out infinite',
        'float-diagonal': 'float-diagonal 5s ease-in-out infinite',
        'morphing-blob': 'morphing-blob 15s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'stagger-fade-in': 'stagger-fade-in 0.6s ease-out forwards',
      },
      // Add containment strategy for improved rendering
      contain: {
        'layout': 'layout',
        'style': 'style',
        'paint': 'paint',
        'strict': 'strict',
      },
    },
  },
  plugins: [],
};
