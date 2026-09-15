import React from 'react';

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <h2 className="text-xl font-bold mb-2">Reset Password</h2>
        <p className="text-sm text-base-content/70 mb-4">Set your new account password below.</p>
        <input type="password" placeholder="New Password" className="input input-bordered mb-4 w-full" />
        <button className="btn btn-primary w-full">Update Password</button>
      </div>
    </div>
  );
}
