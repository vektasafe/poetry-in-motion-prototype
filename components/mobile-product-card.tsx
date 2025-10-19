"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingBag } from "lucide-react"
import { useState } from "react"

interface MobileProductCardProps {
  id: string
  name: string
  price: number
  image: string
  rating: number
  reviews: number
  isFavorite?: boolean
  onFavoriteToggle?: () => void
}

export function MobileProductCard({
  id,
  name,
  price,
  image,
  rating,
  reviews,
  isFavorite = false,
  onFavoriteToggle,
}: MobileProductCardProps) {
  const [isAdded, setIsAdded] = useState(false)

  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all">
      {/* Image Container */}
      <Link href={`/shop/${id}`} className="relative block aspect-square overflow-hidden bg-secondary">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            onFavoriteToggle?.()
          }}
          className="absolute top-2 right-2 p-2 rounded-full bg-background/80 backdrop-blur hover:bg-background transition-colors"
        >
          <Heart className={`w-5 h-5 ${isFavorite ? "fill-accent text-accent" : "text-muted-foreground"}`} />
        </button>
      </Link>

      {/* Content */}
      <div className="p-3 space-y-2">
        <Link href={`/shop/${id}`} className="block">
          <h3 className="font-semibold text-sm line-clamp-2 hover:text-accent transition-colors">{name}</h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 text-xs">
          <div className="flex text-accent">
            {[...Array(5)].map((_, i) => (
              <span key={i}>{i < Math.floor(rating) ? "★" : "☆"}</span>
            ))}
          </div>
          <span className="text-muted-foreground">({reviews})</span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="font-bold text-accent">${price}</span>
          <button
            onClick={() => setIsAdded(!isAdded)}
            className={`p-2 rounded-lg transition-all ${
              isAdded ? "bg-accent text-accent-foreground" : "bg-secondary hover:bg-accent/10 text-foreground"
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
