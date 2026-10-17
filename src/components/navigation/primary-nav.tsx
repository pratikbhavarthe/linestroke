import { NavLink } from "@/components/navigation/nav-link"
import { navItems } from "@/data/nav"

// The last item (Contact) is the header's call-to-action, rendered separately.
const linkItems = navItems.slice(0, -1)

function PrimaryNav() {
  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-1 xl:gap-3">
        {linkItems.map((item) => (
          <li key={item.href}>
            <NavLink
              href={item.href}
              activeClassName="text-signal"
              className="block rounded-full px-4 py-2 text-[15px] font-medium text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { PrimaryNav }
