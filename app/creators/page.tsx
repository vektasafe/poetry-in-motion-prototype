"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Upload, TrendingUp, Users, Award, Sparkles, DollarSign } from "lucide-react"
import Link from "next/link"

interface CreatorStats {
  totalDesigns: number
  totalVotes: number
  producedCollections: number
  totalEarnings: number
}

const mockCreatorStats: CreatorStats = {
  totalDesigns: 12,
  totalVotes: 3450,
  producedCollections: 3,
  totalEarnings: 4250,
}

export default function CreatorsPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "upload" | "voting" | "earnings">("overview")

  return (
    <main className="min-h-screen bg-[#faf8f5] dark:bg-[#0e0a06]">
      {/* Header */}
      <div className="border-b border-[#e8e0d4] dark:border-[#2a1f14] bg-[#faf8f5]/95 dark:bg-[#0e0a06]/95 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#6b5744] dark:text-[#a89070] hover:text-[#3d2c1e] dark:hover:text-[#c9a84c] transition"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-[#3d2c1e] dark:bg-[#c9a84c] flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white dark:text-black" />
              </div>
              <span className="font-bold text-[#3d2c1e] dark:text-[#c9a84c]">Creator Dashboard</span>
            </div>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#3d2c1e] dark:text-[#f5ede0] mb-4">Design Collections That Matter</h1>
          <p className="text-lg text-[#6b5744] dark:text-[#a89070] max-w-2xl">
            Upload your designs, get community feedback, and earn 40-50% revenue share when your collection gets
            produced.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <Card className="p-6 border-[#e8e0d4] dark:border-[#2a1f14] bg-white dark:bg-[#150f08]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#6b5744] dark:text-[#a89070] mb-1">Total Designs</p>
                <p className="text-3xl font-bold text-[#3d2c1e] dark:text-[#f5ede0]">{mockCreatorStats.totalDesigns}</p>
              </div>
              <Upload className="h-8 w-8 text-[#c9a84c]/60" />
            </div>
          </Card>
          <Card className="p-6 border-[#e8e0d4] dark:border-[#2a1f14] bg-white dark:bg-[#150f08]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#6b5744] dark:text-[#a89070] mb-1">Community Votes</p>
                <p className="text-3xl font-bold text-[#3d2c1e] dark:text-[#f5ede0]">{mockCreatorStats.totalVotes.toLocaleString()}</p>
              </div>
              <Users className="h-8 w-8 text-[#c9a84c]/60" />
            </div>
          </Card>
          <Card className="p-6 border-[#e8e0d4] dark:border-[#2a1f14] bg-white dark:bg-[#150f08]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#6b5744] dark:text-[#a89070] mb-1">Produced</p>
                <p className="text-3xl font-bold text-[#3d2c1e] dark:text-[#f5ede0]">{mockCreatorStats.producedCollections}</p>
              </div>
              <Award className="h-8 w-8 text-[#c9a84c]/60" />
            </div>
          </Card>
          <Card className="p-6 border-[#e8e0d4] dark:border-[#2a1f14] bg-white dark:bg-[#150f08]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#6b5744] dark:text-[#a89070] mb-1">Total Earnings</p>
                <p className="text-3xl font-bold text-[#3d2c1e] dark:text-[#f5ede0]">${mockCreatorStats.totalEarnings.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-[#c9a84c]/60" />
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="mb-8 border-b border-[#e8e0d4] dark:border-[#2a1f14]">
          <div className="flex gap-8 overflow-x-auto">
            {[
              { id: "overview", label: "Overview", icon: TrendingUp },
              { id: "upload", label: "Upload Design", icon: Upload },
              { id: "voting", label: "Community Voting", icon: Users },
              { id: "earnings", label: "Earnings", icon: DollarSign },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 transition whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-[#c9a84c] text-[#3d2c1e] dark:text-[#c9a84c]"
                      : "border-transparent text-[#6b5744] dark:text-[#a89070] hover:text-[#3d2c1e] dark:hover:text-[#c9a84c]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <Card className="p-8 border-[#e8e0d4] dark:border-[#2a1f14] bg-white dark:bg-[#150f08]">
              <h2 className="text-2xl font-bold text-[#3d2c1e] dark:text-[#f5ede0] mb-6">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="h-12 w-12 rounded-lg bg-[#c9a84c]/15 flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-[#c9a84c]">1</span>
                  </div>
                  <h3 className="font-semibold text-[#3d2c1e] dark:text-[#f5ede0] mb-2">Upload Your Design</h3>
                  <p className="text-[#6b5744] dark:text-[#a89070] text-sm">
                    Submit your collection concept with sketches, mood boards, and descriptions.
                  </p>
                </div>
                <div>
                  <div className="h-12 w-12 rounded-lg bg-[#c9a84c]/15 flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-[#c9a84c]">2</span>
                  </div>
                  <h3 className="font-semibold text-[#3d2c1e] dark:text-[#f5ede0] mb-2">Community Votes</h3>
                  <p className="text-[#6b5744] dark:text-[#a89070] text-sm">
                    Our community votes on which designs get produced. More votes = higher priority.
                  </p>
                </div>
                <div>
                  <div className="h-12 w-12 rounded-lg bg-[#c9a84c]/15 flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-[#c9a84c]">3</span>
                  </div>
                  <h3 className="font-semibold text-[#3d2c1e] dark:text-[#f5ede0] mb-2">Earn Revenue Share</h3>
                  <p className="text-[#6b5744] dark:text-[#a89070] text-sm">
                    Get 40-50% revenue share on every piece sold from your collection.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-[#c9a84c]/40 bg-[#c9a84c]/5">
              <h3 className="text-xl font-bold text-[#3d2c1e] dark:text-[#f5ede0] mb-4">Revenue Model</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#6b5744] dark:text-[#a89070]">Creator Revenue Share</span>
                  <span className="font-bold text-[#3d2c1e] dark:text-[#f5ede0]">40-50%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6b5744] dark:text-[#a89070]">Platform & Operations</span>
                  <span className="font-bold text-[#3d2c1e] dark:text-[#f5ede0]">40-50%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6b5744] dark:text-[#a89070]">Artisan/Manufacturing</span>
                  <span className="font-bold text-[#3d2c1e] dark:text-[#f5ede0]">10-15%</span>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === "upload" && (
          <Card className="p-8 border-[#e8e0d4] dark:border-[#2a1f14] bg-white dark:bg-[#150f08]">
            <h2 className="text-2xl font-bold text-[#3d2c1e] dark:text-[#f5ede0] mb-6">Upload New Design</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#3d2c1e] dark:text-[#f5ede0] mb-2">Collection Name</label>
                <input
                  type="text"
                  placeholder="e.g., Urban Minimalist SS25"
                  className="w-full px-4 py-2 rounded-lg border border-[#e8e0d4] dark:border-[#2a1f14] bg-[#faf8f5] dark:bg-[#0e0a06] text-[#3d2c1e] dark:text-[#f5ede0] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#3d2c1e] dark:text-[#f5ede0] mb-2">Description</label>
                <textarea
                  placeholder="Tell us about your collection, inspiration, and target audience..."
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-[#e8e0d4] dark:border-[#2a1f14] bg-[#faf8f5] dark:bg-[#0e0a06] text-[#3d2c1e] dark:text-[#f5ede0] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#3d2c1e] dark:text-[#f5ede0] mb-2">Upload Images</label>
                <div className="border-2 border-dashed border-[#e8e0d4] dark:border-[#2a1f14] rounded-lg p-8 text-center">
                  <Upload className="h-8 w-8 text-[#a89070] mx-auto mb-2" />
                  <p className="text-[#6b5744] dark:text-[#a89070]">Drag and drop your design images here</p>
                </div>
              </div>
              <Button className="w-full bg-[#3d2c1e] text-white hover:bg-[#2a1f14] dark:bg-[#c9a84c] dark:text-black dark:hover:bg-[#b8973b]">
                Submit Design for Review
              </Button>
            </div>
          </Card>
        )}

        {activeTab === "voting" && (
          <div className="space-y-6">
            <Card className="p-6 border-[#e8e0d4] dark:border-[#2a1f14] bg-white dark:bg-[#150f08]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-[#3d2c1e] dark:text-[#f5ede0]">Urban Minimalist SS25</h3>
                <span className="text-sm font-bold text-[#c9a84c]">1,234 votes</span>
              </div>
              <div className="w-full bg-[#e8e0d4] dark:bg-[#2a1f14] rounded-full h-2 mb-4">
                <div className="bg-[#c9a84c] h-2 rounded-full" style={{ width: "78%" }} />
              </div>
              <p className="text-sm text-[#6b5744] dark:text-[#a89070] mb-4">78% of votes needed to produce</p>
              <Button variant="outline" className="w-full bg-transparent border-[#3d2c1e] text-[#3d2c1e] hover:bg-[#3d2c1e] hover:text-white dark:border-[#c9a84c] dark:text-[#c9a84c] dark:hover:bg-[#c9a84c] dark:hover:text-black">
                View Details
              </Button>
            </Card>
          </div>
        )}

        {activeTab === "earnings" && (
          <Card className="p-8 border-[#e8e0d4] dark:border-[#2a1f14] bg-white dark:bg-[#150f08]">
            <h2 className="text-2xl font-bold text-[#3d2c1e] dark:text-[#f5ede0] mb-6">Earnings Breakdown</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-[#faf8f5] dark:bg-[#0e0a06]">
                <div>
                  <p className="font-semibold text-[#3d2c1e] dark:text-[#f5ede0]">Urban Minimalist SS25</p>
                  <p className="text-sm text-[#6b5744] dark:text-[#a89070]">234 pieces sold</p>
                </div>
                <p className="text-lg font-bold text-[#3d2c1e] dark:text-[#f5ede0]">$2,340</p>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-[#faf8f5] dark:bg-[#0e0a06]">
                <div>
                  <p className="font-semibold text-[#3d2c1e] dark:text-[#f5ede0]">Streetwear Vibes FW24</p>
                  <p className="text-sm text-[#6b5744] dark:text-[#a89070]">156 pieces sold</p>
                </div>
                <p className="text-lg font-bold text-[#3d2c1e] dark:text-[#f5ede0]">$1,560</p>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-[#faf8f5] dark:bg-[#0e0a06]">
                <div>
                  <p className="font-semibold text-[#3d2c1e] dark:text-[#f5ede0]">Bohemian Dreams SS24</p>
                  <p className="text-sm text-[#6b5744] dark:text-[#a89070]">89 pieces sold</p>
                </div>
                <p className="text-lg font-bold text-[#3d2c1e] dark:text-[#f5ede0]">$890</p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </main>
  )
}
