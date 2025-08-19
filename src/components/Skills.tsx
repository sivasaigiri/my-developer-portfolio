import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Backend Development", 
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 78 }
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 92 },
        { name: "Adobe Creative Suite", level: 85 },
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 }
      ]
    }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", 
    "Tailwind CSS", "Figma", "Git", "Docker", "AWS", "Vercel", "Next.js", 
    "Vue.js", "Express.js", "GraphQL", "REST APIs", "Jest", "Cypress"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning.
          </p>
        </div>

        {/* Skill Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-6 text-foreground">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-sm py-2 px-4 hover:bg-accent hover:text-accent-foreground transition-colors duration-300 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};