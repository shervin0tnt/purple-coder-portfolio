import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Contact = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", color: "primary" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "accent" },
    { icon: Mail, label: "Email", href: "mailto:hello@example.com", color: "primary" },
  ];

  return (
    <section
      id="contact"
      className="snap-section flex items-center justify-center py-20 px-4"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Let's <span className="text-gradient glow-green">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's build something amazing together
          </p>
        </div>

        <Card className="bg-card border-border p-8 md:p-12 text-center relative overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] animate-fade-in-up">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="mb-8">
              <MessageSquare className="w-16 h-16 mx-auto text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Ready to Start?
              </h3>
              <p className="text-muted-foreground mb-8">
                Whether you need a stunning 3D visualization, a cutting-edge web application,
                or an AI-powered solution, I'm here to help bring your vision to life.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                const isAccent = social.color === "accent";
                return (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="lg"
                    className={`${
                      isAccent
                        ? "border-accent/30 text-accent hover:bg-accent/10 hover:border-accent shadow-[0_0_15px_hsl(var(--accent)/0.2)]"
                        : "border-primary/30 text-primary hover:bg-primary/10 hover:border-primary shadow-[0_0_15px_hsl(var(--primary)/0.2)]"
                    } transition-all`}
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="w-5 h-5 mr-2" />
                      {social.label}
                    </a>
                  </Button>
                );
              })}
            </div>

            {/* Main CTA */}
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)] transition-all text-lg px-8"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 text-muted-foreground">
          <p className="text-sm">
            © 2025 Creative Technologist • Built with React & TypeScript
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
