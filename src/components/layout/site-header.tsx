import Link from "next/link"

import { Container } from "@/components/ui/container"
import { MobileMenu } from "@/components/navigation/mobile-menu"
import { PrimaryNav } from "@/components/navigation/primary-nav"

function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 py-4 md:py-6">
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className="rounded-2xl bg-foreground px-4 py-2.5 font-display text-lg font-semibold tracking-tight text-background shadow-sm"
        >
          LINESTROKE
        </Link>

        <div className="flex items-center gap-1 rounded-2xl bg-foreground p-1 text-background shadow-sm">
          <PrimaryNav />
          <MobileMenu />
        </div>
      </Container>
    </header>
  )
}

export { SiteHeader }
