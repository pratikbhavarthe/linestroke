"use client"

import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavLink } from "@/components/navigation/nav-link"
import { navItems } from "@/data/nav"

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-xs bg-background">
        <SheetHeader>
          <SheetTitle className="font-display text-h3">Menu</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile" className="px-8">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <SheetClose asChild>
                  <NavLink
                    href={item.href}
                    className="block py-3 font-display text-h3 text-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </NavLink>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export { MobileMenu }
