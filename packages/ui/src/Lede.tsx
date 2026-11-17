import { cn } from "cn"

export function Lede({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("m-0 mb-4 max-w-[44rem] text-lede", className)} {...props} />
}
