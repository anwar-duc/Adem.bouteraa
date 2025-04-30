
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // Import Footer

export default function Layout({ children, sections, activeSection, scrollTo }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar sections={sections} activeSection={activeSection} scrollTo={scrollTo} />
      <main className="flex-grow"> {/* Ensure main content takes available space */}
        {children}
      </main>
      <Footer /> {/* Add Footer */}
    </div>
  );
}
