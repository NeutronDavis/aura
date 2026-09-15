import { IncidentReport } from '@/types/safety';

export async function fileDispute(data: Partial<IncidentReport>): Promise<IncidentReport | null> {
  if (!data) return null;
  return null;
}
