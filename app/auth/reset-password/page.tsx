import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lock, Eye, ArrowLeft, CheckCircle2 } from "lucide-react"

export default function ResetPasswordPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] dark:bg-[#0e0a06] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        <Link href="/auth/verify-otp" className="inline-flex items-center gap-2 text-sm text-[#6b5744] dark:text-[#a89070] hover:text-[#3d2c1e] dark:hover:text-[#c9a84c] transition mb-8">
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

          <div className="h-14 w-14 rounded-2xl bg-[#c9a84c]/10 flex items-center justify-center mb-6">
            <Lock className="h-7 w-7 text-[#c9a84c]" />
          </div>

          <h1 className="text-2xl font-bold text-[#1a1108] dark:text-[#faf8f5] mb-2">Set new password</h1>
          <p className="text-sm text-[#6b5744] dark:text-[#a89070] mb-6 leading-relaxed">
            Your new password must be different from your previous password.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#3d2c1e] dark:text-[#faf8f5]">New password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#a89070]" />
                <input
                  type="password"
                  placeholder="Min. 8 characters"
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-[#e8e0d4] dark:border-[#2a1f14] bg-[#faf8f5] dark:bg-[#0e0a06] text-[#1a1108] dark:text-[#faf8f5] placeholder-[#a89070] text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c] transition"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a89070] hover:text-[#3d2c1e] dark:hover:text-[#faf8f5]">
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#3d2c1e] dark:text-[#faf8f5]">Confirm new password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#a89070]" />
                <input
                  type="password"
                  placeholder="Repeat new password"
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-[#e8e0d4] dark:border-[#2a1f14] bg-[#faf8f5] dark:bg-[#0e0a06] text-[#1a1108] dark:text-[#faf8f5] placeholder-[#a89070] text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c] transition"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a89070] hover:text-[#3d2c1e] dark:hover:text-[#faf8f5]">
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Password requirements */}
            <div className="flex flex-col gap-2 p-4 rounded-xl bg-[#faf8f5] dark:bg-[#0e0a06] border border-[#e8e0d4] dark:border-[#2a1f14]">
              <p className="text-xs font-medium text-[#3d2c1e] dark:text-[#a89070] mb-1">Password requirements</p>
              {[
                "At least 8 characters",
                "One uppercase letter",
                "One number",
                "One special character",
              ].map((req) => (
                <div key={req} className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#a89070]" />
                  <span className="text-xs text-[#a89070]">{req}</span>
                </div>
              ))}
            </div>

            <Button asChild className="w-full py-3 rounded-xl bg-[#3d2c1e] text-white hover:bg-[#2a1f14] dark:bg-[#c9a84c] dark:text-black dark:hover:bg-[#b8973b] font-semibold mt-2">
              <Link href="/auth/login">Reset Password</Link>
            </Button>
          </div>

          <p className="text-center text-xs text-[#a89070] mt-6">
            Remember your password?{" "}
            <Link href="/auth/login" className="text-[#c9a84c] hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </main>
  )
}
