import React from 'react';
import { Navbar, Footer, Container } from '@/components/layout';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 py-12">
        <Container>
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-base-content/70">Our strict privacy commitments, data encryption, and discretion policies.</p>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
