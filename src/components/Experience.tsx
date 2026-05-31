import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { calculateDuration } from "@/lib/utils";

interface ExperienceItem {
  title: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  achievements: string[];
  techStack: string;
}

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences: ExperienceItem[] = [
    {
      title: "Software Engineer Intern",
      company: "SES Global Technology Services, Chennai, India",
      startDate: new Date(2025, 7, 1), // August 2025
      description: "Collaborated in Agile Scrum teams to develop a broadband retail platform for in-flight connectivity and entitlement management.",
      achievements: [
        "Built real-time Flight Tracker using React, Streamlit Maps, and airport-data-js; deployed to AWS S3 via Jenkins/Spinnaker CI/CD pipelines",
        "Developed Spring Boot and Go microservices with JUnit 5/6, Mockito, Jest, and SonarQube code quality integration",
        "Optimized DynamoDB data purging using Scan and BatchWriteItem for large-scale historical data cleanup",
        "Engineered AWS SES-based automated email workflows triggered through REST APIs for notifications"
      ],
      techStack: "React, Spring Boot, Go, AWS (S3, DynamoDB, SES), GitLab, Jenkins, Spinnaker, IntelliJ IDEA"
    },
    {
      title: "Capstone Project Lead",
      company: "VIT-AP University, Amaravati, Andhra Pradesh, India",
      startDate: new Date(2025, 4, 1), // May 2025
      endDate: new Date(2025, 7, 31), // August 2025
      description: "Spearheaded development of an AI-powered healthcare platform predicting diseases from symptoms and streamlining doctor appointments.",
      achievements: [
        "Directed cross-functional team to integrate ML models (SVM, KNN, Random Forest, Naive Bayes) for accurate disease prediction",
        "Developed full-stack architecture combining React frontend, Spring Boot backend, and MySQL database for scalability",
        "Streamlined appointment booking and medicine delivery workflows for enhanced user experience",
        "Delivered user-centric medical insights through data-driven machine learning implementation"
      ],
      techStack: "React, Spring Boot, MySQL, Python, Machine Learning (Scikit-learn)"
    },
    {
      title: "Telugu Association Club Member",
      company: "VIT-AP University, Amaravati, Andhra Pradesh, India",
      startDate: new Date(2022, 7, 1), // August 2022
      endDate: new Date(2023, 4, 31), // May 2023
      description: "Actively contributed to organizing cultural events and managing student activities for the Telugu Association.",
      achievements: [
        "Organized and executed multiple cultural events promoting Telugu language, traditions, and heritage",
        "Collaborated with cross-functional team to plan and execute successful campus events",
        "Enhanced community engagement and strengthened cultural connections among student population",
        "Developed leadership and organizational skills through event management and team coordination"
      ],
      techStack: "Event Management, Leadership, Team Coordination, Community Engagement"
    }
  ];

  const formatDateRange = (startDate: Date, endDate?: Date): string => {
    const startMonth = startDate.toLocaleString("default", { month: "short", year: "numeric" });
    const endMonth = endDate ? endDate.toLocaleString("default", { month: "short", year: "numeric" }) : "Present";
    const duration = calculateDuration(startDate, endDate);
    return `${startMonth} - ${endMonth} (${duration})`;
  };

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

          {experiences.map((exp, index) => (
            <div key={index} className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="relative pl-8 pb-8 border-l-2 border-primary/30"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px] glow-primary" />
                
                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg">
                      <Briefcase className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                      <p className="text-primary font-semibold mb-2">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-4">{formatDateRange(exp.startDate, exp.endDate)}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Tech Stack:</span> {exp.techStack}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
