import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Database, Brain, Container, Wrench } from "lucide-react";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techCategories = [
    {
      title: "Frontend",
      icon: Code2,
      techs: ["React", "Next.js", "Tailwind CSS"],
      color: "from-primary to-accent",
    },
    {
      title: "Backend",
      icon: Server,
      techs: ["Node.js", "Spring Boot"],
      color: "from-accent to-secondary",
    },
    {
      title: "Database",
      icon: Database,
      techs: ["MySQL"],
      color: "from-secondary to-primary",
    },
    {
      title: "AI/ML",
      icon: Brain,
      techs: ["Python", "TensorFlow", "Machine Learning"],
      color: "from-primary to-secondary",
    },
    {
      title: "DevOps",
      icon: Container,
      techs: ["Docker", "Jenkins", "Kubernetes"],
      color: "from-accent to-primary",
    },
    {
      title: "Tools",
      icon: Wrench,
      techs: ["Git", "VS Code", "Postman", "Figma"],
      color: "from-secondary to-accent",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="tech-stack" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">Tech Stack</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {techCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} mb-4`}>
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
