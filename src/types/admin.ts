export interface AuditLog {
  id: string;
  adminId: string;
  action: string;
  targetType: string;
  targetId: string;
  metadata?: Record<string, unknown>;
  ipAddress?: string;
  createdAt: string;
}

export interface ModerationQueueItem {
  id: string;
  entityType: 'COMPANION_PROFILE' | 'USER_REVIEW' | 'INCIDENT_REPORT';
  entityId: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  submittedAt: string;
}
