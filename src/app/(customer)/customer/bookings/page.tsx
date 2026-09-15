import React from 'react';
import { Container } from '@/components/layout';

export default function CustomerBookingsPage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">My Bookings</h1>
        <p className="text-base-content/70">View upcoming, past, and pending booking requests.</p>
      </Container>
    </div>
  );
}
