import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Camera, Mail, Phone, MapPin, Calendar, Edit2 } from "lucide-react"

export default function AccountPage() {
  return (
    <div className="flex flex-col gap-6">

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#1a1108] dark:text-[#faf8f5]">My Profile</h1>
        <Button variant="outline" className="gap-2 border-[#e8e0d4] dark:border-[#2a1f14] text-[#3d2c1e] dark:text-[#faf8f5] hover:border-[#c9a84c] hover:text-[#c9a84c] rounded-xl text-sm">
          <Edit2 className="h-3.5 w-3.5" /> Edit Profile
        </Button>
      </div>

      {/* Profile header card */}
      <div className="bg-white dark:bg-[#1a1108] rounded-2xl border border-[#e8e0d4] dark:border-[#2a1f14] overflow-hidden">
        {/* Banner */}
        <div className="relative h-32 bg-gradient-to-r from-[#3d2c1e] to-[#c9a84c]/60">
          <Image src="/images/banners/shopping.png" alt="Banner" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center opacity-30" />
        </div>
        {/* Avatar */}
        <div className="px-6 pb-6">
          <div className="relative -mt-10 mb-4 inline-block">
            <div className="relative h-20 w-20 rounded-full border-4 border-white dark:border-[#1a1108] bg-[#c9a84c]/20 overflow-hidden">
              <Image src="/images/illustrations/empty/profile.png" alt="Profile" fill sizes="80px" className="object-cover" />
            </div>
            <button className="absolute bottom-0 right-0 h-7 w-7 rounded-full bg-[#c9a84c] flex items-center justify-center border-2 border-white dark:border-[#1a1108] hover:bg-[#b8973b] transition">
              <Camera className="h-3.5 w-3.5 text-black" />
            </button>
          </div>
          <h2 className="text-xl font-bold text-[#1a1108] dark:text-[#faf8f5]">James Kabingu</h2>
          <p className="text-sm text-[#a89070]">Member since June 2025</p>
        </div>
      </div>

      {/* Info grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { icon: Mail, label: "Email address", value: "james@example.com" },
          { icon: Phone, label: "Phone number", value: "+254 700 000 000" },
          { icon: MapPin, label: "Location", value: "Nairobi, Kenya" },
          { icon: Calendar, label: "Date of birth", value: "Not set" },
        ].map((item) => {
          const Icon = item.icon
          return (
            <div key={item.label} className="bg-white dark:bg-[#1a1108] rounded-2xl border border-[#e8e0d4] dark:border-[#2a1f14] p-5 flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                <Icon className="h-4.5 w-4.5 text-[#c9a84c]" />
              </div>
              <div>
                <p className="text-xs text-[#a89070] mb-1">{item.label}</p>
                <p className="text-sm font-medium text-[#1a1108] dark:text-[#faf8f5]">{item.value}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Style profile */}
      <div className="bg-white dark:bg-[#1a1108] rounded-2xl border border-[#e8e0d4] dark:border-[#2a1f14] p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-[#1a1108] dark:text-[#faf8f5]">Style Profile</h3>
          <button className="text-xs text-[#c9a84c] hover:underline">Retake quiz</button>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Minimal", "Earth tones", "Streetwear", "Afro-fusion", "Casual chic"].map((tag) => (
            <span key={tag} className="px-3 py-1.5 rounded-full bg-[#c9a84c]/10 text-xs font-medium text-[#3d2c1e] dark:text-[#c9a84c] border border-[#c9a84c]/20">
              {tag}
            </span>
          ))}
          <span className="px-3 py-1.5 rounded-full bg-[#faf8f5] dark:bg-[#0e0a06] text-xs text-[#a89070] border border-[#e8e0d4] dark:border-[#2a1f14] cursor-pointer hover:border-[#c9a84c] transition">
            + Add more
          </span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { value: "12", label: "Orders" },
          { value: "34", label: "Wishlist" },
          { value: "3", label: "Reviews" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-[#1a1108] rounded-2xl border border-[#e8e0d4] dark:border-[#2a1f14] p-5 text-center">
            <p className="text-2xl font-bold text-[#c9a84c]">{stat.value}</p>
            <p className="text-xs text-[#a89070] mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Success illustration on account created - shown only on first login */}
      <div className="bg-gradient-to-br from-[#c9a84c]/10 to-transparent rounded-2xl border border-[#c9a84c]/20 p-6 flex items-center gap-6">
        <div className="relative h-16 w-16 flex-shrink-0">
          <Image src="/images/illustrations/success/achievement.png" alt="Achievement" fill sizes="64px" className="object-contain" />
        </div>
        <div>
          <p className="font-semibold text-[#1a1108] dark:text-[#faf8f5] mb-1">Complete your profile</p>
          <p className="text-sm text-[#a89070]">Add your measurements and style preferences to unlock personalized AI recommendations.</p>
        </div>
        <Button size="sm" className="flex-shrink-0 rounded-xl bg-[#3d2c1e] text-white hover:bg-[#2a1f14] dark:bg-[#c9a84c] dark:text-black">
          Complete
        </Button>
      </div>
    </div>
  )
}
