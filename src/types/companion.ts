export type VerificationStatus = 'UNVERIFIED' | 'PENDING' | 'VERIFIED' | 'REJECTED';

export interface Companion {
  id: string;
  userId: string;
  headline: string;
  bio: string;
  hourlyRate: number;
  currency: string;
  languages: string[];
  verificationStatus: VerificationStatus;
  isBackgroundChecked: boolean;
  isGovernmentIdVerified: boolean;
  ratingAverage: number;
  reviewCount: number;
  location: {
    city: string;
    state?: string;
    country: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  gallery: string[];
  avatarUrl: string;
  coverImageUrl?: string;
  specialties: string[];
  attributes: Record<string, string>;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
}
