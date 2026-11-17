"use client"

import { createParts, type PartProps } from "@ui-sdk/react/primitive"
import { cn } from "cn"
import { multiInput, type MultiInputOptions } from "./multi-input"

const parts = createParts(multiInput, { root: "div", slot: "input" })

const slotStyles =
  "w-28 bg-well text-paper border border-frame px-[0.6rem] py-[0.55rem] " +
  "font-mono text-[0.95rem] font-[450] caret-action " +
  "focus-visible:border-signal focus-visible:outline-offset-0"

type MultiInputProps = MultiInputOptions & {
  count?: number
  autoFocus?: boolean
} & Omit<PartProps<"div">, "defaultValue">

export function MultiInput({
  count = 12,
  autoFocus,
  className,
  ...props
}: MultiInputProps) {
  return (
    <parts.Root {...props} className={cn("flex flex-wrap gap-[0.4rem]", className)}>
      {Array.from({ length: count }, (_, index) => (
        <parts.Slot
          key={index}
          value={String(index)}
          count={count}
          autoFocus={autoFocus && index === 0 ? true : undefined}
          className={slotStyles}
        />
      ))}
    </parts.Root>
  )
}