import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="snap-section relative flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-accent/10 animate-gradient-shift bg-[length:200%_200%]" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 container px-4 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Glowing title */}
          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="text-gradient glow-purple">تکنولوژیست</span>
            <br />
            <span className="text-foreground">خلاق</span>
          </h1>

          {/* Subtitle with typing effect feel */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            توسعه‌دهنده فول‌استک • هنرمند سه‌بعدی • علاقه‌مند به هوش مصنوعی
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.8)] transition-all"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              مشاهده نمونه‌کارها
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-[0_0_15px_hsl(var(--accent)/0.3)] hover:shadow-[0_0_25px_hsl(var(--accent)/0.6)] transition-all"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              ارتباط با من
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          aria-label="اسکرول به بخش بعدی"
        >
          <ArrowDown className="w-8 h-8 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
