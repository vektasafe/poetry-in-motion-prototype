/**
 * CREATOR REGISTRY
 * -----------------
 * Single source of truth for creators on the platform.
 * Each product in lib/products.ts references a creator via `creatorId`.
 *
 * TO ADD A NEW CREATOR:
 * Copy an object below, give it a unique `id`, then reference that `id`
 * as `creatorId` on any products they own in lib/products.ts.
 */

export interface Creator {
  id: string
  name: string
  bio: string
  avatar: string
  location: string
  verified: boolean
  revenueShare: number // percentage, e.g. 45 means 45%
  totalDesigns: number
  totalVotes: number
  producedCollections: number
  totalEarnings: number // in USD
}

export const creators: Creator[] = [
  {
    id: "zawadi-designs",
    name: "Zawadi Designs",
    bio: "Fusing traditional African print detailing with modern tailoring, based in Nairobi.",
    avatar: "/images/logos/logo-olive.png",
    location: "Nairobi, Kenya",
    verified: true,
    revenueShare: 45,
    totalDesigns: 12,
    totalVotes: 3450,
    producedCollections: 3,
    totalEarnings: 4250,
  },
  {
    id: "mama-pima-studios",
    name: "Mama Pima Studios",
    bio: "Handwoven accessories crafted from sustainable sisal fibre by local artisans.",
    avatar: "/images/logos/logo-beige.png",
    location: "Mombasa, Kenya",
    verified: true,
    revenueShare: 40,
    totalDesigns: 8,
    totalVotes: 1820,
    producedCollections: 2,
    totalEarnings: 2100,
  },
  {
    id: "jua-kali-craft",
    name: "Jua Kali Craft",
    bio: "Hand-beaded leather goods made using traditional Jua Kali artisan techniques.",
    avatar: "/images/logos/logo-dark.png",
    location: "Kisumu, Kenya",
    verified: false,
    revenueShare: 40,
    totalDesigns: 5,
    totalVotes: 640,
    producedCollections: 1,
    totalEarnings: 890,
  },
]

export function getCreatorById(id: string): Creator | undefined {
  return creators.find((c) => c.id === id)
}
