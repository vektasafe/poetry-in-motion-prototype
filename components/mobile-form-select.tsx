"use client"

import type React from "react"

import { forwardRef } from "react"
import { ChevronDown } from "lucide-react"

interface MobileFormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: Array<{ value: string; label: string }>
}

export const MobileFormSelect = forwardRef<HTMLSelectElement, MobileFormSelectProps>(
  ({ label, error, options, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="block text-sm font-medium mb-2 text-foreground">{label}</label>}
        <div className="relative">
          <select
            ref={ref}
            className={`w-full px-4 py-3 text-base border border-input rounded-lg bg-background text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all ${
              error ? "border-destructive" : ""
            } ${className}`}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none text-muted-foreground" />
        </div>
        {error && <p className="text-sm text-destructive mt-1">{error}</p>}
      </div>
    )
  },
)

MobileFormSelect.displayName = "MobileFormSelect"
