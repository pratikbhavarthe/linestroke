import "server-only"

const WINDOW_MS = 60_000
const MAX_REQUESTS = 5
const MAX_BODY_BYTES = 16 * 1024
const buckets = new Map<string, { count: number; expiresAt: number }>()

export function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin")
  if (!origin) return true
  return origin === new URL(request.url).origin
}

export function isRateLimited(request: Request, scope: string) {
  // Prefer the proxy-set x-real-ip: the leftmost x-forwarded-for entry is client-controlled
  // unless the platform overwrites the header.
  const forwardedFor = request.headers.get("x-forwarded-for")
  const client = request.headers.get("x-real-ip")?.trim() || forwardedFor?.split(",")[0]?.trim() || "unknown"
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

type JsonBodyResult = { ok: true; body: unknown } | { ok: false; status: 400 | 413 }

/** Reads a JSON body, refusing anything over MAX_BODY_BYTES without buffering it. */
export async function readJsonBody(request: Request): Promise<JsonBodyResult> {
  if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES) return { ok: false, status: 413 }
  if (!request.body) return { ok: false, status: 400 }

  const reader = request.body.getReader()
  const chunks: Uint8Array[] = []
  let size = 0
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    size += value.byteLength
    if (size > MAX_BODY_BYTES) {
      await reader.cancel()
      return { ok: false, status: 413 }
    }
    chunks.push(value)
  }

  try {
    return { ok: true, body: JSON.parse(new TextDecoder().decode(Buffer.concat(chunks))) }
  } catch {
    return { ok: false, status: 400 }
  }
}
