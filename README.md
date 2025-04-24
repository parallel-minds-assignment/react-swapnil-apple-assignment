# OMDB Search App

A blazing-fast **React + TypeScript** enterprise-level application for instant movie search using the OMDB API. Built with Vite, SCSS, Redux Toolkit, Axios, and designed with SOLID principles, clean architecture, and modern web standards in mind.

---
##  Setup

```bash
# 1. Clone the repo
git clone https://github.com/parallel-minds-assignment/react-swapnil-apple-assignment.git
cd omdb-search-app

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

---

##  Features

-  **Instant Search** with debounced input
-  **OMDB Movie API** integration for detailed search results
-  **Redux Toolkit** for efficient global state management and caching
-  **Axios Interceptors** for centralized API request/response handling
-  **Accessible**, **Responsive**, and **Cross-Browser Compatible** UI
-  **Clean Architecture** following **SOLID** principles and layered design
-  **ESLint**, **Prettier**, for consistent code quality
-  **Jest** for unit and integration testing
-  Built with **Dependency Injection (DI)** & **Inversion of Control (IoC)** patterns
-  **Custom Hooks** for separation of logic and reuse


---

## 📐 Architecture

The app follows a **scalable layered architecture**, cleanly separating concerns:

- `components/` – Presentational & reusable UI elements
- `features/` – Feature modules following Redux Toolkit slice pattern
- `hooks/` – Custom hooks (e.g., `useDebouncedSearch`, `useMovieDetails`)
- `services/` – API logic with Axios and interceptors
- `store/` – Redux store configuration
- `types/` – Shared TypeScript interfaces and types
- `styles/` – SCSS modules and global styles

---

##  SOLID Principles Implemented

###  Single Responsibility Principle (SRP)
Each component, service, and utility has a single, well-defined responsibility.

###  Open/Closed Principle (OCP)
The architecture is extensible—new features or components can be added without modifying existing code.

###  Liskov Substitution Principle (LSP)
Interfaces and abstractions are used for component and service contracts, allowing interchangeable implementations.

###  Interface Segregation Principle (ISP)
Feature-specific interfaces are used to avoid bloated contracts. Type safety and clarity are preserved using TypeScript.

###  Dependency Inversion Principle (DIP)
Core logic is decoupled from lower-level implementations using:
- Axios interceptors as abstraction for HTTP logic
- Custom hooks for encapsulating reusable logic
- Injected configuration (e.g., base URLs, API keys)

###  Axios Interceptors
- implemented Axios interceptors to manage all API requests and responses from a single place. This ensures separation of concerns and centralized error handling.

---

##  Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/)
- [SCSS](https://sass-lang.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [ESLint + Prettier](https://eslint.org/)
- [Jest](https://jestjs.io/)

