"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

interface NavLinkProps extends React.ComponentProps<typeof Link> {
  activeClassName?: string
}

function NavLink({ href, className, activeClassName, ...props }: NavLinkProps) {
  const pathname = usePathname()
  const hrefString = typeof href === "string" ? href : (href.pathname ?? "")
  const isActive = pathname === hrefString || pathname.startsWith(`${hrefString}/`)

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(className, isActive && (activeClassName ?? "text-primary"))}
      {...props}
    />
  )
}

export { NavLink }
