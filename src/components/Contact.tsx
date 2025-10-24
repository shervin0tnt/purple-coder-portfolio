import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Contact = () => {
  return (
    <section
      id="contact"
      className="snap-section flex items-center justify-center py-12 md:py-20 px-4"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient glow-green">ارتباط</span> با من
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            پروژه‌ای در ذهن دارید؟ بیایید با هم چیزی شگفت‌انگیز بسازیم
          </p>
        </div>

        <Card className="bg-card border-border p-6 md:p-8 lg:p-12 text-center relative overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] animate-fade-in-up">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="mb-8">
              <Send className="w-12 h-12 md:w-16 md:h-16 mx-auto text-primary mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                آماده شروع هستید؟
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
                چه نیاز به یک ویژوالیزیشن سه‌بعدی خیره‌کننده، یک اپلیکیشن وب پیشرفته،
                یا راهکاری مبتنی بر هوش مصنوعی داشته باشید، من اینجا هستم تا به تحقق 
                ایده‌های شما کمک کنم.
              </p>
            </div>

            {/* Telegram Contact */}
            <div className="mb-6 md:mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)] transition-all text-base md:text-lg px-6 md:px-8 w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://t.me/shervin_tnt3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send className="w-5 h-5 ml-2" />
                  ارسال پیام در تلگرام
                </a>
              </Button>
              <p className="text-xs md:text-sm text-muted-foreground mt-4 font-mono">
                @shervin_tnt3
              </p>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 md:mt-12 text-muted-foreground">
          <p className="text-xs md:text-sm">
            © ۱۴۰۴ تکنولوژیست خلاق • ساخته شده با React و TypeScript
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
