import { cn } from "cn"

const collapseBase =
  "max-narrow:flex-col max-narrow:items-start max-narrow:gap-[0.65rem] max-narrow:w-full max-narrow:order-4"

const collapseClosed =
  "max-narrow:opacity-0 max-narrow:-translate-y-1 max-narrow:max-h-0 max-narrow:overflow-hidden max-narrow:pointer-events-none max-narrow:invisible max-narrow:[transition:opacity_160ms_var(--ease-out),transform_160ms_var(--ease-out),max-height_180ms_var(--ease-out),visibility_0s_linear_160ms]"

const collapseOpen =
  "max-narrow:opacity-100 max-narrow:translate-y-0 max-narrow:max-h-56 max-narrow:pointer-events-auto max-narrow:visible max-narrow:[transition:opacity_160ms_var(--ease-out),transform_160ms_var(--ease-out),max-height_180ms_var(--ease-out),visibility_0s_linear_0s]"

export function Nav({ open, className, ...props }: React.ComponentProps<"nav"> & { open?: boolean }) {
  return (
    <nav
      className={cn(
        "flex items-center gap-4",
        collapseBase,
        open ? collapseOpen : collapseClosed,
        "motion-reduce:max-narrow:[transition:none]",
        className,
      )}
      {...props}
    />
  )
}
