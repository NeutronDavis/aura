import { Companion } from '@/types/companion';

export async function getFeaturedCompanions(): Promise<Companion[]> {
  return [];
}

export async function getCompanionById(id: string): Promise<Companion | null> {
  if (!id) return null;
  return null;
}
