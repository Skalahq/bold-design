import Link from "next/link"
import { cn } from "cn"

export function NavItem({
  active,
  href,
  className,
  children,
  ...props
}: React.ComponentProps<"button"> & { active?: boolean; href?: string }) {
  const classes = cn(
    "text-ash bg-transparent border-0 p-0 text-left text-base no-underline cursor-pointer",
    "transition-[transform,color] duration-150 ease-out",
    "active:scale-[0.97] motion-reduce:active:scale-none",
    "hover-fine:hover:text-paper max-narrow:py-[0.4rem]",
    active && "text-paper",
    className,
  )
  if (href !== undefined) {
    return (
      <Link {...(props as React.ComponentProps<typeof Link>)} href={href} className={classes} aria-current={active ? "page" : undefined}>
        {children}
      </Link>
    )
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
