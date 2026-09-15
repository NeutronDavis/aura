import React from 'react';
import { Container } from '@/components/layout';

export default function AdminDashboardPage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard Overview</h1>
        <p className="text-base-content/70">Platform key metrics, verification queues, and dispute alerts.</p>
      </Container>
    </div>
  );
}
