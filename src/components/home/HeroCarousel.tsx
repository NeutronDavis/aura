'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroSlide {
  id: number;
  titlePrefix: string;
  titleItalic: string;
  subtitle: string;
  bgImage: string;
  tag: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
 
    titlePrefix: 'Quality Companionship, ',
    titleItalic: 'Wherever You Are.',
    subtitle:
      'Connect with verified, cultured companions for dinner dates, rooftop lounges, or private tastings at your designated venue — at transparent, fair rates.',
    bgImage: '/images/hero_1.jpg',
    tag: 'PAIRED EXPERIENCES',
  },
  {
    id: 2,
    titlePrefix: 'An Impeccable Plus-One, ',
    titleItalic: 'For Every Occasion.',
    subtitle:
      'Arrive with a sophisticated, articulate companion for charity benefits, opera performances, art previews, or corporate gatherings.',
    bgImage: '/images/hero_2.jpg',
    tag: 'EXCLUSIVE GALAS',
  },
  {
    id: 3,
    titlePrefix: 'Discreet & Transparent, ',
    titleItalic: 'From Start to Finish.',
    subtitle:
      'Zero cash exchanges, government-verified profiles, and public venue meetups engineered for total peace of mind.',
    bgImage: '/images/hero_1.jpg',
    tag: 'DISCREET & VERIFIED',
  },
];

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex flex-col justify-between overflow-hidden bg-[#131418] text-white">
      {/* Background Image Carousel Slider */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.bgImage}
            alt={slide.titlePrefix}
            fill
            priority={idx === 0}
            className="object-cover object-center"
          />
          {/* Dark Luxury Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
        </div>
      ))}

      {/* Main Hero Container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-4 sm:space-y-6">

          {/* Headline */}
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-normal font-serif-display tracking-tight text-white leading-[1.15] sm:leading-[1.1]">
            {active.titlePrefix}
            <span className="italic text-[#E9C176] block sm:inline">{active.titleItalic}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-white/80 max-w-2xl font-sans leading-relaxed">
            {active.subtitle}
          </p>

          {/* Action Buttons: Stack on Mobile, Flex on Desktop */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <Link
              href="/welcome"
              className="btn btn-primary rounded-full px-7 py-3.5 h-auto bg-[#C5A059] hover:bg-[#B08D45] text-black font-bold shadow-lg hover:shadow-xl transition-all text-sm sm:text-base border-none flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Footer Navigation Bar */}
      <div className="relative z-20 border-t border-white/10 bg-black/60 backdrop-blur-md py-3 sm:py-4 px-4 sm:px-8">
        <div className="container mx-auto flex items-center justify-between gap-4 text-xs tracking-wider">
          {/* Active Tag & Slide Indicators */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-white/60 font-semibold uppercase tracking-widest text-[10px] sm:text-xs">
              {active.tag}
            </span>
            <div className="flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === currentSlide ? 'w-5 sm:w-6 bg-[#C5A059]' : 'w-2 bg-white/30'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Carousel Arrows & Slide Index Counter */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={handlePrev}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all text-xs sm:text-sm"
              aria-label="Previous slide"
            >
              ←
            </button>
            <span className="text-white/80 font-mono font-medium text-[11px] sm:text-xs">
              {currentSlide + 1} / {slides.length}
            </span>
            <button
              onClick={handleNext}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all text-xs sm:text-sm"
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
