import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Eye, Mail, Lock, User, Phone, ArrowLeft } from "lucide-react"

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] dark:bg-[#0e0a06] flex">

      {/* Left panel - branding */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#1a1108] flex-col justify-between p-12">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/community.png"
            alt="Poetry In Motion Community"
            fill
            className="object-cover object-center opacity-40"
          />
        </div>
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12">
              <Image src="/images/logos/logo-dark.png" alt="Poetry In Motion" fill className="object-contain" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold tracking-widest text-[#c9a84c] uppercase">Poetry In Motion</span>
              <span className="text-xs text-[#a89070] italic">Mali Safi.</span>
            </div>
          </Link>
        </div>
        <div className="relative z-10 flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-white leading-tight">
            Join the movement.<br />Own your style.
          </h2>
          <p className="text-[#a89070] text-lg">Thousands of trendsetters already styling with us.</p>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="h-9 w-9 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#3d2c1e] border-2 border-[#1a1108] flex items-center justify-center text-xs font-bold text-white">{i}</div>
              ))}
            </div>
            <span className="text-sm text-[#a89070]">5,000+ happy customers</span>
          </div>
        </div>
        <div className="relative z-10 text-xs text-[#6b5744]">
          &copy; 2025 Poetry In Motion. Mali Safi.
        </div>
      </div>

      {/* Right panel - form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 overflow-y-auto">
        <div className="max-w-md w-full mx-auto">

          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#6b5744] dark:text-[#a89070] hover:text-[#3d2c1e] dark:hover:text-[#c9a84c] transition mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>

          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-8 lg:hidden">
            <div className="relative h-10 w-10">
              <Image src="/images/logos/logo-light.png" alt="Poetry In Motion" fill className="object-contain dark:hidden" />
              <Image src="/images/logos/logo-dark.png" alt="Poetry In Motion" fill className="object-contain hidden dark:block" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold tracking-widest text-[#3d2c1e] dark:text-[#c9a84c] uppercase">Poetry In Motion</span>
              <span className="text-xs text-[#c9a84c] italic">Mali Safi.</span>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-[#1a1108] dark:text-[#faf8f5] mb-2">Create your account</h1>
          <p className="text-[#6b5744] dark:text-[#a89070] mb-8">Start your style journey with Poetry In Motion.</p>

          {/* Google OAuth */}
          <button className="w-full flex items-center justify-center gap-3 border border-[#e8e0d4] dark:border-[#2a1f14] rounded-xl py-3 px-4 text-sm font-medium text-[#3d2c1e] dark:text-[#faf8f5] hover:bg-[#f0e8dc] dark:hover:bg-[#1a1108] transition mb-6">
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-[#e8e0d4] dark:bg-[#2a1f14]" />
            <span className="text-xs text-[#a89070]">or sign up with email</span>
            <div className="flex-1 h-px bg-[#e8e0d4] dark:bg-[#2a1f14]" />
          </div>

          <div className="flex flex-col gap-4">
            {/* Full name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#3d2c1e] dark:text-[#faf8f5]">Full name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#a89070]" />
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#e8e0d4] dark:border-[#2a1f14] bg-white dark:bg-[#1a1108] text-[#1a1108] dark:text-[#faf8f5] placeholder-[#a89070] text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c] transition"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#3d2c1e] dark:text-[#faf8f5]">Email address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#a89070]" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#e8e0d4] dark:border-[#2a1f14] bg-white dark:bg-[#1a1108] text-[#1a1108] dark:text-[#faf8f5] placeholder-[#a89070] text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c] transition"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#3d2c1e] dark:text-[#faf8f5]">Phone number <span className="text-[#a89070] font-normal">(optional)</span></label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#a89070]" />
                <input
                  type="tel"
                  placeholder="+254 700 000 000"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#e8e0d4] dark:border-[#2a1f14] bg-white dark:bg-[#1a1108] text-[#1a1108] dark:text-[#faf8f5] placeholder-[#a89070] text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c] transition"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#3d2c1e] dark:text-[#faf8f5]">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#a89070]" />
                <input
                  type="password"
                  placeholder="Min. 8 characters"
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-[#e8e0d4] dark:border-[#2a1f14] bg-white dark:bg-[#1a1108] text-[#1a1108] dark:text-[#faf8f5] placeholder-[#a89070] text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c] transition"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a89070] hover:text-[#3d2c1e] dark:hover:text-[#faf8f5]">
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Confirm password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#3d2c1e] dark:text-[#faf8f5]">Confirm password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#a89070]" />
                <input
                  type="password"
                  placeholder="Repeat your password"
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-[#e8e0d4] dark:border-[#2a1f14] bg-white dark:bg-[#1a1108] text-[#1a1108] dark:text-[#faf8f5] placeholder-[#a89070] text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c] transition"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a89070] hover:text-[#3d2c1e] dark:hover:text-[#faf8f5]">
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Account type */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#3d2c1e] dark:text-[#faf8f5]">I am joining as</label>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center gap-2 border border-[#c9a84c] rounded-xl px-4 py-3 cursor-pointer bg-[#c9a84c]/10">
                  <input type="radio" name="account_type" value="customer" defaultChecked className="accent-[#c9a84c]" />
                  <span className="text-sm text-[#3d2c1e] dark:text-[#faf8f5]">Customer</span>
                </label>
                <label className="flex items-center gap-2 border border-[#e8e0d4] dark:border-[#2a1f14] rounded-xl px-4 py-3 cursor-pointer hover:border-[#c9a84c] transition">
                  <input type="radio" name="account_type" value="creator" className="accent-[#c9a84c]" />
                  <span className="text-sm text-[#3d2c1e] dark:text-[#faf8f5]">Creator / Seller</span>
                </label>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-0.5 accent-[#c9a84c]" />
              <span className="text-xs text-[#6b5744] dark:text-[#a89070] leading-relaxed">
                I agree to the{" "}
                <Link href="/terms" className="text-[#c9a84c] hover:underline">Terms of Service</Link>
                {" "}and{" "}
                <Link href="/privacy" className="text-[#c9a84c] hover:underline">Privacy Policy</Link>
              </span>
            </label>

            <Button className="w-full py-3 rounded-xl bg-[#3d2c1e] text-white hover:bg-[#2a1f14] dark:bg-[#c9a84c] dark:text-black dark:hover:bg-[#b8973b] font-semibold mt-2">
              Create Account
            </Button>
          </div>

          <p className="text-center text-sm text-[#6b5744] dark:text-[#a89070] mt-6">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-[#c9a84c] font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
