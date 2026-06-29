"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const passwordsMatch = password === confirm
  const isStrong = password.length >= 8
  const canSubmit = password && confirm && passwordsMatch && isStrong

  const strength = password.length === 0 ? 0 : password.length < 6 ? 1 : password.length < 8 ? 2 : /[A-Z]/.test(password) && /[0-9]/.test(password) ? 4 : 3
  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"]
  const strengthColor = ["", "bg-red-500", "bg-yellow-500", "bg-blue-500", "bg-green-500"]

  const handleSubmit = () => {
    if (!canSubmit) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setDone(true)
    }, 1500)
  }

  if (done) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-sm mx-auto">
          <div className="flex justify-center mb-6">
            <img src="/images/illustrations/success/profile-updated.png" alt="Password reset" className="h-48 w-48 object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-3">Password Reset!</h1>
          <p className="text-muted-foreground mb-8">Your password has been updated successfully. Sign in with your new password.</p>
          <Link href="/auth/login">
            <Button size="lg" className="w-full">Sign In</Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/auth/forgot-password" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <div className="flex justify-center mb-4">
            <img src="/images/logos/logo-light.png" alt="Poetry In Motion" className="h-12 w-12 object-contain dark:hidden" />
            <img src="/images/logos/logo-dark.png" alt="Poetry In Motion" className="h-12 w-12 object-contain hidden dark:block" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Set new password</h1>
          <p className="text-muted-foreground text-sm">Choose a strong password for your account.</p>
        </div>

        <Card className="p-6 space-y-4">
          {/* New Password */}
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min. 8 characters"
                className="w-full px-3 py-2 pr-10 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {/* Strength bar */}
            {password.length > 0 && (
              <div className="mt-2">
                <div className="flex gap-1 mb-1">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className={`h-1 flex-1 rounded-full transition-all ${i <= strength ? strengthColor[strength] : "bg-muted"}`} />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">Password strength: <span className="font-medium text-foreground">{strengthLabel[strength]}</span></p>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Re-enter your password"
                className="w-full px-3 py-2 pr-10 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {confirm.length > 0 && !passwordsMatch && (
              <p className="text-xs text-red-500 mt-1">Passwords do not match</p>
            )}
            {confirm.length > 0 && passwordsMatch && (
              <p className="text-xs text-green-600 mt-1">Passwords match</p>
            )}
          </div>

          <Button size="lg" className="w-full" onClick={handleSubmit} disabled={!canSubmit || loading}>
            {loading ? "Updating..." : "Reset Password"}
          </Button>
        </Card>
      </div>
    </main>
  )
}
