# Poetry in Motion — Repository Research

**Source:** `James-Kabingu/poetry-in-motion` (private)  
**Research date:** 2026-05-27  
**Purpose:** Understand architecture, data model, and readiness for public release under `vektasafe`.

---

## Executive summary

**Poetry in Motion** (branded in-app as **StyleAI**) is a **Next.js 15** fashion-commerce prototype built with **[v0.app](https://v0.app)**. It targets AI-assisted personal styling, African creator marketplaces, sustainability metrics, and circular fashion (trade-in, pre-owned). **All backend persistence is mocked** in `lib/mock-data.ts`; API routes return in-memory or synthetic responses suitable for demos, not production.

The codebase is **~20.6k lines** across TypeScript/React, with **45 API route handlers**, **19 pages**, and **mock datasets** for users, products, creators, collections, and orders.

---

## Technology stack

| Layer | Choice |
|--------|--------|
| Framework | Next.js 15.2.4 (App Router) |
| UI | React 19, Tailwind CSS 4, Radix UI, shadcn-style components |
| Forms / validation | react-hook-form, Zod |
| Charts | Recharts |
| Analytics | `@vercel/analytics` |
| Package manager | pnpm (`pnpm-lock.yaml`) |
| PWA hints | `public/manifest.json`, `public/sw.js` |

---

## Product surface (pages)

| Route | Purpose |
|-------|---------|
| `/` | Marketing landing — StyleAI hero, features, testimonials |
| `/quiz` | Style quiz entry |
| `/shop`, `/shop/[id]` | Product browse and detail |
| `/dashboard` | User dashboard |
| `/recommendations` | Personalized recommendations UI |
| `/creators` | Creator marketplace |
| `/circular` | Circular / trade-in fashion |
| `/referrals` | Referral program |
| `/analytics` | Analytics views |
| `/ai/image-upload` | AI image upload for style analysis |
| `/community/live-sessions` | Live styling sessions |
| `/pricing`, `/support`, `/security`, `/privacy`, `/terms` | Legal and support |
| `/offline` | Offline PWA fallback |
| `/testimonials` | Social proof |

---

## API domains (45 routes)

Grouped by capability:

- **Auth:** login, signup (mock tokens via base64 JSON, no real JWT/crypto)
- **Catalog:** products, categories, favorites, pre-owned
- **Commerce:** cart, orders, subscriptions
- **AI:** image-analysis, outfit-combinations, style-twins (mocked CV/ML responses)
- **Recommendations:** personalized, similar, trending
- **Creators & collections:** CRUD, voting on collections
- **Community:** outfits, reviews, live sessions, styling sessions, notifications, followers
- **Growth:** referrals, claim flow
- **Operations:** support tickets, trade-in, sustainability impact, analytics events, advanced search

**Implementation pattern:** Route handlers import from `lib/mock-data.ts` or return hard-coded JSON. Comments consistently note “in production, use database / real API.”

---

## Data model (`lib/types.ts`)

Core entities:

- **User** — style profile (body type, skin tone, preferences, budget, colors, occasions)
- **Product** — pricing, variants, sustainability block (carbon, water, materials)
- **Order** / **OrderItem** / **Address**
- **Creator** — marketplace seller with earnings and followers
- **Collection** — creator drops with voting lifecycle (`draft` → `voting` → `production` → `available`)
- **TradeIn** — circular economy item returns
- Additional types for referrals, subscriptions, support tickets, etc.

---

## Mock data inventory (`lib/mock-data.ts`)

| Entity | Sample IDs | Notes |
|--------|------------|--------|
| Users | `user-1` (Alex Kariuki) | Nairobi-oriented demo persona |
| Products | `prod-1`–`prod-3` | Blazer, denim, tee; sustainability metadata |
| Creators | `creator-1`, `creator-2` | Amara Designs, Urban Threads (Nairobi / heritage themes) |
| Collections | `col-1`, `col-2` | Summer 2024, Heritage Reimagined |
| Orders | `order-1` | Delivered order to Westlands, Nairobi |

**Extension point:** File header states data is “easily replaceable with real database.”

---

## Security & public-release checklist

| Item | Status |
|------|--------|
| `.env*` in `.gitignore` | Yes |
| Committed secrets / API keys | None found in scan |
| Auth | Demo only — base64 “tokens”, no password hashing |
| README personal Vercel URLs | Present — replace before public push (see updated README) |
| PII in mock data | Fictional `@example.com` emails only |

**Before production:** Add real auth (hashed passwords, JWT/OAuth), database, rate limiting, and remove mock token generation in `app/api/auth/*`.

---

## Branding inconsistency

- Repository name: **poetry-in-motion**
- `package.json` name: **my-v0-project**
- UI brand: **StyleAI**

Recommend aligning names in a follow-up if publishing under Vektasafe.

---

## Suggested next steps (Vektasafe)

1. **Publish** this repo as public `vektasafe/poetry-in-motion`.
2. **Rename** package and README to a single product name (e.g. StyleAI or Poetry in Motion).
3. **Replace** mock layer with Postgres/Supabase + Prisma or similar.
4. **Wire** real AI (vision API) for `/api/ai/image-analysis`.
5. **Add** CI (lint, `next build`) on GitHub Actions.

---

## File statistics

- **~80+** source/assets under app, components, lib, public
- **~20,587** total lines (all file types)
- **Origin:** v0.app sync → Vercel deployment workflow (see original README)
