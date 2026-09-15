export * from './permissions';

export interface AuthSession {
  user: {
    id: string;
    email: string;
    role: 'CUSTOMER' | 'COMPANION' | 'ADMIN';
    isAgeVerified: boolean;
  } | null;
  isAuthenticated: boolean;
}

export async function getAuthSession(): Promise<AuthSession> {
  // Architecture placeholder for auth session resolution (e.g. NextAuth, Jose JWT, or custom cookie)
  return {
    user: null,
    isAuthenticated: false,
  };
}
