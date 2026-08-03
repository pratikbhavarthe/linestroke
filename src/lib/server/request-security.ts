import "server-only"

const WINDOW_MS = 60_000
const MAX_REQUESTS = 5
const buckets = new Map<string, { count: number; expiresAt: number }>()

export function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin")
  if (!origin) return true
  return origin === new URL(request.url).origin
}

export function isRateLimited(request: Request, scope: string) {
  const forwardedFor = request.headers.get("x-forwarded-for")
  const client = forwardedFor?.split(",")[0]?.trim() || "unknown"
  const key = `${scope}:${client}`
  const now = Date.now()
  const bucket = buckets.get(key)

  if (!bucket || bucket.expiresAt <= now) {
    buckets.set(key, { count: 1, expiresAt: now + WINDOW_MS })
    if (buckets.size > 10_000) {
      for (const [bucketKey, value] of buckets) {
        if (value.expiresAt <= now) buckets.delete(bucketKey)
      }
    }
    return false
  }

  bucket.count += 1
  return bucket.count > MAX_REQUESTS
}

export function acceptsJson(request: Request) {
  return request.headers.get("content-type")?.startsWith("application/json") ?? false
}
