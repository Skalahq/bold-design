import { cn } from "cn"

export function Field({ className, ...props }: React.ComponentProps<"label">) {
  return <label className={cn("block mb-[0.9rem]", className)} {...props} />
}
