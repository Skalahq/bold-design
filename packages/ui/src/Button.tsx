import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

export const buttonVariants = cva(
  "select-none whitespace-nowrap transition-[transform,background-color,color,border-color,opacity] duration-150 ease-out active:scale-[0.97] motion-reduce:active:scale-none disabled:opacity-55 disabled:cursor-not-allowed aria-busy:cursor-progress",
  {
    variants: {
      variant: {
        action:
          "border-0 bg-action text-paper px-4 py-3 text-base leading-[1.2] tracking-[-0.02em] hover-fine:hover:not-disabled:bg-action-hover max-narrow:w-full",
        paper:
          "border-0 bg-paper text-ink px-4 py-3 text-base leading-[1.2] tracking-[-0.02em] hover-fine:hover:not-disabled:bg-paper-press max-narrow:w-full",
        word:
          "border-0 bg-transparent text-ash px-[0.15rem] py-[0.45rem] -mx-[0.15rem] -my-[0.45rem] text-base underline underline-offset-[0.2em] hover-fine:hover:text-paper",
        quick:
          "inline-flex items-center border-0 bg-paper text-ink h-10 px-[0.85rem] text-[0.95rem] font-medium leading-none hover-fine:hover:bg-paper-press",
        menu:
          "hidden max-narrow:inline-flex bg-transparent text-paper border border-frame px-[0.7rem] py-2 text-[0.95rem] hover-fine:hover:border-ash",
      },
      size: {
        default: "",
        sm: "px-[0.7rem] py-[0.55rem] text-[0.7rem] leading-[1.2] tracking-[-0.02em]",
      },
    },
    defaultVariants: {
      variant: "action",
      size: "default",
    },
  },
)

export function Button({
  variant,
  size,
  className,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      data-slot={variant ?? "action"}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}
