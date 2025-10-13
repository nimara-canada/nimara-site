import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 min-h-[44px] min-w-[44px]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-[#7A5DE0] rounded-xl shadow-soft",
        secondary: "bg-background text-foreground border border-border hover:bg-muted rounded-xl shadow-soft",
        outline: "border border-border bg-background text-foreground hover:bg-muted rounded-xl",
        ghost: "text-foreground hover:bg-muted rounded-lg",
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
