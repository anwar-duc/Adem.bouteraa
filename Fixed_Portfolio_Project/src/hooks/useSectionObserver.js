
import { useState, useEffect, useRef } from 'react';

export function useSectionObserver(sections, threshold = 0.4) {
  const [activeSection, setActiveSection] = useState(sections[0] || 'home');
  const sectionRefs = useRef({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: threshold
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        sectionRefs.current[sectionId] = element;
        observer.observe(element);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, [sections, threshold]);

  const scrollTo = (section) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
     // setActiveSection will be updated by the IntersectionObserver automatically
  };


  return { activeSection, scrollTo, sectionRefs };
}
