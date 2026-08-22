import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", icon, children, ...props }, ref) => {
    
    const baseStyles = "relative inline-flex items-center justify-center font-mono font-medium transition-all duration-300 overflow-hidden";
    
    const variants = {
      primary: "bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan hover:bg-cyber-cyan/20 hover:shadow-[0_0_15px_rgba(0,245,255,0.4)]",
      secondary: "bg-cyber-purple/10 text-cyber-purple border border-cyber-purple hover:bg-cyber-purple/20 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]",
      outline: "bg-transparent text-white border border-white/20 hover:border-white/50 hover:bg-white/5",
      ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
    };
    
    const sizes = {
      sm: "text-xs px-3 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-8 py-3.5 gap-3"
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {icon && <span className="flex items-center justify-center">{icon}</span>}
        </span>
        {/* Subtle corner decorations for primary/secondary */}
        {(variant === "primary" || variant === "secondary") && (
          <>
            <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-current opacity-50" />
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-current opacity-50" />
          </>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
