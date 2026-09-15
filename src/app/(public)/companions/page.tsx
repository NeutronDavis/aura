import React from 'react';
import { Navbar, Footer, Container } from '@/components/layout';

export default function CompanionsPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 py-12">
        <Container>
          <h1 className="text-3xl font-bold mb-4">Public Companion Directory</h1>
          <p className="text-base-content/70">Verified companion listings with full security disclosures.</p>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
