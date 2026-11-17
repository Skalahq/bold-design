import { cn } from "cn"

export function Phrase({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      className={cn("list-none grid grid-cols-3 gap-x-4 gap-y-2 m-0 mb-4 p-0 max-narrow:grid-cols-1", className)}
      {...props}
    />
  )
}
