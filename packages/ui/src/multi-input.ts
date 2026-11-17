import {
  createChange,
  createRovingFocus,
  definePrimitive,
  elements,
  type ChangeDetails,
} from "@ui-sdk/core"

type MultiInputReason =
  | "input-change"
  | "paste"
  | "undo"
  | "redo"
  | "imperative"

type MultiInputOptions = {
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (
    value: string[],
    details: ChangeDetails<MultiInputReason>,
  ) => void
}

const multiInput = definePrimitive({
  name: "multi-input",
  options: {
    value: "list",
    defaultValue: "list",
    onValueChange: "callback",
  },
  state: (options: MultiInputOptions) => ({
    value: options.value ?? options.defaultValue ?? [],
    focused: null as string | null,
  }),
  sync: (options) =>
    options.value === undefined ? {} : { value: options.value },
  api: (context) => {
    const change = createChange(context)
    const roving = createRovingFocus(context, {
      slot: "slot",
      key: "focused",
      orientation: () => "horizontal",
      claims: (_state, item) => item.key === "0",
      move: (event, { from, items, rtl }) => {
        if (event.shiftKey || event.ctrlKey || event.metaKey || event.altKey) {
          return
        }
        const by = (
          { ArrowRight: rtl ? -1 : 1, ArrowLeft: rtl ? 1 : -1 } as Record<
            string,
            number
          >
        )[event.key]
        // Home, End, Up and Down keep their native caret behaviour.
        if (by === undefined) return
        const el = from.el as HTMLInputElement
        const start = el.selectionStart ?? 0
        const end = el.selectionEnd ?? 0
        if (by < 0 && !(start === 0 && end === 0)) return
        if (by > 0 && !(start === el.value.length && end === el.value.length)) {
          return
        }
        const index = items.findIndex((item) => item.key === from.key)
        return items[index + by]?.key
      },
    })

    const setWords = (
      words: string[],
      reason: MultiInputReason,
      event?: Event,
    ) => change("value", words, { reason, event })

    const count = () =>
      Math.max(context.store.get().value.length, elements(context, "slot").length)

    const padded = (words: string[]): string[] => {
      const next = words.slice(0, count())
      while (next.length < count()) next.push("")
      return next
    }

    const focusSlot = (index: number, caret: "start" | "end") => {
      const target = elements(context, "slot")[index]
      if (!target) return
      roving.focus(target.key)
      const el = target.el as HTMLInputElement | undefined
      if (!el) return
      const at = caret === "end" ? el.value.length : 0
      el.setSelectionRange(at, at)
    }

    return {
      roving,
      input(index: number, raw: string, event: Event) {
        if (/\s/.test(raw)) {
          // A mobile keyboard or an IME slipped a separator in: hand the rest
          // of the line to the slots that follow.
          const tokens = raw.trim().split(/\s+/).filter(Boolean)
          const words = padded(context.store.get().value)
          let cursor = index
          for (const token of tokens) {
            if (cursor >= words.length) break
            words[cursor++] = token
          }
          const accepted = setWords(words, "input-change", event)
          if (accepted && cursor < words.length) focusSlot(cursor, "start")
          return
        }
        const words = padded(context.store.get().value)
        words[index] = raw
        const inputType = (event as InputEvent).inputType
        const reason: MultiInputReason =
          inputType === "historyUndo"
            ? "undo"
            : inputType === "historyRedo"
              ? "redo"
              : "input-change"
        setWords(words, reason, event)
      },
      paste(index: number, text: string, event: Event): boolean {
        const tokens = text.trim().split(/\s+/).filter(Boolean)
        if (tokens.length < 2) return false
        const words = Array.from({ length: count() }, (_, at) => tokens[at] ?? "")
        const accepted = setWords(words, "paste", event)
        if (accepted) focusSlot(Math.max(words.findIndex((w) => w === ""), 0), "end")
        return true
      },
      keydown(event: KeyboardEvent, el: HTMLElement, key: string) {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          roving.keydown(event, el)
          return
        }
        const input = el as HTMLInputElement
        const index = Number(key)
        const last = index === count() - 1
        if (event.key === " " || event.key === "Enter") {
          const word = input.value.trim()
          if (word === "") {
            if (event.key === " ") event.preventDefault()
            return
          }
          const words = padded(context.store.get().value)
          words[index] = word
          setWords(words, "input-change", event)
          if (event.key === "Enter" && last) return // let the form submit
          event.preventDefault()
          if (!last) focusSlot(index + 1, "start")
          return
        }
        if (
          event.key === "Backspace" &&
          input.value === "" &&
          (input.selectionStart ?? 0) === 0 &&
          index > 0
        ) {
          event.preventDefault()
          focusSlot(index - 1, "end")
        }
      },
      setValue(words: string[], options?: { reason?: MultiInputReason; event?: Event }) {
        return setWords(padded(words), options?.reason ?? "imperative", options?.event)
      },
      clear(options?: { reason?: MultiInputReason; event?: Event }) {
        return setWords(padded([]), options?.reason ?? "imperative", options?.event)
      },
      focus() {
        roving.focus()
      },
    }
  },
  slots: (slot) => ({
    root: slot({
      role: "group",
      attrs: (state) => ({
        "data-filled": state.value.some(Boolean) ? "" : undefined,
        "data-complete":
          state.value.length > 0 && state.value.every(Boolean) ? "" : undefined,
      }),
    }),
    slot: slot<{ value: string; count: number }>({
      props: { value: "string", count: "number" },
      attrs: (state, part) => {
        const index = Number(part.key)
        const word = state.value[index] ?? ""
        return {
          type: "text",
          tabindex: part.api.roving.tabIndex(state, part),
          defaultValue: word,
          autoCapitalize: "none",
          autoCorrect: "off",
          spellCheck: "false",
          autoComplete: "off",
          "aria-label": `Word ${index + 1} of ${part.props.count}`,
          "data-filled": word !== "" ? "" : undefined,
        }
      },
      on: {
        input: (event, { el, key, api }) => {
          if (!el) return
          api.input(Number(key), (el as HTMLInputElement).value, event)
        },
        paste: (event, { key, api }) => {
          const text =
            (event as ClipboardEvent).clipboardData?.getData("text") ?? ""
          if (api.paste(Number(key), text, event)) event.preventDefault()
        },
        keydown: (event, { el, key, api }) => {
          if (!el) return
          api.keydown(event, el, key)
        },
      },
      bind: (el, part) => {
        const unroving = part.api.roving.bind(el, part)
        const input = el as HTMLInputElement
        const write = () => {
          const word = part.store.get().value[Number(part.key)] ?? ""
          if (input.value !== word) input.value = word
        }
        const unwatch = part.store.subscribe(write)
        write()
        return () => {
          unwatch()
          unroving()
        }
      },
    }),
  }),
  agent: { actions: ["setValue", "clear"], secret: true },
})

export { multiInput, type MultiInputOptions, type MultiInputReason }
