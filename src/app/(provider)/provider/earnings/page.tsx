import React from 'react';
import { Container } from '@/components/layout';

export default function ProviderEarningsPage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">Earnings Overview</h1>
        <p className="text-base-content/70">Track your completed bookings, revenue, and pending payouts.</p>
      </Container>
    </div>
  );
}
