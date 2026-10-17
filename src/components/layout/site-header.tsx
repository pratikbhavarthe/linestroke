import Link from "next/link"

import { Container } from "@/components/ui/container"
import { MobileMenu } from "@/components/navigation/mobile-menu"
import { NavLink } from "@/components/navigation/nav-link"
import { PrimaryNav } from "@/components/navigation/primary-nav"
import { navItems } from "@/data/nav"

const ctaItem = navItems[navItems.length - 1]

function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-foreground text-ink">
      <Container className="grid h-16 grid-cols-[1fr_auto] items-center gap-6 md:h-20 lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="justify-self-start font-display text-xl font-bold tracking-[-0.03em] md:text-2xl"
        >
          LINESTROKE
        </Link>

        <PrimaryNav />

        <div className="flex items-center gap-2 justify-self-end">
          <NavLink
            href={ctaItem.href}
            activeClassName="bg-pink text-signal"
            className="hidden h-12 items-center rounded-full bg-signal px-7 text-[15px] font-semibold text-sky transition-colors hover:bg-pink hover:text-signal sm:inline-flex"
          >
            Start a project
          </NavLink>
          <MobileMenu />
        </div>
      </Container>
    </header>
  )
}

export { SiteHeader }
