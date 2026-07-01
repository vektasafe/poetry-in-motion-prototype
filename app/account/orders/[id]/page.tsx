"use client"

import { use } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Truck, Package, ShieldCheck, CheckCircle2, Clock } from "lucide-react"

interface OrderItem {
  name: string
  price: string
  qty: number
}

interface OrderDetail {
  id: string
  date: string
  status: "Delivered" | "On the way" | "Processing"
  items: OrderItem[]
  address: string
  timeline: string
}

const orderDetails: Record<string, OrderDetail> = {
  "PIM-2025-001": {
    id: "PIM-2025-001",
    date: "June 12, 2025",
    status: "Delivered",
    items: [
      { name: "Minimalist Tee", price: "KES 3,600", qty: 1 },
      { name: "Vintage Denim", price: "KES 600", qty: 1 },
    ],
    address: "Kilimani, Argwings Kodhek Road, Nairobi, Kenya",
    timeline: "Delivered on June 15, 2025. Left at front desk.",
  },
  "PIM-2025-002": {
    id: "PIM-2025-002",
    date: "June 20, 2025",
    status: "On the way",
    items: [
      { name: "Afro-Fusion Linen Blazer", price: "KES 3,900", qty: 1 },
      { name: "Handwoven Tote Bag", price: "KES 3,200", qty: 2 },
    ],
    address: "Westlands, Waiyaki Way, Nairobi, Kenya",
    timeline: "Processing complete and awaiting last-mile delivery.",
  },
  "PIM-2025-003": {
    id: "PIM-2025-003",
    date: "June 25, 2025",
    status: "Processing",
    items: [
      { name: "Beaded Leather Sandals", price: "KES 2,500", qty: 1 },
    ],
    address: "Karen, Ngong Road, Nairobi, Kenya",
    timeline: "Order confirmed, preparing for dispatch.",
  },
}

const statusIcon = {
  Delivered: CheckCircle2,
  "On the way": Truck,
  Processing: Clock,
}

export default function OrderDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const order = orderDetails[id]

  if (!order) {
    return (
      <div className="flex flex-col gap-6 items-start">
        <Link href="/account/orders" className="inline-flex items-center gap-2 text-sm text-[#a89070] hover:text-[#c9a84c] transition w-fit">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to orders
        </Link>
        <p className="text-[#1a1108] dark:text-[#faf8f5]">Order {id} not found.</p>
      </div>
    )
  }

  const StatusIcon = statusIcon[order.status]

  return (
    <div className="flex flex-col gap-6">
      <Link href="/account/orders" className="inline-flex items-center gap-2 text-sm text-[#a89070] hover:text-[#c9a84c] transition w-fit">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to orders
      </Link>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1a1108] dark:text-[#faf8f5]">Order {order.id}</h1>
          <p className="text-sm text-[#a89070] mt-1">Placed {order.date}</p>
        </div>
        <Button variant="outline" className="rounded-xl border-[#e8e0d4] dark:border-[#2a1f14] text-[#3d2c1e] dark:text-[#faf8f5] gap-2">
          <ShieldCheck className="h-3.5 w-3.5" /> Download receipt
        </Button>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white dark:bg-[#1a1108] rounded-2xl border border-[#e8e0d4] dark:border-[#2a1f14] p-6">
          <h2 className="font-semibold text-[#1a1108] dark:text-[#faf8f5] mb-4">Items</h2>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div key={item.name} className="flex items-center justify-between gap-4 border-b border-[#e8e0d4] dark:border-[#2a1f14] pb-4 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium text-[#1a1108] dark:text-[#faf8f5]">{item.name}</p>
                  <p className="text-sm text-[#a89070]">Qty {item.qty}</p>
                </div>
                <p className="font-semibold text-[#c9a84c]">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-[#1a1108] rounded-2xl border border-[#e8e0d4] dark:border-[#2a1f14] p-6 space-y-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#a89070] mb-2">Delivery</p>
            <div className="flex items-center gap-3 text-sm text-[#1a1108] dark:text-[#faf8f5]">
              <StatusIcon className="h-4 w-4 text-[#c9a84c]" /> {order.status}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-[#a89070] mb-2">Shipping address</p>
            <div className="flex items-start gap-3 text-sm text-[#1a1108] dark:text-[#faf8f5]">
              <MapPin className="h-4 w-4 text-[#c9a84c] mt-0.5" />
              <span>{order.address}</span>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-[#a89070] mb-2">Timeline</p>
            <div className="flex items-start gap-3 text-sm text-[#1a1108] dark:text-[#faf8f5]">
              <Package className="h-4 w-4 text-[#c9a84c] mt-0.5" />
              <span>{order.timeline}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
