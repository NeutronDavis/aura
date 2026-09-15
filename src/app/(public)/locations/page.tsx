import React from 'react';
import { Navbar, Footer, Container } from '@/components/layout';

export default function LocationsPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 py-12">
        <Container>
          <h1 className="text-3xl font-bold mb-4">Locations</h1>
          <p className="text-base-content/70">Find companions available by city and region.</p>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
