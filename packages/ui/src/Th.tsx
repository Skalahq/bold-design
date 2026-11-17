import { cn } from "cn"

export function Th({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      className={cn(
        "text-left font-mono font-[450] text-[0.6875rem] tracking-[0.08em] uppercase text-ash",
        "px-[0.85rem] py-[0.7rem] border-b border-hairline tabular-nums",
        className,
      )}
      {...props}
    />
  )
}
