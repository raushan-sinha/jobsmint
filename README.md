# JobsMint

**A modern job-discovery platform that connects talent with opportunity.**

JobsMint is a full-stack job board where job seekers can search for roles by title, skill, or location, and employers can publish openings to reach qualified professionals. The project is built as a two-part system: a fast, responsive **React + Vite** frontend and an **Express** backend API that is currently being scaffolded.

> **Status:** Active development — the frontend landing experience is complete and the backend API is in progress.

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Express](https://img.shields.io/badge/Express-5.3-000000?logo=express&logoColor=white)](https://expressjs.com)

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Architecture Overview](#architecture-overview)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About

JobsMint is designed to remove friction from the two hardest parts of hiring: **finding the right role** and **reaching the right candidate**. The landing experience is built around a single, focused search surface — a keyword field, a location field, and curated popular-skill shortcuts — so candidates can go from arrival to a filtered result set in one interaction.

The visual language is intentionally modern and premium: a dark hero canvas with a soft blue ambient glow, glassmorphic floating navigation, and a strict blue-on-slate design token set. The interface is fully responsive, serving a desktop navbar and a dedicated mobile navigation shell from the same shared data source.

---

## Features

### Frontend (`jobsmint/`)

- **Responsive navigation** — a single [`ResponsiveNavbar`](jobsmint/src/components/layout/ResponsiveNavbar.tsx) wrapper switches between a desktop [`Navbar`](jobsmint/src/components/layout/Navbar.tsx) and a mobile [`MobileNavbar`](jobsmint/src/components/layout/MobileNavbar.tsx) at the `lg` breakpoint, so behaviour never depends on duplicated markup.
- **Floating glassmorphic header** — fixed, centred, backdrop-blurred container with a live active-route highlight derived from `useLocation()`.
- **Mobile menu drawer** — a toggleable open/close state managed with `useState`, swapping the menu icon for a cross and closing the panel on link selection.
- **Hero search experience** — a responsive three-column search grid (keyword, location, submit) over a blurred blue ambient glow, with a popular-skills chip row.
- **Autofocus on load** — the keyword input is focused via a `useRef` + `useEffect` hook, so the search experience starts instantly on arrival.
- **Data-driven navigation** — menu items are defined once in [`navbarLinks.data.ts`](jobsmint/src/data/navbarLinks.data.ts) and shared by both navbars.
- **Per-page SEO** — the [`SEO`](jobsmint/src/components/layout/SEO.tsx) component sets document title and meta description per route using `react-helmet-async`.
- **Client-side routing** — `react-router-dom` with a `BrowserRouter` and route-based pages, ready for expansion beyond the current home route.
- **SPA-ready deployment** — a Vercel rewrite rule ensures deep links resolve to `index.html`.

### Backend (`jobsmint-backend/`)

- **Express 5 server** with a `nodemon` development workflow.
- Designed to serve as the job-listing, search, and application API for the frontend.

---

## Tech Stack

| Layer         | Technology                                | Version                            |
| ------------- | ----------------------------------------- | ---------------------------------- |
| UI Framework  | React                                     | `^19.2.8`                          |
| Build Tool    | Vite                                      | `^8.3.0` (locked `8.3.4`)          |
| Language      | TypeScript                                | `~6.0.2`                           |
| Styling       | Tailwind CSS                              | `^4.3.3` (via `@tailwindcss/vite`) |
| Routing       | React Router DOM                          | `^7.18.4`                          |
| Icons         | Lucide React                              | `^1.55.0`                          |
| SEO           | React Helmet Async                        | `^3.0.0`                           |
| Linting       | ESLint (flat config)                      | `^10.10.0`                         |
| Type Safety   | typescript-eslint                         | `^8.69.0`                          |
| React Plugins | eslint-plugin-react-hooks / react-refresh | `^7.1.1` / `^0.5.6`                |
| API Server    | Express                                   | `^5.3.0`                           |

**Runtime requirement:** Node.js `^20.19.0 || >=22.12.0` (as required by Vite 8).

---

## Project Structure

```
JobsMint-App/
├── jobsmint/                       # Frontend application
│   ├── public/
│   │   ├── icon.png                # Application favicon / brand mark
│   │   └── robots.txt              # Search-engine crawl directives
│   ├── src/
│   │   ├── assets/                 # Static assets (reserved)
│   │   ├── components/
│   │   │   ├── home/
│   │   │   │   └── HeroSection.tsx # Hero canvas, search grid, skill chips
│   │   │   └── layout/
│   │   │       ├── MobileNavbar.tsx     # Mobile navigation + drawer
│   │   │       ├── Navbar.tsx          # Desktop glassmorphic navigation
│   │   │       ├── ResponsiveNavbar.tsx# Breakpoint-based navbar switch
│   │   │       └── SEO.tsx             # Helmet-based title/description
│   │   ├── data/
│   │   │   └── navbarLinks.data.ts # Shared navigation link definitions
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Landing page composition
│   │   │   └── index.ts            # Page barrel export
│   │   ├── types/
│   │   │   ├── navbarLink.types.ts # NavbarLinkProps interface
│   │   │   └── seo.types.ts        # SEOProps interface
│   │   ├── App.tsx                 # Router + layout composition
│   │   ├── index.css               # Tailwind v4 entrypoint
│   │   └── main.tsx                # React root bootstrap
│   ├── index.html                  # HTML entry document
│   ├── vercel.json                 # SPA rewrite rules
│   ├── vite.config.ts              # React + Tailwind Vite plugins
│   ├── eslint.config.js            # ESLint flat configuration
│   ├── tsconfig.json               # Project references root
│   ├── tsconfig.app.json           # App compiler options
│   ├── tsconfig.node.json          # Vite config compiler options
│   └── package.json
│
└── jobsmint-backend/               # Backend API
    ├── package.json                 # Express 5 + nodemon
    └── package-lock.json
```

> **Note:** This repository uses a two-folder layout rather than an npm workspace — there is no root `package.json`. Each folder is installed and run independently.

---

## Getting Started

### Prerequisites

- **Node.js** `^20.19.0 || >=22.12.0`
- **npm** 10+ (ships with Node.js 20+)
- A modern browser

### 1. Clone the repository

```bash
git clone <repository-url>
cd JobsMint-App
```

### 2. Install frontend dependencies

```bash
cd jobsmint
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The Vite dev server starts on **http://localhost:5173** with hot module replacement enabled.

### 4. Install and start the backend

In a second terminal:

```bash
cd jobsmint-backend
npm install
npx nodemon index.js
```

> The backend package is scaffolded with Express 5 and `nodemon`; the `index.js` server entry point is still to be created as part of the API implementation tracked in the [Roadmap](#roadmap).

### Production build

```bash
cd jobsmint
npm run build      # type-checks with tsc -b, then bundles to dist/
npm run preview    # serves the production build locally
```

---

## Available Scripts

### `jobsmint/` (frontend)

| Script            | Command                | Description                                     |
| ----------------- | ---------------------- | ----------------------------------------------- |
| `npm run dev`     | `vite`                 | Start the dev server with HMR                   |
| `npm run build`   | `tsc -b && vite build` | Type-check the project and build for production |
| `npm run lint`    | `eslint .`             | Lint all source files with the flat config      |
| `npm run preview` | `vite preview`         | Preview the production build locally            |

### `jobsmint-backend/` (backend)

| Script                 | Command                                     | Description                                  |
| ---------------------- | ------------------------------------------- | -------------------------------------------- |
| `npm test`             | `echo "Error: no test specified" && exit 1` | Placeholder — test suite not yet implemented |
| `npx nodemon index.js` | —                                           | Run the server with automatic reload         |

---

## Architecture Overview

### Frontend composition

The application root is [`main.tsx`](jobsmint/src/main.tsx), which mounts [`App.tsx`](jobsmint/src/App.tsx) under React `StrictMode`. `App.tsx` establishes the [`BrowserRouter`](jobsmint/src/App.tsx:8), mounts the global [`ResponsiveNavbar`](jobsmint/src/components/layout/ResponsiveNavbar.tsx), and maps routes to page components.

```
main.tsx
  └── App.tsx
        ├── BrowserRouter
        │     ├── ResponsiveNavbar  →  Navbar (lg+) | MobileNavbar (< lg)
        │     └── Routes
        │           └── "/" → Home
        │                 ├── SEO
        │                 └── HeroSection
```

### Key design decisions

- **CSS-first Tailwind v4.** The stylesheet is a single [`@import "tailwindcss"`](jobsmint/src/index.css) declaration with the Tailwind Vite plugin handling the build — no `tailwind.config.js` is required.
- **Type-safe data and props.** Shared contracts live in [`src/types`](jobsmint/src/types), keeping component props and data collections strictly typed and independently reusable.
- **Barrel exports for pages.** [`src/pages/index.ts`](jobsmint/src/pages/index.ts) exposes the `Home` page, so new routes can be registered with a single import change.
- **Strict compiler settings.** `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`, and `erasableSyntaxOnly` keep the codebase clean and compatible with erasable TypeScript output.
- **Split TypeScript projects.** App and Vite-config code compile under separate configs via project references, so editor tooling and build output stay isolated.

### TypeScript configuration

| Setting                | Value                    |
| ---------------------- | ------------------------ |
| `target` / `lib`       | `ES2023` / `ES2023, DOM` |
| `module`               | `esnext`                 |
| `moduleResolution`     | `bundler`                |
| `jsx`                  | `react-jsx`              |
| `verbatimModuleSyntax` | `true`                   |
| `noEmit`               | `true`                   |

---

## Deployment

The frontend is configured for **Vercel** via [`vercel.json`](jobsmint/vercel.json), which rewrites all unmatched paths to the root so client-side routes resolve correctly on refresh:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

**Deploy steps:**

1. Import the repository into Vercel and set the **root directory** to `jobsmint`.
2. Use the default framework preset **Vite**.
3. Deploy — the build command `npm run build` and output directory `dist` are detected automatically.

Other static hosts (Netlify, Cloudflare Pages, GitHub Pages) work equally well; the only requirement is an SPA fallback rewrite to `index.html`.

The backend is a standard Node.js service and can be deployed to any Node-compatible host (Render, Railway, Fly.io, or a VPS) once its API surface is implemented.

---

## Roadmap

- [x] Responsive desktop and mobile navigation
- [x] Hero section with keyword and location search
- [x] Popular-skill quick filters
- [x] Per-route SEO metadata
- [x] Client-side routing and SPA deployment config
- [ ] Implement the Express API (job listings, search, filters)
- [ ] Wire the search form to the backend with loading and empty states
- [ ] Build the `/jobs` job-listing page and `/post-job` job-creation form
- [ ] Add authentication (Login / Sign Up) with session handling
- [ ] Add application submission and recruiter dashboard
- [ ] Add unit and integration test coverage
- [ ] Add a `HelmetProvider` wrapper so page-level SEO resolves without errors
- [ ] Replace plain anchor tags with router-aware `Link` components

---

## Contributing

Contributions are welcome. To get started:

1. Fork the repository and create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes in the relevant package (`jobsmint/` or `jobsmint-backend/`).

3. **Validate before opening a pull request:**

   ```bash
   cd jobsmint
   npm run lint
   npm run build
   ```

4. Commit with a clear message and open a pull request describing your change.

**Code style:** follow the existing conventions — 4-space indentation, TypeScript interfaces for shared contracts, and Tailwind utility classes for all styling. ESLint is configured with the recommended rules for TypeScript, React Hooks, and React Refresh; new code must pass `npm run lint` cleanly.

---

## License

The backend package is declared under the **ISC License** (see [`jobsmint-backend/package.json`](jobsmint-backend/package.json)). The frontend package currently declares no license field — one should be added before public distribution.

---

## Contact

|                        |                                                                                     |
| ---------------------- | ----------------------------------------------------------------------------------- |
| **Maintainer**         | [@raushan-sinha](https://github.com/raushan-sinha)                                  |
| **Backend repository** | [raushan-sinha/jobsmint-backend](https://github.com/raushan-sinha/jobsmint-backend) |
| **Issue tracker**      | [Report an issue](https://github.com/raushan-sinha/jobsmint-backend/issues)         |

---

<div align="center">

**JobsMint** — _Find Your Next Job_

Built with React, TypeScript, Vite, and Tailwind CSS.

</div>
