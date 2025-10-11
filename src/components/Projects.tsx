import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "AI-Powered Disease Diagnosis System",
      description: "AI-driven diagnosis and appointment portal for disease prediction and doctor consultation.",
      tech: ["React", "Spring Boot", "MySQL", "Machine Learning"],
      color: "from-primary to-accent",
    },
    {
      title: "Real-Time Chat Application using Sockets",
      description: "Developed a responsive web chat platform enabling instant messaging with real-time updates using WebSockets. Integrated user authentication, online status indicators, and smooth UI interactions for a seamless communication experience.",
      tech: ["React", "Express.js", "Node.js", "MongoDB","Socket.io","DaisyUI"],
      color: "from-accent to-secondary",
    },
    {
      title: "VirtualTries – Smart Fashion Cart",
      description: "Interactive smart shopping cart that recommends outfits using body measurement scanning and AR try-ons.",
      tech: ["Next.js", "Tailwind CSS", "AR API"],
      color: "from-accent to-secondary",
    },
    {
      title: "Lung Cancer Detection using Deep Learning",
      description: "Deep learning-based medical image classification model to detect lung cancer stages.",
      tech: ["Python", "TensorFlow", "VGG16", "ResNet50"],
      color: "from-secondary to-primary",
    },
    {
      title: "Smart Door Lock System",
      description: "IoT-powered door locking system with facial recognition and mobile alerts.",
      tech: ["Raspberry Pi", "Python", "C (Arduino)"],
      color: "from-secondary to-accent",
    },
    {
      title: "To-Do List & Money Manager Apps",
      description: "Simple, productive, and visually clean personal management tools.",
      tech: ["React","Express.js","Node.js","SQLite"],
      color: "from-accent to-secondary",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">Featured Projects</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`} />
                
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2"
                  >
                    <Github size={16} />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
