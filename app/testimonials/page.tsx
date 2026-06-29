"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Heart, MessageCircle, Share2, Star } from "lucide-react"
import Link from "next/link"

interface Testimonial {
  id: string
  name: string
  avatar: string
  role: string
  location: string
  rating: number
  title: string
  content: string
  image?: string
  likes: number
  liked: boolean
  date: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Amara K.",
    avatar: "/avatar-1.jpg",
    role: "Content Creator",
    location: "Nairobi, Kenya",
    rating: 5,
    title: "Finally, fashion that gets me!",
    content:
      "I was skeptical about AI styling, but StyleAI completely changed how I shop. The quiz understood my style better than I did! Every recommendation has been a hit. My friends keep asking where I'm getting my clothes from.",
    image: "/testimonial-1.jpg",
    likes: 342,
    liked: false,
    date: "2 weeks ago",
  },
  {
    id: "2",
    name: "David M.",
    avatar: "/avatar-2.jpg",
    role: "Software Engineer",
    location: "Westlands, Nairobi",
    rating: 5,
    title: "Saved me so much time",
    content:
      "As someone who hates shopping, this is a game-changer. I spent 2 minutes on the quiz and got recommendations that actually fit my body and style. No more decision paralysis. Highly recommend!",
    likes: 287,
    liked: false,
    date: "1 month ago",
  },
  {
    id: "3",
    name: "Zainab H.",
    avatar: "/avatar-3.jpg",
    role: "Marketing Manager",
    location: "Karen, Nairobi",
    rating: 5,
    title: "Quality and authenticity",
    content:
      "What I love most is that every piece feels unique and authentic. I'm not seeing the same outfits on everyone else. The AI recommendations are spot-on, and the quality is amazing for the price.",
    image: "/testimonial-3.jpg",
    likes: 421,
    liked: false,
    date: "3 weeks ago",
  },
  {
    id: "4",
    name: "Priya S.",
    avatar: "/avatar-4.jpg",
    role: "Freelance Designer",
    location: "Kilimani, Nairobi",
    rating: 4,
    title: "Love the community aspect",
    content:
      "Beyond the great products, I love seeing other customers' style journeys. It's inspiring and makes me feel part of something bigger. The customer service is also incredibly responsive.",
    likes: 198,
    liked: false,
    date: "1 week ago",
  },
  {
    id: "5",
    name: "James O.",
    avatar: "/avatar-5.jpg",
    role: "Entrepreneur",
    location: "Lavington, Nairobi",
    rating: 5,
    title: "Best investment in my wardrobe",
    content:
      "I was hesitant to spend more than fast fashion, but the quality justifies it. These pieces last, and I actually wear everything I bought. The AI recommendations saved me from impulse purchases I'd regret.",
    likes: 356,
    liked: false,
    date: "2 weeks ago",
  },
  {
    id: "6",
    name: "Sophia N.",
    avatar: "/avatar-6.jpg",
    role: "Student",
    location: "Nairobi, Kenya",
    rating: 5,
    title: "Confidence boost I needed",
    content:
      "I used to feel invisible in my clothes. StyleAI helped me discover my authentic style, and now I feel confident and seen. The pieces work together perfectly, and I get compliments all the time!",
    image: "/testimonial-6.jpg",
    likes: 512,
    liked: false,
    date: "3 days ago",
  },
]

export default function TestimonialsPage() {
  const [testimonialsList, setTestimonialsList] = useState(testimonials)
  const [activeFilter, setActiveFilter] = useState<"all" | "creators" | "professionals" | "students">("all")
  const [likedOnly, setLikedOnly] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("pim-testimonial-likes")
    if (saved) {
      const likedMap = new Set(JSON.parse(saved) as string[])
      setTestimonialsList((prev) => prev.map((t) => ({ ...t, liked: likedMap.has(t.id) })))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("pim-testimonial-likes", JSON.stringify(testimonialsList.filter((t) => t.liked).map((t) => t.id)))
  }, [testimonialsList])

  const toggleLike = (id: string) => {
    setTestimonialsList((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              liked: !t.liked,
              likes: t.liked ? t.likes - 1 : t.likes + 1,
            }
          : t,
      ),
    )
  }

  const visibleTestimonials = useMemo(() => {
    return testimonialsList.filter((testimonial) => {
      const role = testimonial.role.toLowerCase()
      const matchesFilter =
        activeFilter === "all" ||
        (activeFilter === "creators" && role.includes("creator")) ||
        (activeFilter === "professionals" && (role.includes("engineer") || role.includes("manager") || role.includes("designer") || role.includes("entrepreneur"))) ||
        (activeFilter === "students" && role.includes("student"))

      return matchesFilter && (!likedOnly || testimonial.liked)
    })
  }, [activeFilter, likedOnly, testimonialsList])

  const averageRating = (testimonialsList.reduce((sum, t) => sum + t.rating, 0) / testimonialsList.length).toFixed(1)

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
          <h1 className="text-4xl font-bold text-foreground mb-2">Customer Stories</h1>
          <p className="text-lg text-muted-foreground">
            Real people, real transformations. See how StyleAI is changing the way people shop.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-card/50 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">{testimonialsList.length}+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-3xl font-bold text-foreground">{averageRating}</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(Number(averageRating)) ? "fill-accent text-accent" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">98%</div>
              <p className="text-muted-foreground">Would Recommend</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">500+</div>
              <p className="text-muted-foreground">Outfits Styled</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="inline-flex rounded-full border border-border bg-card p-1">
            {[
              ["all", "All"],
              ["creators", "Creators"],
              ["professionals", "Professionals"],
              ["students", "Students"],
            ].map(([value, label]) => (
              <button
                key={value}
                onClick={() => setActiveFilter(value as any)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeFilter === value ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setLikedOnly((prev) => !prev)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${likedOnly ? "border-accent text-accent" : "border-border text-muted-foreground"}`}
          >
            {likedOnly ? "Showing liked" : "Show liked only"}
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden hover:shadow-lg transition flex flex-col">
              {/* Image */}
              {testimonial.image && (
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-3 flex-1">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "fill-accent text-accent" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>

                {/* Title and Content */}
                <h4 className="font-semibold text-foreground mb-2">{testimonial.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{testimonial.content}</p>

                {/* Date */}
                <p className="text-xs text-muted-foreground mb-4">{testimonial.date}</p>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <button
                    onClick={() => toggleLike(testimonial.id)}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
                  >
                    <Heart className={`h-4 w-4 ${testimonial.liked ? "fill-destructive text-destructive" : ""}`} />
                    <span>{testimonial.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
                    <MessageCircle className="h-4 w-4" />
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition ml-auto">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-card/50 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Share Your Story?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our community of trendsetters and inspire others with your style journey.
          </p>
          <Button size="lg" className="gap-2">
            Share Your Testimonial
          </Button>
        </div>
      </div>
    </main>
  )
}
