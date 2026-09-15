export interface Review {
  id: string;
  bookingId: string;
  authorId: string;
  targetId: string;
  rating: number;
  comment: string;
  isVerifiedBooking: boolean;
  createdAt: string;
}
