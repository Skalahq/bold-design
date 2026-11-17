---
name: Bold Design
description: A dark instrument drawing. Square frames, display type, one action blue.
colors:
  canvas: "#101010"
  well: "#0a0a0a"
  paper: "#fafafa"
  ink: "#0a0a0a"
  lift: "#161616"
  ash: "#a1a1a1"
  lede: "#d4d4d4"
  mute: "#262626"
  frame: "#303030"
  hairline: "#ffffff1a"
  action: "#2466c3"
  action-hover: "#2d74d0"
  signal: "#5fa1f3"
  code: "#6fa7ee"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.7rem, 5.55vw, 5.5rem)"
    fontWeight: 500
    lineHeight: 0.92
    letterSpacing: "-0.055em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 4.8vw, 4.35rem)"
    fontWeight: 500
    lineHeight: 0.94
    letterSpacing: "-0.05em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.45rem, 2.2vw, 1.85rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 430
    lineHeight: 1.5
    letterSpacing: "-0.02em"
  label:
    fontFamily: "Geist Mono, ui-monospace, Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 450
    lineHeight: 1.45
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  mark: "999px"
spacing:
  hair: "1px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "5.5rem"
components:
  button-action:
    backgroundColor: "{colors.action}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "64px"
  button-action-hover:
    backgroundColor: "{colors.action-hover}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
  button-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "64px"
  button-hairline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "36px"
  input:
    backgroundColor: "{colors.well}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "40px"
  frame:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "20px"
  chip:
    backgroundColor: "{colors.well}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "8px 10px"
---

# Design System: Bold Design

## Overview

**Creative North Star: "The Instrument Drawing"**

The page is a measured drawing of an interface. Near-black ground, hairline frames, square corners, and type large enough to be the structure. A control is shown working, at the size it has in the drawing, not described with an icon. One blue exists, and it is the action.

The costume transfers whole. An admin dashboard, a SaaS shell, and a blog wear this same ground, type, and frame. They do not get a quieter operational variant, a cream reading column, or a sidebar of icons. Product words change. The drawing does not.

Geist is the face because it is the face in the pinned capture, not because it is a default. Square corners are the form. Shadows are absent.

**Key Characteristics:**

- Dark canvas, darker wells, frames drawn in a 1px line
- Display type does the hierarchy; nothing sits above a heading
- Square everything, except the wordmark pill
- One action blue; paper is the inverse action
- Mono is for code, indexes, and measurements
- The proof is a working control inside a frame

## Colors

A near-black field, a paper inverse, and one blue that is allowed to be the only saturated color on the page.

### Primary

- **Action** (`colors.action`): The solid fill of the one primary control in a region. Copy Prompt, Send, Run. White text. Hover shifts to `colors.action-hover`. It is not a link color and not a status color.

### Secondary

- **Signal** (`colors.signal`): Callout leaders, focus rings, and the live flash when a control is being written. Never a second button fill in the same frame.
- **Code** (`colors.code`): Identifiers inside prose and code. Underlined in prose. Not a button.

### Neutral

- **Canvas** (`colors.canvas`): The page ground.
- **Well** (`colors.well`): Instrument interiors: blueprints, code, inputs.
- **Lift** (`colors.lift`): The one raised panel, used for a long reading block set against the canvas.
- **Paper** (`colors.paper`): Inverse buttons, selected rows, filled marks.
- **Ink** (`colors.ink`): Text on paper.
- **Lede** (`colors.lede`): Section ledes and body set on canvas.
- **Ash** (`colors.ash`): Meta, indexes, unselected nav.
- **Mute** (`colors.mute`): In-range fills and pressed tracks. Not for text.
- **Frame** (`colors.frame`): The 1px line that groups.
- **Hairline** (`colors.hairline`): Dividers inside a frame, weaker than the frame itself.

### Named Rules

**The One Blue Rule.** A region has one solid blue control. Everything else is paper, hairline, or type.

**The No Status Hue Rule.** Success, warning, and error are weight, a mark, or a sentence. They are not green, amber, or red pills.

## Typography

**Display Font:** Geist (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Geist (with ui-sans-serif, system-ui, sans-serif)
**Label/Mono Font:** Geist Mono (with ui-monospace, Menlo, monospace)

**Character:** One grotesque, cut tight, at a weight that is solid without going black. Mono is a measuring instrument, not a costume for "technical."

### Hierarchy

- **Display** (500, clamp(2.7rem, 5.55vw, 5.5rem), line-height 0.92, tracking -0.055em): The page title. Left aligned. No eyebrow. Max about 18ch so it wraps into a block, not a banner.
- **Headline** (500, clamp(2.4rem, 4.8vw, 4.35rem), line-height 0.94, tracking -0.05em): Section titles. More space above the section rule than between the title and its lede.
- **Title** (500, clamp(1.45rem, 2.2vw, 1.85rem), tracking -0.035em): Step titles and instrument names inside a frame.
- **Body** (430, 1.25rem, line-height 1.5, tracking -0.02em, measure under 44rem): Ledes and the reading panel. On a blog, this is the article, not a smaller gray column.
- **Label** (450, 0.6875rem, tracking 0.08em, uppercase when it is a measurement): Indexes, filenames, callouts, field names. Floor is 11px. Not used for sentences.

Outlined display words sit behind a control: fill transparent, a 1.5px stroke at roughly 40% foreground mixed into the canvas. They are part of the drawing, not a heading style for navigation.

### Named Rules

**The Naked Heading Rule.** A heading carries its own weight. No kicker, eyebrow, or section index above it. Numbers appear only when the sequence itself is the content, as in a step rail or a behavior index.

**The Mono Measure Rule.** Mono sets code, filenames, indexes, and dimensions. It does not set buttons that are sentences, and it does not set the page title.

## Layout

Content sits in a column of `min(75rem, 100% - clamp(1.25rem, 4.5vw, 4rem))`, left-aligned inside that column. The page is not centered type on a wide empty field.

Major sections open with a 1px frame rule, then about 4.75rem, then the heading. The gap above a heading is larger than the gap under it. Section ledes stay under 44rem.

Grids: a 4-column ruled index, a 3-column instrument theater, a 2-column poster pair. Gap is 12px. On a narrow screen the theater becomes two, then one. The primary action stays in the first viewport: on small screens it stacks above the long copy, not under it.

Navigation is a top bar. There is no icon sidebar. Links are words. One paper quick action. One search field. A word button ("Menu") opens the same links on a small screen; it is not a hamburger icon.

Instrument surfaces (blueprint, week, canvas, workflow) may carry a measured grid or dot field. That grid is the drawing's paper. It is not a page background.

## Elevation & Depth

Flat. Depth is a line, a darker well, or a paper inverse. Nothing lifts.

### Named Rules

**The Line Rule.** A frame is a 1px border in Frame. A divider inside it is Hairline. There is no shadow, no glow, and no second border stacked under a shadow.

## Shapes

Corners are square (`0px`). The only radius is the wordmark pill around a short mark such as "SDK". Controls, inputs, frames, chips, and posters are square.

Outlined display type may be clipped by the frame. That clip is the drawing, not an overflow bug, when the word is a ghost behind a control.

Icons are drawn SVG at one stroke weight, about 1.4px. Unicode marks do not stand in for them.

## Components

### Buttons

- **Shape:** Square.
- **Action:** Action fill, paper text, height 64px on a page action, 36–40px on an instrument action. Label is the verb.
- **Paper:** Paper fill, ink text. The inverse of Action. Used for the second action in a pair, and for the nav quick action at a smaller height.
- **Hairline:** Canvas fill, 1px Frame border. Used for theme, menu, and secondary instrument controls.
- **Hover / Focus:** Action hover darkens one step. Focus is a 2px Signal outline, offset 2px. Disabled is 55% opacity, cursor progress, not a new color.
- **States:** A copy action may read "Copied" for a short beat, then return. A send action may read "Reading" while it writes.

### Chips

- **Style:** Square, 1px Frame, well fill. A mono name and a one-line sentence.
- **State:** The active chip takes a Signal border and an Action number box. Unselected numbers are paper boxes with ink type.

### Cards / Containers

- **Corner Style:** Square.
- **Background:** Canvas for a poster, Well for an instrument interior, Lift for one reading panel.
- **Shadow Strategy:** None. See Elevation.
- **Border:** 1px Frame.
- **Internal Padding:** 20–32px on a poster. 12px between posters.

A poster contains a working control and, often, an outlined display word. It does not contain an icon, a heading, and a paragraph as its structure.

### Inputs / Fields

- **Style:** Square, 1px line at about 65% foreground, Well fill, paper text. Labels are mono, uppercase, Ash.
- **Focus:** 2px Signal outline. Caret is Action.
- **Error / Disabled:** Name the problem in a sentence under the field. Do not recolor the border red. Disabled fields drop to Ash text on Mute.

Segmented controls are a square group with a paper selected segment and ink text. The indicator is the fill, not a pill.

### Navigation

- **Style:** Sticky top bar, Canvas fill, 1px Frame bottom. Wordmark, word links in Ash, paper quick action, search field, one icon button.
- **Hover:** Links go from Ash to Paper.
- **Active:** The current section is not a colored pill. If marked, it is Paper text.
- **Mobile:** Word button "Menu" / "Close". Links stack in a Canvas panel under the bar. The quick action stays visible.

### Code well

Filename bar in mono, 1px Frame bottom, then the source. Identifiers in Code. The rest is foreground at about 82%. No rainbow highlighter.

### Instrument

A framed control with a mono measurement label. Dimension lines are a hairline with end ticks and a centered label. Callouts are a numbered paper or Action box plus an uppercase mono name. This is the signature component. Use it when the page needs to prove a mechanism.

## Do's and Don'ts

### Do:

- **Do** set the page on Canvas and group with a 1px Frame.
- **Do** make the title display type, left, with no label above it.
- **Do** give each region one Action button and, if needed, one Paper button.
- **Do** show the control working, at drawing scale.
- **Do** keep mono at 11px or larger, and only for code, indexes, and measurements.
- **Do** put the primary action in the first viewport, including on a phone.

### Don't:

- **Don't** add a left sidebar of icons, a metric-card row, or a cream article column. The costume does not relax for admin, SaaS, or reading.
- **Don't** round controls, add shadow, or use a second accent.
- **Don't** put an eyebrow, kicker, or section number above a heading.
- **Don't** use Geist's presence as permission to swap in Inter, Roboto, or another default. The face is pinned by the capture.
- **Don't** reuse the specimen's product name, claims, or proof on a new surface. The costume is the drawing. The words belong to the product being built.
- **Don't** paint status in green, amber, or red.