import React from 'react';
import { Container } from '@/components/layout';

export default function ProviderProfilePage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">Public Companion Profile Editor</h1>
        <p className="text-base-content/70">Update photos, bio, rates, and offered experiences.</p>
      </Container>
    </div>
  );
}
