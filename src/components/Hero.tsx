import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, ExternalLink, Download, ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import pfp from "../assets/pfp.jpg"; // ✅ make sure the path is correct

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".fade-in-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative"
      ref={heroRef}
    >
      {/* ... background stuff ... */}

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left side - Content */}
        <div className="space-y-8">
          <div className="space-y-6 fade-in-up">
            <div className="flex items-center gap-4">
              {/* ✅ Profile Picture */}
              <div className="w-16 h-16 rounded-2xl overflow-hidden">
                <img
                  src={pfp}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ✅ Social Icons */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:neon-glow transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:neon-glow transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:neon-glow transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight">
                <span className="neon-text">Ayoub</span>
              </h1>
              <p className="text-lg sm:text-2xl lg:text-3xl text-muted-foreground mt-4 font-light">
                Bring ideas to <span className="neon-text font-medium">life</span>
              </p>
            </div>
          </div>
