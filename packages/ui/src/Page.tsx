import { cn } from "cn"

export function Page({ className, ...props }: React.ComponentProps<"main">) {
  return <main className={cn("p-[1.5rem] px-[1.25rem] pb-12 min-w-0", className)} {...props} />
}
