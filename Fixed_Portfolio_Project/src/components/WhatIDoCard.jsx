
import React from 'react';
import Tilt from 'react-parallax-tilt';

export default function WhatIDoCard({ title, description, icons }) {
  return (
    <Tilt
      tiltMaxAngleX={4}
      tiltMaxAngleY={4}
      scale={1.02} // Slightly reduced scale for subtlety
      transitionSpeed={1500}
      className="h-full" // Ensure Tilt takes full height of grid cell
      glareEnable={true}
      glareMaxOpacity={0.08} // Reduced glare intensity
      glareColor="#ffffff"
      glarePosition="all"
      glareBorderRadius="1rem"
    >
      {/* Use flex-col and ensure consistent padding */}
      <div className="what-i-do-card h-full p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-500 shadow-xl flex flex-col">
        {/* Content wrapper */}
        <div className="content flex flex-col flex-grow">
          {/* Icons row at the top */}
          <div className="flex justify-end gap-3 text-white/60 text-2xl mb-4">
             {icons.map((Icon, index) => <span key={index} className="hover:text-white transition-colors duration-300">{Icon}</span>)}
          </div>
          {/* Title below icons */}
          <h3 className="text-xl md:text-2xl font-bold gradient-text mb-3">{title}</h3>
          {/* Description takes remaining space */}
          <p className="text-base text-white/80 flex-grow">{description}</p>
        </div>
      </div>
    </Tilt>
  );
}
