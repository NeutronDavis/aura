import React from 'react';
import { Navbar, Footer, Container } from '@/components/layout';

export default function DiscoverPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 py-12">
        <Container>
          <h1 className="text-3xl font-bold mb-4">Discover Experiences & Companions</h1>
          <p className="text-base-content/70">Browse verified companion profiles and curated experiences.</p>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
