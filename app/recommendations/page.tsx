"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Heart, ShoppingBag, Sparkles, Star } from "lucide-react"
import Link from "next/link"

interface Product {
  id: string
  name: string
  price: number
  image: string
  rating: number
  reviews: number
  match: number
  category: string
}

// Mock product data
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Oversized Blazer",
    price: 65,
    image: "/oversized-blazer.png",
    rating: 4.8,
    reviews: 124,
    match: 98,
    category: "Tops",
  },
  {
    id: "2",
    name: "Vintage Denim",
    price: 55,
    image: "/vintage-denim-jeans.jpg",
    rating: 4.9,
    reviews: 89,
    match: 95,
    category: "Bottoms",
  },
  {
    id: "3",
    name: "Minimalist Tee",
    price: 28,
    image: "/minimalist-white-tee.jpg",
    rating: 4.7,
    reviews: 156,
    match: 92,
    category: "Tops",
  },
  {
    id: "4",
    name: "Statement Jacket",
    price: 85,
    image: "/statement-jacket.jpg",
    rating: 4.9,
    reviews: 67,
    match: 94,
    category: "Outerwear",
  },
  {
    id: "5",
    name: "Tailored Trousers",
    price: 72,
    image: "/tailored-trousers.jpg",
    rating: 4.8,
    reviews: 98,
    match: 91,
    category: "Bottoms",
  },
  {
    id: "6",
    name: "Silk Camisole",
    price: 45,
    image: "/silk-camisole.jpg",
    rating: 4.6,
    reviews: 112,
    match: 89,
    category: "Tops",
  },
]

export default function RecommendationsPage() {
  const [preferences, setPreferences] = useState<any>(null)
  const [favorites, setFavorites] = useState<string[]>([])

  useEffect(() => {
    const saved = localStorage.getItem("userPreferences")
    if (saved) {
      setPreferences(JSON.parse(saved))
    }
  }, [])

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-accent-foreground" />
            </div>
            <span className="font-bold text-foreground">Your Recommendations</span>
          </div>
          <p className="text-muted-foreground">Based on your style preferences, here are pieces we think you'll love</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Summary */}
        <div className="mb-12 p-6 rounded-xl border border-border bg-card">
          <h2 className="text-lg font-semibold text-foreground mb-4">Your Style Profile</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Preferred Styles</p>
              <p className="font-medium text-foreground">{preferences?.style?.join(", ") || "Loading..."}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Budget Range</p>
              <p className="font-medium text-foreground">{preferences?.budget || "Loading..."}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Favorite Colors</p>
              <p className="font-medium text-foreground">{preferences?.colors?.join(", ") || "Loading..."}</p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">Curated for You</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition group">
                {/* Image */}
                <div className="relative overflow-hidden bg-muted h-64">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  {/* Match Badge */}
                  <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {product.match}% Match
                  </div>
                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-3 left-3 p-2 rounded-full bg-background/80 hover:bg-background transition"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        favorites.includes(product.id) ? "fill-destructive text-destructive" : "text-muted-foreground"
                      }`}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                    <h3 className="font-semibold text-foreground">{product.name}</h3>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-lg font-bold text-foreground">${product.price}</span>
                    <Button size="sm" className="gap-2">
                      <ShoppingBag className="h-4 w-4" />
                      Add
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-xl border border-border bg-gradient-to-br from-accent/10 to-accent/5 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Love these recommendations?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Create an account to save your favorites, get personalized updates, and unlock exclusive member benefits.
          </p>
          <Button size="lg" className="gap-2">
            Create Account
            <Sparkles className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  )
}
