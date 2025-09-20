import { useEffect, useRef } from "react";
import { Code, Palette, Zap } from "lucide-react";

export const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    const elements = aboutRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-6" ref={aboutRef}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="fade-in-up flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center font-bold text-2xl text-white neon-glow overflow-hidden">
                <img src="image/pfp.jpg" alt="Profile" className="w-full h-full object-cover"/>
              </div>
              <div className="absolute -inset-4 rounded-full border-2 border-primary/20 animate-pulse"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="fade-in-up">
              <h2 className="text-4xl font-bold mb-4 neon-text">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate web developer who loves bringing creative ideas to life through elegant, 
                modern web experiences. With a keen eye for design and a deep understanding of cutting-edge 
                technologies, I create digital solutions that not only look stunning but also deliver 
                exceptional user experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="fade-in-up glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300">
                <Code className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">
                  Writing maintainable, scalable code that stands the test of time.
                </p>
              </div>

              <div className="fade-in-up glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300">
                <Palette className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold mb-2">Modern Design</h3>
                <p className="text-sm text-muted-foreground">
                  Creating beautiful, intuitive interfaces that users love.
                </p>
              </div>

              <div className="fade-in-up glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300">
                <Zap className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Performance</h3>
                <p className="text-sm text-muted-foreground">
                  Optimizing for speed and efficiency in every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
