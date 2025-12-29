import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section
      id={id}
      className={`snap-start h-screen w-full flex items-center justify-center px-8 md:px-16 relative overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
};
