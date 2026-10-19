# 이지양 Portfolio Design System

## 1. Atmosphere & Identity
Approved full redesign of an existing portfolio. Bright Korean editorial document: confident dark typography, a single blue action color, and generously spaced project evidence. Linear light-mode precision informs borders and compact controls; minimalist editorial hierarchy informs whitespace. The memorable gesture is the oversized role statement beside a sharply cropped real portrait. No generated imagery or decorative metrics.

## 2. Color
Canvas --canvas #fbfbfa; surface --surface #ffffff; inset --inset #f1f3f5; text --ink #17212b; secondary --muted #596575; border --line #dfe3e8; accent --blue #1559d6; hover --blue-hover #1046ac; accent wash --wash #eaf1ff. Blue is reserved for actions, linked evidence and active states.

## 3. Typography
Primary system stack: Pretendard, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif. Mono: ui-monospace, Consolas, monospace. Display clamp 34–56px / 1.22 / 650; section clamp 28–40px / 1.3 / 600; project 28px / 1.35; subhead 20px; body 16px / 1.8; lead 18px / 1.8; metadata 13px / 1.6; UI small 14px; captions 12px; overline 11px. Korean word-break keep-all, overflow-wrap anywhere for long URLs.

## 4. Spacing & Layout
4px base. Tokens: 4,8,12,16,20,24,32,40,48,64,80,96px. Container 1120px; reading 760px; desktop gutter 40px, mobile 24px. Section gap 96px desktop / 64px mobile. Document owns scrolling. Hero 64px vertical inset desktop, header 24px vertical inset. Hero asymmetric 2:1, featured project split 1:1; both become one column below 768px. Navigation wraps on small screens and remains in normal flow. No fixed sidebar.

## 5. Components
- Button: anchor, inline flex, 44px minimum target, 6px radius, primary blue/white, secondary white/border; hover color, active opacity, visible focus. Disabled specimen only, no fake disabled product actions.
- Text link: blue with underline on hover, visible focus. External links use same tab to preserve predictable browser controls.
- Section heading: mono ordinal / title / optional supporting paragraph; stack layout.
- Project feature: actual screenshot (when available) or semantic DOM flow, metadata, heading, summary, evidence note, stack and actions. Screenshot previews use a compact 16:11 top-aligned crop, WebP with PNG fallback, and link to the actual sample demo. Captions explicitly identify sample mode. No screenshot substitutes for actual interactive page content.
- Detail page: title, back anchor and six numbered reading sections, source links and explicit validation limits. Permanent hash route, back/forward support.
- Evidence row: border-separated 2-column label/content, single column mobile.
- Tags: small neutral rectangles, no interactive appearance.
Showcase at components.html exercises default, hover/focus through native browser, disabled, empty/error/loading messages. Product uses no loading async content except optional demo config.

## 6. Motion & Interaction
No entrance/reveal animations or decorative motion. Links and buttons use 150ms opacity/color feedback; reduced-motion disables transitions. Native hash section navigation and browser history. Keyboard focus restored to detail title on route navigation.

## 7. Depth & Surface
Borders and tonal shifts. Cards 1px --line, 8px radius; image and diagram panels --inset. Portrait unfiltered, crisp, asymmetric frame. No gradients, no heavy shadows.

## 8. Accessibility Constraints & Accepted Debt
WCAG 2.2 AA target, 4.5:1 body text, visible 3px focus, skip link, semantic headings, descriptive links, 44px targets. No color-only encoding. Personas: recruiter scans role/work/contact; engineer follows implementation evidence; mobile keyboard user navigates project detail and returns. Original portrait is processed solely for crop and resolution. Claims sourced from repository audit; personal contribution and education explicitly identified as self-described. No accepted accessibility debt. Parent owns final real-browser 375/768/1280 visual QA and independent review; no pass claimed before evidence.
