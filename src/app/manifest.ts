import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AURA | Quiet Concierge & Verified Companionship',
    short_name: 'AURA',
    description:
      'Exclusive, verified adult companionship marketplace delivering quiet luxury, discretion, and institutional-grade safety.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF9F6',
    theme_color: '#FAF9F6',
    orientation: 'portrait',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
