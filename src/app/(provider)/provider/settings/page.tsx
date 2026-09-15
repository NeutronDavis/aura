import React from 'react';
import { Container } from '@/components/layout';

export default function ProviderSettingsPage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">Provider Settings</h1>
        <p className="text-base-content/70">Account credentials, notification rules, and privacy controls.</p>
      </Container>
    </div>
  );
}
