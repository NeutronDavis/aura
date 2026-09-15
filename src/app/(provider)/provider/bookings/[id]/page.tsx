import React from 'react';
import { Container } from '@/components/layout';

export default async function ProviderBookingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">Booking Request Detail</h1>
        <p className="text-base-content/70">Request ID: {id}</p>
      </Container>
    </div>
  );
}
