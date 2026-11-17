import { cn } from "cn"

export function Mark({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center w-[1.7rem] h-[1.15rem] rounded-full bg-paper text-ink font-mono text-[0.6875rem] font-[450] tracking-[0.04em]",
        className,
      )}
      {...props}
    />
  )
}
