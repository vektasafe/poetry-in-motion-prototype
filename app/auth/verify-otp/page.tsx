import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function VerifyOTPPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] dark:bg-[#0e0a06] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        <Link href="/auth/forgot-password" className="inline-flex items-center gap-2 text-sm text-[#6b5744] dark:text-[#a89070] hover:text-[#3d2c1e] dark:hover:text-[#c9a84c] transition mb-8">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="relative h-10 w-10">
            <Image src="/images/logos/logo-light.png" alt="Poetry In Motion" fill className="object-contain dark:hidden" />
            <Image src="/images/logos/logo-dark.png" alt="Poetry In Motion" fill className="object-contain hidden dark:block" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-widest text-[#3d2c1e] dark:text-[#c9a84c] uppercase">Poetry In Motion</span>
            <span className="text-xs text-[#c9a84c] italic">Mali Safi.</span>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1a1108] rounded-2xl border border-[#e8e0d4] dark:border-[#2a1f14] p-8">

          {/* Shield icon */}
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-2xl bg-[#c9a84c]/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-[#1a1108] dark:text-[#faf8f5] mb-2 text-center">Check your email</h1>
          <p className="text-sm text-[#6b5744] dark:text-[#a89070] mb-2 text-center leading-relaxed">
            We sent a 6-digit code to
          </p>
          <p className="text-sm font-semibold text-[#3d2c1e] dark:text-[#c9a84c] mb-8 text-center">
            you@example.com
          </p>

          {/* OTP inputs */}
          <div className="flex justify-center gap-3 mb-6">
            {[1,2,3,4,5,6].map((i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                className="h-14 w-11 text-center text-xl font-bold rounded-xl border-2 border-[#e8e0d4] dark:border-[#3a2a1a] bg-white dark:bg-[#2a1f14] text-[#1a1108] dark:text-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#c9a84c] focus:border-[#c9a84c] transition"
              />
            ))}
          </div>

          <Button asChild className="w-full py-3 rounded-xl bg-[#3d2c1e] text-white hover:bg-[#2a1f14] dark:bg-[#c9a84c] dark:text-black dark:hover:bg-[#b8973b] font-semibold mb-4">
            <Link href="/auth/reset-password">Verify Code</Link>
          </Button>

          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#e8e0d4] dark:border-[#2a1f14]">
            <p className="text-xs text-[#a89070] text-center">
              Did not receive the code?{" "}
              <button className="text-[#c9a84c] hover:underline font-medium">Resend code</button>
            </p>
            <p className="text-xs text-[#a89070] text-center">
              Code expires in <span className="text-[#3d2c1e] dark:text-[#faf8f5] font-semibold">09:47</span>
            </p>
            <p className="text-xs text-[#a89070] text-center">
              Wrong email?{" "}
              <Link href="/auth/forgot-password" className="text-[#c9a84c] hover:underline">Change it</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
