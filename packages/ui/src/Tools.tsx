import { cn } from "cn"

export function Tools({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("ml-auto flex items-center gap-3 min-w-0 max-narrow:order-3 max-narrow:w-full max-narrow:ml-0", className)}
      {...props}
    />
  )
}
