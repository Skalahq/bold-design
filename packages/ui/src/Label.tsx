import { cn } from "cn"

export function Label({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "block mb-[0.4rem] font-mono font-[450] text-[0.6875rem] tracking-[0.08em] uppercase text-ash",
        className,
      )}
      {...props}
    />
  )
}
