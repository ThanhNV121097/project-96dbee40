# Design System — Hello World

> Source of truth: the approved `index.html` (preview: http://localhost:8080/design/96dbee40-dbb5-4010-8e59-b5d7780de882).
> Every value below is extracted from it. Changing a value here without
> changing the approved design is a defect.

Last updated: 2025-02-14

## 1. Foundations

### 1.1 Color

Semantic tokens. Name by job, never by hue.

| Token | Value | Used for |
|---|---|---|
| `--color-bg` | `#f8fafc` | Page background |
| `--color-surface` | `#ffffff` | Card / panel background |
| `--color-surface-raised` | `rgba(255, 255, 255, 0.82)` | Frosted main panel overlay |
| `--color-border` | `rgba(148, 163, 184, 0.24)` | Default border |
| `--color-text` | `#0f172a` | Body text, heading text |
| `--color-text-muted` | `#475569` | Secondary text |
| `--color-primary` | `#2563eb` | Accent dot, focus ring |
| `--color-primary-text` | `#ffffff` | Text on accent, not used in current mockup |
| `--color-focus` | `#2563eb` | Focus outline |
| `--color-focus-ring` | `rgba(37, 99, 235, 0.35)` | Focus halo |
| `--color-shadow` | `rgba(15, 23, 42, 0.12)` | Card shadow |

#### Contrast audit

Every text-on-background pair actually used. Body text ≥ 4.5:1, large text (≥ 18.66px bold or ≥ 24px) ≥ 3:1, UI borders ≥ 3:1.

| Foreground | Background | Ratio | Passes |
|---|---|---|---|
| `--color-text` | `--color-bg` | `16.2:1` | AA / AA Large |
| `--color-text` | `--color-surface` | `16.9:1` | AA / AA Large |
| `--color-text-muted` | `--color-bg` | `7.8:1` | AA / AA Large |
| `--color-text-muted` | `--color-surface` | `8.1:1` | AA / AA Large |
| `--color-primary-text` | `--color-primary` | `5.0:1` | AA |
| `rgba(255, 255, 255, 0.82)` content over `--color-bg` | `--color-bg` | `12.9:1` | AA |
| `rgba(148, 163, 184, 0.24)` border on `--color-bg` | `--color-bg` | `1.4:1` | Non-text decoration only |

### 1.2 Spacing

Base unit: `4px`. Every margin, padding, and gap in the product uses one of these.

| Token | Value |
|---|---|
| `--space-4` | `16px` |
| `--space-5` | `20px` |
| `--space-6` | `24px` |
| `--space-9` | `36px` |
| `--space-10` | `40px` |
| `--space-11` | `44px` |
|

### 1.3 Typography

Font families (include the fallback stack and how the font is loaded):

- Body: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- Headings: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- Mono: not used

| Token | Size | Line height | Weight | Used for |
|---|---|---|---|---|
| `--text-base` | `1rem` | `1.6` | `400` | Body copy |
| `--text-lg` | `1.05rem` | `1.6` | `400` | Supporting text |
| `--text-h1` | `clamp(3rem, 10vw, 6.5rem)` | `0.95` | `400` | Main headline |

Heading levels are used in order and never skipped for visual sizing.

### 1.4 Radius, border, shadow, motion

| Token | Value | Used for |
|---|---|---|
| `--radius-md` | `10px` | Focus ring offset shape |
| `--radius-lg` | `24px` | Mobile card radius |
| `--radius-xl` | `32px` | Desktop card radius |
| `--radius-full` | `999px` | Accent dot |
| `--border-width` | `1px` | Card border |
| `--shadow-lg` | `0 24px 70px rgba(15, 23, 42, 0.12)` | Main card |
| `--duration-base` | `700ms` | Card entrance |
| `--duration-loop` | `2.2s` | Dot pulse |
| `--easing-enter` | `ease-out` | Entrance animation |
| `--easing-loop` | `ease-in-out` | Dot pulse |

Motion respects `prefers-reduced-motion: reduce`: state changes remain, movement is removed. Approved mockup does not implement that override.

### 1.5 Layout and breakpoints

| Name | Min width | Container | Columns | Gutter |
|---|---|---|---|---|
| `sm` | `0px` | `100%` | `1` | `16px` |
| `md` | `480px` | `100%` | `1` | `24px` |
| `lg` | `768px` | `760px` | `1` | `24px` |
| `xl` | `1024px` | `760px` | `1` | `24px` |

Z-index scale (only these values are allowed):

| Layer | Value |
|---|---|
| Base | `0` |
| Sticky header | not used |
| Dropdown | not used |
| Modal backdrop | not used |
| Modal | not used |
| Toast | not used |

## 2. Components

One subsection per reusable component. Every component lists **all** states.

### 2.1 Landing card

**Purpose** — Centered panel for single-screen landing content. Use for this Home only; not for interactive forms.

**Anatomy** — `[panel] [content stack]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default | `--color-surface-raised`, `--color-border`, `--shadow-lg`, `--radius-lg` / `--radius-xl` | Main page container |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | `min(70vh, 620px)` desktop, `72vh` mobile | `40px 24px` desktop, `32px 18px` mobile | `--text-base`, `--text-lg`, `--text-h1` |

**States** — every row must be filled in.

| State | Visual change | Tokens |
|---|---|---|
| Default | Frosted translucent card, centered, subtle border and shadow | `--color-surface-raised`, `--color-border`, `--shadow-lg` |
| Hover | Not used | not used |
| Focus (keyboard) | Not interactive | not used |
| Active / pressed | Not used | not used |
| Disabled | Not used | not used |
| Loading | Not used | not used |
| Error | Not used | not used |
| Empty | Not used | not used |

**Accessibility** — semantic `main` landmark with `aria-label="Hello World screen"`; no keyboard interaction; minimum hit target not applicable.

### 2.2 Accent dot

**Purpose** — Decorative inline accent inside headline. Use only for the title mark; not as icon or status indicator.

**Anatomy** — `[dot]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default | `--color-primary`, `--color-focus-ring` | Inline headline accent |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | `0.22em` square | none | none |

**States** — every row must be filled in.

| State | Visual change | Tokens |
|---|---|---|
| Default | Solid blue dot with halo | `--color-primary`, `--color-focus-ring` |
| Hover | Not used | not used |
| Focus (keyboard) | Not interactive | not used |
| Active / pressed | Not used | not used |
| Disabled | Not used | not used |
| Loading | Not used | not used |
| Error | Not used | not used |
| Empty | Not used | not used |

**Accessibility** — `aria-hidden="true"`; no role; no keyboard interaction.

## 3. Content and formatting

- Voice and tone: minimal, calm, direct.
- Date, time, number, and currency formats: not used.
- Capitalization rule for buttons, headings, and labels: sentence case for visible copy; headline keeps punctuation as shown.
- Empty-state and error-message wording pattern: not used.

## 4. Known deviations

Places where the approved design does not follow its own rules or the
anti-patterns in `references/ai-defaults.md`. Record, do not silently fix.

| Where | Deviation | Why it stands | Follow-up |
|---|---|---|---|
| `body` background | Uses a top radial glow and vertical gradient instead of flat fill | Approved visual style | Keep as-is |
| `.card` | Uses `backdrop-filter: blur(10px)` and translucent panel | Approved visual style | Keep as-is |
| `.card` | Uses `shadow-lg`-level elevated shadow on resting surface | Approved visual style | Keep as-is |
| `h1` and `.dot` | Uses motion on initial load and infinite pulse | Approved visual style | Keep as-is |
| `:focus-visible` | Focus style defined globally even though page has no interactive controls | Approved visual style | Keep as-is |

## 5. Change log

| Date | Change | Design PR |
|---|---|---|
| 2025-02-14 | Initial design system written from approved Hello World mockup | pending |
