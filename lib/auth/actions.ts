"use server"

import { db } from "@/lib/db"
import { users, profiles } from "@/lib/db/schema"
import { hashPassword, verifyPassword } from "@/lib/auth/password"
import { createSession, destroySession } from "@/lib/auth/session"
import { eq } from "drizzle-orm"

export async function signup(input: { email: string; password: string; name: string }) {
  const { email, password, name } = input

  const existing = await db.query.users.findFirst({ where: eq(users.email, email) })
  if (existing) {
    return { error: "An account with this email already exists." }
  }

  const passwordHash = await hashPassword(password)

  const [user] = await db.insert(users).values({ email, passwordHash }).returning()
  await db.insert(profiles).values({ userId: user.id, name })

  await createSession(user.id)
  return { success: true }
}

export async function login(input: { email: string; password: string }) {
  const { email, password } = input

  const user = await db.query.users.findFirst({ where: eq(users.email, email) })
  if (!user) {
    return { error: "Invalid email or password." }
  }

  const valid = await verifyPassword(password, user.passwordHash)
  if (!valid) {
    return { error: "Invalid email or password." }
  }

  await createSession(user.id)
  return { success: true }
}

export async function logout() {
  await destroySession()
  return { success: true }
}
