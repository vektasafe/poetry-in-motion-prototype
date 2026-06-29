import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Truck, Package, ShieldCheck } from "lucide-react"

export default function OrderDetailsPage() {
  return (
    <div className="flex flex-col gap-6">
      <Link href="/account/orders" className="inline-flex items-center gap-2 text-sm text-[#a89070] hover:text-[#c9a84c] transition w-fit">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to orders
      </Link>

      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1a1108] dark:text-[#faf8f5]">Order PIM-2025-002</h1>
          <p className="text-sm text-[#a89070] mt-1">Placed June 20, 2025</p>
        </div>
        <Button variant="outline" className="rounded-xl border-[#e8e0d4] dark:border-[#2a1f14] text-[#3d2c1e] dark:text-[#faf8f5] gap-2">
          <ShieldCheck className="h-3.5 w-3.5" /> Download receipt
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white dark:bg-[#1a1108] rounded-2xl border border-[#e8e0d4] dark:border-[#2a1f14] p-6">
          <h2 className="font-semibold text-[#1a1108] dark:text-[#faf8f5] mb-4">Items</h2>
          <div className="space-y-4">
            {[
              { name: "Afro-Fusion Linen Blazer", price: "KES 3,900", qty: 1 },
              { name: "Handwoven Tote Bag", price: "KES 3,200", qty: 2 },
            ].map((item) => (
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
              <Truck className="h-4 w-4 text-[#c9a84c]" /> On the way
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-[#a89070] mb-2">Shipping address</p>
            <div className="flex items-start gap-3 text-sm text-[#1a1108] dark:text-[#faf8f5]">
              <MapPin className="h-4 w-4 text-[#c9a84c] mt-0.5" />
              <span>Westlands, Waiyaki Way, Nairobi, Kenya</span>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-[#a89070] mb-2">Timeline</p>
            <div className="flex items-start gap-3 text-sm text-[#1a1108] dark:text-[#faf8f5]">
              <Package className="h-4 w-4 text-[#c9a84c] mt-0.5" />
              <span>Processing complete and awaiting last-mile delivery.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}