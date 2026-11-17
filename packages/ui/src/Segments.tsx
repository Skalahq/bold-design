import { cn } from "cn"

export function Segments({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex border border-frame", className)} {...props} />
}
