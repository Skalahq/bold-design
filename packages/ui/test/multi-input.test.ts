import { GlobalRegistrator } from "@happy-dom/global-registrator"
import { checkServer, mount } from "@ui-sdk/core/testing"
import { afterAll, expect, test } from "bun:test"
import { multiInput } from "../src/multi-input"

// GlobalRegistrator replaces process-wide globals (fetch, Request, Headers…)
// and would leak into the other test files' fetch-based RPC tests.
afterAll(() => GlobalRegistrator.unregister())
GlobalRegistrator.register()

const slots = (n: number) =>
  Array.from({ length: n }, (_, i) => `<slot value="${i}" count="${n}"></slot>`).join("")

const pasteInto = (el: HTMLInputElement, text: string) => {
  const event = new Event("paste", { bubbles: true, cancelable: true }) as ClipboardEvent
  Object.defineProperty(event, "clipboardData", { value: { getData: () => text } })
  el.dispatchEvent(event)
  return event.defaultPrevented
}

const slotOf = (
  view: ReturnType<typeof mount<typeof multiInput>>,
  index: number,
) => view.part("slot", String(index)) as HTMLInputElement

test("pasting space-separated words fills every slot", async () => {
  const view = mount(multiInput, {}, `<root>${slots(3)}</root>`)
  try {
    expect(pasteInto(slotOf(view, 0), "alpha beta gamma")).toBe(true)
    await view.settle()
    expect(view.state.value).toEqual(["alpha", "beta", "gamma"])
    expect(slotOf(view, 2).value).toBe("gamma")
    expect(view.changes.at(-1)).toMatchObject({ key: "value", reason: "paste" })
  } finally {
    view.unmount()
  }
})

test("typing commits each word and space advances to the next slot", async () => {
  const view = mount(multiInput, {}, `<root>${slots(3)}</root>`)
  try {
    slotOf(view, 0).focus()
    await view.type("alpha")
    await view.keys(" ")
    await view.settle()
    expect(view.state.value).toEqual(["alpha", "", ""])
    expect(document.activeElement).toBe(slotOf(view, 1))

    await view.type("beta")
    await view.keys(" ")
    await view.settle()
    expect(document.activeElement).toBe(slotOf(view, 2))

    await view.type("gamma")
    await view.keys(" ")
    await view.settle()
    expect(view.state.value).toEqual(["alpha", "beta", "gamma"])
    expect(document.activeElement).toBe(slotOf(view, 2))
  } finally {
    view.unmount()
  }
})

test("backspace on an empty slot moves to the previous one", async () => {
  const view = mount(multiInput, {}, `<root>${slots(3)}</root>`)
  try {
    slotOf(view, 0).focus()
    await view.type("alpha beta")
    await view.keys(" ")
    await view.settle()
    expect(document.activeElement).toBe(slotOf(view, 2))

    await view.keys("Backspace")
    await view.settle()
    expect(document.activeElement).toBe(slotOf(view, 1))
    expect(view.state.value).toEqual(["alpha", "beta", ""])
  } finally {
    view.unmount()
  }
})

test("arrows cross slot boundaries only at the caret edges", async () => {
  const view = mount(multiInput, {}, `<root>${slots(3)}</root>`)
  try {
    view.api.setValue(["alpha", "beta", ""])
    const first = slotOf(view, 0)
    first.focus()
    first.setSelectionRange(3, 3)
    await view.keys("ArrowRight")
    expect(document.activeElement).toBe(first)

    first.setSelectionRange(5, 5)
    await view.keys("ArrowRight")
    expect(document.activeElement).toBe(slotOf(view, 1))

    const second = slotOf(view, 1)
    second.setSelectionRange(0, 0)
    await view.keys("ArrowLeft")
    expect(document.activeElement).toBe(slotOf(view, 0))

    // Mid-word arrows stay native.
    second.focus()
    second.setSelectionRange(2, 2)
    await view.keys("ArrowLeft")
    expect(document.activeElement).toBe(second)
  } finally {
    view.unmount()
  }
})

test("the group keeps a single tab stop", async () => {
  const view = mount(multiInput, {}, `<root>${slots(3)}</root>`)
  try {
    slotOf(view, 0).focus()
    await view.keys("ArrowRight")
    expect([0, 1, 2].map((index) => slotOf(view, index).tabIndex)).toEqual([-1, 0, -1])
  } finally {
    view.unmount()
  }
})

test("setValue and clear report imperative changes and fill the inputs", async () => {
  const view = mount(multiInput, {}, `<root>${slots(2)}</root>`)
  try {
    expect(view.api.setValue(["one", "two"])).toBe(true)
    await view.settle()
    expect(view.state.value).toEqual(["one", "two"])
    expect(slotOf(view, 1).value).toBe("two")
    expect(view.changes.at(-1)).toMatchObject({ reason: "imperative" })

    expect(view.api.clear()).toBe(true)
    await view.settle()
    expect(view.state.value).toEqual(["", ""])
    expect(slotOf(view, 0).value).toBe("")
  } finally {
    view.unmount()
  }
})

test("single-word pastes stay native and input events still record the word", async () => {
  const view = mount(multiInput, {}, `<root>${slots(2)}</root>`)
  try {
    slotOf(view, 0).focus()
    await view.type("alpha")
    await view.settle()
    expect(view.state.value).toEqual(["alpha", ""])
    expect(view.changes.filter((change) => change.reason === "input-change").length).toBeGreaterThan(0)
  } finally {
    view.unmount()
  }
})

test("data attributes track filled and complete", async () => {
  const view = mount(multiInput, {}, `<root>${slots(2)}</root>`)
  try {
    const root = view.root
    expect(root.hasAttribute("data-filled")).toBe(false)
    expect(root.hasAttribute("data-complete")).toBe(false)
    view.api.setValue(["one", "two"])
    await view.settle()
    expect(root.hasAttribute("data-filled")).toBe(true)
    expect(root.hasAttribute("data-complete")).toBe(true)
    expect(slotOf(view, 1).hasAttribute("data-filled")).toBe(true)
  } finally {
    view.unmount()
  }
})

test("every slot is named and the change callback can cancel", async () => {
  const view = mount(
    multiInput,
    {
      onValueChange: (_value, details) => {
        if (details.event?.type === "paste") details.cancel()
      },
    },
    `<root>${slots(2)}</root>`,
  )
  try {
    expect(slotOf(view, 0).getAttribute("aria-label")).toBe("Word 1 of 2")
    expect(slotOf(view, 1).getAttribute("aria-label")).toBe("Word 2 of 2")

    expect(pasteInto(slotOf(view, 0), "nope nope")).toBe(true)
    await view.settle()
    expect(view.state.value).toEqual([])
    expect(slotOf(view, 0).value).toBe("")
  } finally {
    view.unmount()
  }
})

test("renders on the server", () => {
  checkServer(multiInput, {}, `<root><slot value="0" count="2"></slot><slot value="1" count="2"></slot></root>`)
})
