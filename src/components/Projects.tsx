import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop&crop=center",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop&crop=center",
      tech: ["Vue.js", "Express.js", "MongoDB", "Socket.io", "SCSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable reporting features for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop&crop=center",
      tech: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication, transaction history, and budgeting tools. Focused on user experience and security.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=300&fit=crop&crop=center",
      tech: ["React Native", "Node.js", "MongoDB", "JWT", "Plaid API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered content generation platform that helps marketers create engaging copy, social media posts, and blog articles using natural language processing.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop&crop=center",
      tech: ["Next.js", "OpenAI API", "TypeScript", "Prisma", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Real Estate Platform",
      description: "A comprehensive real estate platform with property listings, virtual tours, mortgage calculators, and agent management system. Includes map integration and search filters.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=300&fit=crop&crop=center",
      tech: ["React", "Node.js", "PostgreSQL", "Mapbox", "AWS S3"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, highlighting problem-solving skills and technical expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-card-gradient border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-border hover:bg-muted"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};