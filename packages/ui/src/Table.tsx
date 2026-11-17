import { cn } from "cn"

export function Table({ className, ...props }: React.ComponentProps<"table">) {
  return <table className={cn("w-full border-collapse", className)} {...props} />
}
