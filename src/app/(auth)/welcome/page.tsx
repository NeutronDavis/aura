import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MobileContainer } from '@/components/layout/MobileContainer';

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center sm:py-8 sm:px-4 selection:bg-[#C5A059]/20 selection:text-[#C5A059]">
      <MobileContainer className="bg-[#FAF9F6] p-6 justify-between sm:rounded-3xl sm:shadow-2xl">
        <div className="space-y-6">
          {/* Top Hero Image Card */}
          <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-lg border border-[#EAE7E1]">
            <Image
              src="/images/auth_welcome_hero.jpg"
              alt="Aura Fine Dining Experience"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 448px"
              className="object-cover object-center"
            />
            {/* Soft Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Invitation & Discovery Text */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A37B34]">
              INVITATION &amp; DISCOVERY
            </span>

            <h1 className="text-2xl sm:text-3xl font-normal font-serif-display text-[#131418] leading-[1.25] tracking-tight">
              Exceptional Companionship, Wherever You Are.
            </h1>

            <p className="text-xs sm:text-sm text-[#5C5E68] leading-relaxed font-sans pt-1">
              Connect seamlessly with authenticated, dignified adult companions for Michelin dining, cultural galas, and bespoke travel. Curated for discretion, mutual respect, and effortless presence.
            </p>
          </div>
        </div>

        {/* Action Buttons & Footer Disclaimer */}
        <div className="space-y-4 pt-8">
          <Link
            href="/register"
            className="btn w-full rounded-full bg-[#C5A059] hover:bg-[#B08D45] border-none text-[#131418] font-bold text-sm h-12 shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
          >
            Create an Account
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <Link
            href="/login"
            className="btn w-full rounded-full bg-[#EFECE6] hover:bg-[#E2DDD3] border-none text-[#131418] font-semibold text-sm h-12 transition-all active:scale-[0.99] flex items-center justify-center"
          >
            Sign In to Aura
          </Link>

          <p className="text-[11px] text-[#8C8E98] text-center leading-relaxed font-sans pt-2 px-2">
            By proceeding, you attest you are 18 years or older and accept our{' '}
            <span className="underline cursor-pointer">Discreet Membership Charter</span> &amp;{' '}
            <span className="underline cursor-pointer">Privacy Architecture</span>.
          </p>
        </div>
      </MobileContainer>
    </div>
  );
}
