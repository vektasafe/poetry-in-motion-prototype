import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <img
            src="/images/illustrations/error/404.png"
            alt="Page not found"
            className="h-56 w-56 object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button size="lg" className="w-full sm:w-auto">Go Home</Button>
          </Link>
          <Link href="/shop">
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">Browse Shop</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
