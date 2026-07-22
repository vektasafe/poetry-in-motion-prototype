import { config } from "dotenv"
config({ path: ".env.local" })

async function seed() {
  const { db } = await import("./index")
  const { products } = await import("./schema")
  const { products: staticProducts } = await import("@/lib/products")

  const rows = staticProducts.map((p) => ({
    id: p.id,
    creatorId: p.creatorId ?? null,
    name: p.name,
    description: p.description ?? null,
    priceCents: Math.round(p.price * 100),
    currency: "USD",
    colors: p.colors ?? [],
    sizes: p.sizes ?? [],
    images: p.images ?? [p.image],
    stock: p.inStock ? 100 : 0,
    rating: Math.round(p.rating * 10),
    reviews: p.reviews,
    aiInsight: p.aiInsight ?? null,
    inStock: p.inStock,
  }))

  for (const row of rows) {
    await db.insert(products).values(row).onConflictDoUpdate({
      target: products.id,
      set: row,
    })
  }

  console.log(`Seeded ${rows.length} products.`)
  process.exit(0)
}

seed().catch((err) => {
  console.error("Seed failed:", err)
  process.exit(1)
})
