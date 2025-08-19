import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold text-foreground hover:text-accent transition-colors duration-300"
            >
              Alex
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow"
                onClick={() => scrollToSection('contact')}
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 transition-colors duration-300 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-6 py-4">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-foreground hover:text-accent transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  size="sm"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow"
                  onClick={() => scrollToSection('contact')}
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};