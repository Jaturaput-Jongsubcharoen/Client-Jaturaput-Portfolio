# Frontend Performance Audit

Date: 2026-09-05

Target viewport: 433 x 824 mobile emulation against `npm run build` and `npm run preview` at `http://127.0.0.1:4173/`.

## Baseline

The provided Chrome DevTools screenshot was a development-mode baseline from `localhost:5173`:

- LCP: about 4.88s
- CLS: 0
- Requests: about 135
- Transferred: about 5.0 MB
- Resources: about 7.7 MB
- Load: about 3.36s
- Finish: about 4.10s

Production preview did not have the same request problem. The Vite dev server, module-by-module loading, HMR, and extension content scripts inflated the development-mode waterfall.

Production preview before changes, with browser cache disabled:

| Run | LCP | LCP element | Requests | Transferred | Load |
| --- | ---: | --- | ---: | ---: | ---: |
| 1 | 3.676s | `h2` for PAINT `i` | 7 | 2.56 MB | 161 ms |
| 2 | 1.748s | `h2` for PAINT `i` | 6 | 2.12 MB | 97 ms |
| 3 | 2.840s | `h2` for PAINT `i` | 6 | 2.12 MB | 89 ms |

## LCP Diagnosis

The actual production LCP element was not a project screenshot, the profile photo, the logo, or a web font. It was the decorative animated heading:

```html
<div class="paint-title__box paint-title__box--i pt-r4-c3">
  <h2>i</h2>
  <h2>i</h2>
</div>
```

The delay came from CSS animation timing and visibility timing. The `paint-title__box--i` animation used a positive 1.5s delay, so the larger painted state became visible late and replaced earlier `F`/`O` LCP candidates. No web font requests appeared in the production trace. JavaScript was not the direct LCP blocker: script time during 2.5s samples stayed around 3 ms, while layout duration was around 1.7-1.9s because several decorative text animations animate layout-affecting properties such as `font-weight`.

Image loading still mattered for payload and decode cost. The visible logo was an 8504 x 8504 PNG rendered at about 88 x 88 CSS pixels, and the favicon used another 8504 x 8504 PNG. The main project card image on first load was about 185 x 104 CSS pixels, so the multi-megabyte project screenshots were too large for their rendered use and navigation flow.

## Changes

- Converted shipped large visual assets to smaller WebP files where the converted file was smaller.
- Kept already-smaller PNG project images as PNG where WebP was larger.
- Replaced the visible logo with a 512 x 512 WebP and favicon with a 64 x 64 PNG.
- Added `decoding="async"` to the logo images and the project preview image.
- Changed the decorative staggered text animations to use negative delays. This preserves the staggered running phase but removes the initial wait that delayed the LCP candidate.
- Memoized the fixed 60-cell grid background and changed resize handling to listen only for the 768px breakpoint crossing.

## Final Production Result

Final production preview, with browser cache disabled:

| Run | LCP | LCP element | Requests | Transferred | Load |
| --- | ---: | --- | ---: | ---: | ---: |
| 1 | 0.828s | `h2` for PAINT `i` | 6 | 1.08 MB | 97 ms |
| 2 | 0.284s | `h2` for PAINT `i` | 6 | 1.08 MB | 70 ms |
| 3 | 0.376s | `h2` for PAINT `i` | 6 | 1.08 MB | 73 ms |

Build output highlights:

| Asset | Before | After |
| --- | ---: | ---: |
| `jaturaput-logo1` | 439.5 KB PNG, 8504 x 8504 | 9.9 KB WebP, 512 x 512 |
| Favicon | 441.5 KB PNG, 8504 x 8504 | 1.4 KB PNG, 64 x 64 |
| `Magazine-Design2` | 21.9 MB PNG, 7016 x 2480 | 2.18 MB WebP, 2400 x 848 |
| Initial production transfer | about 2.12 MB | about 1.08 MB |
| JS bundle gzip | 99.25 KB | 99.27 KB |
| CSS bundle gzip | 14.08 KB | 14.08 KB |

The project panel functional check passed after the changes: category navigation, RoadSense as item 2 of 18, details toggle, and FE/BE/ML GitHub links remained intact. Layout checks passed at 390, 433, 768, 1024, and 1920 pixel widths with CLS staying at 0.

## Remaining Issue

The remaining steady-state cost is the intentional decorative animation system, especially the animated `font-weight` text and 3D/translucent title boxes. Final 2.5s samples still spent about 1.59-1.70s in layout with script time near 3 ms. Reducing that further would require a visible animation design change, such as replacing font-weight animation with transform/opacity/color-only animation or pausing offscreen decorations. I did not make that change because the request was to preserve the current visual behavior.
