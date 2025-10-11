import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">Work Experience</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative pl-8 pb-8 border-l-2 border-primary/30"
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px] glow-primary" />
              
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">Telugu Association Club Member</h3>
                    <p className="text-primary font-semibold mb-2">VIT-AP University</p>
                    <p className="text-sm text-muted-foreground mb-4">August 2022 - May 2023</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Actively contributed to organizing cultural events, managing student activities, and promoting
                   Telugu language and traditions. Collaborated with team members to plan and execute successful 
                   campus events, enhancing community engagement and leadership skills.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative pl-8 pb-8 border-l-2 border-primary/30"
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px] glow-primary" />
              
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">Capstone Project Lead</h3>
                    <p className="text-primary font-semibold mb-2">VIT-AP University</p>
                    <p className="text-sm text-muted-foreground mb-4">May 2025 - August 2025</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Spearheaded the development of an AI-powered healthcare platform that predicts diseases from symptoms and
                   streamlines doctor appointments and medicine delivery. Directed a cross-functional team to integrate ML models
                   (SVM, KNN, Random Forest, Naive Bayes) with a full-stack architecture using React, Spring Boot, and MySQL to deliver
                   accurate and user-centric medical insights.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative pl-8 pb-8 border-l-2 border-primary/30"
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px] glow-primary" />
              
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">Software Engineer Intern</h3>
                    <p className="text-primary font-semibold mb-2">SES Satellites</p>
                    <p className="text-sm text-muted-foreground mb-4">August 2025 - Present</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Contributed to building a secure, scalable web portal for the commercial aviation division.
                  The platform supports inflight internet connectivity using advanced 2KU and ATG technologies,
                  integrating seamless backend and frontend systems to enhance user experience and reliability.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
