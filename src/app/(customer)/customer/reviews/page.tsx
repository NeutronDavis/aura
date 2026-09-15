import React from 'react';
import { Container } from '@/components/layout';

export default function CustomerReviewsPage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">My Reviews</h1>
        <p className="text-base-content/70">Manage reviews left for completed experiences.</p>
      </Container>
    </div>
  );
}
