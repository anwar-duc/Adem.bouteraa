
import React from 'react';
import { motion } from 'framer-motion';
import SkillSection from "@/components/SkillSection";

const hardSkills = [
  "Python", "SQL", "Excel", "Power BI", "N8N", "Relevance AI",
  "Twilio", "React JS", "ETL", "Data Visualization", "Zapier", "Business Intelligence"
];

const softSkills = [
  "Leadership", "Problem Solving", "Team Management", "Adaptability",
  "Communication", "Project Management", "Strategic Planning", "Critical Thinking",
  "Analytical Thinking", "Time Management", "Client Consulting", "Training & Mentoring"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-4 bg-white/5">
      <div className="max-w-4xl mx-auto">
         <motion.h2
          className="section-title"
           initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
            <SkillSection title="Technical Skills" skills={hardSkills} />
        </motion.div>
         <motion.div
           initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
            <SkillSection title="Soft Skills" skills={softSkills} />
         </motion.div>
      </div>
    </section>
  );
}
