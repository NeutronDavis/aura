import React from 'react';
import { Container } from '@/components/layout';

export default function AdminSettingsPage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">System & Platform Settings</h1>
        <p className="text-base-content/70">Global configuration, commission rates, and safety rules.</p>
      </Container>
    </div>
  );
}
