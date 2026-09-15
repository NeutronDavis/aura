import React from 'react';
import { Container } from '@/components/layout';

export default function ProviderBookingsPage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">Booking Requests</h1>
        <p className="text-base-content/70">Review and accept incoming booking requests from clients.</p>
      </Container>
    </div>
  );
}
