import React from 'react';
import { Container } from '@/components/layout';

export default function AdminDisputesPage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">Dispute Resolution</h1>
        <p className="text-base-content/70">Investigate booking disputes, issue refunds, or resolve claims.</p>
      </Container>
    </div>
  );
}
