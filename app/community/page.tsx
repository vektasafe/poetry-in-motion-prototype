"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Heart, MessageCircle, Share2, Video, Users, TrendingUp, Plus, Image as ImageIcon } from "lucide-react"
import Link from "next/link"

interface Post {
  id: string
  author: string
  avatar: string
  handle: string
  time: string
  content: string
  image?: string
  likes: number
  comments: number
  liked: boolean
}

const initialPosts: Post[] = [
  {
    id: "1",
    author: "Amara Wanjiku",
    avatar: "/images/logos/logo-olive.png",
    handle: "@amarastyles",
    time: "2h ago",
    content: "Just received my order from Poetry In Motion and I am absolutely obsessed with the oversized blazer. The quality is incredible and it pairs perfectly with everything in my wardrobe. Mali Safi indeed! 🔥",
    image: "/images/banners/shopping.png",
    likes: 47,
    comments: 12,
    liked: false,
  },
  {
    id: "2",
    author: "Kofi Mensah",
    avatar: "/images/logos/logo-beige.png",
    handle: "@koficreates",
    time: "5h ago",
    content: "Nairobi fashion week prep is in full swing. Which outfit should I style for the opening night? Loving how sustainable fashion is finally getting the recognition it deserves here in East Africa. 🌿",
    likes: 83,
    comments: 29,
    liked: false,
  },
  {
    id: "3",
    author: "Zara Nduta",
    avatar: "/images/logos/logo-dark.png",
    handle: "@zarablends",
    time: "1d ago",
    content: "Quick tip: layering is the secret to transitioning your wardrobe from Nairobi mornings to evenings. A light blazer over a silk cami changes the whole vibe. What are your favourite layering pieces?",
    likes: 124,
    comments: 41,
    liked: true,
  },
]

const tabs = ["Feed", "Trending", "Live Sessions", "Style Tips"]

export default function CommunityPage() {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [activeTab, setActiveTab] = useState("Feed")
  const [newPost, setNewPost] = useState("")
  const [showCompose, setShowCompose] = useState(false)

  const toggleLike = (id: string) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p
      )
    )
  }

  const handlePost = () => {
    if (!newPost.trim()) return
    const post: Post = {
      id: Date.now().toString(),
      author: "You",
      avatar: "/images/logos/logo-light.png",
      handle: "@you",
      time: "Just now",
      content: newPost,
      likes: 0,
      comments: 0,
      liked: false,
    }
    setPosts([post, ...posts])
    setNewPost("")
    setShowCompose(false)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Banner */}
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <img
          src="/images/banners/community.png"
          alt="Community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">The Community</h1>
          <p className="text-sm sm:text-base text-white/80">Connect. Inspire. Celebrate African Style.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-6 lg:px-8">

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { icon: Users, label: "Members", value: "12.4K" },
            { icon: TrendingUp, label: "Posts Today", value: "348" },
            { icon: Video, label: "Live Now", value: "2" },
          ].map((stat) => (
            <Card key={stat.label} className="p-4 text-center">
              <stat.icon className="h-5 w-5 text-accent mx-auto mb-1" />
              <p className="text-lg font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 border-b border-border overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-accent text-accent"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Live Sessions Tab */}
        {activeTab === "Live Sessions" && (
          <div className="space-y-4">
            <Card className="p-6 text-center">
              <Video className="h-10 w-10 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Live Styling Sessions</h3>
              <p className="text-sm text-muted-foreground mb-4">Join real-time styling sessions with top creators and fashion experts.</p>
              <Link href="/community/live-sessions">
                <Button className="w-full">View Live Sessions</Button>
              </Link>
            </Card>
          </div>
        )}

        {/* Feed / Trending / Style Tips */}
        {activeTab !== "Live Sessions" && (
          <div className="space-y-4">
            {/* Compose */}
            <Card className="p-4">
              {showCompose ? (
                <div className="space-y-3">
                  <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Share your style story..."
                    rows={3}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                  <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
                      <ImageIcon className="h-4 w-4" />
                      Add photo
                    </button>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="bg-transparent" onClick={() => setShowCompose(false)}>Cancel</Button>
                      <Button size="sm" onClick={handlePost} disabled={!newPost.trim()}>Post</Button>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setShowCompose(true)}
                  className="w-full text-left text-sm text-muted-foreground px-3 py-2 rounded-lg border border-border hover:border-accent transition"
                >
                  Share your style story...
                </button>
              )}
            </Card>

            {/* Posts */}
            {posts.map((post) => (
              <Card key={post.id} className="p-4">
                {/* Author */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full overflow-hidden bg-muted flex-shrink-0">
                    <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{post.handle} · {post.time}</p>
                  </div>
                </div>

                {/* Content */}
                <p className="text-sm text-foreground leading-relaxed mb-3">{post.content}</p>

                {/* Image */}
                {post.image && (
                  <div className="rounded-lg overflow-hidden mb-3 aspect-video">
                    <img src={post.image} alt="Post" className="w-full h-full object-cover" />
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-4 pt-2 border-t border-border">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`flex items-center gap-1.5 text-sm transition ${post.liked ? "text-red-500" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    <Heart className={`h-4 w-4 ${post.liked ? "fill-red-500" : ""}`} />
                    {post.likes}
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition">
                    <MessageCircle className="h-4 w-4" />
                    {post.comments}
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition ml-auto">
                    <Share2 className="h-4 w-4" />
                    Share
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}

      </div>

      {/* FAB */}
      <button
        onClick={() => setShowCompose(true)}
        className="fixed bottom-20 right-4 md:bottom-6 h-12 w-12 rounded-full bg-accent text-accent-foreground shadow-lg flex items-center justify-center hover:bg-accent/90 transition z-30"
      >
        <Plus className="h-6 w-6" />
      </button>
    </main>
  )
}
