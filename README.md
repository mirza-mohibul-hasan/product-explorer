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
