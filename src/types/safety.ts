export type ReportReason =
  | 'INAPPROPRIATE_BEHAVIOR'
  | 'IDENTITY_MISREPRESENTATION'
  | 'SAFETY_CONCERN'
  | 'SPAM_OR_FRAUD'
  | 'TERMS_VIOLATION'
  | 'OTHER';

export type ReportStatus = 'OPEN' | 'UNDER_REVIEW' | 'RESOLVED' | 'DISMISSED';

export interface IncidentReport {
  id: string;
  reporterId: string;
  reportedUserId: string;
  bookingId?: string;
  reason: ReportReason;
  description: string;
  status: ReportStatus;
  createdAt: string;
  resolvedAt?: string;
}
