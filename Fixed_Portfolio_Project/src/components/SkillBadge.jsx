
import React from "react";
import { motion } from "framer-motion";

export default function SkillBadge({ skill }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="skill-badge px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
    >
      <span className="content text-white/80 font-medium text-sm md:text-base">{skill}</span>
    </motion.div>
  );
}
