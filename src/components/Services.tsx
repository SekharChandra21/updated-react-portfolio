import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Cloud, Palette } from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: "Web Application Development",
      description: "Building modern, responsive, and scalable web applications with cutting-edge technologies.",
      color: "from-primary to-accent",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning Solutions",
      description: "Developing intelligent systems that learn, adapt, and solve complex problems.",
      color: "from-accent to-secondary",
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud Automation",
      description: "Streamlining deployment pipelines and managing cloud infrastructure efficiently.",
      color: "from-secondary to-primary",
    },
    {
      icon: Palette,
      title: "UI/UX and Frontend Optimization",
      description: "Creating beautiful, intuitive interfaces with exceptional user experiences.",
      color: "from-primary to-secondary",
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
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">Services</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${service.color} mb-4`}>
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
