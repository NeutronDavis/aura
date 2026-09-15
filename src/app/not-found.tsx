import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 p-6 text-center">
      <div className="max-w-md bg-base-200 border border-base-300 p-8 rounded-2xl shadow-xl">
        <h1 className="text-6xl font-bold text-primary mb-2 font-mono">404</h1>
        <h2 className="text-xl font-bold mb-2">Page Not Found</h2>
        <p className="text-sm text-base-content/70 mb-6">
          The requested page could not be found or may have moved.
        </p>
        <Link href="/" className="btn btn-primary rounded-xl">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
