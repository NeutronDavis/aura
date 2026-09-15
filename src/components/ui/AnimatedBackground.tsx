'use client';

import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Top Right Warm Gold Ambient Orb */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#C5A059]/15 via-[#F4F0E6]/25 to-transparent blur-3xl animate-float-slow"
      />

      {/* Center Left Subtle Obsidian / Warm Accent Orb */}
      <div
        className="absolute top-[35%] -left-48 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#1E6B4A]/10 via-[#C5A059]/10 to-transparent blur-3xl animate-float-reverse"
      />

      {/* Bottom Right Soft Ambient Orb */}
      <div
        className="absolute -bottom-36 right-10 w-[650px] h-[650px] rounded-full bg-gradient-to-t from-[#C5A059]/12 via-[#EBF5F0]/30 to-transparent blur-3xl animate-pulse-glow"
      />

      {/* Luxury Subtle Dot Grid Overlay for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(#131418_0.75px,transparent_0.75px)] [background-size:32px_32px] opacity-[0.035]" />
    </div>
  );
};
