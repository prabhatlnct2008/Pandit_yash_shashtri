import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-saffron text-white hover:bg-saffron-dark shadow-md hover:shadow-lg",
      secondary: "bg-accent text-white hover:bg-accent-light shadow-md hover:shadow-lg",
      outline:
        "border-2 border-saffron text-saffron hover:bg-saffron hover:text-white",
      ghost: "text-charcoal hover:bg-muted/50",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2";

    const variants = {
      primary: "bg-saffron text-white hover:bg-saffron-dark shadow-md hover:shadow-lg",
      secondary: "bg-accent text-white hover:bg-accent-light shadow-md hover:shadow-lg",
      outline:
        "border-2 border-saffron text-saffron hover:bg-saffron hover:text-white",
      ghost: "text-charcoal hover:bg-muted/50",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <a
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </a>
    );
  }
);

LinkButton.displayName = "LinkButton";
