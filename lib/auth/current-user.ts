import "server-only"
import { db } from "@/lib/db"
import { users, profiles } from "@/lib/db/schema"
import { getSession } from "@/lib/auth/session"
import { eq } from "drizzle-orm"

export async function getCurrentUser() {
  const session = await getSession()
  if (!session) return null

  const result = await db
    .select({
      id: users.id,
      email: users.email,
      phone: users.phone,
      profile: profiles,
    })
    .from(users)
    .leftJoin(profiles, eq(profiles.userId, users.id))
    .where(eq(users.id, session.userId))
    .limit(1)

  return result[0] ?? null
}
