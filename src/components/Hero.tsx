import { ArrowDown, Code2, Sparkles } from "lucide-react";
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

      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 container px-4 mx-auto">
        <div className="max-w-5xl mx-auto space-y-10 animate-fade-in-up">
          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">دیجیتال کریتور</span>
            </div>
          </div>

          {/* Main title with better spacing */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight">
              <span className="block text-foreground">خلاقیت را با</span>
              <span className="block text-gradient glow-purple mt-2">تکنولوژی ترکیب</span>
              <span className="block text-foreground mt-2">می‌کنم</span>
            </h1>

            {/* Animated subtitle */}
            <div className="flex items-center justify-center gap-3 text-xl md:text-2xl text-muted-foreground">
              <Code2 className="w-6 h-6 text-accent animate-pulse" />
              <p>توسعه‌دهنده • هنرمند • مبتکر</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-center text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            از طراحی سه‌بعدی تا توسعه وب مدرن، از هوش مصنوعی تا بازی‌سازی
            <br className="hidden sm:block" />
            پروژه‌های شما را به واقعیت تبدیل می‌کنم
          </p>

          {/* Decorative line with animation */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-20 bg-gradient-to-l from-primary to-transparent animate-pulse" />
            <div className="flex gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse-glow" style={{ animationDelay: "0.3s" }} />
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" style={{ animationDelay: "0.6s" }} />
            </div>
            <div className="h-[2px] w-20 bg-gradient-to-r from-accent to-transparent animate-pulse" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.8)] transition-all text-base md:text-lg px-8"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              مشاهده نمونه‌کارها
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-[0_0_15px_hsl(var(--accent)/0.3)] hover:shadow-[0_0_25px_hsl(var(--accent)/0.6)] transition-all text-base md:text-lg px-8"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              تماس با من
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
          aria-label="اسکرول به بخش بعدی"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">ادامه</span>
            <ArrowDown className="w-6 h-6 text-primary group-hover:text-primary-glow transition-colors" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
