
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { List } from "lucide-react";

export default function ExperienceCard({ company, role, date, description, details, logo }) {
  return (
    <Tilt
      tiltMaxAngleX={4}
      tiltMaxAngleY={4}
      scale={1.02}
      transitionSpeed={2500}
      className="w-full"
       glareEnable={true}
      glareMaxOpacity={0.05}
      glareColor="#ffffff"
      glarePosition="all"
      glareBorderRadius="1rem"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="experience-card p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 shadow-xl"
      >
        <div className="content">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
            {logo && (
              <div className="flex-shrink-0">
                 <img
                  src={logo}
                  alt={`${company} logo`}
                  className="w-12 h-12 object-contain rounded-lg bg-white/10 p-1 shadow-md" // Adjusted padding
                 />
              </div>
            )}
            <div className="flex-grow">
              <h3 className="text-xl md:text-2xl font-bold gradient-text">{company}</h3>
              {role && <p className="text-base md:text-lg text-white/80 font-medium -mt-1">{role}</p>} {/* Display Role */}
              <p className="text-sm text-white/60 mt-1">{date}</p>
            </div>
          </div>
          <p className="text-base md:text-lg text-white/80 mb-4">{description}</p>
          {details && details.length > 0 && (
             <div className="mt-4 pt-4 border-t border-white/10">
                <h4 className="text-sm font-semibold text-white/70 mb-2 flex items-center gap-2"> <List size={16} /> Key Responsibilities & Organization:</h4>
                <ul className="list-none space-y-1 pl-0 text-white/70 text-sm md:text-base">
                    {details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2">
                           <span className="text-blue-400 mt-1">&#8227;</span>
                           <span>{detail}</span>
                        </li>
                    ))}
                </ul>
            </div>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
}
