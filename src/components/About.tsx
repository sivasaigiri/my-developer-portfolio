import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building scalable applications with modern technologies like React, Node.js, and TypeScript."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with attention to detail and user experience."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Ensuring fast, efficient, and accessible applications that users love to interact with."
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-foreground">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that combine technical excellence with beautiful design. I love turning complex 
            problems into simple, elegant interfaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Started as a curious computer science student, I've evolved into a full-stack 
              developer who thrives at the intersection of design and technology. My approach 
              combines analytical thinking with creative problem-solving.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, contributing 
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="animate-fade-in-up">
            <div className="bg-card-gradient rounded-lg p-8 shadow-lg">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Facts</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>📍 Based in San Francisco, CA</li>
                <li>🎓 Computer Science Graduate</li>
                <li>☕ Coffee enthusiast & morning person</li>
                <li>🌱 Always learning new technologies</li>
                <li>🎨 Design thinking advocate</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};