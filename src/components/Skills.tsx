export const Skills = () => {
  const skills = [
    "Figma",
    "Webflow",
    "Webflow CMS", 
    "jQuery",
    "GSAP",
    "FS attributes",
    "Custom Embeds",
    "React",
    "TypeScript"
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 hero-text">
          Technologies & Skills
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="glass-card px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 hover:glow-effect"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};