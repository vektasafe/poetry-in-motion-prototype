"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Filter, Heart, Search, ShoppingBag, Sparkles, Star, X } from "lucide-react"
import Link from "next/link"

interface Product {
  id: string
  name: string
  price: number
  image: string
  rating: number
  reviews: number
  category: string
  colors: string[]
  sizes: string[]
  inStock: boolean
}

const products: Product[] = [
  {
    id: "1",
    name: "Oversized Blazer",
    price: 65,
    image: "/oversized-blazer.png",
    rating: 4.8,
    reviews: 124,
    category: "Outerwear",
    colors: ["Black", "Navy", "Camel"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "2",
    name: "Vintage Denim",
    price: 55,
    image: "/vintage-denim-jeans.jpg",
    rating: 4.9,
    reviews: 89,
    category: "Bottoms",
    colors: ["Light Blue", "Dark Blue", "Black"],
    sizes: ["24", "25", "26", "27", "28", "29", "30"],
    inStock: true,
  },
  {
    id: "3",
    name: "Minimalist Tee",
    price: 28,
    image: "/minimalist-white-tee.jpg",
    rating: 4.7,
    reviews: 156,
    category: "Tops",
    colors: ["White", "Black", "Gray", "Cream"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
  {
    id: "4",
    name: "Statement Jacket",
    price: 85,
    image: "/statement-jacket.jpg",
    rating: 4.9,
    reviews: 67,
    category: "Outerwear",
    colors: ["Red", "Black", "Burgundy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "5",
    name: "Tailored Trousers",
    price: 72,
    image: "/tailored-trousers.jpg",
    rating: 4.8,
    reviews: 98,
    category: "Bottoms",
    colors: ["Black", "Navy", "Gray", "Beige"],
    sizes: ["24", "25", "26", "27", "28", "29", "30"],
    inStock: true,
  },
  {
    id: "6",
    name: "Silk Camisole",
    price: 45,
    image: "/silk-camisole.jpg",
    rating: 4.6,
    reviews: 112,
    category: "Tops",
    colors: ["Champagne", "Black", "Blush", "Emerald"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
]

const categories = ["All", "Tops", "Bottoms", "Outerwear", "Accessories"]
const priceRanges = [
  { label: "Under $30", min: 0, max: 30 },
  { label: "$30-50", min: 30, max: 50 },
  { label: "$50-80", min: 50, max: 80 },
  { label: "$80+", min: 80, max: 999 },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPrice, setSelectedPrice] = useState<{ min: number; max: number } | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [favorites, setFavorites] = useState<string[]>([])

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesPrice = !selectedPrice || (product.price >= selectedPrice.min && product.price <= selectedPrice.max)
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesPrice && matchesSearch
  })

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="font-bold text-foreground">Shop</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 md:hidden bg-transparent"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div
            className={`lg:block ${
              showFilters ? "block" : "hidden"
            } space-y-6 pb-8 lg:pb-0 border-b lg:border-b-0 lg:border-r border-border pr-0 lg:pr-8`}
          >
            <div className="flex items-center justify-between lg:hidden mb-4">
              <h3 className="font-semibold text-foreground">Filters</h3>
              <button onClick={() => setShowFilters(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition ${
                      selectedCategory === category
                        ? "bg-accent text-accent-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Price</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedPrice(selectedPrice?.min === range.min ? null : range)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition ${
                      selectedPrice?.min === range.min
                        ? "bg-accent text-accent-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(selectedCategory !== "All" || selectedPrice) && (
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => {
                  setSelectedCategory("All")
                  setSelectedPrice(null)
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">
                {selectedCategory === "All" ? "All Products" : selectedCategory}
              </h2>
              <p className="text-sm text-muted-foreground">{filteredProducts.length} items</p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} href={`/shop/${product.id}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition group h-full flex flex-col cursor-pointer">
                      {/* Image */}
                      <div className="relative overflow-hidden bg-muted h-64">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="text-white font-semibold">Out of Stock</span>
                          </div>
                        )}
                        {/* Favorite Button */}
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            toggleFavorite(product.id)
                          }}
                          className="absolute top-3 right-3 p-2 rounded-full bg-background/80 hover:bg-background transition"
                        >
                          <Heart
                            className={`h-5 w-5 ${
                              favorites.includes(product.id)
                                ? "fill-destructive text-destructive"
                                : "text-muted-foreground"
                            }`}
                          />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="p-4 space-y-4 flex-1 flex flex-col">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                          <h3 className="font-semibold text-foreground group-hover:text-accent transition">
                            {product.name}
                          </h3>
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
                          <span className="text-sm text-muted-foreground">({product.reviews})</span>
                        </div>

                        {/* Colors */}
                        <div className="flex gap-2">
                          {product.colors.slice(0, 3).map((color) => (
                            <div
                              key={color}
                              className="h-4 w-4 rounded-full border border-border"
                              title={color}
                              style={{
                                backgroundColor:
                                  color === "Black"
                                    ? "#000"
                                    : color === "White"
                                      ? "#fff"
                                      : color === "Navy"
                                        ? "#001f3f"
                                        : color === "Camel"
                                          ? "#c19a6b"
                                          : color === "Gray"
                                            ? "#808080"
                                            : color === "Cream"
                                              ? "#fffdd0"
                                              : color === "Red"
                                                ? "#ff0000"
                                                : color === "Burgundy"
                                                  ? "#800020"
                                                  : color === "Light Blue"
                                                    ? "#add8e6"
                                                    : color === "Dark Blue"
                                                      ? "#00008b"
                                                      : color === "Champagne"
                                                        ? "#f7e7ce"
                                                        : color === "Blush"
                                                          ? "#ffc0cb"
                                                          : color === "Emerald"
                                                            ? "#50c878"
                                                            : color === "Beige"
                                                              ? "#f5f5dc"
                                                              : "#ccc",
                              }}
                            />
                          ))}
                          {product.colors.length > 3 && (
                            <span className="text-xs text-muted-foreground">+{product.colors.length - 3}</span>
                          )}
                        </div>

                        {/* Price and CTA */}
                        <div className="flex items-center justify-between pt-2 border-t border-border mt-auto">
                          <span className="text-lg font-bold text-foreground">${product.price}</span>
                          <Button size="sm" className="gap-2" disabled={!product.inStock}>
                            <ShoppingBag className="h-4 w-4" />
                            Add
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No products found matching your filters.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("All")
                    setSelectedPrice(null)
                    setSearchQuery("")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
