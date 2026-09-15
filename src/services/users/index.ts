import { User } from '@/types/user';

export async function getUserById(id: string): Promise<User | null> {
  if (!id) return null;
  return null;
}
