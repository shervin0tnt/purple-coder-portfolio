import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const projects = [
  {
    title: "3D Architectural Visualization",
    description: "High-quality 3D modeling and rendering for architectural projects",
    tech: ["3DS Max", "SketchUp"],
    gradient: "from-primary/20 to-purple-500/20",
  },
  {
    title: "Full-Stack Web Application",
    description: "Modern responsive web apps with React and TypeScript",
    tech: ["React", "TypeScript", "Tailwind"],
    gradient: "from-accent/20 to-green-500/20",
  },
  {
    title: "AI-Powered Solution",
    description: "Intelligent applications leveraging AI capabilities",
    tech: ["Python", "AI", "APIs"],
    gradient: "from-primary/20 to-blue-500/20",
  },
  {
    title: "Unity Game Development",
    description: "Interactive 3D experiences and game mechanics",
    tech: ["Unity", "C#", "3D"],
    gradient: "from-accent/20 to-emerald-500/20",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="snap-section flex items-center justify-center py-20 px-4"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="text-gradient glow-purple">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of creative and technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project preview placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/10">
                    {index + 1}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/30 text-primary hover:bg-primary/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-accent/30 text-accent hover:bg-accent/10"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
