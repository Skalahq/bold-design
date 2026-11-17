import { cn } from "cn"

export function Bar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-start justify-between gap-4 px-4 py-[0.85rem] border-b border-hairline",
        "max-narrow:flex-wrap",
        "[&>p]:m-0",
        "[&_[data-slot=action]]:shrink-0 [&_[data-slot=paper]]:shrink-0",
        "max-narrow:[&_[data-slot=action]]:w-auto max-narrow:[&_[data-slot=paper]]:w-auto",
        "[&_[data-slot=word]]:shrink-0 [&_[data-slot=word]]:self-center [&_[data-slot=word]]:whitespace-nowrap",
        "max-narrow:[&_[data-slot=word]]:self-start",
        className,
      )}
      {...props}
    />
  )
}
