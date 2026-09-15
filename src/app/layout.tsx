import type { Metadata, Viewport } from 'next';
import { Newsreader, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { AgeGateModal } from '@/components/forms/AgeGateModal';
import { PWAInstallPrompt } from '@/components/ui/PWAInstallPrompt';

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#FAF9F6',
};

export const metadata: Metadata = {
  title: {
    default: 'AURA | Quiet Concierge & Verified Companionship',
    template: '%s | AURA Marketplace',
  },
  description:
    'AURA is an exclusive, verified adult companionship marketplace delivering quiet luxury, discretion, and institutional-grade safety.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'AURA',
  },
  openGraph: {
    title: 'AURA | Quiet Concierge & Verified Companionship',
    description: 'An exclusive, verified adult companionship marketplace.',
    url: '/',
    siteName: 'AURA',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/icons/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="aura"
      className={`${newsreader.variable} ${plusJakartaSans.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-base-100 text-base-content antialiased flex flex-col font-sans"
        suppressHydrationWarning
      >
        <AgeGateModal />
        <PWAInstallPrompt />
        {children}
      </body>
    </html>
  );
}
