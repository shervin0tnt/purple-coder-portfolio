import { Code2, Palette, Brain, Boxes, Globe, Gamepad2 } from "lucide-react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";

const skillCategories = [
  {
    category: "سه‌بعدی و طراحی",
    icon: Boxes,
    skills: [
      { name: "3DS Max", level: 90 },
      { name: "Modeling", level: 85 },
      { name: "SketchUp", level: 80 },
    ],
    color: "primary",
  },
  {
    category: "فرانت‌اند",
    icon: Code2,
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
    ],
    color: "accent",
  },
  {
    category: "بک‌اند",
    icon: Brain,
    skills: [
      { name: "Python", level: 85 },
      { name: "PHP", level: 80 },
    ],
    color: "primary",
  },
  {
    category: "هوش مصنوعی",
    icon: Palette,
    skills: [
      { name: "AI Integration", level: 75 },
      { name: "Machine Learning", level: 70 },
    ],
    color: "accent",
  },
];

const specializedTools = [
  {
    name: "WordPress",
    icon: Globe,
    level: 75,
    description: "سیستم مدیریت محتوا",
    color: "primary",
  },
  {
    name: "Unity",
    icon: Gamepad2,
    level: 70,
    description: "موتور بازی‌سازی",
    color: "accent",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="snap-section flex items-center justify-center py-12 md:py-20 px-4"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient glow-green">مهارت‌ها</span> و تخصص‌ها
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            پل ارتباطی بین خلاقیت و تکنولوژی در رشته‌های مختلف
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto mb-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const isAccent = category.color === "accent";
            
            return (
              <Card
                key={category.category}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 p-4 md:p-6 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-3 rounded-lg ${
                      isAccent
                        ? "bg-accent/10 text-accent"
                        : "bg-primary/10 text-primary"
                    } group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="animate-fade-in"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm md:text-base font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span
                          className={`text-sm font-bold font-mono ${
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

        {/* Specialized Tools Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-foreground">
            ابزارهای تخصصی
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {specializedTools.map((tool, index) => {
              const Icon = tool.icon;
              const isAccent = tool.color === "accent";
              
              return (
                <Card
                  key={tool.name}
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 p-4 md:p-6 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-fade-in-up"
                  style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg ${
                        isAccent
                          ? "bg-accent/10 text-accent"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="text-lg md:text-xl font-semibold text-foreground">
                            {tool.name}
                          </h4>
                          <p className="text-xs md:text-sm text-muted-foreground">
                            {tool.description}
                          </p>
                        </div>
                        <span
                          className={`text-lg font-bold font-mono ${
                            isAccent ? "text-accent" : "text-primary"
                          }`}
                        >
                          {tool.level}%
                        </span>
                      </div>
                      <Progress
                        value={tool.level}
                        className={`h-2 mt-3 ${
                          isAccent ? "[&>div]:bg-accent" : "[&>div]:bg-primary"
                        }`}
                      />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-4 md:left-10 top-1/4 w-32 md:w-40 h-32 md:h-40 bg-primary/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
        <div className="absolute right-4 md:right-10 bottom-1/4 w-48 md:w-60 h-48 md:h-60 bg-accent/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" style={{ animationDelay: "1s" }} />
      </div>
    </section>
  );
};

export default Skills;
