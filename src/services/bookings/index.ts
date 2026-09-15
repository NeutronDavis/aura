import { Booking } from '@/types/booking';

export async function createBookingRequest(data: Partial<Booking>): Promise<Booking | null> {
  if (!data) return null;
  return null;
}
