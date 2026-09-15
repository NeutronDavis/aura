import React from 'react';
import Link from 'next/link';
import { Navbar, Footer, Container } from '@/components/layout';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { FeaturedCompanionsSection } from '@/components/home/FeaturedCompanionsSection';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF9F6] selection:bg-[#C5A059]/20 selection:text-[#C5A059] relative overflow-x-hidden">
      {/* Dynamic Ambient Background Orbs */}
      <AnimatedBackground />

      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-1 relative z-10">
        {/* 2. Hero Carousel Section */}
        <HeroCarousel />

        {/* 3. ABOUT AURA Section (Placed Immediately After Hero) */}
        <section id="about" className="py-24 bg-[#FAF9F6]/80 backdrop-blur-sm scroll-mt-16">
          <Container>
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Header & Intro */}
              <ScrollReveal animation="fade-up" duration={800}>
                <div className="text-center space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#775a19]">
                    ABOUT AURA
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-normal font-serif-display tracking-tight text-[#131418]">
                    Companionship, made safer.
                  </h2>
                  <div className="max-w-2xl mx-auto space-y-4 text-sm sm:text-base text-[#5C5E68] font-sans leading-relaxed pt-2">
                    <p>
                      <strong className="text-[#131418] font-semibold">AURA</strong> is a secure platform that makes it easier for adults to discover, connect with, and book verified companions for meaningful experiences.
                    </p>
                    <p>
                      We created AURA to provide a better alternative to uncertain and potentially unsafe ways of finding companionship. With verified profiles, transparent bookings, secure payments, and built-in safety features, both customers and companions can connect with greater confidence.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Built on Trust Pillars */}
              <div className="space-y-8">
                <ScrollReveal animation="fade-up">
                  <div className="text-center">
                    <h3 className="text-2xl font-normal font-serif-display text-[#131418]">
                      Built on trust
                    </h3>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Pillar 1: Verified People */}
                  <ScrollReveal animation="fade-up" delay={100}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-2 h-full">
                      <div className="w-11 h-11 rounded-full bg-[#EBF5F0] text-[#1E6B4A] flex items-center justify-center mb-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <polyline points="16 11 18 13 22 9" strokeWidth="2.5" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-base text-[#131418] font-sans">
                        Verified People
                      </h4>
                      <p className="text-xs text-[#5C5E68] leading-relaxed font-sans">
                        We prioritize identity and age verification to help create a more trusted community.
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Pillar 2: Secure Bookings */}
                  <ScrollReveal animation="fade-up" delay={200}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-2 h-full">
                      <div className="w-11 h-11 rounded-full bg-[#F4F0E6] text-[#775a19] flex items-center justify-center mb-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                          <path d="M9 16l2 2 4-4" strokeWidth="2.5" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-base text-[#131418] font-sans">
                        Secure Bookings
                      </h4>
                      <p className="text-xs text-[#5C5E68] leading-relaxed font-sans">
                        Clear pricing, availability, and booking details before an experience begins.
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Pillar 3: Protected Payments */}
                  <ScrollReveal animation="fade-up" delay={300}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-2 h-full">
                      <div className="w-11 h-11 rounded-full bg-[#EBF5F0] text-[#1E6B4A] flex items-center justify-center mb-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-base text-[#131418] font-sans">
                        Protected Payments
                      </h4>
                      <p className="text-xs text-[#5C5E68] leading-relaxed font-sans">
                        Payments are processed securely through trusted payment infrastructure.
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Pillar 4: Safety First */}
                  <ScrollReveal animation="fade-up" delay={400}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-2 h-full">
                      <div className="w-11 h-11 rounded-full bg-[#F4F0E6] text-[#775a19] flex items-center justify-center mb-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="M9 12l2 2 4-4" strokeWidth="2.5" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-base text-[#131418] font-sans">
                        Safety First
                      </h4>
                      <p className="text-xs text-[#5C5E68] leading-relaxed font-sans">
                        Tools for reporting, blocking, booking records, and support are built into the platform.
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>

              {/* Goal Statement Callout */}
              <ScrollReveal animation="zoom-in" delay={200}>
                <div className="bg-[#F5F3EF]/90 backdrop-blur-sm rounded-2xl p-8 text-center space-y-3">
                  <p className="text-base sm:text-lg font-medium text-[#131418] leading-relaxed font-serif-display max-w-2xl mx-auto">
                    &ldquo;Our goal is simple: to make adult companionship more organized, transparent, and safe for everyone involved.&rdquo;
                  </p>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#F4F0E6] text-[#775a19] text-[11px] font-bold tracking-widest uppercase">
                    18+ Only
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>

        {/* 4. "A Simpler, Safer Way to Meet" (Why Aura / For Men & Women) */}
        <section id="why-aura" className="py-24 bg-[#F5F3EF]/80 backdrop-blur-sm border-t border-[#EAE7E1] scroll-mt-16">
          <Container>
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#775a19]">
                  WHY AURA
                </span>
                <h2 className="text-3xl sm:text-5xl font-normal font-serif-display tracking-tight text-[#131418]">
                  A Simpler, Safer Way to Meet
                </h2>
                <p className="text-[#5C5E68] text-sm sm:text-base font-sans pt-1">
                  No agencies, no markups, no ambiguities. Professional companionship on your schedule.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1: Location Pin Icon */}
              <ScrollReveal animation="fade-up" delay={100}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 sm:p-9 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="w-11 h-11 rounded-full bg-[#F4F0E6] text-[#775a19] flex items-center justify-center mb-6">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10z" />
                        <circle cx="12" cy="11" r="2" />
                        <path d="M8 22h8" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold font-sans text-[#131418] mb-3">
                      At Your Designated Location
                    </h3>
                    <p className="text-sm text-[#5C5E68] leading-relaxed font-sans">
                      Pick your restaurant, lounge, rooftop, or gala anywhere across your city. Your companion meets you directly on site at your chosen public venue.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Feature 2: Dollar Sign + Checkmark Icon */}
              <ScrollReveal animation="fade-up" delay={250}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 sm:p-9 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="w-11 h-11 rounded-full bg-[#EBF5F0] text-[#1E6B4A] flex items-center justify-center mb-6">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        <path d="M15 17l2 2 4-4" strokeWidth="2.5" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold font-sans text-[#131418] mb-3">
                      Honest, Transparent Pricing
                    </h3>
                    <p className="text-sm text-[#5C5E68] leading-relaxed font-sans">
                      Clear hourly rates set upfront with zero awkward cash exchanges. Payments are held in secure escrow and released only after your meetup concludes.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Feature 3: Dual Users / People Icon */}
              <ScrollReveal animation="fade-up" delay={400}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 sm:p-9 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="w-11 h-11 rounded-full bg-[#F4F0E6] text-[#775a19] flex items-center justify-center mb-6">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M9 21v-2a4 4 0 0 0-4-4H3a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold font-sans text-[#131418] mb-3">
                      For Men & Women
                    </h3>
                    <p className="text-sm text-[#5C5E68] leading-relaxed font-sans">
                      Whether you need an intelligent dinner date, an event plus-one, a city tour guide, or high-caliber conversation, discover verified male and female hosts.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>

        {/* 5. "Featured Companions Near You" Section */}
        <FeaturedCompanionsSection />

        {/* 6. "How Aura Works" Section */}
        <section id="how-it-works" className="py-24 bg-[#F5F3EF]/80 backdrop-blur-sm border-t border-[#EAE7E1] scroll-mt-16">
          <Container>
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#775a19]">
                  SIMPLE & DIRECT
                </span>
                <h2 className="text-3xl sm:text-5xl font-normal font-serif-display tracking-tight text-[#131418]">
                  How Aura Works
                </h2>
                <p className="text-[#5C5E68] text-sm sm:text-base font-sans pt-1">
                  Three straightforward steps from discovery to meeting safely at your chosen venue.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <ScrollReveal animation="fade-up" delay={100}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 sm:p-9 shadow-sm hover:shadow-md transition-all space-y-4 h-full">
                  <div className="w-10 h-10 rounded-full bg-[#F4F0E6] text-[#775a19] font-bold text-base flex items-center justify-center font-sans">
                    1
                  </div>
                  <h3 className="text-xl font-bold font-sans text-[#131418]">
                    Set Location & Budget
                  </h3>
                  <p className="text-sm text-[#5C5E68] leading-relaxed font-sans">
                    Filter companions by your city, neighborhood, occasion, and your preferred hourly rate. Zero concealed fees.
                  </p>
                </div>
              </ScrollReveal>

              {/* Step 2 */}
              <ScrollReveal animation="fade-up" delay={250}>
                <div className="bg-[#FAF9F6]/90 backdrop-blur-sm rounded-2xl p-8 sm:p-9 shadow-sm hover:shadow-md transition-all space-y-4 h-full">
                  <div className="w-10 h-10 rounded-full bg-[#F4F0E6] text-[#775a19] font-bold text-base flex items-center justify-center font-sans">
                    2
                  </div>
                  <h3 className="text-xl font-bold font-sans text-[#131418]">
                    Pick Your Verified Companion
                  </h3>
                  <p className="text-sm text-[#5C5E68] leading-relaxed font-sans">
                    View authentic photos, confirmed backgrounds, verified interests, and real guest reviews before sending an inquiry.
                  </p>
                </div>
              </ScrollReveal>

              {/* Step 3 */}
              <ScrollReveal animation="fade-up" delay={400}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 sm:p-9 shadow-sm hover:shadow-md transition-all space-y-4 h-full">
                  <div className="w-10 h-10 rounded-full bg-[#F4F0E6] text-[#775a19] font-bold text-base flex items-center justify-center font-sans">
                    3
                  </div>
                  <h3 className="text-xl font-bold font-sans text-[#131418]">
                    Meet Safely in Public
                  </h3>
                  <p className="text-sm text-[#5C5E68] leading-relaxed font-sans">
                    Rendezvous at your designated public dining or event venue. Payment stays secure in escrow until the date concludes.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>

        {/* 7. "Safety, Transparency & Discretion First" (Dark Safety Feature Banner) */}
        <section id="safety" className="py-24 bg-[#FAF9F6]/80 backdrop-blur-sm border-t border-[#EAE7E1] scroll-mt-16">
          <Container>
            <ScrollReveal animation="zoom-in" duration={850}>
              <div className="bg-[#18191E] border border-white/10 rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                  {/* Left Column: Safety Disclosures */}
                  <div className="lg:col-span-8 space-y-6">
                    <h2 className="text-3xl sm:text-5xl font-normal font-serif-display text-white tracking-tight leading-tight">
                      Safety, Transparency & Discretion First
                    </h2>
                    <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
                      Aura guarantees a safe, respectful environment for both guests and companions. Every meetup is strictly governed by transparent rules.
                    </p>

                    {/* 4 Feature Badges */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs font-medium text-white/90">
                      <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
                        <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <strong className="block text-white mb-0.5">Strict 18+ ID Checks</strong>
                          <span className="text-white/60">Mandatory government passport/driver&apos;s license verification for all profiles.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
                        <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <strong className="block text-white mb-0.5">Public Venues Exclusively</strong>
                          <span className="text-white/60">All meetups take place in verified public lounges, cafes, galas, and restaurants.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
                        <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <strong className="block text-white mb-0.5">Zero Cash Encounters</strong>
                          <span className="text-white/60">Transparent escrow booking with no awkward price surprises or in-person negotiations.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
                        <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <strong className="block text-white mb-0.5">24/7 Concierge Support</strong>
                          <span className="text-white/60">Active check-in dispatch available to both parties throughout the engagement.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Floating Dark Card */}
                  <div className="lg:col-span-4">
                    <div className="bg-[#22242B] border border-white/10 rounded-2xl p-8 text-center space-y-4 shadow-xl">
                      <div className="w-12 h-12 rounded-full bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center mx-auto">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 0 0-8 0v4h8z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold font-serif-display text-white">
                        Discreet & Protected
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed font-sans">
                        Your identity and contact information remain private until you confirm a booking.
                      </p>
                      <a
                        href="#companions"
                        className="btn btn-primary w-full rounded-full bg-[#C5A059] hover:bg-[#B08D45] text-black font-bold border-none text-sm py-3"
                      >
                        Find Companions Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* 8. Call To Action Banner ("Ready to find your companion for tonight?") */}
        <section className="py-16 bg-[#FAF9F6]/80 backdrop-blur-sm">
          <Container>
            <ScrollReveal animation="zoom-in" delay={150}>
              <div className="bg-[#F5F3EF]/90 backdrop-blur-sm rounded-3xl p-10 sm:p-16 text-center max-w-4xl mx-auto space-y-6 shadow-sm">
                <h2 className="text-3xl sm:text-5xl font-normal font-serif-display tracking-tight text-[#131418]">
                  Ready to find your companion for tonight?
                </h2>
                <p className="text-[#5C5E68] text-sm sm:text-base max-w-xl mx-auto font-sans leading-relaxed">
                  Browse available verified companions in your neighborhood at honest hourly rates. Reserve in minutes.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <a
                    href="#companions"
                    className="btn btn-primary rounded-full px-8 py-3.5 h-auto bg-[#C5A059] hover:bg-[#B08D45] text-black font-bold text-sm border-none shadow-md"
                  >
                    Browse Available Companions
                    <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a
                    href="#how-it-works"
                    className="btn btn-ghost rounded-full px-8 py-3.5 h-auto border border-[#EAE7E1] hover:bg-[#EAE7E1]/50 text-sm font-semibold text-[#131418]"
                  >
                    Learn How It Works
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}

