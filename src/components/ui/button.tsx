import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 min-h-[44px] min-w-[44px]",
  {
    variants: {
      variant: {
        // Primary - Mint background (default CTAs)
        default: "bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/30 rounded-full",
        // High-intent - Purple background (Book a call, Pay, Upgrade)
        "high-intent": "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/40 rounded-full",
        // Secondary - Transparent with border
        secondary: "bg-transparent text-foreground/80 border border-white/10 hover:border-white/20 hover:text-foreground rounded-full",
        // Outline - Subtle outline style
        outline: "border border-white/10 bg-transparent text-foreground hover:bg-white/5 rounded-xl",
        // Ghost - No background
        ghost: "text-foreground/70 hover:text-foreground hover:bg-white/5 rounded-lg",
        // Link - Text only
        link: "text-foreground underline-offset-4 hover:underline focus-visible:underline p-0 h-auto min-h-0",
      },
      size: {
        default: "h-11 px-6 py-3 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
