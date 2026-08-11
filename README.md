# Client-Jaturaput-Portfolio (Frontend)

Frontend repository for Jaturaput's personal portfolio website.

Live URL:
- https://client-jaturaput-portfolio.onrender.com/

![Bento Grid Design Screenshot](<src/images/screenshots/Bento-Grid-Design-v2(1920x1080).png>)

This application is a React single-page app (SPA) built with Vite. It renders portfolio pages, navigation experiments, and consumes backend API data from the server project.

Professional design summary:
This Bento Grid portfolio extends advanced CSS engineering through cursor-driven microinteractions, hover-responsive typography, layered glassmorphism, and motion-oriented layout transitions, delivering a visually distinctive and user-friendly interface that also functions as a complete personal portfolio experience.

## 1) Tech Stack

- React 18
- React Router DOM 7
- Vite 6
- Axios
- EmailJS Browser SDK
- Font Awesome + React Icons
- ESLint 9

Package definitions are in `package.json`.

## 2) Features

- Multi-route SPA with portfolio pages
- Reusable navigation components
- API integration with backend `/api` endpoint
- EmailJS integration for contact/email workflows
- Fast local development with Vite HMR
- Custom CSS-driven visual language with motion graphics and interactive typography

## 3) Application Routes

Configured in `src/App.jsx`:

- `/`
- `/main-page`
- `/about`
- `/contact`
- `/bento-grid-design`
- `/bento-grid-design-backup1`
- `/bento-grid-design-backup2`
- `/bento-Grid-design-backup3`
- `/bento-Grid-design-backup4`
- `/bento-grid-design-backup5`
- `/movie-addict`
- `/hamburger-nav`
- `/responsive-grid`

## 4) Backend Integration

Frontend requests backend data through:

- `GET ${VITE_BE_URL}/api`

Ensure `VITE_BE_URL` points to a reachable backend URL.

Examples:
- Local backend: `http://localhost:8081`
- Render backend: `https://server-jaturaput-portfolio.onrender.com`

## 5) Environment Variables

Create a `.env.local` file in the frontend root:

```env
VITE_BE_URL=http://localhost:8081

VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Notes:
- Vite only exposes variables prefixed with `VITE_` to browser code.
- Do not commit real API keys/secrets.
- Keep production values in Render environment settings.

## 6) Prerequisites

- Node.js 18+ (Node.js 20 LTS recommended)
- npm 9+

## 7) Install and Run (Local)

From frontend repo root:

```bash
npm install
npm run dev
```

Default dev URL:
- http://localhost:5173

### Production Build Preview

```bash
npm run build
npm run preview
```

## 8) Available Scripts

- `npm run dev`: start Vite dev server
- `npm run build`: create production build in `dist/`
- `npm run preview`: preview built app locally
- `npm run lint`: run ESLint checks

## 9) Health and Verification

Because this is a static frontend SPA, health is verified through availability and successful backend calls.

### A. Frontend availability checks

1. Open the site:
	- Local: http://localhost:5173
	- Production: https://client-jaturaput-portfolio.onrender.com/
2. Confirm page renders without blank screen.
3. Navigate to pages like `/about` or `/contact`.

### B. API connectivity checks from frontend

1. Open browser DevTools Network tab.
2. Reload a page that triggers API call.
3. Confirm request to `${VITE_BE_URL}/api` returns HTTP `200` with JSON.

Expected response shape:

```json
{ "fruits": ["apple", "orange", "banana"] }
```

If requests fail, verify:
- `VITE_BE_URL` is correct
- Backend is running
- Backend CORS allows frontend origin

## 10) Deployment Notes (Render)

Typical frontend configuration:

- Build command: `npm install && npm run build`
- Publish directory: `dist`

Important:
- Set `VITE_BE_URL` in Render frontend service environment variables.
- If direct URL navigation gives 404 on refresh, configure SPA rewrite fallback to `index.html`.

## 11) Recommended Folder Overview

- `src/pages/`: page-level components
- `src/components/`: reusable UI components
- `src/helpers/`: helper UI utilities (including navigation)
- `src/lib/`: library wrappers (for example EmailJS)
- `src/data/`: portfolio and content data

## 12) Common Troubleshooting

### Blank page or JS crash
- Check browser console errors.
- Validate `.env.local` values.
- Ensure dependency install completed successfully.

### Backend calls fail with CORS or network error
- Confirm backend is reachable at `VITE_BE_URL`.
- Confirm backend `CLIENT_URL` includes your frontend origin.

### Email feature fails
- Verify `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`.
- Ensure EmailJS template variable names match the payload sent by frontend code.

### Route works in app navigation but fails on direct URL
- Configure Render static hosting rewrite rule to serve `index.html` for unknown paths.

## 13) Suggested Quality Checks

```bash
npm run lint
npm run build
```

If both pass and live pages render with working backend calls, frontend is deployment-ready.

## 14) CSS Design System and Motion Graphics (Professional Frontend Breakdown)

This project intentionally treats CSS as a primary design layer, not only styling. The frontend combines grid choreography, glassmorphism surfaces, typographic animation, color-masked text effects, and interaction-driven motion.

### A. Styling architecture and ownership

- Global baseline and responsive container rules: [src/index.css](src/index.css)
- Main experimental visual playground (legacy + prototypes): [src/styles/BentoGridDesignCSS.css](src/styles/BentoGridDesignCSS.css)
- Modern responsive grid system: [src/styles/layout/ResponsiveGrid.css](src/styles/layout/ResponsiveGrid.css)
- Specialized component styles are colocated for maintainability:
	- Branding/logo effects: [src/components/branding/LogoReveal.css](src/components/branding/LogoReveal.css)
	- Typography animation modules: [src/components/letters/PaintTitle.css](src/components/letters/PaintTitle.css), [src/components/letters/DiagonalPortTitle.css](src/components/letters/DiagonalPortTitle.css), [src/components/letters/FolioTitle.css](src/components/letters/FolioTitle.css)
	- Panel-level UI treatment: [src/components/projects/DisplayProjectPanel.css](src/components/projects/DisplayProjectPanel.css), [src/components/social/SocialLinksPanel.css](src/components/social/SocialLinksPanel.css)
	- Navigation and overlays: [src/styles/NavigationBar.css](src/styles/NavigationBar.css), [src/components/nav/HamburgerNav.css](src/components/nav/HamburgerNav.css), [src/components/nav/ContactComposePanel.css](src/components/nav/ContactComposePanel.css)

### B. Layout composition strategy

- Grid-first composition is used extensively for visual rhythm and module placement.
- `repeat()` grids and `grid-area` mapping are used to pin typographic tiles, profile sections, social sections, and project panels into specific visual zones.
- The responsive layer adapts from a 10-column desktop matrix to a compact 4-column mobile system while preserving design intent.
- `min-width: 0` and `min-height: 0` are used for shrink-safe behavior in nested grid children.

### C. Motion language and animation patterns

Implemented motion includes:

- Entry and reveal animations (`fadeIn`, `fade-up`, `fade-down` patterns in Bento and grid styles)
- Continuous 3D title rotation (`@keyframes title-spin`) with perspective depth controls
- Hover-accelerated motion behavior via CSS custom properties
- Staggered typography timing (`FOLIO` sequence with delayed keyframe offsets)
- Shape morphing and breathing masks (`clip-path` transitions and keyframes for title letters)
- Micro-interactions on cards, nav menus, and icon controls via consistent transition timings

### D. Typography and letter-form experimentation

The title system is designed as motion typography rather than static headings:

- Multi-layer letter stacks using duplicate glyph layers
- 3D letter faces built with `transform-style: preserve-3d` and rotated span faces
- Stroke, text-shadow layering, and color depth for dimensional type rendering
- Per-letter animation delays to create temporal sequencing (instead of all letters moving simultaneously)
- Controlled hover transforms (rotation/clip reveal) for tactile interaction

### E. Glassmorphism, depth, and atmosphere

Visual depth is created with layered CSS techniques:

- Semi-transparent gradient surfaces
- `backdrop-filter` blur + saturation recipes
- Inset and ambient shadows for panel elevation
- Selective grayscale and saturation filters for contrast control
- Drop-shadow stacks in brand/logo treatment for dramatic edge definition

### F. Color and interaction behavior

- Interactive states use restrained transitions for opacity, transform, and border-color changes.
- Social icons shift to platform-recognizable brand colors on hover while preserving white-base idle state.
- Hover states are generally paired with subtle scale, translation, or clip transformations to communicate interactivity without layout jumps.

### G. Accessibility-conscious motion behavior

- Reduced-motion support is implemented for animated title elements using `prefers-reduced-motion` fallbacks.
- Focus-visible states are used on interactive social items alongside hover states for keyboard users.

### H. Mobile responsiveness approach

- Breakpoints are used in global and component scopes to tune sizing, depth, and placement.
- Complex desktop arrangements are remapped for smaller screens (for example social panel position and title tile layout).
- Scrollable horizontal tracks are used for compact icon sections to avoid overcrowding.

### I. Notable advanced CSS techniques used

- CSS custom properties for depth, spacing, and runtime-tunable motion values
- `clamp()` for fluid responsive scaling
- `clip-path` circle/polygon masking for animated letter reveals
- `transform-style: preserve-3d` + perspective composition
- Layered `drop-shadow()` and `backdrop-filter` effects
- Grid auto-flow tracks with snap behavior for horizontal icon rail interactions

### J. How to review CSS quality in this project

Recommended design QA pass:

1. Open desktop and mobile viewport side-by-side.
2. Validate key sections: title letters, logo reveal, social panel, project panel.
3. Check hover/focus interactions for smoothness and no layout shift.
4. Toggle reduced motion in OS/browser settings and verify animation fallback behavior.
5. Confirm text remains readable over glass/gradient layers.
6. Verify transitions remain performant (no stutter) on commonly used screen sizes.

## 15) CSS-Focused Portfolio Positioning (Suggested Resume/Interview Narrative)

This frontend demonstrates:

- Strong command of modern CSS layout systems (Grid-centered architecture)
- Creative motion design without heavy animation libraries
- Component-scoped styling discipline in React
- Ability to blend experimental UI concepts with practical responsiveness
- Visual storytelling through typography, depth, and interaction design

If presenting this project professionally, position it as a "CSS motion-design portfolio interface built with React + Vite" with emphasis on custom interactions, glassmorphism implementation, and typographic animation engineering.
