"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, MapPin, CheckCircle2, Star, Users, Award, TrendingUp } from "lucide-react"
import { creators } from "@/lib/creators"
import { products } from "@/lib/products"

export default function CreatorsIndexPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] dark:bg-[#0e0a06]">
      {/* Header */}
      <div className="border-b border-[#e8e0d4] dark:border-[#2a1f14] bg-[#faf8f5]/95 dark:bg-[#0e0a06]/95 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#6b5744] dark:text-[#a89070] hover:text-[#3d2c1e] dark:hover:text-[#c9a84c] transition">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <Link href="/creators/dashboard">
            <Button variant="outline" size="sm" className="bg-transparent border-[#3d2c1e] text-[#3d2c1e] hover:bg-[#3d2c1e] hover:text-white dark:border-[#c9a84c] dark:text-[#c9a84c] dark:hover:bg-[#c9a84c] dark:hover:text-black">
              Creator Dashboard
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#3d2c1e] dark:text-[#f5ede0] mb-3">
            Meet Our Creators
          </h1>
          <p className="text-[#6b5744] dark:text-[#a89070]">
            Independent African designers and artisans, earning 40-50% revenue share on every piece they sell through Poetry In Motion.
          </p>
        </div>

        {/* Creator Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {creators.map((creator) => {
            const creatorProductCount = products.filter((p) => p.creatorId === creator.id).length
            return (
              <Link key={creator.id} href={`/creators/${creator.id}`}>
                <Card className="p-6 border-[#e8e0d4] dark:border-[#2a1f14] bg-white dark:bg-[#150f08] hover:border-[#c9a84c]/50 hover:shadow-lg transition h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-14 w-14 rounded-full overflow-hidden bg-[#faf8f5] dark:bg-[#0e0a06] border-2 border-[#c9a84c]/30 flex-shrink-0">
                      <img src={creator.avatar} alt={creator.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-[#3d2c1e] dark:text-[#f5ede0] truncate">{creator.name}</h3>
                        {creator.verified && (
                          <CheckCircle2 className="h-4 w-4 text-[#c9a84c] fill-[#c9a84c]/20 flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-[#6b5744] dark:text-[#a89070] flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {creator.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#6b5744] dark:text-[#a89070] mb-4 line-clamp-2 flex-1">
                    {creator.bio}
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#e8e0d4] dark:border-[#2a1f14]">
                    <div className="text-center">
                      <p className="text-sm font-bold text-[#3d2c1e] dark:text-[#f5ede0]">{creatorProductCount}</p>
                      <p className="text-xs text-[#a89070]">Products</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-bold text-[#3d2c1e] dark:text-[#f5ede0]">{creator.totalVotes.toLocaleString()}</p>
                      <p className="text-xs text-[#a89070]">Votes</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-bold text-[#3d2c1e] dark:text-[#f5ede0]">{creator.revenueShare}%</p>
                      <p className="text-xs text-[#a89070]">Share</p>
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* CTA for prospective creators */}
        <Card className="mt-12 p-8 border-[#c9a84c]/40 bg-[#c9a84c]/5 text-center">
          <Award className="h-10 w-10 text-[#c9a84c] mx-auto mb-3" />
          <h2 className="text-xl font-bold text-[#3d2c1e] dark:text-[#f5ede0] mb-2">Are You a Designer?</h2>
          <p className="text-sm text-[#6b5744] dark:text-[#a89070] mb-6 max-w-md mx-auto">
            Join Poetry In Motion as a creator. Upload your designs, get community feedback, and earn revenue share when your collection gets produced.
          </p>
          <Link href="/creators/dashboard">
            <Button className="bg-[#3d2c1e] text-white hover:bg-[#2a1f14] dark:bg-[#c9a84c] dark:text-black dark:hover:bg-[#b8973b]">
              Start Creating
            </Button>
          </Link>
        </Card>
      </div>
    </main>
  )
}
