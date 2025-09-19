import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, ExternalLink, Download, ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative" ref={heroRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-2xl floating-animation"></div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left side - Content */}
        <div className="space-y-8">
          <div className="space-y-6 fade-in-up">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center font-bold text-2xl text-white neon-glow">
                A
              </div>
              <div className="flex gap-3">
                <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:neon-glow transition-all duration-300 hover:scale-110">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:neon-glow transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:neon-glow transition-all duration-300 hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight">
                <span className="neon-text">Ayoub</span>
              </h1>
              <p className="text-lg sm:text-2xl lg:text-3xl text-muted-foreground mt-4 font-light">
                Bring ideas to <span className="neon-text font-medium">life</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 fade-in-up">
            <Button 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 neon-glow hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 glass-card hover:neon-glow transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              <Download className="w-4 sm:w-5 h-4 sm:h-5" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Right side - Animated Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="fade-in-up glass-card p-6 sm:p-8 rounded-2xl hover:neon-glow transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold neon-text mb-2">1</div>
            <div className="text-muted-foreground text-sm sm:text-base">Year Experience</div>
          </div>
          
          <div className="fade-in-up glass-card p-6 sm:p-8 rounded-2xl hover:neon-glow transition-all duration-300 animation-delay-200">
            <div className="text-3xl sm:text-4xl font-bold neon-text mb-2">1</div>
            <div className="text-muted-foreground text-sm sm:text-base">Project Done</div>
          </div>
          
          <div className="fade-in-up col-span-1 sm:col-span-2 glass-card p-6 sm:p-8 rounded-2xl hover:neon-glow transition-all duration-300 animation-delay-400">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                <span className="text-white text-lg sm:text-xl font-bold">💡</span>
              </div>
              <span className="text-lg sm:text-xl font-semibold">Always Learning</span>
            </div>
            <div className="text-muted-foreground text-sm sm:text-base">Passionate about new technologies and modern development</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up">
        <button 
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="w-5 h-5 animate-bounce group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </section>
  );
};
