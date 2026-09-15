import React from 'react';
import { LoadingSpinner } from '@/components/ui';

export default function GlobalLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="flex flex-col items-center gap-4">
        <LoadingSpinner size="lg" />
        <p className="text-sm text-base-content/70 font-medium tracking-wide">Loading AURA...</p>
      </div>
    </div>
  );
}
