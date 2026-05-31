import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImg from "@/assets/chandu.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300" />
              <img
                src={profileImg}
                alt="Aripaka Chandra Sekhar"
                className="relative rounded-full w-60 h-64 mx-auto object-cover border-4 border-card"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Full-stack developer with hands-on experience building real-time web applications, backend services, and automation tools using the MERN stack, Python, and cloud-based deployment workflows. I'm enthusiastic about leveraging cutting-edge technology to solve complex problems and deliver scalable solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans real-time chat systems, API-driven integrations, comprehensive testing, and CI/CD practices, with exposure to AI/ML-related development. I'm proficient in React, Node.js, Express, MongoDB, Socket.io, JavaScript, Python, and thrive in cross-functional delivery within Agile environments. Passionate about continuous learning and pushing the boundaries of what's possible with modern technology.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-primary mb-2">Resume</h3>
                <a
                  href="https://drive.google.com/file/d/1JOe1ezuTgbT2ceq2nrEc4xflOYFJ2esI/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  View My Resume
                </a>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-semibold text-primary mb-2">Location</h3>
                <p className="text-muted-foreground">Visakhapatnam, India</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
