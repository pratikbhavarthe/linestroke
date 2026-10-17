# Linestroke website

Production website for Linestroke, built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, Motion, GSAP, and Zod.

## Local setup

Requirements: Node.js 22 and pnpm 10 or newer. Dependency overrides live in `pnpm-workspace.yaml`.

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```

Open `http://localhost:3000`. Form requests are validated locally but successful delivery requires real HTTPS webhook URLs in `.env.local`.

## Quality gates

```bash
pnpm lint
pnpm typecheck
pnpm test:coverage
pnpm build
```

`pnpm check` runs the full sequence. CI executes the same gates for pull requests and pushes to `main`.

## Form delivery

- `POST /api/contact` validates inquiries and forwards them to `CONTACT_WEBHOOK_URL`.
- `POST /api/newsletter` validates subscriptions and forwards them to `NEWSLETTER_WEBHOOK_URL`.
- `FORM_WEBHOOK_TOKEN` is sent as a bearer token when configured.
- Both routes enforce JSON, same-origin browser requests, a 16 KB body limit, a honeypot (bots get a fake success), and a per-instance rate limit keyed on `x-real-ip` (falling back to `x-forwarded-for`).

For multi-instance production deployments, add provider-level or distributed rate limiting (for example Vercel Firewall/Rate Limiting, Cloudflare, or a Redis-backed limiter). Never expose webhook credentials through `NEXT_PUBLIC_*` variables.

## Deployment checklist

1. Set the three form environment variables in the production platform.
2. Confirm `https://linestroke.com` matches the canonical domain in `src/lib/site-config.ts`.
3. Configure platform WAF/rate limits for `/api/contact` and `/api/newsletter`.
4. Connect error monitoring and privacy-respecting analytics before launch.
5. Submit `/sitemap.xml` to search consoles and verify `/robots.txt`.
6. Review the privacy policy with counsel and configure webhook retention/deletion rules.
7. Run `pnpm check` and manually test keyboard, mobile, reduced-motion, and form flows.

## Content ownership

Portfolio summaries, statistics, service claims, and legal copy must be verified by Linestroke before publication. Avoid adding testimonials, client logos, or project outcomes without documented permission.

## Content Security Policy

The CSP is a static header set in `next.config.ts`, so every page stays statically prerendered. Next.js bootstraps with inline scripts, so `script-src` includes `'unsafe-inline'`. A nonce-based CSP would require dynamically rendering every page (see `node_modules/next/dist/docs/01-app/02-guides/content-security-policy.md`).
