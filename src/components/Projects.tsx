import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveLink: string;
  githubLink: string;
  features: string[];
}

export const Projects = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features",
      longDescription: "A full-stack e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing, and responsive design.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      image: "/api/placeholder/400/250",
      liveLink: "#",
      githubLink: "#",
      features: ["User Authentication", "Payment Integration", "Admin Dashboard", "Real-time Updates"]
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with team features",
      longDescription: "A comprehensive task management application with team collaboration features, real-time updates, and intuitive drag-and-drop interface for productivity enhancement.",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI", "Socket.io"],
      image: "/api/placeholder/400/250",
      liveLink: "#",
      githubLink: "#",
      features: ["Real-time Collaboration", "Drag & Drop", "Team Management", "Progress Tracking"]
    }
  ];

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

    const elements = projectsRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleCardFlip = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 px-6" ref={projectsRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-4xl font-bold mb-4 neon-text">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing some of my recent work that demonstrates my skills in modern web development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="fade-in-up perspective-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className={`relative w-full h-96 transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                  flippedCard === index ? 'rotate-y-180' : ''
                }`}
                onClick={() => handleCardFlip(index)}
              >
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden glass-card rounded-2xl overflow-hidden hover:neon-glow transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-6xl opacity-50">🚀</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 neon-text">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-secondary-foreground">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="text-xs text-center text-muted-foreground">
                      Click to see details
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden glass-card rounded-2xl p-6 rotate-y-180 hover:neon-glow transition-all duration-300">
                  <div className="h-full flex flex-col">
                    <h3 className="text-xl font-bold mb-3 neon-text">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{project.longDescription}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-center">
                              <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs rounded bg-secondary/30 text-secondary-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className="flex-1 neon-glow">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Live Demo
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 glass-card">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in-up">
          <Button 
            variant="outline" 
            size="lg" 
            className="glass-card hover:neon-glow transition-all duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};