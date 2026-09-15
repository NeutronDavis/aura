'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MobileContainer } from '@/components/layout/MobileContainer';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [keyphrase, setKeyphrase] = useState('');
  const [rememberDevice, setRememberDevice] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login redirect to customer app
    window.location.href = '/app';
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center sm:py-8 sm:px-4 selection:bg-[#C5A059]/20 selection:text-[#C5A059]">
      <MobileContainer className="bg-[#FAF9F6] p-6 justify-between sm:rounded-3xl sm:shadow-2xl">
        <div className="space-y-6">
          {/* Top Shield & Badge */}
          <div className="text-center space-y-3 pt-2">
            <div className="relative w-14 h-14 rounded-full bg-[#EFECE6] text-[#775a19] flex items-center justify-center mx-auto shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              {/* Green Verified Badge */}
              <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#1E6B4A] text-white flex items-center justify-center border-2 border-[#FAF9F6]">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A37B34]">
                PRIVATE ATELIER &amp; CURATED SOCIETY
              </span>
              <h1 className="text-2xl sm:text-3xl font-normal font-serif-display text-[#131418]">
                Welcome Back
              </h1>
              <p className="text-xs text-[#5C5E68] font-sans">
                Sign in to access your verified profile and reservations.
              </p>
            </div>
          </div>

          {/* Discreet Concierge Banner */}
          <div className="bg-[#18191E] rounded-2xl p-4 text-white flex items-center justify-between border border-white/10 shadow-md relative overflow-hidden group">
            <div className="space-y-1 z-10 max-w-[65%]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] block">
                DISCREET CONCIERGE
              </span>
              <p className="text-xs text-white/80 font-sans font-medium leading-snug">
                End-to-end encrypted session key
              </p>
            </div>
            {/* Image Thumbnail Preview */}
            <div className="relative w-20 h-12 rounded-lg overflow-hidden border border-white/20 shadow-sm shrink-0">
              <Image
                src="/images/auth_welcome_hero.jpg"
                alt="Encrypted Session Preview"
                fill
                sizes="80px"
                className="object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-[9px] font-mono text-white/90 font-bold uppercase tracking-tighter bg-black/60 px-1.5 py-0.5 rounded">
                  256-BIT
                </span>
              </div>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Field 1: Email or Phone Number */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-[#131418] font-sans">
                  Email or Phone Number
                </label>
                <span className="text-[10px] font-semibold text-[#A37B34]">
                  Biometric Ready
                </span>
              </div>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-[#8C8E98]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="text"
                  required
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  placeholder="member@domain.com or +1 (555)"
                  className="w-full bg-[#F4F2EE] text-[#131418] placeholder-[#8C8E98] text-xs rounded-xl pl-10 pr-4 py-3.5 border-none outline-none focus:ring-2 focus:ring-[#C5A059]/50 transition-all font-sans"
                />
              </div>
            </div>

            {/* Field 2: Keyphrase */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-[#131418] font-sans">
                  Keyphrase
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-semibold text-[#A37B34] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-[#8C8E98]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={keyphrase}
                  onChange={(e) => setKeyphrase(e.target.value)}
                  placeholder="kk"
                  className="w-full bg-[#F4F2EE] text-[#131418] placeholder-[#8C8E98] text-xs rounded-xl pl-10 pr-10 py-3.5 border-none outline-none focus:ring-2 focus:ring-[#C5A059]/50 transition-all font-sans"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 text-[#8C8E98] hover:text-[#131418] transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.04 10.04 0 013.98-1.063c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m-6.312-3.327a3 3 0 11-4.243-4.243" />
                      <line x1="3" y1="3" x2="21" y2="21" strokeWidth="2" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Checkbox Row */}
            <div className="flex items-center justify-between pt-1 pb-2">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-[#5C5E68] font-sans">
                <input
                  type="checkbox"
                  checked={rememberDevice}
                  onChange={(e) => setRememberDevice(e.target.checked)}
                  className="rounded border-[#C5A059] text-[#C5A059] focus:ring-[#C5A059] w-4 h-4"
                />
                Remember this device
              </label>

              <div className="flex items-center gap-1 text-[11px] text-[#1E6B4A] font-semibold">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>30d TLS Key</span>
              </div>
            </div>

            {/* Primary Sign In Button */}
            <button
              type="submit"
              className="btn w-full rounded-full bg-[#C5A059] hover:bg-[#B08D45] border-none text-[#131418] font-bold text-sm h-12 shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
            >
              Sign In
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center justify-center my-6">
            <div className="border-t border-[#EAE7E1] w-full" />
            <span className="bg-[#FAF9F6] px-3 text-[10px] font-bold uppercase tracking-widest text-[#9C9EA8] shrink-0">
              OR SIGN IN WITH
            </span>
            <div className="border-t border-[#EAE7E1] w-full" />
          </div>

          {/* Passkey / Face ID Button */}
          <button
            type="button"
            className="btn w-full rounded-full bg-white hover:bg-white/90 border border-[#EAE7E1] text-[#131418] font-semibold text-xs h-12 flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.99]"
          >
            <div className="w-5 h-5 rounded-full bg-[#EBF5F0] text-[#1E6B4A] flex items-center justify-center">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M9 10h.01M15 10h.01" />
                <path d="M9.5 15a3.5 3.5 0 005 0" />
              </svg>
            </div>
            Sign In with Passkey / Face ID
          </button>
        </div>

        {/* Bottom Link */}
        <div className="text-center text-xs text-[#5C5E68] font-sans pt-6">
          New to Aura?{' '}
          <Link href="/register" className="text-[#A37B34] font-bold hover:underline">
            Create an account
          </Link>
        </div>
      </MobileContainer>
    </div>
  );
}
