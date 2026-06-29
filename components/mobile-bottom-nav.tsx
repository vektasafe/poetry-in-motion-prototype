"use client"

import Link from "next/link"
import { Home, Search, ShoppingCart, User, Shirt } from "lucide-react"
import { usePathname } from "next/navigation"
import { useCart } from "@/lib/cart-context"

export function MobileBottomNav() {
  const pathname = usePathname()
  const { totalItems } = useCart()

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/")

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border md:hidden">
      <div className="flex items-center justify-around h-16">
        <Link
          href="/"
          className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
            isActive("/") && pathname === "/" ? "text-accent" : "text-muted-foreground hover:text-foreground"
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
          <Shirt className="w-5 h-5" />
          <span className="text-xs">Shop</span>
        </Link>

        <Link
          href="/search"
          className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
            isActive("/search") ? "text-accent" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Search className="w-5 h-5" />
          <span className="text-xs">Search</span>
        </Link>

        <Link
          href="/cart"
          className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors relative ${
            isActive("/cart") ? "text-accent" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <div className="relative">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 h-4 w-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-bold">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </div>
          <span className="text-xs">Cart</span>
        </Link>

        <Link
          href="/account"
          className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
            isActive("/account") ? "text-accent" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-xs">Account</span>
        </Link>
      </div>
    </nav>
  )
}
