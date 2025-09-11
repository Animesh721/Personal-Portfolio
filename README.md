# 🎨 Portfolio Website - Animesh Kumar Choudhary

A modern, interactive portfolio website built with React, featuring stunning animations, particle effects, and responsive design.

## ✨ Features

- **Modern Animations**: Smooth slide-up, scale-in, and bounce animations with staggered loading effects
- **Interactive Particle Background**: Dynamic particle system with mouse interaction and connection effects
- **Glass Morphism Design**: Modern UI with backdrop blur effects and gradient styling
- **Parallax Scrolling**: Subtle parallax effects that respond to user scroll
- **Advanced Hover Effects**: Engaging hover states with elastic transitions and glow effects
- **Responsive Design**: Optimized for all devices and screen sizes
- **Accessibility**: Support for reduced motion preferences and high contrast modes
- **Email Integration**: Contact form with EmailJS integration
- **Fast Performance**: Optimized build with Vite and efficient animations

## 🚀 Tech Stack

- **Frontend**: React 18.3.1, TypeScript
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1, PostCSS
- **Icons**: Lucide React
- **Email Service**: EmailJS Browser
- **Linting**: ESLint 9.9.1
- **Development**: Hot reload, TypeScript support

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── ParticleBackground.jsx
│   └── ScrollEffects.jsx
├── config/              # Configuration files
├── hooks/               # Custom React hooks
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   Fill in your EmailJS configuration in `.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173` to view the site.

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎯 Key Components

### ParticleBackground
Interactive particle system that creates connections between nearby particles and responds to mouse movement.

### ScrollEffects
Handles parallax scrolling effects and scroll-based animations throughout the site.

### Animation System
- Smooth CSS transforms for performance
- Staggered animation delays
- Reduced motion support for accessibility
- Elastic transitions and hover effects

## 🎨 Design Features

- **Color Scheme**: Modern gradients with purple, blue, and accent colors
- **Typography**: Clean, hierarchical text styling with animated gradients
- **Layout**: Mobile-first responsive design
- **Interactions**: Engaging micro-interactions and hover states
- **Performance**: Optimized animations using CSS transforms and `requestAnimationFrame`

## 🌐 Deployment

The project is production-ready and can be deployed to any static hosting platform:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting platform of choice:
   - Vercel
   - Netlify
   - GitHub Pages
   - Firebase Hosting
   - Any static hosting service

## 📱 Browser Support

- Modern browsers with ES6+ support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

For questions or collaboration opportunities, feel free to reach out through the contact form on the website or connect via:

- **LinkedIn**: [Profile Link]
- **GitHub**: [Profile Link]
- **Email**: [Contact Email]

---

Built with ❤️ using React and modern web technologies.