import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-150 ease-[cubic-bezier(0.65,0,0.45,1)] focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 focus-visible:ring-4 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 min-h-[44px] min-w-[44px] select-none active:scale-[0.98] active:translate-y-px",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-[#7A5DE0] hover:scale-[1.02] rounded-xl shadow-soft hover:shadow-lg hover:shadow-primary/20",
        secondary: "bg-background text-foreground border border-border hover:bg-muted hover:scale-[1.01] rounded-xl shadow-soft",
        outline: "border border-border bg-background text-foreground hover:bg-muted hover:scale-[1.01] rounded-xl",
        ghost: "text-foreground hover:bg-muted rounded-lg",
        link: "text-foreground underline-offset-4 hover:underline focus-visible:underline p-0 h-auto min-h-0 active:scale-100 active:translate-y-0 active:opacity-70",
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
