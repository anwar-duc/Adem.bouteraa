
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { useMousePositionEffect } from "@/hooks/useMousePositionEffect";

const sections = ["home", "about", "what-i-do", "experience", "education", "skills"];

export default function App() {
  const { activeSection, scrollTo } = useSectionObserver(sections, 0.4);
  useMousePositionEffect('.experience-card, .skill-badge, .what-i-do-card');

  return (
    <Layout sections={sections} activeSection={activeSection} scrollTo={scrollTo}>
      {/* Pass scrollTo to Hero */}
      <Hero scrollTo={scrollTo} />
      <About />
      <WhatIDo />
      <Experience />
      <Education />
      <Skills />
      <Toaster />
    </Layout>
  );
}
