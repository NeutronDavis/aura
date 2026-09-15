import React from 'react';
import { Badge } from '@/components/ui';
import { VerificationStatus } from '@/types/companion';

export interface VerificationBadgeProps {
  status: VerificationStatus;
}

export const VerificationBadge: React.FC<VerificationBadgeProps> = ({ status }) => {
  if (status === 'VERIFIED') {
    return (
      <Badge variant="success" size="sm" className="gap-1">
        ✓ ID Verified
      </Badge>
    );
  }

  if (status === 'PENDING') {
    return (
      <Badge variant="warning" size="sm">
        Pending Verification
      </Badge>
    );
  }

  return (
    <Badge variant="ghost" size="sm">
      Unverified
    </Badge>
  );
};
