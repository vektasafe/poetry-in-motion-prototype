"use client"

import type React from "react"

import { forwardRef } from "react"

interface MobileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  isLoading?: boolean
  fullWidth?: boolean
}

export const MobileButton = forwardRef<HTMLButtonElement, MobileButtonProps>(
  ({ variant = "primary", size = "md", isLoading, fullWidth, className, children, ...props }, ref) => {
    const baseStyles =
      "font-medium rounded-lg transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"

    const variantStyles = {
      primary: "bg-accent text-accent-foreground hover:bg-accent/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline: "border border-input text-foreground hover:bg-secondary",
    }

    const sizeStyles = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-3 text-base",
      lg: "px-6 py-4 text-lg",
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? "w-full" : ""} ${className}`}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
            Loading...
          </span>
        ) : (
          children
        )}
      </button>
    )
  },
)

MobileButton.displayName = "MobileButton"
