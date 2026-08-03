import { buildLlmsSummary } from "@/lib/llms-content";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsSummary(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
