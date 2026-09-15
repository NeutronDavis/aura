'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setIsMobileMenuOpen(false);
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="navbar bg-[#FAF9F6] border-b border-[#EAE7E1] sticky top-0 z-50 px-4 sm:px-10 h-16 sm:h-18 transition-all">
        {/* Left: Brand Wordmark A U R A • */}
        <div className="navbar-start">
          <Link href="/" className="flex items-center gap-1.5 group">
            <span className="text-xl sm:text-2xl font-bold tracking-[0.2em] font-serif-display text-[#131418]">
              AURA
            </span>
            <span className="w-2 h-2 rounded-full bg-[#C5A059] inline-block shadow-sm" />
          </Link>
        </div>

        {/* Center: Desktop Anchor Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 text-sm font-medium text-[#131418]">
            <li>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className="hover:text-[#C5A059] transition-colors focus:bg-transparent active:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                onClick={(e) => scrollToSection(e, 'how-it-works')}
                className="hover:text-[#C5A059] transition-colors focus:bg-transparent active:bg-transparent"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#companions"
                onClick={(e) => scrollToSection(e, 'companions')}
                className="hover:text-[#C5A059] transition-colors focus:bg-transparent active:bg-transparent"
              >
                Browse Companions
              </a>
            </li>
            <li>
              <a
                href="#safety"
                onClick={(e) => scrollToSection(e, 'safety')}
                className="hover:text-[#C5A059] transition-colors focus:bg-transparent active:bg-transparent"
              >
                Pricing & Safety
              </a>
            </li>
            <li>
              <a
                href="#why-aura"
                onClick={(e) => scrollToSection(e, 'why-aura')}
                className="hover:text-[#C5A059] transition-colors focus:bg-transparent active:bg-transparent"
              >
                For Men & Women
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Desktop Actions */}
        <div className="navbar-end hidden lg:flex gap-3">
          <Link
            href="/welcome"
            className="btn btn-sm rounded-full bg-[#F4F3F8] hover:bg-[#E9E7ED] border-none text-[#131418] text-xs font-semibold px-5 h-9 flex items-center justify-center"
          >
            Become a Companion
          </Link>
          <Link
            href="/welcome"
            className="btn btn-sm rounded-full bg-[#C5A059] hover:bg-[#B08D45] border-none text-[#131418] text-xs font-bold px-5 h-9 shadow-sm flex items-center justify-center"
          >
            Find a Companion
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden ml-auto">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="btn btn-ghost btn-circle text-[#131418] hover:bg-[#F4F3F8]"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Slide-over Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Sidebar */}
          <div className="relative ml-auto w-full max-w-xs bg-[#FAF9F6] h-full shadow-2xl flex flex-col justify-between p-6 z-10 border-l border-[#EAE7E1]">
            <div className="space-y-6">
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-[#EAE7E1] pb-4">
                <Link href="/" className="flex items-center gap-1.5" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="text-xl font-bold tracking-[0.2em] font-serif-display text-[#131418]">
                    AURA
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#C5A059] inline-block" />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn btn-ghost btn-circle btn-sm text-[#131418]"
                >
                  ✕
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-4 font-medium text-base text-[#131418]">
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, 'about')}
                  className="hover:text-[#C5A059] transition-colors py-1"
                >
                  About
                </a>
                <a
                  href="#how-it-works"
                  onClick={(e) => scrollToSection(e, 'how-it-works')}
                  className="hover:text-[#C5A059] transition-colors py-1"
                >
                  How It Works
                </a>
                <a
                  href="#companions"
                  onClick={(e) => scrollToSection(e, 'companions')}
                  className="hover:text-[#C5A059] transition-colors py-1"
                >
                  Browse Companions
                </a>
                <a
                  href="#safety"
                  onClick={(e) => scrollToSection(e, 'safety')}
                  className="hover:text-[#C5A059] transition-colors py-1"
                >
                  Pricing & Safety
                </a>
                <a
                  href="#why-aura"
                  onClick={(e) => scrollToSection(e, 'why-aura')}
                  className="hover:text-[#C5A059] transition-colors py-1"
                >
                  For Men & Women
                </a>
              </nav>
            </div>

            {/* Mobile Actions */}
            <div className="space-y-3 pt-6 border-t border-[#EAE7E1]">
              <Link
                href="/welcome"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn w-full rounded-full bg-[#C5A059] hover:bg-[#B08D45] border-none text-[#131418] font-bold text-sm h-11 flex items-center justify-center"
              >
                Find a Companion
              </Link>
              <Link
                href="/welcome"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn w-full rounded-full bg-[#F4F3F8] hover:bg-[#E9E7ED] border-none text-[#131418] font-semibold text-sm h-11 flex items-center justify-center"
              >
                Become a Companion
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
