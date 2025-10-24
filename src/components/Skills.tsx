import { Code2, Palette, Brain, Boxes, Smartphone, Database } from "lucide-react";
import { Card } from "./ui/card";

const skills = [
  {
    category: "3D & Design",
    icon: Boxes,
    items: ["3DS Max", "Modeling", "SketchUp"],
    color: "primary",
  },
  {
    category: "Frontend",
    icon: Code2,
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
    color: "accent",
  },
  {
    category: "Backend",
    icon: Database,
    items: ["Python", "PHP", "WordPress"],
    color: "primary",
  },
  {
    category: "Emerging Tech",
    icon: Brain,
    items: ["AI Integration", "Unity Development"],
    color: "accent",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="snap-section flex items-center justify-center py-20 px-4"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient glow-green">Skills</span> & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bridging creativity and technology across multiple disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            const isAccent = skillGroup.color === "accent";
            
            return (
              <Card
                key={skillGroup.category}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 p-6 group hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      isAccent
                        ? "bg-accent/10 text-accent"
                        : "bg-primary/10 text-primary"
                    } group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 text-sm rounded-full ${
                            isAccent
                              ? "bg-accent/20 text-accent border border-accent/30"
                              : "bg-primary/20 text-primary border border-primary/30"
                          } hover:scale-105 transition-transform cursor-default`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Decorative elements */}
        <div className="absolute left-10 top-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute right-10 bottom-1/4 w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>
    </section>
  );
};

export default Skills;
