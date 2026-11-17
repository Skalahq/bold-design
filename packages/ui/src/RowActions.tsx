import { cn } from "cn"

export function RowActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 p-4 mt-4",
        "max-narrow:flex-col max-narrow:items-stretch max-narrow:[&_[data-slot=word]]:self-start",
        className,
      )}
      {...props}
    />
  )
}
