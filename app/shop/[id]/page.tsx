"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, ShoppingBag, Sparkles, Star, Truck, RotateCcw, Shield } from "lucide-react"
import Link from "next/link"

interface ProductDetail {
  id: string
  name: string
  price: number
  image: string
  images: string[]
  rating: number
  reviews: number
  category: string
  colors: string[]
  sizes: string[]
  description: string
  aiInsight: string
  inStock: boolean
}

// Mock product details
const productDetails: Record<string, ProductDetail> = {
  "1": {
    id: "1",
    name: "Oversized Blazer",
    price: 65,
    image: "/oversized-blazer.png",
    images: ["/oversized-blazer.png"],
    rating: 4.8,
    reviews: 124,
    category: "Outerwear",
    colors: ["Black", "Navy", "Camel"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Elevate your wardrobe with this timeless oversized blazer. Perfect for layering or wearing solo, this piece transitions seamlessly from office to evening. The relaxed fit flatters all body types while maintaining a polished silhouette.",
    aiInsight:
      "Based on your style preferences, this blazer matches your minimalist aesthetic while adding dimension to your wardrobe. The neutral colors work with 87% of your preferred color palette.",
    inStock: true,
  },
  "2": {
    id: "2",
    name: "Vintage Denim",
    price: 55,
    image: "/vintage-denim-jeans.jpg",
    images: ["/vintage-denim-jeans.jpg"],
    rating: 4.9,
    reviews: 89,
    category: "Bottoms",
    colors: ["Light Blue", "Dark Blue", "Black"],
    sizes: ["24", "25", "26", "27", "28", "29", "30"],
    description:
      "Classic vintage-inspired denim that never goes out of style. Crafted from premium denim with a perfect fit, these jeans are designed to become your go-to everyday essential. The timeless wash works with any top in your closet.",
    aiInsight:
      "Perfect for your casual/everyday occasions. The classic silhouette complements your style preferences and works with 92% of your wardrobe.",
    inStock: true,
  },
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = productDetails[params.id] || productDetails["1"]
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>
        </div>
      </div>

      {/* Product Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl bg-muted h-96 lg:h-full min-h-96">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    className="relative overflow-hidden rounded-lg bg-muted h-20 border-2 border-transparent hover:border-accent transition"
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="text-3xl font-bold text-foreground">${product.price}</div>
            </div>

            {/* AI Insight */}
            <div className="p-4 rounded-lg border border-accent/30 bg-accent/5">
              <div className="flex gap-3">
                <Sparkles className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">AI Insight</p>
                  <p className="text-sm text-muted-foreground">{product.aiInsight}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold text-foreground mb-2">About This Item</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Color</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 transition ${
                      selectedColor === color
                        ? "border-accent bg-accent/10 text-foreground"
                        : "border-border text-muted-foreground hover:border-accent"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 rounded-lg border-2 transition font-medium ${
                      selectedSize === size
                        ? "border-accent bg-accent/10 text-foreground"
                        : "border-border text-muted-foreground hover:border-accent"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <Link href="#" className="text-sm text-accent hover:underline mt-2 inline-block">
                Size Guide
              </Link>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition"
                >
                  -
                </button>
                <span className="text-lg font-semibold text-foreground w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="flex-1 gap-2" onClick={handleAddToCart} disabled={!product.inStock}>
                <ShoppingBag className="h-5 w-5" />
                {isAdded ? "Added to Cart!" : "Add to Cart"}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-destructive text-destructive" : ""}`} />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              <div className="flex flex-col items-center gap-2 text-center">
                <Truck className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">Free Shipping</span>
                <span className="text-xs text-muted-foreground">On orders over $50</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <RotateCcw className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">Easy Returns</span>
                <span className="text-xs text-muted-foreground">30-day guarantee</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">Secure</span>
                <span className="text-xs text-muted-foreground">100% safe checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
