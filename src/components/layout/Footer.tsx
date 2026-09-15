import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F5F3EF] border-t border-[#EAE7E1] py-12 px-4 sm:px-8 text-center text-[#131418]">
      <div className="container mx-auto flex flex-col items-center gap-6">
        {/* Brand Logo: A U R A • */}
        <Link href="/" className="inline-flex items-center gap-1.5 group">
          <span className="text-2xl font-bold tracking-[0.2em] font-serif-display text-[#131418]">
            AURA
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059] inline-block shadow-sm" />
        </Link>

        {/* Footer Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-[#5C5E68]">
          <Link href="/about" className="hover:text-[#C5A059] transition-colors">About</Link>
          <Link href="/discover" className="hover:text-[#C5A059] transition-colors">Discover</Link>
          <Link href="/safety" className="hover:text-[#C5A059] transition-colors">Safety Center</Link>
          <Link href="/faq" className="hover:text-[#C5A059] transition-colors">FAQ</Link>
          <Link href="/terms" className="hover:text-[#C5A059] transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-[#C5A059] transition-colors">Privacy Policy</Link>
        </nav>

        {/* Footer Subtext */}
        <div className="space-y-1 max-w-lg text-center pt-2 border-t border-[#EAE7E1] w-full">
          <p className="font-medium tracking-wider text-[11px] sm:text-xs text-[#131418]">
            AURA &copy; {new Date().getFullYear()} &bull; Quiet Concierge & Verified Adult Companionship
          </p>
          <p className="text-[11px] sm:text-xs text-[#5C5E68]">
            Strictly 18+ Adult Experiences & Professional Companionship.
          </p>
        </div>
      </div>
    </footer>
  );
};
