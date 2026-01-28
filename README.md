# Product Explorer Dashboard

A modern product explorer dashboard built with React, TypeScript, React Query, Zustand, and Tailwind CSS. This application demonstrates clean architecture and state management practices.

## Features

- **Product Listing:** Infinite scrolling support for seamless browsing.
- **Search & Filter:** Search by name, filter by category, and sort by price.
- **Deep Linking:** URL-driven state ensures views are shareable and bookmarkable.
- **Detailed Views:** Dedicated pages for full product details (`/products/:id`).
- **Category Browsing:** Explore products by their specific categories.
- **Preferences:** Currency switching (USD / EUR / GBP) with local persistence.
- **Resilience:** comprehensive Error boundaries, Skeleton loading states, and Empty states.
- **Responsive Design:** Optimized for mobile, tablet, and desktop viewports.

## Tech Stack

- **Core:** React, TypeScript, Vite, Tailwind CSS
- **State Management:**
  - **Server:** React Query (Caching, Synchronization)
  - **Client:** Zustand (Preferences, UI State)
- **Quality Assurance:** ESLint, Prettier, Husky, pnpm

## Architecture Overview

The app follows a clear separation of concerns, visualizing the flow of data and control:

```mermaid
graph TD
    UI[UI Components] -->|Interacts with| Zustand[Zustand (Client State)]
    UI -->|Data Fetching| RQ[React Query (Server State)]
    RQ -->|Calls| Service[Service Layer]
    Service -->|Uses| Axios[API Client (Axios)]
    Axios -->|Returns Data| Service
    Service -->|Normalized Data| RQ
    RQ -->|Cached Data| UI
    Zustand -->|Filters/Settings| UI
```

## Trade-offs Made Due to Time Constraints

### 1. Client-Side Sorting

- **Constraint:** The DummyJSON API does not support server-side sorting.
- **Solution:** Implemented sorting on the client-side after fetching.
- **Impact:** Works perfectly for demo scale but would need migration to backend sorting for very large datasets to preserve performance.

### 2. Static Currency Conversion

- **Constraint:** Integrating a real-time FX API adds external dependencies and complexity.
- **Solution:** Used a static map for currency conversion rates.
- **future:** Designed to be easily replaceable with a live FX service.

### 3. No Authentication

- **Rationale:** Out of scope for this specific assignment.
- **Extensibility:** The current architecture allows for adding authentication middleware and protected routes without major refactoring.

_These trade-offs are intentional, documented, and fully reversible._

## Scaling & Refactoring Plan

If this app needed to scale to millions of users or products, the strategy would be:

1.  **Move Sorting & Filtering Server-Side**
    - Reduces client memory usage and improves payload size.

2.  **Introduce Authentication**
    - Add role-based layouts and protected routes.
    - Secure API calls with auth middleware.

3.  **Optimize Data Fetching**
    - Implement product detail prefetching on hover.
    - Add background cache warming for popular categories.

4.  **Optional Framework Migration**
    - Migrate to Next.js or Remix if SEO and initial load time (SSR) become critical business requirements.

The current clean architecture supports these evolutions with minimal disruption.

## AI Usage Disclosure

**Status:** Yes, AI tools were used.

### How AI was used:

- **Boilerplate & Scaffolding:** Quickly generating initial component structures and hooks.
- **Refactoring:** Assisting in converting Zustand stores to Context where appropriate and cleaning up imports.
- **Design:** Generating ideas for Card templates and Skeleton loaders.
- **Documentation:** helping structure this README.

### Verification Process:

AI output was **never** blindly copy-pasted. Correctness was verified by:

1.  **Incremental Implementation:** Features were built and tested step-by-step.
2.  **Manual Verification:** Every feature (Deep linking, Infinite scroll, Settings) was manually tested in the browser.
3.  **Static Analysis:** Validated via TypeScript strict mode and ESLint.
4.  **Code Understanding:** I fully understand and can explain/modify every line of code submitted.

## Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/mirza-mohibul-hasan/product-explorer.git
    cd product-explorer
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Start the development server:**

    ```bash
    pnpm dev
    ```

4.  **Lint and format (Optional):**
    ```bash
    pnpm lint
    pnpm format
    ```
