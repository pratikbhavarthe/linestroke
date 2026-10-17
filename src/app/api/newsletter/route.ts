import { flattenFieldErrors, isHoneypotFilled, newsletterSchema } from "@/lib/forms"
import { deliverSubmission } from "@/lib/server/delivery"
import { acceptsJson, isRateLimited, isSameOrigin, readJsonBody } from "@/lib/server/request-security"

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return Response.json({ message: "Invalid origin." }, { status: 403 })
  if (!acceptsJson(request)) return Response.json({ message: "JSON is required." }, { status: 415 })
  if (isRateLimited(request, "newsletter")) return Response.json({ message: "Too many requests. Try again shortly." }, { status: 429 })

  const read = await readJsonBody(request)
  if (!read.ok) {
    const message = read.status === 413 ? "Request is too large." : "Invalid request body."
    return Response.json({ message }, { status: read.status })
  }
  const body = read.body

  // Answer bots exactly like a real success so the honeypot isn't revealed.
  if (isHoneypotFilled(body)) return Response.json({ message: "Check your inbox to confirm your subscription." }, { status: 201 })

  const parsed = newsletterSchema.safeParse(body)
  if (!parsed.success) {
    return Response.json(
      { message: "Enter a valid email address.", errors: flattenFieldErrors(parsed.error) },
      { status: 422 },
    )
  }

  try {
    await deliverSubmission("newsletter", parsed.data)
    return Response.json({ message: "Check your inbox to confirm your subscription." }, { status: 201 })
  } catch (error) {
    console.error("Newsletter delivery failed", error instanceof Error ? error.message : "Unknown error")
    return Response.json({ message: "We couldn’t complete signup. Please try again later." }, { status: 503 })
  }
}
