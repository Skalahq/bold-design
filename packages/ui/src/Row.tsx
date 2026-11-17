import { cn } from "cn"

export function Row({
  clickable,
  selected,
  className,
  ...props
}: React.ComponentProps<"tr"> & { clickable?: boolean; selected?: boolean }) {
  return (
    <tr
      data-clickable={clickable ? "true" : undefined}
      className={cn(
        "transition-colors duration-150",
        selected && "bg-paper text-ink [&>td]:text-ink",
        clickable && "cursor-pointer",
        clickable &&
          !selected &&
          "hover-fine:hover:bg-lift hover-fine:hover:[&>td]:text-paper hover-fine:focus-visible:outline-2 hover-fine:focus-visible:outline-signal hover-fine:focus-visible:-outline-offset-2",
        className,
      )}
      {...props}
    />
  )
}
