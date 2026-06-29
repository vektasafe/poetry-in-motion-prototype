import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Clock, CheckCircle2, Truck, XCircle } from "lucide-react"

type StatusConfigEntry = {
  icon: React.ComponentType<{ className?: string }>
  color: string
  bg: string
}

const orders = [
  {
    id: "PIM-2025-001",
    date: "June 12, 2025",
    status: "Delivered",
    total: "KES 4,200",
    items: 2,
    image: "/images/banners/shopping.png",
  },
  {
    id: "PIM-2025-002",
    date: "June 20, 2025",
    status: "On the way",
    total: "KES 7,800",
    items: 3,
    image: "/images/banners/shopping.png",
  },
  {
    id: "PIM-2025-003",
    date: "June 25, 2025",
    status: "Processing",
    total: "KES 2,500",
    items: 1,
    image: "/images/banners/shopping.png",
  },
]

const statusConfig: Record<string, StatusConfigEntry> = {
  Delivered: { icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50 dark:bg-green-950/30" },
  "On the way": { icon: Truck, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-950/30" },
  Processing: { icon: Clock, color: "text-[#c9a84c]", bg: "bg-[#c9a84c]/10" },
  Cancelled: { icon: XCircle, color: "text-red-500", bg: "bg-red-50 dark:bg-red-950/30" },
}

export default function OrdersPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-[#1a1108] dark:text-[#faf8f5]">My Orders</h1>

      {orders.length === 0 ? (
        <div className="bg-white dark:bg-[#1a1108] rounded-2xl border border-[#e8e0d4] dark:border-[#2a1f14] p-12 flex flex-col items-center gap-4">
          <div className="relative h-32 w-32">
            <Image src="/images/illustrations/empty/shopping-bag.png" alt="No orders" fill sizes="128px" className="object-contain" />
          </div>
          <p className="font-semibold text-[#1a1108] dark:text-[#faf8f5]">No orders yet</p>
          <p className="text-sm text-[#a89070] text-center">When you place your first order, it will appear here.</p>
          <Button asChild className="rounded-xl bg-[#3d2c1e] text-white hover:bg-[#2a1f14] dark:bg-[#c9a84c] dark:text-black mt-2">
            <Link href="/shop">Start Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {orders.map((order) => {
            const status = statusConfig[order.status] || statusConfig.Processing
            const StatusIcon = status.icon
            return (
              <div key={order.id} className="bg-white dark:bg-[#1a1108] rounded-2xl border border-[#e8e0d4] dark:border-[#2a1f14] p-5 hover:border-[#c9a84c]/40 transition">
                <div className="flex items-center gap-4">
                  {/* Order image */}
                  <div className="relative h-16 w-16 rounded-xl overflow-hidden flex-shrink-0 bg-[#faf8f5] dark:bg-[#0e0a06]">
                    <Image src={order.image} alt="Order" fill sizes="64px" className="object-cover" />
                  </div>

                  {/* Order info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold text-sm text-[#1a1108] dark:text-[#faf8f5]">{order.id}</p>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${status.color} ${status.bg}`}>
                        <StatusIcon className="h-3 w-3" />
                        {order.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#a89070] mb-2">{order.date} &middot; {order.items} item{order.items > 1 ? "s" : ""}</p>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-[#c9a84c]">{order.total}</p>
                      <Link href={`/account/orders/${order.id}`} className="flex items-center gap-1 text-xs text-[#a89070] hover:text-[#c9a84c] transition">
                        View details <ChevronRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Progress bar for active orders */}
                {order.status === "On the way" && (
                  <div className="mt-4 pt-4 border-t border-[#e8e0d4] dark:border-[#2a1f14]">
                    <div className="flex items-center justify-between mb-2">
                      {["Order placed", "Processing", "Shipped", "Delivered"].map((step, i) => (
                        <span key={step} className={`text-xs ${i <= 2 ? "text-[#c9a84c] font-medium" : "text-[#a89070]"}`}>{step}</span>
                      ))}
                    </div>
                    <div className="h-1.5 bg-[#e8e0d4] dark:bg-[#2a1f14] rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-[#c9a84c] rounded-full" />
                    </div>
                  </div>
                )}

                {/* Success illustration for delivered */}
                {order.status === "Delivered" && (
                  <div className="mt-3 pt-3 border-t border-[#e8e0d4] dark:border-[#2a1f14] flex items-center justify-between">
                    <p className="text-xs text-[#a89070]">Delivered successfully</p>
                    <button className="text-xs text-[#c9a84c] hover:underline">Write a review</button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
