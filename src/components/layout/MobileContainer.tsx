import React from 'react';

export interface MobileContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Container wrapper for Mobile-Only app areas (Auth, Customer, Provider).
 * On mobile devices, takes full screen width.
 * On desktop devices, centers as a sleek mobile frame (max-w-md) with subtle borders and elevation.
 */
export const MobileContainer: React.FC<MobileContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full min-h-screen bg-base-100 sm:max-w-md sm:mx-auto sm:border-x sm:border-base-300 sm:shadow-xl relative flex flex-col ${className}`}>
      {children}
    </div>
  );
};
