import Link from "next/link";

import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center py-section-lg">
      <Container className="text-center">
        <p className="font-mono text-meta uppercase text-muted-foreground">404 / Not found</p>
        <h1 className="mx-auto mt-6 max-w-4xl font-display text-h1 text-primary">
          This page is outside the drawing boundary.
        </h1>
        <Link className="mt-10 inline-flex min-h-12 items-center rounded-full bg-primary px-7 font-semibold text-primary-foreground" href="/">
          Return home
        </Link>
      </Container>
    </section>
  );
}
