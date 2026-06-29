"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, User, Search } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"

export function DesktopNav() {
  const pathname = usePathname()
  const { totalItems } = useCart()

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/")

  const links = [
    { href: "/shop", label: "Shop" },
    { href: "/creators", label: "Creators" },
    { href: "/community", label: "Community" },
    { href: "/pricing", label: "Pricing" },
    { href: "/testimonials", label: "Testimonials" },
  ]

  return (
    <header className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border h-16 items-center">
      <div className="mx-auto max-w-7xl w-full px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <img src="/images/logos/logo-light.png" alt="Poetry In Motion" className="h-9 w-9 object-contain" />
          <span className="font-bold text-foreground leading-tight text-sm">
            Poetry In Motion<br />
            <span className="text-xs font-normal text-muted-foreground">Mali Safi.</span>
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-accent bg-accent/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Link href="/search" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
            <Search className="h-5 w-5" />
          </Link>

          <Link href="/cart" className="relative p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute top-0.5 right-0.5 h-4 w-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-bold">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </Link>

          <Link href="/account" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
            <User className="h-5 w-5" />
          </Link>

          <ThemeToggle />

          <div className="flex items-center gap-2 ml-2 pl-2 border-l border-border">
            <Link href="/auth/login">
              <Button variant="outline" size="sm" className="bg-transparent text-sm">Sign In</Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="sm" className="text-sm">Sign Up</Button>
            </Link>
          </div>
        </div>

      </div>
    </header>
  )
}
