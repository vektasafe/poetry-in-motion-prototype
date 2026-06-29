"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function VerifyOTPPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [verified, setVerified] = useState(false)
  const [loading, setLoading] = useState(false)
  const [resent, setResent] = useState(false)
  const inputs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return
    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)
    if (value && index < 5) {
      inputs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  const handleVerify = () => {
    if (otp.join("").length < 6) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setVerified(true)
    }, 1500)
  }

  const handleResend = () => {
    setResent(true)
    setOtp(["", "", "", "", "", ""])
    inputs.current[0]?.focus()
    setTimeout(() => setResent(false), 3000)
  }

  if (verified) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-sm mx-auto">
          <div className="flex justify-center mb-6">
            <img src="/images/illustrations/success/account-created.png" alt="Verified" className="h-48 w-48 object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-3">Email Verified!</h1>
          <p className="text-muted-foreground mb-8">Your account has been verified successfully. Welcome to Poetry In Motion.</p>
          <Link href="/account">
            <Button size="lg" className="w-full">Go to My Account</Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/auth/signup" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <div className="flex justify-center mb-4">
            <img src="/images/logos/logo-light.png" alt="Poetry In Motion" className="h-12 w-12 object-contain dark:hidden" />
            <img src="/images/logos/logo-dark.png" alt="Poetry In Motion" className="h-12 w-12 object-contain hidden dark:block" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Check your email</h1>
          <p className="text-muted-foreground text-sm">We sent a 6-digit code to your email address. Enter it below to verify your account.</p>
        </div>

        <Card className="p-6">
          <div className="flex justify-center gap-3 mb-6">
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={(el) => { inputs.current[i] = el }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className="h-12 w-10 text-center text-lg font-bold rounded-lg border-2 border-border bg-background text-foreground focus:outline-none focus:border-accent transition"
              />
            ))}
          </div>

          <Button
            size="lg"
            className="w-full mb-4"
            onClick={handleVerify}
            disabled={otp.join("").length < 6 || loading}
          >
            {loading ? "Verifying..." : "Verify Email"}
          </Button>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Did not receive the code?</p>
            <button
              onClick={handleResend}
              className="text-sm text-accent hover:underline font-medium"
            >
              {resent ? "Code resent!" : "Resend code"}
            </button>
          </div>
        </Card>
      </div>
    </main>
  )
}
