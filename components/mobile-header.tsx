"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, ShoppingBag, User } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Header - Fixed at top */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border md:hidden">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link href="/" className="font-bold text-lg text-accent">
            StyleAI
          </Link>

          {/* Center Search Icon */}
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <Search className="w-5 h-5" />
          </button>

          {/* Right Icons */}
          <div className="flex items-center gap-2">
            <Link href="/shop" className="p-2 hover:bg-secondary rounded-lg transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
            </Link>
            <Link href="/dashboard" className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-secondary rounded-lg transition-colors">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="border-t border-border bg-background">
            <div className="px-4 py-3 space-y-2">
              <Link href="/quiz" className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors">
                Take Style Quiz
              </Link>
              <Link href="/shop" className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors">
                Shop
              </Link>
              <Link href="/creators" className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors">
                Creators
              </Link>
              <Link href="/circular" className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors">
                Circular Fashion
              </Link>
              <Link href="/pricing" className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors">
                Pricing
              </Link>
              <Link
                href="/community/live-sessions"
                className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
              >
                Community
              </Link>
              <div className="pt-2 border-t border-border">
                <ThemeToggle />
              </div>
            </div>
          </nav>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 md:hidden"></div>
    </>
  )
}
