export type BookingStatus =
  | 'PENDING'
  | 'ACCEPTED'
  | 'DECLINED'
  | 'CONFIRMED'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'CANCELLED'
  | 'DISPUTED';

export interface Booking {
  id: string;
  customerId: string;
  companionId: string;
  experienceId?: string;
  status: BookingStatus;
  scheduledAt: string;
  durationHours: number;
  totalAmount: number;
  currency: string;
  meetingLocation: string;
  specialRequests?: string;
  createdAt: string;
  updatedAt: string;
}
