"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Home, MapPin, Plus, Edit2, Trash2, X, Check } from "lucide-react"

type Address = {
  id: number
  label: string
  name: string
  line1: string
  line2: string
  phone: string
  primary: boolean
}

const initialAddresses: Address[] = [
  {
    id: 1,
    label: "Home",
    name: "James Kabingu",
    line1: "Westlands, Waiyaki Way",
    line2: "Nairobi, Kenya",
    phone: "+254 700 000 000",
    primary: true,
  },
  {
    id: 2,
    label: "Work",
    name: "James Kabingu",
    line1: "Riverside Drive",
    line2: "Nairobi, Kenya",
    phone: "+254 711 222 333",
    primary: false,
  },
]

const blankDraft = {
  label: "Home",
  name: "",
  line1: "",
  line2: "",
  phone: "",
  primary: false,
}

export default function AddressesPage() {
  const [addresses, setAddresses] = useState(initialAddresses)
  const [draft, setDraft] = useState(blankDraft)
  const [editingId, setEditingId] = useState<number | null>(null)

  const beginAdd = () => {
    setEditingId(null)
    setDraft(blankDraft)
  }

  const beginEdit = (address: Address) => {
    setEditingId(address.id)
    setDraft({
      label: address.label,
      name: address.name,
      line1: address.line1,
      line2: address.line2,
      phone: address.phone,
      primary: address.primary,
    })
  }

  const saveAddress = () => {
    if (!draft.name || !draft.line1 || !draft.phone) return

    setAddresses((prev) => {
      if (editingId) {
        return prev.map((address) =>
          address.id === editingId
            ? { ...address, ...draft }
            : draft.primary
              ? { ...address, primary: false }
              : address,
        )
      }

      const nextId = Math.max(...prev.map((address) => address.id), 0) + 1
      return [
        ...(draft.primary ? prev.map((address) => ({ ...address, primary: false })) : prev),
        { id: nextId, ...draft },
      ]
    })

    setDraft(blankDraft)
    setEditingId(null)
  }

  const removeAddress = (id: number) => {
    setAddresses((prev) => prev.filter((address) => address.id !== id))
  }

  const setPrimary = (id: number) => {
    setAddresses((prev) => prev.map((address) => ({ ...address, primary: address.id === id })))
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#1a1108] dark:text-[#faf8f5]">Addresses</h1>
        <Button onClick={beginAdd} className="gap-2 rounded-xl bg-[#3d2c1e] text-white hover:bg-[#2a1f14] dark:bg-[#c9a84c] dark:text-black">
          <Plus className="h-3.5 w-3.5" /> Add address
        </Button>
      </div>

      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
        <div className="grid gap-4">
          {addresses.map((address) => (
            <div key={address.id} className="bg-white dark:bg-[#1a1108] rounded-2xl border border-[#e8e0d4] dark:border-[#2a1f14] p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 min-w-0">
                  <div className="h-11 w-11 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                    {address.primary ? <Home className="h-4.5 w-4.5 text-[#c9a84c]" /> : <MapPin className="h-4.5 w-4.5 text-[#c9a84c]" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-[#1a1108] dark:text-[#faf8f5]">{address.label}</p>
                      {address.primary && <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/20">Primary</span>}
                    </div>
                    <p className="text-sm text-[#1a1108] dark:text-[#faf8f5]">{address.name}</p>
                    <p className="text-sm text-[#a89070]">{address.line1}</p>
                    <p className="text-sm text-[#a89070]">{address.line2}</p>
                    <p className="text-sm text-[#a89070] mt-2">{address.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 flex-wrap justify-end">
                  {!address.primary && (
                    <Button variant="outline" size="sm" onClick={() => setPrimary(address.id)} className="rounded-xl border-[#e8e0d4] dark:border-[#2a1f14] text-[#3d2c1e] dark:text-[#faf8f5] gap-2">
                      <Check className="h-3.5 w-3.5" /> Set primary
                    </Button>
                  )}
                  <Button variant="outline" size="sm" onClick={() => beginEdit(address)} className="rounded-xl border-[#e8e0d4] dark:border-[#2a1f14] text-[#3d2c1e] dark:text-[#faf8f5] gap-2">
                    <Edit2 className="h-3.5 w-3.5" /> Edit
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => removeAddress(address.id)} className="rounded-xl border-red-200 text-red-500 hover:text-red-600 hover:border-red-300 gap-2">
                    <Trash2 className="h-3.5 w-3.5" /> Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-[#1a1108] rounded-2xl border border-[#e8e0d4] dark:border-[#2a1f14] p-6 h-fit sticky top-24">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-sm font-semibold text-[#1a1108] dark:text-[#faf8f5]">{editingId ? "Edit address" : "Add address"}</p>
              <p className="text-xs text-[#a89070]">Keep your delivery details ready for checkout.</p>
            </div>
            {(editingId || draft.name || draft.line1 || draft.line2 || draft.phone) && (
              <button onClick={() => { setEditingId(null); setDraft(blankDraft) }} className="text-[#a89070] hover:text-[#c9a84c] transition">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs uppercase tracking-wider text-[#a89070] mb-2 block">Label</label>
              <select
                value={draft.label}
                onChange={(e) => setDraft((prev) => ({ ...prev, label: e.target.value }))}
                className="w-full rounded-xl border border-[#e8e0d4] dark:border-[#2a1f14] bg-transparent px-3 py-2 text-sm text-[#1a1108] dark:text-[#faf8f5]"
              >
                <option>Home</option>
                <option>Work</option>
                <option>Other</option>
              </select>
            </div>
            {[
              ["name", "Full name"],
              ["line1", "Address line 1"],
              ["line2", "Address line 2"],
              ["phone", "Phone number"],
            ].map(([field, label]) => (
              <div key={field}>
                <label className="text-xs uppercase tracking-wider text-[#a89070] mb-2 block">{label}</label>
                <input
                  value={draft[field as keyof typeof draft] as string}
                  onChange={(e) => setDraft((prev) => ({ ...prev, [field]: e.target.value }))}
                  placeholder={label}
                  className="w-full rounded-xl border border-[#e8e0d4] dark:border-[#2a1f14] bg-transparent px-3 py-2 text-sm text-[#1a1108] dark:text-[#faf8f5] placeholder:text-[#a89070]"
                />
              </div>
            ))}

            <label className="flex items-center gap-3 text-sm text-[#3d2c1e] dark:text-[#faf8f5]">
              <input
                type="checkbox"
                checked={draft.primary}
                onChange={(e) => setDraft((prev) => ({ ...prev, primary: e.target.checked }))}
                className="h-4 w-4 accent-[#c9a84c]"
              />
              Set as primary address
            </label>

            <Button onClick={saveAddress} className="w-full rounded-xl bg-[#3d2c1e] text-white hover:bg-[#2a1f14] dark:bg-[#c9a84c] dark:text-black">
              {editingId ? "Update address" : "Save address"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}