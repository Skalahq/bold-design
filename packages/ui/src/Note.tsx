import { cn } from "cn"

export function Note({
  tone,
  className,
  ...props
}: React.ComponentProps<"p"> & { tone?: "danger" }) {
  return (
    <p
      data-tone={tone}
      className={cn("mt-3 mb-0 text-base text-lede data-[tone=danger]:text-danger", className)}
      {...props}
    />
  )
}
