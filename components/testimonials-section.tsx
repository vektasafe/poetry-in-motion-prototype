import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
  image?: string
}

const testimonials: Testimonial[] = [
  {
    name: "Amara K.",
    role: "Content Creator",
    content:
      "StyleAI completely changed how I shop. The quiz understood my style better than I did! Every recommendation has been a hit.",
    rating: 5,
  },
  {
    name: "David M.",
    role: "Software Engineer",
    content: "As someone who hates shopping, this is a game-changer. No more decision paralysis. Highly recommend!",
    rating: 5,
  },
  {
    name: "Zainab H.",
    role: "Marketing Manager",
    content: "What I love most is that every piece feels unique and authentic. The AI recommendations are spot-on.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-4 py-20 sm:px-6 lg:px-8 bg-card/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Loved by Trendsetters</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers are saying about their StyleAI experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
