import React from 'react';
import { Navbar, Footer, Container } from '@/components/layout';

export default function SafetyPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 py-12">
        <Container>
          <h1 className="text-3xl font-bold mb-4">Safety & Trust Center</h1>
          <p className="text-base-content/70">
            Our comprehensive 18+ age verification, background checks, identity confirmation, and privacy protections.
          </p>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
