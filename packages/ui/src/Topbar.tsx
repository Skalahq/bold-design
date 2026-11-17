import { cn } from "cn"

export function Topbar({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      className={cn(
        "flex items-center gap-[1.25rem] px-[1.25rem] py-[0.85rem] border-b border-hairline max-narrow:flex-wrap",
        className,
      )}
      {...props}
    />
  )
}
