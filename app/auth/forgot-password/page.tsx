import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, ArrowLeft } from "lucide-react"

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] dark:bg-[#0e0a06] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        <Link href="/auth/login" className="inline-flex items-center gap-2 text-sm text-[#6b5744] dark:text-[#a89070] hover:text-[#3d2c1e] dark:hover:text-[#c9a84c] transition mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to sign in
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
          {/* Icon */}
          <div className="h-14 w-14 rounded-2xl bg-[#c9a84c]/10 flex items-center justify-center mb-6">
            <Mail className="h-7 w-7 text-[#c9a84c]" />
          </div>

          <h1 className="text-2xl font-bold text-[#1a1108] dark:text-[#faf8f5] mb-2">Forgot your password?</h1>
          <p className="text-sm text-[#6b5744] dark:text-[#a89070] mb-6 leading-relaxed">
            No worries. Enter your email address and we will send you a one-time code to reset your password.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#3d2c1e] dark:text-[#faf8f5]">Email address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#a89070]" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#e8e0d4] dark:border-[#2a1f14] bg-[#faf8f5] dark:bg-[#0e0a06] text-[#1a1108] dark:text-[#faf8f5] placeholder-[#a89070] text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c] transition"
                />
              </div>
            </div>

            <Button asChild className="w-full py-3 rounded-xl bg-[#3d2c1e] text-white hover:bg-[#2a1f14] dark:bg-[#c9a84c] dark:text-black dark:hover:bg-[#b8973b] font-semibold">
              <Link href="/auth/verify-otp">Send Reset Code</Link>
            </Button>
          </div>

          <div className="mt-6 pt-6 border-t border-[#e8e0d4] dark:border-[#2a1f14] flex flex-col gap-3">
            <p className="text-xs text-[#a89070] text-center">
              Prefer to reset via phone?{" "}
              <button className="text-[#c9a84c] hover:underline">Use phone number instead</button>
            </p>
            <p className="text-xs text-[#a89070] text-center">
              Remember your password?{" "}
              <Link href="/auth/login" className="text-[#c9a84c] hover:underline">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
