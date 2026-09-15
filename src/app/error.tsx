'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring service if needed
    console.error('Unhandled app error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 p-6 text-center">
      <div className="max-w-md bg-base-200 border border-base-300 p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
        <p className="text-sm text-base-content/70 mb-6">
          An error occurred while processing your request. Please try again.
        </p>
        <div className="flex gap-4 justify-center">
          <button onClick={reset} className="btn btn-primary rounded-xl">
            Try Again
          </button>
          <Link href="/" className="btn btn-ghost rounded-xl">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
