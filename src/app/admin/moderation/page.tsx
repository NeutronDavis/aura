import React from 'react';
import { Container } from '@/components/layout';

export default function AdminModerationPage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">Profile & Content Moderation</h1>
        <p className="text-base-content/70">Moderate photos, bios, reviews, and platform activity.</p>
      </Container>
    </div>
  );
}
