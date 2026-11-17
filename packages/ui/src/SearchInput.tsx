import { fieldStyles } from "./field-styles"
import { cn } from "cn"

export function SearchInput({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type="search"
      className={cn(
        fieldStyles(),
        "flex-[1_1_12rem] w-auto min-w-32 max-w-[18rem] h-10 px-[0.7rem] py-0 text-[0.95rem] leading-none",
        "max-narrow:w-full max-narrow:max-w-none",
        className,
      )}
      {...props}
    />
  )
}
