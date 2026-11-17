import { cn } from "cn"

export function Subnav({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      className={cn(
        "flex items-center gap-[1.25rem] px-[1.25rem] py-[0.55rem] border-b border-hairline",
        "max-narrow:gap-[0.9rem] max-narrow:overflow-x-auto",
        className,
      )}
      {...props}
    />
  )
}
