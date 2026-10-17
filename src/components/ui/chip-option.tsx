"use client"

import { cn } from "@/lib/utils"

interface ChipOptionProps {
  id: string
  name: string
  value: string
  label: string
  type?: "checkbox" | "radio"
  checked: boolean
  onChange: (value: string, checked: boolean) => void
  tone?: "default" | "accent"
}

function ChipOption({
  id,
  name,
  value,
  label,
  type = "checkbox",
  checked,
  onChange,
  tone = "default",
}: ChipOptionProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "inline-flex cursor-pointer items-center rounded-full border px-4 py-2 text-body font-medium transition-colors select-none has-focus-visible:outline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-current",
        tone === "accent"
          ? checked
            ? "border-background bg-background text-foreground"
            : "border-primary-foreground/50 bg-transparent text-primary-foreground/85 hover:border-primary-foreground hover:text-primary-foreground"
          : checked
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-transparent text-foreground/80 hover:border-primary/50 hover:text-foreground"
      )}
    >
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={(event) => onChange(value, event.target.checked)}
        className="sr-only"
      />
      {label}
    </label>
  )
}

export { ChipOption }
