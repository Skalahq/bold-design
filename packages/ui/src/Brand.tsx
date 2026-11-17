import Link from "next/link"
import { cn } from "cn"

export function Brand({
  href = "/",
  className,
  ...props
}: Omit<React.ComponentProps<typeof Link>, "href"> & { href?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-[0.55rem] no-underline text-paper font-medium tracking-[-0.03em]",
        "transition-[transform,opacity] duration-150 ease-out",
        "active:scale-[0.97] motion-reduce:active:scale-none",
        "hover-fine:hover:opacity-82",
        className,
      )}
      {...props}
    />
  )
}
