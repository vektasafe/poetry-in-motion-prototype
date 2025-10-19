"use client"

import type React from "react"

import { forwardRef } from "react"

interface MobileFormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export const MobileFormInput = forwardRef<HTMLInputElement, MobileFormInputProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="block text-sm font-medium mb-2 text-foreground">{label}</label>}
        <input
          ref={ref}
          className={`w-full px-4 py-3 text-base border border-input rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all ${
            error ? "border-destructive" : ""
          } ${className}`}
          {...props}
        />
        {error && <p className="text-sm text-destructive mt-1">{error}</p>}
        {helperText && !error && <p className="text-sm text-muted-foreground mt-1">{helperText}</p>}
      </div>
    )
  },
)

MobileFormInput.displayName = "MobileFormInput"
