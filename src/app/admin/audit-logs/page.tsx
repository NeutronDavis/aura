import React from 'react';
import { Container } from '@/components/layout';

export default function AdminAuditLogsPage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">Admin Audit Logs</h1>
        <p className="text-base-content/70">Security log trail of all administrative actions and system events.</p>
      </Container>
    </div>
  );
}
