import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl',
				outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
				ghost: 'text-gray-700 hover:bg-gray-100',
				secondary: 'bg-secondary-600 text-white hover:bg-secondary-700',
				white: 'bg-white text-primary-600 hover:bg-gray-100',
				link: 'text-primary-600 underline-offset-4 hover:underline'
			},
			size: {
				sm: 'h-9 px-3',
				md: 'h-10 px-4 py-2',
				lg: 'h-11 px-8'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'md'
		}
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => {
		return (
			<button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
		);
	}
);
Button.displayName = 'Button';

export { buttonVariants };
