# Client-Jaturaput-Portfolio (Frontend)

Frontend repository for Jaturaput's personal portfolio website.

Live URL:
- https://client-jaturaput-portfolio.onrender.com/

This application is a React single-page app (SPA) built with Vite. It renders portfolio pages, navigation experiments, and consumes backend API data from the server project.

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
