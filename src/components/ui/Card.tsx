// src/components/ui/Card.tsx
import React from 'react';

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-4">
      {children}
    </div>
  );
};

export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4">{children}</div>;
};
