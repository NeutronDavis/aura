'use client';

import React, { useState, useEffect } from 'react';

export const PWAInstallPrompt: React.FC = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // 1. Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .catch((err) => console.error('Service worker registration failed:', err));
    }

    // 2. Check if already running in standalone (installed) mode
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;

    if (isStandalone) return; // Don't show prompt if already installed

    // 3. Check if iOS Safari
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // Check if dismissed previously
    const dismissed = sessionStorage.getItem('aura_pwa_dismissed');
    if (dismissed) return;

    if (isIosDevice) {
      // Show iOS instruction prompt after brief delay
      const timer = setTimeout(() => setShowPrompt(true), 3000);
      return () => clearTimeout(timer);
    }

    // 4. Android / Chrome beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowPrompt(false);
      }
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    sessionStorage.setItem('aura_pwa_dismissed', 'true');
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-[99] bg-[#18191E] border border-white/15 rounded-2xl p-4 text-white shadow-2xl transition-all animate-fade-up">
      <div className="flex items-start justify-between gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center shrink-0">
          <span className="font-bold text-base text-[#C5A059] font-serif-display">A</span>
        </div>

        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-xs text-white">Install AURA App</h4>
            <button
              onClick={handleDismiss}
              className="text-white/50 hover:text-white text-xs p-1"
              aria-label="Dismiss"
            >
              ✕
            </button>
          </div>
          <p className="text-[11px] text-white/70 leading-snug font-sans">
            {isIOS
              ? 'Tap the Share icon ⎕↑ in Safari, then select "Add to Home Screen ⊞" for instant access.'
              : 'Add AURA to your phone home screen for a seamless native app experience.'}
          </p>

          {!isIOS && deferredPrompt && (
            <button
              onClick={handleInstallClick}
              className="btn btn-xs rounded-full bg-[#C5A059] hover:bg-[#B08D45] border-none text-[#131418] font-bold text-[11px] px-3 mt-2"
            >
              Install Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
