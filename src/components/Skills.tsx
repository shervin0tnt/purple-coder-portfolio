import { Card } from "./ui/card";
import { Progress } from "./ui/progress";

const skillCategories = [
  {
    category: "سه‌بعدی و طراحی",
    skills: [
      { name: "3DS Max", level: 90 },
      { name: "Modeling", level: 85 },
      { name: "SketchUp", level: 80 },
    ],
    color: "primary",
  },
  {
    category: "فرانت‌اند",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "WordPress", level: 75 },
    ],
    color: "accent",
  },
  {
    category: "بک‌اند",
    skills: [
      { name: "Python", level: 85 },
      { name: "PHP", level: 80 },
    ],
    color: "primary",
  },
  {
    category: "تکنولوژی‌های نوین",
    skills: [
      { name: "AI", level: 75 },
      { name: "Unity", level: 70 },
    ],
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
            <span className="text-gradient glow-green">مهارت‌ها</span> و تخصص‌ها
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            پل ارتباطی بین خلاقیت و تکنولوژی در رشته‌های مختلف
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const isAccent = category.color === "accent";
            
            return (
              <Card
                key={category.category}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 p-6 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  {category.category}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="animate-fade-in"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span
                          className={`text-sm font-bold ${
                            isAccent ? "text-accent" : "text-primary"
                          }`}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={skill.level}
                        className={`h-2 ${
                          isAccent ? "[&>div]:bg-accent" : "[&>div]:bg-primary"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Decorative elements */}
        <div className="absolute left-10 top-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
        <div className="absolute right-10 bottom-1/4 w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" style={{ animationDelay: "1s" }} />
      </div>
    </section>
  );
};

export default Skills;
