import * as React from "react"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

const baseClassName =
  "group bg-background inline-flex w-auto items-center justify-center cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center font-semibold"

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export function InteractiveHoverButton({
  children,
  className,
  asChild = false,
  ...props
}: InteractiveHoverButtonProps) {
  const label =
    asChild && React.isValidElement<{ children?: React.ReactNode }>(children)
      ? children.props.children
      : children

  const content = (
    <div className="grid">
      <div className="col-start-1 row-start-1 flex items-center justify-center gap-2 whitespace-nowrap">
        <div className="bg-primary h-2 w-2 shrink-0 rounded-full transition-all duration-300 group-hover:scale-[100.8]" />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {label}
        </span>
      </div>
      <div aria-hidden="true" className="text-primary-foreground relative z-10 col-start-1 row-start-1 flex translate-x-[150%] items-center justify-center gap-2 whitespace-nowrap opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{label}</span>
        <ArrowRight className="size-4 shrink-0" />
      </div>
    </div>
  )

  if (
    asChild &&
    React.isValidElement<{ className?: string; children?: React.ReactNode }>(
      children
    )
  ) {
    return React.cloneElement(children, {
      className: cn(baseClassName, children.props.className, className),
      children: content,
    })
  }

  return (
    <button className={cn(baseClassName, className)} {...props}>
      {content}
    </button>
  )
}
