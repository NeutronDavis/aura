import React from 'react';
import { Container } from '@/components/layout';

export default function CustomerProfilePage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">Customer Profile</h1>
        <p className="text-base-content/70">Personal details and verification status.</p>
      </Container>
    </div>
  );
}
