import { cn } from "@/lib/utils"

function Container({
  className,
  as: Tag = "div",
  ...props
}: React.ComponentProps<"div"> & { as?: "div" | "section" | "header" | "footer" }) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-[1600px] px-gutter", className)}
      {...props}
    />
  )
}

export { Container }
