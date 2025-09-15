# 📋 Studies List

An application for managing a list of medical studies and a shopping cart for selected studies.  
Built with **React + TypeScript + Vite**, using **Redux Toolkit**, **React Query**, **Tailwind CSS**, and tested with **Vitest** and **Playwright**.

---

## 🚀 Getting Started

### 1. Clone the repository and install dependencies

```bash
git clone https://github.com/MateuszWesolowsky/studies-list.git
cd studies-list
npm install
```

Terminal 1 - Server starts - http://localhost:4000

```bash
npm run dev:server
```

Terminal 2 - Project starts - http://localhost:5173/

```bash
npm run dev

```

Testy jednostkowe (Vitest + Testing Library)

```bash
npm test
```

Testy e2e (Playwright)

```bash
npx playwright test
```

or

```bash
npx playwright test --ui
```

## 📂 Project Structure

```bash
src/
├── components/        # Reusable UI components
│   ├── cart/          # Cart-related components + unit tests + slices
│   └── studies/       # Studies-related components + unit tests
├── e2e/               # Playwright E2E tests
├── store/             # Redux Toolkit  store
├── hooks/             # Custom React hooks
├── types/             # TypeScript types
└── App.tsx            # Root component
```

## ✨ Technical Decisions

Redux Toolkit - used for predictable and scalable cart state management.

React Query - handles server state, API requests, and caching.

Tailwind CSS - provides utility-first styling.

Vitest + Testing Library - ensure React components are unit tested.

Playwright - covers full end-to-end user flows.

json-server - simulates a backend for local development.
