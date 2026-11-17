import { cn } from "cn"

export function Segment({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      type="button"
      className={cn(
        "flex-1 bg-well text-ash border-0 border-r border-frame px-[0.4rem] py-[0.55rem]",
        "font-mono text-[0.6875rem] font-[450] tracking-[0.08em] uppercase last:border-r-0",
        "transition-[transform,background-color,color,border-color] duration-150 ease-out",
        "active:scale-[0.97] motion-reduce:active:scale-none",
        "aria-pressed:bg-action aria-pressed:text-paper aria-selected:bg-action aria-selected:text-paper",
        "hover-fine:hover:not-aria-pressed:not-aria-selected:text-paper",
        className,
      )}
      {...props}
    />
  )
}
