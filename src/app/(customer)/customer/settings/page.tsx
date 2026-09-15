import React from 'react';
import { Container } from '@/components/layout';

export default function CustomerSettingsPage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">Account Settings</h1>
        <p className="text-base-content/70">Preferences, notification settings, and privacy controls.</p>
      </Container>
    </div>
  );
}
