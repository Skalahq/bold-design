import { cva } from "class-variance-authority"

export const fieldStyles = cva(
  "w-full bg-well text-paper border border-frame px-[0.75rem] py-[0.7rem] caret-action focus-visible:border-signal focus-visible:outline-offset-0",
)
