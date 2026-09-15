'use client';

import React, { useState, useEffect } from 'react';

export const AgeGateModal: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    setMounted(true);
    localStorage.removeItem('aura_age_verified');
    const verified = sessionStorage.getItem('aura_age_verified');
    if (verified === 'true') {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  }, []);

  const handleConfirm = () => {
    sessionStorage.setItem('aura_age_verified', 'true');
    setIsVerified(true);
  };

  const handleDecline = () => {
    sessionStorage.removeItem('aura_age_verified');
    localStorage.removeItem('aura_age_verified');
    if (typeof window !== 'undefined') {
      window.location.href = 'https://www.google.com';
    }
  };

  if (!mounted || isVerified) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-all">
      <div className="w-full max-w-md bg-[#FAF9F6] border border-[#EAE7E1] rounded-3xl p-8 sm:p-10 text-center shadow-2xl space-y-6 relative overflow-hidden">
        {/* Top Gold 18+ Icon Badge */}
        <div className="w-16 h-16 rounded-full bg-[#F4F0E6] text-[#775a19] flex items-center justify-center mx-auto border border-[#EAE7E1] shadow-sm">
          <span className="font-bold text-xl font-serif-display">18+</span>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#775a19]">
            ADULT COMPANIONSHIP MARKETPLACE
          </span>
          <h2 className="text-2xl sm:text-3xl font-normal font-serif-display text-[#131418] tracking-tight">
            Age Verification Required
          </h2>
        </div>

        {/* Description */}
        <p className="text-sm text-[#5C5E68] leading-relaxed font-sans">
          This platform is restricted strictly to verified adults aged 18 and older. Please confirm your age to enter, or exit immediately.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pt-2">
          <button
            onClick={handleConfirm}
            className="btn w-full rounded-full bg-[#C5A059] hover:bg-[#B08D45] border-none text-[#131418] font-bold text-sm h-12 shadow-md transition-all"
          >
            I am 18 or older — Enter Site
          </button>
          <button
            onClick={handleDecline}
            className="btn w-full rounded-full bg-[#F4F3F8] hover:bg-[#E9E7ED] border-none text-[#5C5E68] font-semibold text-xs h-11 transition-all"
          >
            I am under 18 — Exit Immediately
          </button>
        </div>

        {/* Footer Discretion Note */}
        <p className="text-[10px] text-[#8B8D97] uppercase tracking-wider font-mono pt-2 border-t border-[#EAE7E1]">
          Strict 18+ Policy &bull; Discreet Escrow &bull; Public Meetups Only
        </p>
      </div>
    </div>
  );
};
