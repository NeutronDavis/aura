export interface Experience {
  id: string;
  companionId: string;
  title: string;
  description: string;
  category: string;
  durationMinutes: number;
  price: number;
  currency: string;
  locationType: 'IN_PERSON' | 'VIRTUAL' | 'PUBLIC_EVENT';
  imageUrl?: string;
  isActive: boolean;
}
