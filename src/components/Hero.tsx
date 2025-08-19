import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
            Hello, I'm{' '}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Alex
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Full-stack developer & UI/UX designer crafting beautiful digital experiences
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm shadow-glow transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com" 
              className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:hello@example.com" 
              className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};