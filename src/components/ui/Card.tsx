import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
  compact?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  bordered = true,
  compact = false,
}) => {
  return (
    <div
      className={`card bg-base-100 shadow-md transition-shadow hover:shadow-lg ${
        bordered ? 'card-bordered border-base-300' : ''
      } ${compact ? 'card-compact' : ''} ${className}`}
    >
      <div className="card-body">{children}</div>
    </div>
  );
};
