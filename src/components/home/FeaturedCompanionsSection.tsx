'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { VerificationBadge } from '@/components/companions/VerificationBadge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface CompanionItem {
  id: string;
  name: string;
  currency: string;
  tagline: string;
  image: string;
  gender: 'female' | 'male';
  tags: string[];
  rating: number;
  isVerified: boolean;
}

const featuredCompanions: CompanionItem[] = [
  {
    id: 'camilla-m',
    name: 'Camilla M.',
    currency: '$',
    tagline: 'Philosophy graduate and art enthusiast. Fluent in French & English, lover of fine wine.',
    image: '/images/companion_1.jpg',
    gender: 'female',
    tags: ['Dinner Dates', 'Art Galas'],
    rating: 4.9,
    isVerified: true,
  },
  {
    id: 'marcus-t',
    name: 'Marcus T.',
    currency: '$',
    tagline: 'Tech founder and jazz pianist. Charming companion for gala dinners, wine tastings & concerts.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    gender: 'male',
    tags: ['Supper Clubs', 'Jazz Galas'],
    rating: 4.95,
    isVerified: true,
  },
  {
    id: 'elena-v',
    name: 'Elena V.',
    currency: '$',
    tagline: 'Architect and wine enthusiast. Great conversation partner for high-end dinners & social events.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    gender: 'female',
    tags: ['Fine Dining', 'City Tours'],
    rating: 5.0,
    isVerified: true,
  },
  {
    id: 'arthur-k',
    name: 'Arthur K.',
    currency: '$',
    tagline: 'Executive sommelier & literature scholar. Polished escort for black-tie galas & charity auctions.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    gender: 'male',
    tags: ['Black-Tie Events', 'Wine Tastings'],
    rating: 4.98,
    isVerified: true,
  },
  {
    id: 'teniola-b',
    name: 'Teniola B.',
    currency: '$',
    tagline: 'Finance analyst and classical pianist. Available for evening dinners in Mayfair or Victoria Island.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    gender: 'female',
    tags: ['Event Partner', 'Supper Clubs'],
    rating: 4.95,
    isVerified: true,
  },
  {
    id: 'david-o',
    name: 'David O.',
    currency: '$',
    tagline: 'Contemporary architect & art collector. Cultured plus-one for gallery openings & theatre nights.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
    gender: 'male',
    tags: ['Art Openings', 'Theatre Dates'],
    rating: 4.92,
    isVerified: true,
  },
  {
    id: 'julianna-r',
    name: 'Julianna R.',
    currency: '$',
    tagline: 'Pianist and editor. Polished companion for charity benefits, Lincoln Center concerts, & galas.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    gender: 'female',
    tags: ['Opera & Galas', 'Dinner Dates'],
    rating: 4.88,
    isVerified: true,
  },
  {
    id: 'sebastian-l',
    name: 'Sebastian L.',
    currency: '$',
    tagline: 'Political analyst and chess master. Eloquent companion for diplomatic dinners & rooftop cocktails.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    gender: 'male',
    tags: ['Diplomatic Galas', 'Rooftop Lounges'],
    rating: 4.91,
    isVerified: true,
  },
];

export const FeaturedCompanionsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterTabs = [
    { label: 'All', value: 'All' },
    { label: 'Women Companions', value: 'female' },
    { label: 'Men Companions', value: 'male' },
    { label: 'Top Rated', value: 'top' },
  ];

  const filteredList = featuredCompanions.filter((companion) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'female') return companion.gender === 'female';
    if (activeFilter === 'male') return companion.gender === 'male';
    if (activeFilter === 'top') return companion.rating >= 4.93;
    return true;
  });

  return (
    <section id="companions" className="py-20 bg-base-100 border-t border-base-200 scroll-mt-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2 max-w-xl">
             
              <h2 className="text-3xl sm:text-5xl font-normal font-serif-display tracking-tight text-base-content">
                Featured Companions Near You
              </h2>
              <p className="text-base-content/70 text-sm sm:text-base font-sans">
                Verified local hosts ready for dining, social galas, and great conversation.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`btn btn-sm rounded-full text-xs font-medium border-none transition-all ${
                    activeFilter === tab.value
                      ? 'bg-[#C5A059] text-black hover:bg-[#B08D45]'
                      : 'bg-[#F4F3F8] text-[#131418] hover:bg-[#E9E7ED]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Companions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredList.slice(0, activeFilter === 'All' ? 4 : 8).map((companion, index) => (
            <ScrollReveal key={companion.id} animation="fade-up" delay={index * 120}>
              <div
                className="card bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full"
              >
                {/* Image Container with 3:4 aspect ratio */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-base-200">
                  <Image
                    src={companion.image}
                    alt={companion.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  {/* Verification Badge Overlay */}
                  <div className="absolute top-3 left-3 z-10">
                    <VerificationBadge status={companion.isVerified ? 'VERIFIED' : 'UNVERIFIED'} />
                  </div>
                </div>

                {/* Card Details */}
                <div className="card-body p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-lg text-[#131418]">{companion.name}</h3>
                     
                    </div>
                    <p className="text-xs text-[#5C5E68] line-clamp-2 leading-relaxed">
                      {companion.tagline}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {companion.tags.map((tag) => (
                      <span
                        key={tag}
                        className="badge bg-[#FAF5EB] text-[#4E4639] border border-[#EAE7E1] text-[10px] font-medium px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
