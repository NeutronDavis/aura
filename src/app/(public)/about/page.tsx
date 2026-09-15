import React from 'react';
import { Navbar, Footer, Container } from '@/components/layout';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 py-12">
        <Container>
          <h1 className="text-3xl font-bold mb-4">About AURA</h1>
          <p className="text-base-content/70">Building the premier, verified adult companionship marketplace.</p>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
