import React from 'react';
import { Container } from '@/components/layout';

export default function CustomerDashboardPage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">Customer Dashboard</h1>
        <p className="text-base-content/70">Manage your active bookings, messages, and saved companions.</p>
      </Container>
    </div>
  );
}
