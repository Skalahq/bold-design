import { cn } from "cn"

export function Display({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "m-0 mb-5 font-medium leading-[0.92] tracking-[-0.055em] text-left break-words max-w-full",
        "text-[clamp(2.7rem,5.55vw,5.5rem)] max-narrow:text-[clamp(2.7rem,12vw,3.5rem)]",
        className,
      )}
      {...props}
    />
  )
}
