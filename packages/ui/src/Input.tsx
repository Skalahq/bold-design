import { fieldStyles } from "./field-styles"
import { cn } from "cn"

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return <input className={cn(fieldStyles(), className)} {...props} />
}
