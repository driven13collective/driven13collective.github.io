import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: { text: 'text-2xl', line: 'w-12' },
    md: { text: 'text-4xl', line: 'w-16' },
    lg: { text: 'text-6xl', line: 'w-24' }
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span className={`${sizes[size].text} font-black tracking-tighter leading-none`}>13</span>
      <div className={`${sizes[size].line} h-[2px] bg-current mt-1`}></div>
    </div>
  );
};
