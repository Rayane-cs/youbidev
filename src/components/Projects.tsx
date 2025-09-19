import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features",
      longDescription: "A full-stack e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing, and responsive design. This project showcases modern web development practices with a focus on user experience and scalability.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      image: "/src/assets/project-engine.jpg",
      liveLink: "#",
      githubLink: "#",
      features: ["User Authentication", "Payment Integration", "Admin Dashboard", "Real-time Updates"]
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with team features",
      longDescription: "A comprehensive task management application with team collaboration features, real-time updates, and intuitive drag-and-drop interface for productivity enhancement. Built with modern technologies to ensure smooth performance and user experience.",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI", "Socket.io"],
      image: "/src/assets/project-sourceful.jpg",
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

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
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
              className="fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="glass-card rounded-2xl overflow-hidden hover:neon-glow transition-all duration-300 h-full">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 neon-text">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
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
                  
                  <Button 
                    onClick={() => openProjectModal(project)}
                    className="w-full neon-glow"
                    size="sm"
                  >
                    Show Details
                  </Button>
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

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => closeProjectModal()}>
        <DialogContent className="glass-card border-primary/20 max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl neon-text mb-4">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3 neon-text">Description</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3 neon-text">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3 neon-text">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button asChild className="flex-1 neon-glow">
                    <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 glass-card">
                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};