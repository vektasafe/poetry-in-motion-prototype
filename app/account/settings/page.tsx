"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Bell, Lock, ShieldCheck, MoonStar, Globe2, Smartphone, Check } from "lucide-react"

const defaultProfile = {
  name: "James Kabingu",
  email: "james@example.com",
  phone: "+254 700 000 000",
}

const defaultPreferences = {
  email: true,
  sms: false,
  promos: true,
  recommendations: true,
  privacy: false,
  theme: "system",
}

const settings = [
  { icon: Bell, title: "Notifications", description: "Order updates, promotions, and style reminders." },
  { icon: Lock, title: "Password", description: "Update your login credentials and recovery info." },
  { icon: ShieldCheck, title: "Privacy", description: "Manage what data is visible to creators and sellers." },
  { icon: MoonStar, title: "Appearance", description: "Switch between light and dark themes." },
  { icon: Globe2, title: "Language", description: "Choose your preferred language and region." },
  { icon: Smartphone, title: "Devices", description: "Review active sessions and connected devices." },
]

export default function SettingsPage() {
  const [profile, setProfile] = useState(defaultProfile)
  const [preferences, setPreferences] = useState(defaultPreferences)

  useEffect(() => {
    const saved = localStorage.getItem("pim-settings")
    if (saved) {
      const parsed = JSON.parse(saved)
      setProfile(parsed.profile ?? defaultProfile)
      setPreferences(parsed.preferences ?? defaultPreferences)
    }
  }, [])

  const saveSettings = () => {
    localStorage.setItem("pim-settings", JSON.stringify({ profile, preferences }))
    alert("Settings saved")
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#1a1108] dark:text-[#faf8f5]">Settings</h1>
        <Button onClick={saveSettings} className="rounded-xl bg-[#3d2c1e] text-white hover:bg-[#2a1f14] dark:bg-[#c9a84c] dark:text-black">
          Save changes
        </Button>
      </div>

      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
        <div className="bg-white dark:bg-[#1a1108] rounded-2xl border border-[#e8e0d4] dark:border-[#2a1f14] p-6 space-y-5 h-fit">
          <h2 className="font-semibold text-[#1a1108] dark:text-[#faf8f5]">Account</h2>
          {[
            ["name", "Full name"],
            ["email", "Email address"],
            ["phone", "Phone number"],
          ].map(([field, label]) => (
            <div key={field}>
              <label className="text-xs uppercase tracking-wider text-[#a89070] mb-2 block">{label}</label>
              <input
                value={profile[field as keyof typeof profile]}
                onChange={(e) => setProfile((prev) => ({ ...prev, [field]: e.target.value }))}
                className="w-full rounded-xl border border-[#e8e0d4] dark:border-[#2a1f14] bg-transparent px-3 py-2 text-sm text-[#1a1108] dark:text-[#faf8f5] placeholder:text-[#a89070]"
              />
            </div>
          ))}

          <div>
            <p className="text-xs uppercase tracking-wider text-[#a89070] mb-2">Theme preference</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                ["system", "System"],
                ["light", "Light"],
                ["dark", "Dark"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setPreferences((prev) => ({ ...prev, theme: value }))}
                  className={`rounded-xl border px-3 py-2 text-sm transition ${
                    preferences.theme === value
                      ? "border-[#c9a84c] bg-[#c9a84c]/10 text-[#3d2c1e] dark:text-[#faf8f5]"
                      : "border-[#e8e0d4] dark:border-[#2a1f14] text-[#6b5744] dark:text-[#a89070]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {settings.map((setting) => {
            const Icon = setting.icon
            return (
              <div key={setting.title} className="bg-white dark:bg-[#1a1108] rounded-2xl border border-[#e8e0d4] dark:border-[#2a1f14] p-5 flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-4.5 w-4.5 text-[#c9a84c]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-[#1a1108] dark:text-[#faf8f5]">{setting.title}</p>
                  <p className="text-sm text-[#a89070] mt-1">{setting.description}</p>
                </div>
              </div>
            )
          })}

          <div className="bg-white dark:bg-[#1a1108] rounded-2xl border border-[#e8e0d4] dark:border-[#2a1f14] p-5 space-y-3">
            <p className="font-semibold text-[#1a1108] dark:text-[#faf8f5]">Notification controls</p>
            {[
              ["email", "Email order updates"],
              ["sms", "SMS delivery alerts"],
              ["promos", "Promotional offers"],
              ["recommendations", "Style recommendations"],
              ["privacy", "Share anonymous usage data"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setPreferences((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))}
                className="w-full flex items-center justify-between rounded-xl border border-[#e8e0d4] dark:border-[#2a1f14] px-4 py-3 text-left"
              >
                <span className="text-sm text-[#3d2c1e] dark:text-[#faf8f5]">{label}</span>
                <span
                  className={`inline-flex h-6 w-11 items-center rounded-full p-1 transition ${
                    preferences[key as keyof typeof preferences] ? "bg-[#c9a84c]" : "bg-[#e8e0d4] dark:bg-[#2a1f14]"
                  }`}
                >
                  <span
                    className={`h-4 w-4 rounded-full bg-white transition ${
                      preferences[key as keyof typeof preferences] ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </span>
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#c9a84c]/10 to-transparent rounded-2xl border border-[#c9a84c]/20 p-5 flex items-center gap-4">
            <Check className="h-5 w-5 text-[#c9a84c] flex-shrink-0" />
            <p className="text-sm text-[#3d2c1e] dark:text-[#faf8f5]">Your settings are ready to be saved locally for the next prototype demo.</p>
          </div>
        </div>
      </div>
    </div>
  )
}