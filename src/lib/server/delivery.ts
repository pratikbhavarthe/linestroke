import "server-only"

type DeliveryKind = "contact" | "newsletter"

const webhookByKind: Record<DeliveryKind, string | undefined> = {
  contact: process.env.CONTACT_WEBHOOK_URL,
  newsletter: process.env.NEWSLETTER_WEBHOOK_URL,
}

export async function deliverSubmission(kind: DeliveryKind, payload: unknown) {
  const url = webhookByKind[kind]
  if (!url) {
    throw new Error(`${kind.toUpperCase()}_WEBHOOK_URL is not configured`)
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(process.env.FORM_WEBHOOK_TOKEN
        ? { authorization: `Bearer ${process.env.FORM_WEBHOOK_TOKEN}` }
        : {}),
    },
    body: JSON.stringify({ payload, submittedAt: new Date().toISOString() }),
    cache: "no-store",
    signal: AbortSignal.timeout(8_000),
  })

  if (!response.ok) {
    throw new Error(`${kind} delivery failed with status ${response.status}`)
  }
}
