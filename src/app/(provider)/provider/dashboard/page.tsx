import React from 'react';
import { Container } from '@/components/layout';

export default function ProviderDashboardPage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">Companion / Provider Dashboard</h1>
        <p className="text-base-content/70">Manage incoming booking requests, earnings, and availability.</p>
      </Container>
    </div>
  );
}
