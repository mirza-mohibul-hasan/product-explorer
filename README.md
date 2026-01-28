# Product Explorer Dashboard

A modern product explorer dashboard built with React, TypeScript, React Query, Zustand, and Tailwind CSS. This application demonstrates clean architecture and state management practices.

## Features

- **Product Listing:** Infinite scrolling support.
- **Search & Filter:** Search by name, filter by category, and sort by price.
- **URL Synchronization:** Deep linking support for shareable views.
- **Product Details:** Dedicated page for product information.
- **Settings:** Currency preference (USD, EUR, GBP) with persistence.
- **Resilience:** Error boundaries and user-friendly empty states.

## Tech Stack

- **Core:** React, TypeScript, Vite, Tailwind CSS
- **State:** React Query (Server), Zustand (Client)
- **Quality:** ESLint, Prettier, Husky, pnpm

## Interview Questions

### 1. What trade-offs did you consciously make due to time constraints?

- **Static Currency Conversion:** I used a static map for currency conversion instead of implementing a real-time API or more complex context logic. This meets the requirement simply and robustly.
- **Client-Side Sorting:** The API does not support sorting, so I implemented it client-side. This might be slow for very large datasets but works perfectly for the demo scale.
- **CSS:** I stuck to standard Tailwind classes without a custom design system token layer for speed.

### 2. If this app needed to scale (more data, more features), what would you refactor first?

- **Server-Side Pagination/Sorting:** Transition from client-side sorting to backend-supported parameters to handle millions of records.
- **Testing:** Add comprehensive unit tests (Vitest) and E2E type tests (Playwright) which were omitted for speed.
- **State Management:** While Context works for settings, breaking down the Zustand store into smaller slices or using a more robust server-state manager wrapper (like TRPC) might be better for complex domain logic.

### 3. Did you use AI tools? If yes, which parts and how did you verify correctness?

- **Yes.** I used Google's Gemini-powered agent to assist with:
  - **Boilerplate Generation:** Quickly scaffolding files like components and hooks.
  - **Refactoring:** Converting the Zustand store to React Context and updating imports.
  - **Debugging:** Fixing the initial runtime error with `CategoriesPage`.
- **Verification:** I manually reviewed every file generated, ran the development server to verify functionality (deep linking, infinite scroll, settings), and checked type safety with `tsc`.

## Architecture

The application separates concerns into:

- **UI Components:** Presentation layer.
- **Store (Zustand):** Client-side preference tracking.
- **Hooks (React Query):** Data fetching and caching.
- **Services:** API communication.

## Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development server:

   ```bash
   pnpm dev
   ```

3. Lint and format:

```bash
 pnpm lint
 pnpm format
```
