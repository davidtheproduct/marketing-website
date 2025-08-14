import * as React from 'react';
import { cn } from 'utils/cn';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

function Separator({ className, orientation = 'horizontal', ...props }: SeparatorProps) {
  return (
    <div
      role="separator"
      className={cn(
        orientation === 'vertical' ? 'h-full w-px bg-gray-200' : 'w-full h-px bg-gray-200',
        className
      )}
      {...props}
    />
  );
}

export { Separator };
