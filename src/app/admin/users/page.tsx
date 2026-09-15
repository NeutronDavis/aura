import React from 'react';
import { Container } from '@/components/layout';

export default function AdminUsersPage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">User Management</h1>
        <p className="text-base-content/70">Manage client and companion accounts, roles, and suspensions.</p>
      </Container>
    </div>
  );
}
