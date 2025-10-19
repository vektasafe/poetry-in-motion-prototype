"use client"

import Link from "next/link"
import { Home, Search, Heart, ShoppingBag, User } from "lucide-react"
import { usePathname } from "next/navigation"

export function MobileBottomNav() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/")

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border md:hidden">
      <div className="flex items-center justify-around h-16">
        <Link
          href="/"
          className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
            isActive("/") ? "text-accent" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          href="/shop"
          className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
            isActive("/shop") ? "text-accent" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Search className="w-5 h-5" />
          <span className="text-xs">Search</span>
        </Link>
        <Link
          href="/circular"
          className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
            isActive("/circular") ? "text-accent" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Heart className="w-5 h-5" />
          <span className="text-xs">Favorites</span>
        </Link>
        <Link
          href="/shop"
          className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors relative ${
            isActive("/shop") ? "text-accent" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <ShoppingBag className="w-5 h-5" />
          <span className="absolute top-1 right-2 w-2 h-2 bg-accent rounded-full"></span>
          <span className="text-xs">Cart</span>
        </Link>
        <Link
          href="/dashboard"
          className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
            isActive("/dashboard") ? "text-accent" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-xs">Account</span>
        </Link>
      </div>
    </nav>
  )
}
