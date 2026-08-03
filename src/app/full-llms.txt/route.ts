import { buildLlmsFull } from "@/lib/llms-content";

// Alias of /llms-full.txt (the naming used by the llms.txt spec) kept at this
// path too, since it's the name requested for this project.
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsFull(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
