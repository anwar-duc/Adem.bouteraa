
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 mt-16 md:mt-24 border-t border-white/10 bg-black/20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-white/60">
          &copy; {currentYear} Adem Bouteraa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
