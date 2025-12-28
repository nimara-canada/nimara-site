import { ReactNode } from 'react';

interface ScrollSnapWrapperProps {
  children: ReactNode;
}

// Simplified wrapper - removed aggressive scroll-snap behavior
// that could feel buggy and fight user control
export const ScrollSnapWrapper = ({ children }: ScrollSnapWrapperProps) => {
  return (
    <div className="scroll-smooth">
      {children}
    </div>
  );
};

// Simple section marker for navigation
interface ScrollSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const ScrollSection = ({ children, id, className = '' }: ScrollSectionProps) => {
  return (
    <div 
      data-scroll-section
      id={id}
      className={className}
    >
      {children}
    </div>
  );
};

export default ScrollSnapWrapper;
