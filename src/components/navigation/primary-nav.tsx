import { NavLink } from "@/components/navigation/nav-link"
import { navItems } from "@/data/nav"

function PrimaryNav() {
  const linkItems = navItems.slice(0, -1)
  const ctaItem = navItems[navItems.length - 1]

  return (
    <nav aria-label="Primary" className="hidden items-center md:flex">
      <ul className="flex items-center">
        {linkItems.map((item) => (
          <li key={item.href}>
            <NavLink
              href={item.href}
              activeClassName="text-background"
              className="block rounded-xl px-4 py-2.5 font-mono text-meta uppercase tracking-(--text-meta--letter-spacing) text-background/60 transition-colors hover:text-background"
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <NavLink
        href={ctaItem.href}
        activeClassName="bg-pink text-signal"
        className="ml-1 rounded-xl bg-signal px-5 py-2.5 font-mono text-meta uppercase tracking-(--text-meta--letter-spacing) text-sky transition-colors hover:bg-pink hover:text-signal"
      >
        {ctaItem.label}
      </NavLink>
    </nav>
  )
}

export { PrimaryNav }
