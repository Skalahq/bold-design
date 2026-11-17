# Costume

A measured drawing of an interface. Near-black ground, hairline frames, square corners, type large enough to be the structure. One blue. It is the action.

The costume transfers whole. A dashboard, a product shell, and an article use these tokens. They do not get a lighter operational theme.

## Tokens

```css
:root {
  --canvas: #101010;
  --well: #0a0a0a;
  --paper: #fafafa;
  --ink: #0a0a0a;
  --lift: #161616;
  --ash: #a1a1a1;
  --lede: #d4d4d4;
  --mute: #262626;
  --frame: #303030;
  --hairline: #ffffff1a;
  --action: #2466c3;
  --action-hover: #2d74d0;
  --signal: #5fa1f3;
  --code: #6fa7ee;
  --sans: "Geist", ui-sans-serif, system-ui, sans-serif;
  --mono: "Geist Mono", ui-monospace, Menlo, monospace;
}
```

| Token | Use |
| --- | --- |
| Canvas | Page ground |
| Well | Blueprint, code, input interior |
| Lift | One reading panel, slightly raised |
| Paper / Ink | Inverse button and selected row |
| Frame | 1px group line |
| Hairline | Divider inside a frame |
| Action | The one solid button in a region |
| Signal | Focus ring, callout, live flash |
| Code | Identifiers in prose and source |
| Ash | Meta, indexes, unselected nav |
| Lede | Section ledes and article body |

Radius is `0`. The only pill is a wordmark mark, such as a short badge in the logo. Controls are square.

## Type

- Display: Geist 500, `clamp(2.7rem, 5.55vw, 5.5rem)`, line-height 0.92, tracking -0.055em. Left. No label above it.
- Headline: Geist 500, `clamp(2.4rem, 4.8vw, 4.35rem)`, line-height 0.94, tracking -0.05em.
- Body: Geist 430, 1.25rem, line-height 1.5, tracking -0.02em, measure under 44rem.
- Label: Geist Mono 450, 0.6875rem minimum, tracking 0.08em. Code, filenames, indexes, dimensions. Not sentences. Not the page title.

Load Geist. Do not substitute Inter, Roboto, or a system display face. The face is pinned.

## Drawing

- Group with a 1px Frame. Depth is the line, a darker well, or a paper inverse. No shadow, no glow.
- A region has one Action button. The second action, if any, is Paper. Hairline is for chrome.
- Show the control working, at the scale of the drawing. An icon plus a heading plus a sentence is not a section.
- Outlined display words may sit behind a control: transparent fill, 1.5px stroke at about 40% foreground mixed into the canvas.
- A grid or dot field belongs on an instrument (blueprint, calendar, canvas, workflow). It is not the page background.
- Focus is a 2px Signal outline, offset 2px. Selection is Action. Caret is Action.
- Status is weight, a mark, or a sentence. Not a green, amber, or red pill.
- Icons are drawn SVG at one stroke, about 1.4px. A small-screen menu is the word Menu, not a hamburger glyph.
- Navigation is a top bar: mark, word links, one paper quick action, one search field. No icon sidebar.
- The primary action is in the first viewport, including at 390px. On a phone it stacks above long copy, not under it.
- Illustrative figures are labeled when a visitor could take them as fact. Do not invent customers, prices, or benchmarks.

## Refusals

Each of these is absent, unless the user names it as an exception:

- Left sidebar of icons
- Row of metric cards (big number, small label, accent)
- Cream or white reading column for articles
- Rounded controls, cards, or inputs
- Shadow, glass, or gradient text
- Eyebrow, kicker, or section number above a heading
- A second accent competing with Action
- The specimen's product name, claims, or proof reused as the new surface's own
