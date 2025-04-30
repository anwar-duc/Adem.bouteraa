
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Github, ChevronDown, Download } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Hero({ scrollTo }) {
  const handleContact = (type) => {
    let action;
    switch(type) {
      case 'email':
        action = () => window.location.href = 'mailto:adem.bouteraa@esen.tn';
        break;
      case 'linkedin':
        action = () => window.open('https://linkedin.com/in/bouteraa-adem-9448781bb/', '_blank', 'noopener,noreferrer');
        break;
      case 'github':
        action = () => window.open('https://github.com/adem-ads', '_blank', 'noopener,noreferrer');
        break;
    }
    action?.();
  };

  const handleScrollClick = () => {
    if (scrollTo) {
      scrollTo('about');
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-pattern relative overflow-hidden pt-24 pb-12">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background" />
      <motion.div
        className="text-center z-10 px-4 max-w-4xl mx-auto relative"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.div variants={fadeIn} className="mb-6">
           
        </motion.div>

        <motion.h1
          variants={fadeIn}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 gradient-text"
        >
          Adem Bouteraa
        </motion.h1>

        <motion.h2
          variants={fadeIn}
          className="text-xl sm:text-2xl md:text-3xl text-white/70 mb-4" // Reduced bottom margin
        >
          Data Analyst & AI Process Specialist
        </motion.h2>

        {/* Moved scroll indicator here */}
        <motion.div
          className="scroll-indicator-inline cursor-pointer group mb-8" // New class, added margin bottom
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }} // Adjusted delay
          onClick={handleScrollClick}
          title="Click to explore"
          variants={fadeIn} // Apply fade-in animation
        >
          <span className="text-sm text-white/80 group-hover:text-white transition-colors duration-300">Click to explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce mt-1 mx-auto text-white/80 group-hover:text-white transition-colors duration-300" />
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="flex items-center justify-center gap-2 text-white/70 mb-8 text-lg"
        >
          <MapPin className="w-5 h-5" />
          <span>Tunis, Tunisia</span>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          <Button
            onClick={() => handleContact('email')}
            className="contact-button"
            aria-label="Contact via Email"
          >
            <Mail className="w-5 h-5" />
            Email
          </Button>
          <Button
            onClick={() => handleContact('linkedin')}
            className="contact-button"
            aria-label="View LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </Button>
          <Button
            onClick={() => handleContact('github')}
            className="contact-button"
            aria-label="View GitHub Profile"
          >
            <Github className="w-5 h-5" />
            GitHub
          </Button>
          <a href="/Adem_Bouteraa_CV.pdf" download="Adem_Bouteraa_CV.pdf" className="no-underline">
             <Button
              className="contact-button"
              aria-label="Download CV"
              as="span"
            >
              <Download className="w-5 h-5" />
              Download CV
            </Button>
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}
