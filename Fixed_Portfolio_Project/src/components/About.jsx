
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="glass-card p-8 md:p-10">
            <p className="text-lg md:text-xl leading-relaxed text-white/80 text-center">
              Detail-oriented Data Analyst and AI Process Specialist skilled in ETL processes, AI automation tools, data visualization, and business intelligence. Proficient in Python, SQL, Excel, Power BI, N8N, Relevance AI, Twilio, and React JS. I specialize in transforming complex data and automating processes into actionable, strategic solutions, while leading teams and building intelligent workflows designed for efficiency and scalability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
