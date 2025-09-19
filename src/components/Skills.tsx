import { useEffect, useRef } from "react";
import { Progress } from "@/components/ui/progress";

export const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "HTML/CSS", level: 60, icon: "🌐" },
    { name: "JavaScript", level: 10, icon: "⚡" },
    { name: "React", level: 10, icon: "⚛️" },
    { name: "TypeScript", level: 10, icon: "📘" },
    { name: "Node.js", level: 10, icon: "🟢" },
    { name: "Tailwind CSS", level: 10, icon: "🎨" },
    { name: "Git", level: 05, icon: "📝" },
    { name: "Figma", level: 10, icon: "🎯" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate progress bars
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((bar: any, index) => {
              setTimeout(() => {
                const progress = bar.querySelector('[data-progress]');
                if (progress) {
                  const targetValue = progress.getAttribute('data-progress');
                  progress.style.width = targetValue + '%';
                }
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = skillsRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-6" ref={skillsRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-4xl font-bold mb-4 neon-text">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern web technologies with a passion for creating exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="fade-in-up glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <span className="text-sm font-medium text-primary">{skill.level}%</span>
              </div>
              
              <div className="progress-bar">
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    data-progress={skill.level}
                    style={{ width: '0%' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <div className="mt-16 fade-in-up">
          <h3 className="text-2xl font-bold text-center mb-8 neon-text">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "MongoDB", "Firebase", "Vercel", "Git", "Figma"].map((tech, index) => (
              <div
                key={tech}
                className="glass-card px-6 py-3 rounded-full text-sm font-medium hover:neon-glow transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
