import { cn } from "cn"

function initials(name?: string | null, email?: string | null) {
  const words = (name ?? "").trim().split(/\s+/).filter(Boolean)
  if (words.length > 0) {
    return words
      .slice(0, 2)
      .map((word) => word[0]!.toUpperCase())
      .join("")
  }
  return (email?.[0] ?? "?").toUpperCase()
}

export function Avatar({
  name,
  email,
  className,
}: {
  name?: string | null
  email?: string | null
  className?: string
}) {
  return (
    <span
      role="img"
      aria-label={name?.trim() || email || "User"}
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-frame bg-mute text-ash",
        "h-10 w-10 text-[0.95rem] font-medium tracking-[-0.02em]",
        className,
      )}
    >
      {initials(name, email)}
    </span>
  )
}
