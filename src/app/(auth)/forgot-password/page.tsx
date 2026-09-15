import React from 'react';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <h2 className="text-xl font-bold mb-2">Forgot Password</h2>
        <p className="text-sm text-base-content/70 mb-4">Enter your email to receive password reset instructions.</p>
        <input type="email" placeholder="you@example.com" className="input input-bordered mb-4 w-full" />
        <button className="btn btn-primary w-full">Send Reset Link</button>
      </div>
    </div>
  );
}
