import { fieldStyles } from "./field-styles"
import { cn } from "cn"

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(fieldStyles(), "min-h-32 resize-y font-mono text-[0.95rem] font-[450] tracking-normal", className)}
      {...props}
    />
  )
}
