export const siteConfig = {
  name: 'AURA',
  description: 'Verified Adult Companionship Marketplace',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://aura-companionship.com',
  ogImage: '/images/og.jpg',
  minAgeRequired: 18,
  supportEmail: 'support@aura-companionship.com',
  links: {
    safety: '/safety',
    terms: '/terms',
    privacy: '/privacy',
    faq: '/faq',
  },
};
