"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Camera, Mail, Phone, MapPin, Calendar, Edit2, Save, X, Trash2, LogOut, CheckCircle } from "lucide-react"

const DEFAULT_PROFILE = {
  name: "James Kabingu",
  email: "james@example.com",
  phone: "+254 700 000 000",
  location: "Nairobi, Kenya",
  dob: "",
  styleTags: ["Minimal", "Earth tones", "Streetwear", "Afro-fusion", "Casual chic"],
}

export default function AccountPage() {
  const router = useRouter()
  const [profile, setProfile] = useState(DEFAULT_PROFILE)
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(DEFAULT_PROFILE)
  const [saved, setSaved] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState("")

  useEffect(() => {
    const stored = localStorage.getItem("pim-profile")
    if (stored) {
      const parsed = JSON.parse(stored)
      setProfile(parsed)
      setDraft(parsed)
    }
  }, [])

  const handleEdit = () => {
    setDraft(profile)
    setEditing(true)
  }

  const handleSave = () => {
    setProfile(draft)
    localStorage.setItem("pim-profile", JSON.stringify(draft))
    setEditing(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const handleCancel = () => {
    setDraft(profile)
    setEditing(false)
  }

  const handleSignOut = () => {
    localStorage.removeItem("pim-profile")
    localStorage.removeItem("pim-settings")
    router.push("/")
  }

  const handleDeleteAccount = () => {
    if (deleteConfirm.toLowerCase() !== "delete") return
    localStorage.clear()
    router.push("/")
  }

  const removeTag = (tag: string) => {
    setDraft((prev) => ({ ...prev, styleTags: prev.styleTags.filter((t) => t !== tag) }))
  }

  return (
    <div className="flex flex-col gap-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#1a1108] dark:text-[#faf8f5]">My Profile</h1>
        <div className="flex items-center gap-2">
          {saved && (
            <span className="flex items-center gap-1.5 text-sm text-green-600 font-medium">
              <CheckCircle className="h-4 w-4" /> Saved
            </span>
          )}
          {editing ? (
            <>
              <Button onClick={handleCancel} variant="outline" size="sm" className="gap-2 rounded-xl border-[#e8e0d4] dark:border-[#2a1f14] bg-transparent text-sm">
                <X className="h-3.5 w-3.5" /> Cancel
              </Button>
              <Button onClick={handleSave} size="sm" className="gap-2 rounded-xl bg-[#3d2c1e] text-white hover:bg-[#2a1f14] dark:bg-[#c9a84c] dark:text-black text-sm">
                <Save className="h-3.5 w-3.5" /> Save
              </Button>
            </>
          ) : (
            <Button onClick={handleEdit} variant="outline" size="sm" className="gap-2 border-[#e8e0d4] dark:border-[#2a1f14] text-[#3d2c1e] dark:text-[#faf8f5] hover:border-[#c9a84c] hover:text-[#c9a84c] rounded-xl text-sm bg-transparent">
              <Edit2 className="h-3.5 w-3.5" /> Edit Profile
            </Button>
          )}
        </div>
      </div>

      {/* Profile header card */}
      <div className="bg-white dark:bg-[#1a1108] rounded-2xl border border-[#e8e0d4] dark:border-[#2a1f14] overflow-hidden">
        <div className="relative h-32 bg-gradient-to-r from-[#3d2c1e] to-[#c9a84c]/60">
          <Image src="/images/banners/shopping.png" alt="Banner" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center opacity-30" />
        </div>
        <div className="px-6 pb-6">
          <div className="relative -mt-10 mb-4 inline-block">
            <div className="relative h-20 w-20 rounded-full border-4 border-white dark:border-[#1a1108] bg-[#c9a84c]/20 overflow-hidden">
              <Image src="/images/illustrations/empty/profile.png" alt="Profile" fill sizes="80px" className="object-cover" />
            </div>
            {editing && (
              <button className="absolute bottom-0 right-0 h-7 w-7 rounded-full bg-[#c9a84c] flex items-center justify-center border-2 border-white dark:border-[#1a1108] hover:bg-[#b8973b] transition">
                <Camera className="h-3.5 w-3.5 text-black" />
              </button>
            )}
          </div>
          {editing ? (
            <input
              value={draft.name}
              onChange={(e) => setDraft({ ...draft, name: e.target.value })}
              className="text-xl font-bold text-[#1a1108] dark:text-[#faf8f5] bg-transparent border-b-2 border-[#c9a84c] focus:outline-none w-full max-w-xs mb-1"
            />
          ) : (
            <h2 className="text-xl font-bold text-[#1a1108] dark:text-[#faf8f5]">{profile.name}</h2>
          )}
          <p className="text-sm text-[#a89070]">Member since June 2025</p>
        </div>
      </div>

      {/* Info grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { icon: Mail, label: "Email address", field: "email" as const, type: "email" },
          { icon: Phone, label: "Phone number", field: "phone" as const, type: "tel" },
          { icon: MapPin, label: "Location", field: "location" as const, type: "text" },
          { icon: Calendar, label: "Date of birth", field: "dob" as const, type: "date" },
        ].map((item) => {
          const Icon = item.icon
          return (
            <div key={item.label} className="bg-white dark:bg-[#1a1108] rounded-2xl border border-[#e8e0d4] dark:border-[#2a1f14] p-5 flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                <Icon className="h-4 w-4 text-[#c9a84c]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-[#a89070] mb-1">{item.label}</p>
                {editing ? (
                  <input
                    type={item.type}
                    value={draft[item.field]}
                    onChange={(e) => setDraft({ ...draft, [item.field]: e.target.value })}
                    placeholder={`Enter ${item.label.toLowerCase()}`}
                    className="w-full text-sm font-medium text-[#1a1108] dark:text-[#faf8f5] bg-transparent border-b border-[#c9a84c]/50 focus:border-[#c9a84c] focus:outline-none pb-0.5"
                  />
                ) : (
                  <p className="text-sm font-medium text-[#1a1108] dark:text-[#faf8f5]">
                    {profile[item.field] || <span className="text-[#a89070]">Not set</span>}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Style profile */}
      <div className="bg-white dark:bg-[#1a1108] rounded-2xl border border-[#e8e0d4] dark:border-[#2a1f14] p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-[#1a1108] dark:text-[#faf8f5]">Style Profile</h3>
          <Link href="/quiz" className="text-xs text-[#c9a84c] hover:underline">Retake quiz</Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {(editing ? draft.styleTags : profile.styleTags).map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#c9a84c]/10 text-xs font-medium text-[#3d2c1e] dark:text-[#c9a84c] border border-[#c9a84c]/20">
              {tag}
              {editing && (
                <button onClick={() => removeTag(tag)} className="hover:text-red-500 transition">
                  <X className="h-3 w-3" />
                </button>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { value: "12", label: "Orders", href: "/account/orders" },
          { value: "3", label: "Wishlist", href: "/account/wishlist" },
          { value: "3", label: "Reviews", href: "#" },
        ].map((stat) => (
          <Link key={stat.label} href={stat.href} className="bg-white dark:bg-[#1a1108] rounded-2xl border border-[#e8e0d4] dark:border-[#2a1f14] p-5 text-center hover:border-[#c9a84c]/40 transition">
            <p className="text-2xl font-bold text-[#c9a84c]">{stat.value}</p>
            <p className="text-xs text-[#a89070] mt-1">{stat.label}</p>
          </Link>
        ))}
      </div>

      {/* Account actions */}
      <div className="bg-white dark:bg-[#1a1108] rounded-2xl border border-[#e8e0d4] dark:border-[#2a1f14] p-6 space-y-3">
        <h3 className="font-semibold text-[#1a1108] dark:text-[#faf8f5] mb-4">Account Actions</h3>
        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-[#e8e0d4] dark:border-[#2a1f14] hover:bg-[#faf8f5] dark:hover:bg-[#2a1f14] transition text-left"
        >
          <LogOut className="h-4 w-4 text-[#a89070]" />
          <span className="text-sm text-[#3d2c1e] dark:text-[#faf8f5]">Sign Out</span>
        </button>
        <button
          onClick={() => setShowDeleteModal(true)}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-red-200 dark:border-red-900/30 hover:bg-red-50 dark:hover:bg-red-950/20 transition text-left"
        >
          <Trash2 className="h-4 w-4 text-red-400" />
          <span className="text-sm text-red-500">Delete Account</span>
        </button>
      </div>

      {/* Delete confirmation modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white dark:bg-[#1a1108] rounded-2xl border border-[#e8e0d4] dark:border-[#2a1f14] p-6 max-w-sm w-full shadow-2xl">
            <h3 className="font-bold text-[#1a1108] dark:text-[#faf8f5] mb-2">Delete Account</h3>
            <p className="text-sm text-[#a89070] mb-4">This action is permanent and cannot be undone. Type <strong>delete</strong> below to confirm.</p>
            <input
              type="text"
              value={deleteConfirm}
              onChange={(e) => setDeleteConfirm(e.target.value)}
              placeholder="Type delete to confirm"
              className="w-full px-3 py-2 text-sm rounded-lg border border-[#e8e0d4] dark:border-[#2a1f14] bg-transparent text-[#1a1108] dark:text-[#faf8f5] focus:outline-none focus:border-red-400 mb-4"
            />
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 bg-transparent border-[#e8e0d4] dark:border-[#2a1f14]"
                onClick={() => { setShowDeleteModal(false); setDeleteConfirm("") }}
              >
                Cancel
              </Button>
              <Button
                className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                disabled={deleteConfirm.toLowerCase() !== "delete"}
                onClick={handleDeleteAccount}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
