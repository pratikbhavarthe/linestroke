import { contactSchema, flattenFieldErrors } from "@/lib/forms"
import { deliverSubmission } from "@/lib/server/delivery"
import { acceptsJson, isRateLimited, isSameOrigin } from "@/lib/server/request-security"

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return Response.json({ message: "Invalid origin." }, { status: 403 })
  if (!acceptsJson(request)) return Response.json({ message: "JSON is required." }, { status: 415 })
  if (isRateLimited(request, "contact")) return Response.json({ message: "Too many requests. Try again shortly." }, { status: 429 })

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json({ message: "Invalid request body." }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return Response.json(
      { message: "Check the highlighted fields.", errors: flattenFieldErrors(parsed.error) },
      { status: 422 },
    )
  }

  try {
    await deliverSubmission("contact", parsed.data)
    return Response.json({ message: "Thanks. We’ll be in touch shortly." }, { status: 201 })
  } catch (error) {
    console.error("Contact submission delivery failed", error instanceof Error ? error.message : "Unknown error")
    return Response.json({ message: "We couldn’t send your inquiry. Please email hello@linestroke.com." }, { status: 503 })
  }
}
