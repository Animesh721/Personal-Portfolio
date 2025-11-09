import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Download,
  ArrowRight,
  Phone,
  MapPin,
  GraduationCap,
  Calendar,
  Award,
  Users,
  BookOpen,
  Sparkles,
  Code,
  Rocket,
  Heart,
  Star,
  Zap,
  Globe,
  Briefcase,
  Eye,
  MousePointer
} from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import ScrollEffects from './components/ScrollEffects';
import TextReveal from './components/TextReveal';
import MagicalScrollEffects from './components/MagicalScrollEffects';
import ContactForm from './components/ContactForm';
import { useScrollDirection } from './hooks/useScrollAnimation';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollDirection = useScrollDirection();


  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => setIsLoading(false), 2000);
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollY(scrollTop);
      setScrollProgress(scrollPercent);
      setScrolled(scrollTop > 50);

      // Update active section with improved detection
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "Pocketa - AI Finance Manager",
      description: "AI-powered student finance management PWA that helps students track expenses, manage budgets, and receive personalized financial advice. Features intelligent expense tracking, budget management, and context-aware AI financial advisor powered by OpenAI.",
      tech: ["React", "Node.js", "MongoDB", "OpenAI GPT-3.5", "Express", "TailwindCSS"],
      github: "https://github.com/Animesh721/Pocketa",
      demo: "https://pocketa.vercel.app/",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop"
    },
    {
      title: "Real-Time Hazardous Gas Detection System",
      description: "IoT-based hazardous gas detection system using MQ series sensors and ESP8266 microcontroller. Monitors gas levels and provides real-time alerts by sending mobile notifications upon detecting hazardous gases.",
      tech: ["ESP8266", "MQ Gas Sensor", "Arduino IDE", "Embedded C/C++", "Wokwi Simulator", "Wi-Fi Communication"],
      github: "#",
      demo: null,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include product catalog, shopping cart, user authentication, secure payments, and responsive design for seamless shopping experience.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API", "HTML", "CSS"],
      github: "https://github.com/Animesh721/ecommerce-react",
      demo: "https://ecommerce-react-three-orpin.vercel.app/",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      title: "CareConnect - Healthcare Dashboard",
      description: "Fully responsive frontend for CareConnect using React.js, integrating Bajaj's external API to dynamically list doctors with real-time data. Features search by city, filtering by specialty, and clean card-based UI.",
      tech: ["React.js", "CSS", "Axios", "Tailwind CSS", "Vercel", "REST APIs"],
      github: "https://github.com/Animesh721/CareConnect",
      demo: "https://care-connect-two-alpha.vercel.app/",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
    }
  ];

  const skills = [
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Git/GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering - Internet of Things",
      school: "SRM Institute of Science and Technology (Ramapuram)",
      location: "Chennai, Tamil Nadu",
      duration: "2022 - 2026",
      cgpa: "9.2/10",
      status: "Currently Pursuing"
    },
    {
      degree: "Class XII - CBSE (MPC)",
      school: "A S S Patna Central School",
      location: "Sudarshan Vihar, Patna, Bihar",
      duration: "2021",
      cgpa: "66.2%",
      status: "Completed"
    },
    {
      degree: "Class X - CBSE (MPC)",
      school: "Radiant International School",
      location: "Khagaul Road, Patna, Bihar",
      duration: "2019",
      cgpa: "84.2%",
      status: "Completed"
    }
  ];

  const experience = [
    {
      title: "Management Head",
      company: "Codezilla Club",
      location: "SRM IST Ramapuram",
      duration: "Jul 2024 - May 2025",
      type: "Leadership Role",
      description: [
        "Led a 20+ member team to organize coding events and workshops, increasing participation by 30%",
        "Oversaw planning, outreach, and sponsorships for technical events",
        "Mentored juniors in projects and leadership development",
        "Coordinated with college administration and industry professionals"
      ]
    }
  ];

  const certifications = [
    {
      title: "Programming with Java",
      issuer: "NPTEL",
      date: "Oct 2023",
      link: "https://drive.google.com/file/d/1moi-KGfox47l2rsJIPSsEXFK75IvPX8b/view?usp=drive_link",
      description: "Comprehensive course on Java programming fundamentals and advanced concepts"
    },
    {
      title: "Research Publication",
      issuer: "IJRASET",
      date: "May 2025",
      link: "https://drive.google.com/file/d/1jextgvd9VgNXir1uyILu4c7uB33knBdh/view?usp=drive_link",
      description: "Upcoming research publication in International Journal"
    }
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-24 h-24 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-8"></div>
            <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-r-cyan-500 rounded-full animate-spin mx-auto" style={{animationDirection: 'reverse', animationDuration: '1s'}}></div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Animesh Kumar Choudhary
          </h1>
          <p className="text-gray-300 text-lg">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800 text-white relative overflow-x-hidden smooth-scroll">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800/50 z-50">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Scroll Effects */}
      <ScrollEffects />
      
      {/* Magical Scroll Effects */}
      <MagicalScrollEffects />
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/8 to-orange-500/8 rounded-full blur-3xl animate-float-x"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 transform ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-purple-500/20 translate-y-0' 
          : 'bg-transparent translate-y-0'
      } ${
        scrollDirection === 'down' && scrolled 
          ? '-translate-y-full' 
          : 'translate-y-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Animesh
              </span>
              <span className="text-white ml-2 font-light">Kumar Choudhary</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-1">
              {[
                { name: 'Home', icon: MousePointer },
                { name: 'About', icon: Users },
                { name: 'Skills', icon: Code },
                { name: 'Experience', icon: Briefcase },
                { name: 'Projects', icon: Rocket },
                { name: 'Contact', icon: Mail }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.name.toLowerCase())}
                    className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 group ${
                      activeSection === item.name.toLowerCase() 
                        ? 'text-purple-400 bg-purple-500/20 shadow-lg shadow-purple-500/20 border border-purple-500/30' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20'
                    }`}
                  >
                    <Icon size={16} className="group-hover:scale-110 transition-transform" />
                    {item.name}
                    {activeSection === item.name.toLowerCase() && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur-sm"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-purple-500/30"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-4 right-4 mt-2">
              <div className="bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/20 p-4 space-y-2">
                {[
                  { name: 'Home', icon: MousePointer },
                  { name: 'About', icon: Users },
                  { name: 'Skills', icon: Code },
                  { name: 'Experience', icon: Briefcase },
                  { name: 'Projects', icon: Rocket },
                  { name: 'Contact', icon: Mail }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.name.toLowerCase())}
                      className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-xl transition-all duration-300 flex items-center gap-3 font-semibold"
                    >
                      <Icon size={18} />
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pt-20">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="space-y-8 text-left lg:text-left order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 backdrop-blur-sm rounded-full text-purple-400 text-sm font-semibold border border-purple-500/20">
                  <Zap className="w-4 h-4 mr-2" />
                  Available for opportunities
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black leading-tight">
                  <span className="block text-gray-300 mb-2 text-2xl sm:text-3xl lg:text-4xl font-light animate-slide-up">Hi, I'm</span>
                  <TextReveal className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-shift text-shadow-glow" delay={200}>
                    Animesh
                  </TextReveal>
                  <TextReveal className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-shift text-shadow-glow" delay={400}>
                    Kumar
                  </TextReveal>
                  <TextReveal className="block bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift text-shadow-glow" delay={600}>
                    Choudhary
                  </TextReveal>
                </h1>
                
                <div className="space-y-6 text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-2xl leading-relaxed">
                  <p className="animate-slide-up" style={{animationDelay: '0.8s'}}>
                    <span className="font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl animate-gradient-shift">Full Stack Developer</span>
                  </p>
                  <p className="animate-slide-up leading-loose" style={{animationDelay: '1s'}}>
                    Passionate about creating <span className="text-white font-semibold">beautiful, functional web applications</span> with modern technologies and <span className="text-white font-semibold">clean, scalable code</span>.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-elastic flex items-center justify-center gap-3 shadow-lg hover:shadow-purple-500/25 hover:scale-105 font-semibold border-2 border-purple-500/30 hover:border-purple-400"
                  >
                    <Rocket className="w-5 h-5" />
                    View My Work
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                  
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-8 py-4 border-2 border-purple-500/50 text-purple-400 rounded-xl hover:bg-purple-500/20 hover:border-purple-400 hover:text-white transition-elastic shadow-lg hover:shadow-purple-500/25 hover:scale-105 font-semibold flex items-center justify-center gap-3 backdrop-blur-sm"
                  >
                    <Mail className="w-5 h-5" />
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>

            {/* Image and Visual Elements */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 mx-auto">
                {/* Animated background circles */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-500 rounded-full"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full"></div>
                </div>
                
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-purple-500/30 rounded-full blur-3xl animate-glow-pulse"></div>
                
                {/* Main image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/40 shadow-lg shadow-purple-500/30">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20"></div>
                  <img
                    src="/profile-image.jpg"
                    alt="Animesh Kumar Choudhary"
                    className="w-full h-full object-contain hover:scale-110 transition-smooth"
                  />
                </div>
                
                {/* Status indicator */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 shadow-lg shadow-green-500/30 border-4 border-slate-800">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-8 -left-8 glass-card p-4 animate-bounce-gentle hover-lift">
                  <Code className="w-6 h-6 text-purple-400" />
                </div>
                <div className="absolute -bottom-8 -left-8 glass-card p-4 animate-bounce-gentle hover-lift" style={{animationDelay: '0.5s'}}>
                  <Globe className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="absolute -top-8 -right-8 glass-card p-4 animate-bounce-gentle hover-lift" style={{animationDelay: '1s'}}>
                  <Star className="w-6 h-6 text-pink-400" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Links - Redesigned */}
          <div 
            className="mt-16 lg:mt-24"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Animesh721"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 glass-card shadow-lg hover:shadow-purple-500/25 transition-elastic hover:scale-110 hover-lift animate-scale-in"
              >
                <Github size={24} className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/animesh-kumar-choudhary-8a232719b"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 glass-card shadow-lg hover:shadow-cyan-500/25 transition-elastic hover:scale-110 hover-lift animate-scale-in" style={{animationDelay: '0.1s'}}
              >
                <Linkedin size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </a>
              <a
                href="mailto:kranimesh721@gmail.com"
                className="group p-4 glass-card shadow-lg hover:shadow-pink-500/25 transition-elastic hover:scale-110 hover-lift animate-scale-in" style={{animationDelay: '0.2s'}}
              >
                <Mail size={24} className="text-gray-400 group-hover:text-pink-400 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-20 sm:py-32 relative"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 backdrop-blur-sm rounded-full text-purple-400 text-sm font-semibold border border-purple-500/20 scroll-reveal">
                  <Users className="w-4 h-4 mr-2" />
                  About Me
                </div>
                
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight animate-gradient-shift text-shadow-glow scroll-reveal-left animate-text-glow">
                  Passionate Developer &amp; Problem Solver
                </h2>
                
                <div className="space-y-8 text-lg text-gray-300 leading-loose">
                  <p className="scroll-reveal opacity-100">
                    I am <span className="text-purple-400 font-bold bg-purple-400/10 px-2 py-1 rounded-lg">Animesh Choudhary</span>, a dedicated full-stack developer with a strong foundation in web development. My experience spans technologies such as <span className="text-cyan-400 font-semibold">JavaScript, React, Node.js, Python</span>, and modern development frameworks.
                  </p>
                  <p className="scroll-reveal opacity-100">
                    Through <span className="text-green-400 font-bold bg-green-400/10 px-2 py-1 rounded-lg">academic projects, internships, and hackathons</span>, I have developed and deployed practical, user-centric solutions that address real-world challenges. I take pride in writing <span className="text-cyan-400 font-semibold">clean, efficient code</span> and thrive in collaborative environments.
                  </p>
                  <p className="scroll-reveal opacity-100">
                    I am passionate about environments that encourage <span className="text-pink-400 font-bold bg-pink-400/10 px-2 py-1 rounded-lg">innovation, continuous learning, and technical excellence</span>. Currently pursuing my B.Tech in Computer Science with a specialization in Internet of Things, while serving as Management Head at Codezilla Club.
                  </p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8">
                <div className="text-center p-4 glass-card hover-lift transition-elastic hover:scale-105 scroll-reveal opacity-100">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2 animate-bounce-gentle">3+</div>
                  <div className="text-sm text-gray-400">Years Coding</div>
                </div>
                <div className="text-center p-4 glass-card hover-lift transition-elastic hover:scale-105 scroll-reveal opacity-100">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2 animate-bounce-gentle">10+</div>
                  <div className="text-sm text-gray-400">Projects Built</div>
                </div>
                <div className="text-center p-4 glass-card hover-lift transition-elastic hover:scale-105 scroll-reveal opacity-100">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-2 animate-bounce-gentle">9.2</div>
                  <div className="text-sm text-gray-400">CGPA</div>
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative">
              <div className="grid grid-cols-6 gap-4 opacity-80">
                {[...Array(24)].map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-lg bg-gradient-to-br ${
                      i % 4 === 0 ? 'from-purple-500/20 to-purple-600/20' :
                      i % 4 === 1 ? 'from-cyan-500/20 to-cyan-600/20' :
                      i % 4 === 2 ? 'from-pink-500/20 to-pink-600/20' :
                      'from-blue-500/20 to-blue-600/20'
                    } border border-white/10 hover:scale-110 transition-transform duration-300`}
                    style={{
                      animationDelay: `${i * 0.1}s`,
                    }}
                  ></div>
                ))}
              </div>
              
              {/* Floating tech icons */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-purple-500/10 backdrop-blur-sm rounded-xl p-3 border border-purple-500/20 animate-bounce">
                    <Code className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-cyan-500/10 backdrop-blur-sm rounded-xl p-3 border border-cyan-500/20 animate-bounce" style={{animationDelay: '0.5s'}}>
                    <Globe className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-pink-500/10 backdrop-blur-sm rounded-xl p-3 border border-pink-500/20 animate-bounce" style={{animationDelay: '1s'}}>
                    <Rocket className="w-6 h-6 text-pink-400" />
                  </div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500/10 backdrop-blur-sm rounded-xl p-3 border border-blue-500/20 animate-bounce" style={{animationDelay: '1.5s'}}>
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 sm:py-32 bg-slate-800/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 backdrop-blur-sm rounded-full text-cyan-400 text-sm font-semibold mb-8 border border-cyan-500/20 scroll-reveal">
              <Code className="w-4 h-4 mr-2" />
              Technical Skills
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-8 animate-gradient-shift text-shadow-glow scroll-reveal-scale animate-text-glow">
              My Tech Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Technologies and tools I use to <span className="text-white font-semibold">bring ideas to life</span>
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 lg:gap-8 stagger-container">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative p-6 glass-card hover:border-purple-500/30 transition-elastic hover:scale-110 hover-lift stagger-child opacity-0"
                style={{
                  transform: `translateY(${scrollY * 0.02 + 30}px)`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 flex items-center justify-center relative">
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      className="w-12 h-12 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg hidden">
                      {skill.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Resume Download */}
          <div className="text-center mt-24 mb-8">
            <a
              href="/ANIMESH KUMAR CHOUDHARY_Doc.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 gap-3 shadow-lg hover:shadow-purple-500/25 hover:scale-105 font-semibold border-2 border-purple-500/30 hover:border-purple-400 animate-scale-in"
            >
              <Download size={20} />
              Download Resume
              <Eye size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-pink-500/10 backdrop-blur-sm rounded-full text-pink-400 text-sm font-semibold mb-8 border border-pink-500/20">
              <Briefcase className="w-4 h-4 mr-2" />
              Experience & Education
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent mb-8 animate-gradient-shift text-shadow-glow">
              My Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Academic achievements, <span className="text-white font-semibold">leadership roles</span>, and professional growth
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500"></div>

            {/* Education & Experience Items */}
            <div className="space-y-12">
              {/* Current Education */}
              <div className="relative flex items-center">
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-800 transform -translate-x-1/2"></div>
                <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-500">
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-500/10 p-3 rounded-xl">
                        <GraduationCap className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold text-white">B.Tech - Computer Science & IoT</h3>
                          <span className="text-sm text-purple-400 font-semibold">2022-2026</span>
                        </div>
                        <p className="text-purple-300 font-semibold mb-2">SRM Institute of Science and Technology</p>
                        <p className="text-gray-400 text-sm mb-3">Chennai, Tamil Nadu</p>
                        <div className="flex items-center gap-4">
                          <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                            9.2 CGPA
                          </span>
                          <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm">
                            Currently Pursuing
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leadership Role */}
              <div className="relative flex items-center">
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-800 transform -translate-x-1/2"></div>
                <div className="ml-16 md:ml-0 md:w-1/2 md:ml-auto md:pl-8">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500">
                    <div className="flex items-start space-x-4">
                      <div className="bg-cyan-500/10 p-3 rounded-xl">
                        <Users className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold text-white">Management Head</h3>
                          <span className="text-sm text-cyan-400 font-semibold">Jul 2024 - May 2025</span>
                        </div>
                        <p className="text-cyan-300 font-semibold mb-2">Codezilla Club</p>
                        <p className="text-gray-400 text-sm mb-4">SRM IST Ramapuram</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 text-sm">Led 20+ member team organizing coding events, increasing participation by 30%</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 text-sm">Managed event planning, outreach, and sponsorship coordination</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Class XII */}
              <div className="relative flex items-center">
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-slate-800 transform -translate-x-1/2"></div>
                <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-pink-500/30 transition-all duration-500">
                    <div className="flex items-start space-x-4">
                      <div className="bg-pink-500/10 p-3 rounded-xl">
                        <GraduationCap className="w-6 h-6 text-pink-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold text-white">Class XII - CBSE (MPC)</h3>
                          <span className="text-sm text-pink-400 font-semibold">2021</span>
                        </div>
                        <p className="text-pink-300 font-semibold mb-2">A S S Patna Central School</p>
                        <p className="text-gray-400 text-sm mb-3">Sudarshan Vihar, Patna, Bihar</p>
                        <span className="bg-pink-500/10 text-pink-400 px-3 py-1 rounded-full text-sm font-semibold">
                          66.2%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Class X */}
              <div className="relative flex items-center">
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-800 transform -translate-x-1/2"></div>
                <div className="ml-16 md:ml-0 md:w-1/2 md:ml-auto md:pl-8">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-500/10 p-3 rounded-xl">
                        <GraduationCap className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold text-white">Class X - CBSE</h3>
                          <span className="text-sm text-blue-400 font-semibold">2019</span>
                        </div>
                        <p className="text-blue-300 font-semibold mb-2">Radiant International School</p>
                        <p className="text-gray-400 text-sm mb-3">Khagaul Road, Patna, Bihar</p>
                        <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold">
                          84.2%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Certifications & Publications</h3>
              <p className="text-gray-400">Recognition and achievements in the field</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => {
                return (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glass-card p-6 hover:border-green-500/30 transition-elastic hover:scale-105 hover-lift group cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-500/10 p-3 rounded-xl group-hover:bg-green-500/20 transition-all duration-300">
                      <BookOpen className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">{cert.title}</h4>
                      <p className="text-sm text-gray-400 mb-2">{cert.issuer} - {cert.date}</p>
                      <p className="text-xs text-gray-500">{cert.description}</p>
                    </div>
                    <div className="text-green-400 group-hover:translate-x-1 transition-transform duration-300">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 sm:py-32 bg-slate-800/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full text-blue-400 text-sm font-semibold mb-8 border border-blue-500/20 scroll-reveal">
              <Rocket className="w-4 h-4 mr-2" />
              Featured Projects
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-8 animate-gradient-shift text-shadow-glow scroll-reveal-right animate-text-glow">
              My Work
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Showcasing <span className="text-white font-semibold">full-stack development</span> and <span className="text-white font-semibold">problem-solving</span> through real-world applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 stagger-container">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group glass-card rounded-2xl overflow-hidden hover:border-purple-500/30 transition-elastic hover:scale-105 hover-lift shadow-3d stagger-child opacity-0"
                style={{
                  transform: `translateY(${scrollY * 0.02 + 50}px) rotateX(10deg)`,
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                  
                  {/* Project Type Indicator */}
                  <div className="absolute top-4 right-4">
                    {project.github === "#" ? (
                      <span className="bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-semibold">
                        IoT Hardware
                      </span>
                    ) : (
                      <span className="bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">
                        Web App
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center gap-4">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-white transition-colors gap-2 text-sm font-medium"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors gap-2 text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.github === "#" && !project.demo && (
                      <div className="flex items-center text-orange-400 gap-2 text-sm font-medium">
                        <Zap size={16} />
                        Hardware Project
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-24 mb-8">
            <p className="text-gray-400 mb-8">Want to see more of my work?</p>
            <a
              href="https://github.com/Animesh721"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 gap-3 shadow-lg hover:shadow-purple-500/25 hover:scale-105 font-semibold border-2 border-purple-500/30 hover:border-purple-400 animate-scale-in"
            >
              <Github size={20} />
              View All Projects
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 backdrop-blur-sm rounded-full text-green-400 text-sm font-semibold mb-8 border border-green-500/20">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-green-200 to-cyan-200 bg-clip-text text-transparent mb-8 animate-gradient-shift text-shadow-glow">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to <span className="text-white font-semibold">bring your ideas to life</span>? Let's discuss your next project or simply connect over our <span className="text-white font-semibold">shared passion for technology</span>.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-8 stagger-container">
              <div className="glass-card p-6 hover:border-purple-500/30 transition-elastic hover-lift stagger-child opacity-0 card-3d ripple scroll-magic">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/20 p-4 rounded-xl animate-bounce-gentle">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Email Address</h3>
                    <a 
                      href="mailto:kranimesh721@gmail.com"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      kranimesh721@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 hover:border-cyan-500/30 transition-elastic hover-lift stagger-child opacity-0 card-3d ripple scroll-magic">
                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-500/20 p-4 rounded-xl animate-bounce-gentle">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Phone Number</h3>
                    <a 
                      href="tel:+917645990803"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      +91 764-599-0803
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 hover:border-pink-500/30 transition-elastic hover-lift stagger-child opacity-0 card-3d ripple scroll-magic">
                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/20 p-4 rounded-xl animate-bounce-gentle">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                    <p className="text-gray-400">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 animate-scale-in shadow-inner-glow" style={{animationDelay: '0.3s'}}>
                <h3 className="text-lg font-bold text-white mb-4">Quick Connect</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Animesh721"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-button rounded-xl hover:bg-purple-500/20 transition-elastic hover:scale-110 hover-lift"
                  >
                    <Github size={20} className="text-gray-400 hover:text-purple-400" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/animesh-kumar-choudhary-8a232719b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-button rounded-xl hover:bg-cyan-500/20 transition-elastic hover:scale-110 hover-lift"
                  >
                    <Linkedin size={20} className="text-gray-400 hover:text-cyan-400" />
                  </a>
                  <a
                    href="mailto:kranimesh721@gmail.com"
                    className="p-3 glass-button rounded-xl hover:bg-pink-500/20 transition-elastic hover:scale-110 hover-lift"
                  >
                    <Mail size={20} className="text-gray-400 hover:text-pink-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-8">
              <h3 className="text-3xl font-black">
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Animesh Kumar Choudhary
                </span>
              </h3>
              <p className="text-gray-400 mt-2">Full Stack Developer</p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/Animesh721"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 rounded-xl hover:bg-purple-500/20 transition-all duration-300 border border-slate-700/50 hover:border-purple-500/30 hover:scale-110"
              >
                <Github size={24} className="text-gray-400 hover:text-purple-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/animesh-kumar-choudhary-8a232719b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 rounded-xl hover:bg-cyan-500/20 transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/30 hover:scale-110"
              >
                <Linkedin size={24} className="text-gray-400 hover:text-cyan-400" />
              </a>
              <a
                href="mailto:kranimesh721@gmail.com"
                className="p-3 bg-slate-800/50 rounded-xl hover:bg-pink-500/20 transition-all duration-300 border border-slate-700/50 hover:border-pink-500/30 hover:scale-110"
              >
                <Mail size={24} className="text-gray-400 hover:text-pink-400" />
              </a>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-slate-800">
              <p className="text-gray-400">
                © 2025 Animesh Kumar Choudhary. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Built with React, Tailwind CSS & lots of ☕
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {scrolled && (
        <button
          onClick={() => scrollToSection('home')}
          className={`fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-500 hover:scale-110 z-40 transform ${
            scrolled ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
          aria-label="Back to top"
        >
          <ArrowRight size={20} className="rotate-[-90deg]" />
        </button>
      )}
    </div>
  );
}

export default App;