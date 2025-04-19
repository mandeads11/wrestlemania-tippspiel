// src/components/ui/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      {...props}
    >
      {children}
    </button>
  );
};
