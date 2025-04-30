
import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ sections, activeSection, scrollTo }) {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">
        <motion.span
          className="text-2xl font-bold gradient-text"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          AB
        </motion.span>
        <div className="flex gap-4 md:gap-8">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className={`nav-link ${activeSection === section ? 'active' : ''} capitalize`}
            >
              {section.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
