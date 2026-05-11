# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (Vite with HMR)
- **Build:** `npm run build`
- **Lint:** `npm run lint` (ESLint with react-hooks and react-refresh plugins)
- **Preview production build:** `npm run preview`

No test framework is configured.

## Architecture

Vault Manager is a React 19 SPA for storing and viewing website credentials (bookmarks). It uses Vite 8 as the build tool and Tailwind CSS v4 (via `@tailwindcss/vite` plugin). There is no router, backend, or persistent storage — all state lives in React `useState`.

### Component tree

```
App (dark theme shell)
├── Header — time-of-day greeting + current date
├── BookMark — owns the bookmarks array state, orchestrates form and grid
│   ├── BookMarkForm — add-bookmark form with field validation and URL sanitization
│   ├── SearchBookMark — search/filter bar (UI only, not wired up yet)
│   └── BookMarkGrid — renders bookmark cards with password reveal toggle
└── Footer
```

### Key patterns

- **State ownership:** `BookMark` holds the `bookMarks` array and passes `onAdd` down to `BookMarkForm`. Grid and search receive bookmarks as props.
- **Bookmark shape:** `{ id, url, favColor, category, user, pass }` — `id` is generated via `crypto.randomUUID()`.
- **Styling:** All styling is Tailwind utility classes directly in JSX. `src/index.css` only imports Tailwind. `src/App.css` exists but is unused.
- **No TypeScript:** The project uses plain JSX (`.jsx` files).
