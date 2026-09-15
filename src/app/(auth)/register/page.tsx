'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MobileContainer } from '@/components/layout/MobileContainer';

export default function RegisterPage() {
  const [role, setRole] = useState<'patron' | 'companion'>('patron');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Password rules validation
  const hasMinLength = password.length >= 8;
  const hasUpperLower = /[a-z]/.test(password) && /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) return;
    // Redirect to onboarding or verification
    window.location.href = role === 'companion' ? '/onboarding/provider' : '/app';
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center sm:py-8 sm:px-4 selection:bg-[#C5A059]/20 selection:text-[#C5A059]">
      <MobileContainer className="bg-[#FAF9F6] p-6 justify-between sm:rounded-3xl sm:shadow-2xl">
        <div className="space-y-5">
          {/* Top Shield Icon */}
          <div className="text-center space-y-3 pt-2">
            <div className="w-14 h-14 rounded-full bg-[#EFECE6] text-[#775a19] flex items-center justify-center mx-auto shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-normal font-serif-display text-[#131418]">
                Create Your Account
              </h1>
              <p className="text-xs text-[#5C5E68] font-sans">
                Join our verified community of patrons and companions.
              </p>
            </div>
          </div>

          {/* Role Segmented Switch Pill */}
          <div className="bg-[#EFECE6] p-1 rounded-full flex gap-1">
            <button
              type="button"
              onClick={() => setRole('patron')}
              className={`flex-1 py-2 px-3 rounded-full text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                role === 'patron'
                  ? 'bg-white text-[#131418] shadow-sm font-bold'
                  : 'text-[#5C5E68] hover:text-[#131418]'
              }`}
            >
              <span>💎</span> Find Companions
            </button>
            <button
              type="button"
              onClick={() => setRole('companion')}
              className={`flex-1 py-2 px-3 rounded-full text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                role === 'companion'
                  ? 'bg-white text-[#131418] shadow-sm font-bold'
                  : 'text-[#5C5E68] hover:text-[#131418]'
              }`}
            >
              <span>👤</span> Apply as Companion
            </button>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Field 1: Full Legal Name */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-[#131418] font-sans">
                  Full Legal Name
                </label>
                <span className="text-[10px] text-[#8C8E98]">
                  For private escrow verification
                </span>
              </div>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-[#8C8E98]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Eleanor Vance"
                  className="w-full bg-[#F4F2EE] text-[#131418] placeholder-[#8C8E98] text-xs rounded-xl pl-10 pr-4 py-3.5 border-none outline-none focus:ring-2 focus:ring-[#C5A059]/50 transition-all font-sans"
                />
              </div>
            </div>

            {/* Field 2: Email Address */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-[#131418] font-sans">
                  Email Address
                </label>
                <span className="text-[10px] text-[#8C8E98]">
                  Zero-knowledge dispatch
                </span>
              </div>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-[#8C8E98]">
                  <span className="text-sm font-bold font-mono">@</span>
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vance@curated.luxury"
                  className="w-full bg-[#F4F2EE] text-[#131418] placeholder-[#8C8E98] text-xs rounded-xl pl-10 pr-4 py-3.5 border-none outline-none focus:ring-2 focus:ring-[#C5A059]/50 transition-all font-sans"
                />
              </div>
            </div>

            {/* Field 3: Private Cell Number */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-[#131418] font-sans">
                  Private Cell Number
                </label>
                <span className="text-[10px] text-[#8C8E98]">
                  Encrypted SMS pin
                </span>
              </div>
              <div className="flex gap-2">
                <div className="relative w-24 shrink-0">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-full bg-[#F4F2EE] text-[#131418] text-xs rounded-xl px-3 py-3.5 border-none outline-none focus:ring-2 focus:ring-[#C5A059]/50 appearance-none font-sans cursor-pointer"
                  >
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+234">🇳🇬 +234</option>
                  </select>
                  <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#8C8E98] text-[10px]">
                    ▼
                  </div>
                </div>
                <div className="relative flex-1">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C8E98]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(555) 382-9011"
                    className="w-full bg-[#F4F2EE] text-[#131418] placeholder-[#8C8E98] text-xs rounded-xl pl-10 pr-4 py-3.5 border-none outline-none focus:ring-2 focus:ring-[#C5A059]/50 transition-all font-sans"
                  />
                </div>
              </div>
            </div>

            {/* Field 4: Master Password */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-[#131418] font-sans">
                  Master Password
                </label>
                <span className="text-[10px] text-[#8C8E98]">
                  {password ? (hasMinLength && hasUpperLower && hasNumber ? 'Strong' : 'Medium') : 'Empty'}
                </span>
              </div>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-[#8C8E98]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
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

              {/* Password Strength Badges */}
              <div className="flex gap-2 pt-1">
                <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-medium transition-all ${
                  hasMinLength ? 'bg-[#EBF5F0] text-[#1E6B4A]' : 'bg-[#EFECE6] text-[#8C8E98]'
                }`}>
                  {hasMinLength ? '✓' : '◯'} 8+ chars
                </span>
                <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-medium transition-all ${
                  hasUpperLower ? 'bg-[#EBF5F0] text-[#1E6B4A]' : 'bg-[#EFECE6] text-[#8C8E98]'
                }`}>
                  {hasUpperLower ? '✓' : '◯'} Upper &amp; lower
                </span>
                <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-medium transition-all ${
                  hasNumber ? 'bg-[#EBF5F0] text-[#1E6B4A]' : 'bg-[#EFECE6] text-[#8C8E98]'
                }`}>
                  {hasNumber ? '✓' : '◯'} Number
                </span>
              </div>
            </div>

            {/* Curated Circles Banner */}
            <div className="bg-[#F4F2EE] rounded-2xl p-4 flex items-center gap-3 border border-[#EAE7E1] my-4 shadow-sm">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-[#EAE7E1]">
                <Image
                  src="/images/auth_welcome_hero.jpg"
                  alt="Curated Circles Salon"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-xs font-bold text-[#131418]">
                  <span>Curated Circles</span>
                  <svg className="w-3.5 h-3.5 text-[#1E6B4A]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[11px] text-[#5C5E68] leading-tight font-sans">
                  Discreet supper salons &amp; global travel accommodations
                </p>
              </div>
            </div>

            {/* 18+ Affirmation Checkbox */}
            <label className="flex items-start gap-2.5 cursor-pointer pt-1 pb-2 text-xs text-[#5C5E68] font-sans leading-relaxed">
              <input
                type="checkbox"
                required
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-0.5 rounded border-[#C5A059] text-[#C5A059] focus:ring-[#C5A059] w-4 h-4 shrink-0"
              />
              <span>
                I confirm I am at least <strong className="text-[#131418]">18 years of age</strong> and solemnly agree to the{' '}
                <span className="underline cursor-pointer">Terms of Service</span> &amp;{' '}
                <span className="underline cursor-pointer">Privacy Covenant</span>.
              </span>
            </label>

            {/* Primary Submit Button */}
            <button
              type="submit"
              disabled={!agreeTerms}
              className={`btn w-full rounded-full border-none text-[#131418] font-bold text-sm h-12 shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.99] ${
                agreeTerms
                  ? 'bg-[#C5A059] hover:bg-[#B08D45] cursor-pointer'
                  : 'bg-[#E2DDD3] text-[#8C8E98] cursor-not-allowed opacity-80'
              }`}
            >
              Continue to Verification
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>

          {/* End-to-End Cryptographic Vault Box */}
          <div className="bg-[#F4F2EE] rounded-2xl p-4.5 border border-[#EAE7E1] flex items-start gap-3 mt-4 mb-2">
            <div className="w-9 h-9 rounded-full bg-[#EBF5F0] text-[#1E6B4A] flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="space-y-0.5">
              <h4 className="font-bold text-xs text-[#131418] font-sans">
                End-to-End Cryptographic Vault
              </h4>
              <p className="text-[11px] text-[#5C5E68] leading-relaxed font-sans">
                Legal identities and biometric markers are isolated in dedicated hardware security modules and never surfaced without mutual consent.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Link */}
        <div className="text-center text-xs text-[#5C5E68] font-sans pt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-[#A37B34] font-bold hover:underline">
            Sign in &rsaquo;
          </Link>
        </div>
      </MobileContainer>
    </div>
  );
}
