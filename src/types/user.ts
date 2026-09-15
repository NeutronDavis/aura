export type UserRole = 'CUSTOMER' | 'COMPANION' | 'ADMIN';

export type UserStatus = 'PENDING' | 'ACTIVE' | 'SUSPENDED' | 'DEACTIVATED';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  isAgeVerified: boolean;
  isIdentityVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  displayName: string;
  avatarUrl?: string;
  phoneNumber?: string;
  bio?: string;
  location?: string;
  city?: string;
  country?: string;
}
