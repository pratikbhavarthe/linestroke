import { buildLlmsFull } from "@/lib/llms-content";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsFull(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
