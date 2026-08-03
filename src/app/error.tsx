"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Container } from "@/components/ui/container";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error", error.digest ?? error.message);
  }, [error]);

  return (
    <section className="flex min-h-[80svh] items-center py-section-lg">
      <Container className="text-center">
        <p className="font-mono text-meta uppercase text-muted-foreground">Something went wrong</p>
        <h1 className="mx-auto mt-6 max-w-4xl font-display text-h1 text-primary">
          We could not load this page.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-body-lg text-muted-foreground">
          Try again. If the problem continues, return home and start a new session.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="min-h-12 rounded-full bg-primary px-7 font-semibold text-primary-foreground"
          >
            Try again
          </button>
          <Link className="min-h-12 rounded-full border border-border px-7 py-3" href="/">
            Return home
          </Link>
        </div>
      </Container>
    </section>
  );
}
