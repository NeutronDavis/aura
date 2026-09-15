export type PaymentStatus = 'PENDING' | 'SUCCESSFUL' | 'FAILED' | 'REFUNDED';

export interface PaymentTransaction {
  id: string;
  bookingId: string;
  userId: string;
  amount: number;
  currency: string;
  provider: 'PAYSTACK';
  reference: string;
  status: PaymentStatus;
  createdAt: string;
}

export interface Payout {
  id: string;
  companionId: string;
  amount: number;
  currency: string;
  status: 'PENDING' | 'PROCESSING' | 'PAID' | 'FAILED';
  payoutDate: string;
}
