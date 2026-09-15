import React from 'react';
import { Navbar, Footer, Container } from '@/components/layout';

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 py-12">
        <Container>
          <h1 className="text-3xl font-bold mb-4">Location: {slug}</h1>
          <p className="text-base-content/70">Verified companion experiences in {slug}.</p>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
