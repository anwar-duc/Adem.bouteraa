
import React from 'react';
import { motion } from 'framer-motion';
import WhatIDoCard from '@/components/WhatIDoCard';
import { FaPython, FaDatabase, FaChartBar, FaMicrosoft, FaBrain, FaBriefcase, FaLightbulb, FaCogs, FaCloud } from 'react-icons/fa';
import { SiN8N, SiTwilio, SiZapier } from 'react-icons/si';


const whatIDoData = [
  {
    title: "Data Analytics",
    description: "Analyze, clean, and model data to extract insights. Build modern interactive dashboards for real-time business monitoring and decision-making.",
    icons: [<FaPython key="py" title="Python"/>, <FaDatabase key="sql" title="SQL"/>, <FaMicrosoft key="excel" title="Excel"/>, <FaChartBar key="powerbi" title="Power BI"/>]
  },
  {
    title: "AI Process Automation",
    description: "Build custom workflow automations using N8N, Relevance AI, Twilio, and Zapier. Create smart AI agents to automate tasks, integrate apps, and optimize operations.",
    icons: [<SiN8N key="n8n" title="N8N" />, <FaBrain key="ai" title="Relevance AI"/>, <SiTwilio key="twilio" title="Twilio"/>, <SiZapier key="zapier" title="Zapier"/>]
  },
  {
    title: "Business Analysis & Reporting",
    description: "Perform detailed business analysis for IT, marketing, HR, and operations. Deliver consulting on reporting needs, KPI building, dashboard design, and process improvement.",
    icons: [<FaBriefcase key="bi" title="Business Intelligence"/>, <FaLightbulb key="consult" title="Consulting"/>, <FaChartBar key="report" title="Reporting"/>]
  },
  {
    title: "IT Consulting & Automation Strategies",
    description: "Advise on best practices for IT project flows, automation strategies, and digital transformation. Help companies design intelligent systems that save time and increase scalability.",
    icons: [<FaCogs key="it" title="IT Consulting"/>, <FaCloud key="cloud" title="Cloud/Digital Transformation"/>, <FaBrain key="auto" title="Automation Strategy"/>]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="py-24 md:py-32 px-4 bg-gradient-to-b from-black/5 to-transparent"> {/* Changed background slightly */}
      <div className="max-w-7xl mx-auto"> {/* Slightly wider max-width */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          What I Do
        </motion.h2>
        {/* Adjusted grid columns for better spacing on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {whatIDoData.map((item, index) => (
             <motion.div
              key={item.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }} // Trigger animation a bit earlier
              variants={cardVariants}
              className="flex" // Ensure motion div takes flex properties for height alignment
             >
              <WhatIDoCard
                title={item.title}
                description={item.description}
                icons={item.icons}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
