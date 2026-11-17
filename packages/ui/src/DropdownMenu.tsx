import { Menu, MenuContent, MenuTrigger } from "@ui-sdk/react/menu"
import { cn } from "cn"

export function DropdownMenu({
  label,
  trigger,
  children,
  className,
  contentClassName,
}: {
  label: string
  trigger: React.ReactNode
  children: React.ReactNode
  className?: string
  contentClassName?: string
}) {
  return (
    <Menu>
      <MenuTrigger aria-label={label} className={className}>
        {trigger}
      </MenuTrigger>
      <MenuContent align="end" sideOffset={8} className={cn("font-sans", contentClassName)}>
        {children}
      </MenuContent>
    </Menu>
  )
}
