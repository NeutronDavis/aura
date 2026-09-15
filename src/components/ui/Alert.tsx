import React from 'react';

export interface AlertProps {
  children: React.ReactNode;
  status?: 'info' | 'success' | 'warning' | 'error';
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({ children, status = 'info', className = '' }) => {
  const statusClass = {
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
    error: 'alert-error',
  }[status];

  return (
    <div role="alert" className={`alert ${statusClass} ${className}`}>
      <span>{children}</span>
    </div>
  );
};
