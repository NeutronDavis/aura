import type { Metadata } from 'next';
import { Newsreader, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { AgeGateModal } from '@/components/forms/AgeGateModal';

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'AURA | Quiet Concierge & Verified Companionship',
    template: '%s | AURA Marketplace',
  },
  description:
    'AURA is an exclusive, verified adult companionship marketplace delivering quiet luxury, discretion, and institutional-grade safety.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
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
        {children}
      </body>
    </html>
  );
}
