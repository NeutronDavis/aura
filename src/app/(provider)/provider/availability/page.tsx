import React from 'react';
import { Container } from '@/components/layout';

export default function ProviderAvailabilityPage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">Availability Calendar</h1>
        <p className="text-base-content/70">Set your working hours, preferred locations, and blackout dates.</p>
      </Container>
    </div>
  );
}
