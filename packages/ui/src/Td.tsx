import { cn } from "cn"

export function Td({
  mono,
  mask,
  code,
  className,
  ...props
}: React.ComponentProps<"td"> & { mono?: boolean; mask?: boolean; code?: boolean }) {
  return (
    <td
      className={cn(
        "px-[0.85rem] py-[0.7rem] border-b border-hairline text-base tabular-nums transition-colors duration-150",
        mono && "font-mono text-[0.95rem] font-[450]",
        mono && !mask && "tracking-normal",
        code && "font-mono text-[0.95rem] text-code",
        mask && "tracking-[0.16em] text-ash",
        className,
      )}
      {...props}
    />
  )
}
