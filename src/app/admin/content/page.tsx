import React from 'react';
import { Container } from '@/components/layout';

export default function AdminContentPage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">Content Management System</h1>
        <p className="text-base-content/70">Manage public pages, safety disclosures, guidelines, and FAQs.</p>
      </Container>
    </div>
  );
}
