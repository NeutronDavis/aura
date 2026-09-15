import React from 'react';
import { Container } from '@/components/layout';

export default function AdminVerificationPage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">Companion Identity Verification Queue</h1>
        <p className="text-base-content/70">Review government IDs, selfie checks, and background verification requests.</p>
      </Container>
    </div>
  );
}
