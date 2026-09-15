import React from 'react';
import { Container } from '@/components/layout';

export default function AdminReportsPage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">Safety & Incident Reports</h1>
        <p className="text-base-content/70">Review safety incident reports submitted by clients or companions.</p>
      </Container>
    </div>
  );
}
