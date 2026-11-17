"use client"
import { Checkbox, CheckboxIndicator } from "@ui-sdk/react/checkbox"
import { cn } from "cn"

export function CheckBox({ className, ...props }: React.ComponentProps<typeof Checkbox>) {
  return (
    <Checkbox
      className={cn(
        "inline-flex shrink-0 cursor-pointer select-none items-center justify-center align-middle",
        "w-[1.1rem] h-[1.1rem] border border-frame bg-well text-paper",
        "transition-[transform,background-color,border-color] duration-150 ease-out",
        "active:scale-[0.97] motion-reduce:active:scale-none",
        "hover-fine:hover:border-ash",
        "data-checked:border-signal data-checked:bg-action",
        className,
      )}
      {...props}
    >
      <CheckboxIndicator keepMounted>
        <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="h-[0.7rem] w-[0.7rem]">
          <path d="M3 8.5 6.5 12 13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
        </svg>
      </CheckboxIndicator>
    </Checkbox>
  )
}