import { cn } from "cn"

export function PhraseItem({
  number,
  word,
  className,
}: {
  number: number
  word: string
  className?: string
}) {
  return (
    <li className={cn("font-mono text-base text-paper", className)}>
      <span className="text-ash mr-[0.4rem]">{number}</span>
      {word}
    </li>
  )
}
