import { cn } from "cn"

type FrameProps =
  | (React.ComponentProps<"div"> & { as?: "div"; pad?: boolean; narrow?: boolean })
  | (React.ComponentProps<"form"> & { as: "form"; pad?: boolean; narrow?: boolean })
  | (React.ComponentProps<"section"> & { as: "section"; pad?: boolean; narrow?: boolean })

function frameClasses(pad: boolean | undefined, narrow: boolean | undefined, className: string | undefined) {
  return cn(
    "border border-frame bg-canvas overflow-x-auto overflow-y-clip",
    pad && "p-4",
    narrow && "max-w-[36rem]",
    className,
  )
}

export function Frame(props: FrameProps) {
  const { pad, narrow, className } = props
  const classes = frameClasses(pad, narrow, className)
  if (props.as === "form") {
    const { as: _as, pad: _pad, narrow: _narrow, className: _className, ...rest } = props
    return <form className={classes} {...rest} />
  }
  if (props.as === "section") {
    const { as: _as, pad: _pad, narrow: _narrow, className: _className, ...rest } = props
    return <section className={classes} {...rest} />
  }
  const { as: _as, pad: _pad, narrow: _narrow, className: _className, ...rest } = props
  return <div className={classes} {...rest} />
}
