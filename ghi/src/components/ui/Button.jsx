import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-[15px] leading-normal transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[rgb(30,35,48)] hover:bg-[rgb(48,53,65)] text-primary-foreground shadow ",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-[rgb(239,240,236)] hover:bg-[rgba(0,0,0,0.086)] shadow-sm",
        ghost: "hover:bg-[#EFF0EC] text-[#676B5F]",
        link: "text-primary underline-offset-4 hover:underline",
        white: "bg-white hover:bg-[rgb(246,247,245)] shadow-sm",
      },
      size: {
        default: "h-[44.5px] px-4 py-[11px] ",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "pt-[18px] px-[26px] pb-5 text-base leading-normal",
        icon: "h-16 w-16 rounded-full",
        rounded:
          "pt-[18px] px-[26px] pb-5 rounded-full text-base leading-normal",
        "rounded-small": "px-4 py-0 h-12 rounded-full text-base leading-normal",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
