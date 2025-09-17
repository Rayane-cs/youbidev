import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center font-bold text-xl text-white">
                Y
              </div>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="hero-text">Yar Al Roshidi</span>
            </h1>
            <p className="text-xl text-muted-foreground">Webflow Expert</p>
          </div>

          <div className="flex gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8">
              Book a call
              <ExternalLink className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8">
              Try Webflow
            </Button>
          </div>
        </div>

        {/* Right side - Stats Cards */}
        <div className="grid grid-cols-2 gap-6">
          <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold hero-text mb-2">130+</div>
            <div className="text-muted-foreground">Projects done</div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold hero-text mb-2">7</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          
          <div className="col-span-2 glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">W</span>
              </div>
              <span className="font-semibold">Certified Partner</span>
            </div>
            <div className="text-muted-foreground text-sm">Webflow Expert Certification</div>
          </div>
        </div>
      </div>
    </div>
  );
};