import { ExternalLink } from "lucide-react";
import engineImage from "@/assets/project-engine.jpg";
import eli5Image from "@/assets/project-eli5.jpg";
import sourcefulImage from "@/assets/project-sourceful.jpg";
import originImage from "@/assets/project-origin.jpg";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "Engine",
      description: "Modern web application with advanced functionality",
      technologies: ["Figma", "Webflow", "Webflow CMS", "jQuery"],
      image: engineImage,
      link: "#"
    },
    {
      title: "Eli5.io",
      description: "Educational platform with interactive features",
      technologies: ["Custom Embeds", "Figma", "FS attributes", "GSAP", "jQuery"],
      image: eli5Image,
      link: "#"
    },
    {
      title: "Sourceful",
      description: "Business platform with modern design",
      technologies: ["Custom Embeds", "Figma", "GSAP", "jQuery", "Webflow"],
      image: sourcefulImage,
      link: "#"
    },
    {
      title: "Origin Executive",
      description: "Executive dashboard with advanced features",
      technologies: ["Custom Embeds", "GSAP", "FS attributes", "Webflow"],
      image: originImage,
      link: "#"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 hero-text">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 right-4">
                  <div className="w-8 h-8 glass-card rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};