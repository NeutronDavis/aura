import React from 'react';
import { Container } from '@/components/layout';

export default function AdminBookingsPage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">Booking Management</h1>
        <p className="text-base-content/70">Monitor marketplace bookings, statuses, and schedule integrity.</p>
      </Container>
    </div>
  );
}
