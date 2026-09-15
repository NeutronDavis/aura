import React from 'react';
import { Container } from '@/components/layout';

export default function AdminPaymentsPage() {
  return (
    <div className="py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-2">Payment & Payout Management</h1>
        <p className="text-base-content/70">Audit Paystack payment transactions, refunds, and provider payouts.</p>
      </Container>
    </div>
  );
}
