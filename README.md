# OMDB Search App

A blazing-fast **React + TypeScript** enterprise-level application for instant movie search using the [OMDB API](https://www.omdbapi.com/). Built with **Vite**, **SCSS**, **Redux Toolkit**, and **Axios** — following **SOLID principles**, **clean architecture**, and **modern web standards**.

---

## Setup

```bash
# 1. Clone the repository
git clone https://github.com/parallel-minds-assignment/react-swapnil-apple-assignment.git
cd react-swapnil-apple-assignment

# 2. Install dependencies
npm install

# 3. Create a .env file in the root directory and add:
VITE_OMDB_API_KEY=your_omdb_api_key
VITE_BASE_URL=https://www.omdbapi.com/

# 4. Start the development server
npm run dev
```

---

##  Features

-  **Instant Search** with debounced input
-  **OMDB Movie API** integration with detailed result views
-  **Redux Toolkit** for global state management and caching
-  **Axios Interceptors** for centralized API handling
-  **Accessible**, 📱 **Responsive**, 🌐 **Cross-browser compatible** UI
-  **Clean Architecture** with **SOLID** principles
-  **ESLint** and **Prettier** for code quality and formatting
-  **Jest** for unit and integration testing
-  Built using **Dependency Injection (DI)** and **Inversion of Control (IoC)**
-  Custom Hooks for logic abstraction and reuse

---

## Architecture

This app follows a **scalable, layered architecture** to maintain separation of concerns and support enterprise-level complexity:

```
src/
├── components/      # Reusable and presentational UI components
├── features/        # Feature modules (Redux slices + components)
├── hooks/           # Custom hooks (e.g., useDebouncedSearch, useMovieDetails)
├── services/        # Axios logic, interceptors, and API calls
├── store/           # Redux store setup and middleware
├── types/           # Shared TypeScript types and interfaces
├── styles/          # SCSS files for global and modular styling
```

---

## SOLID Principles in Practice

###  Single Responsibility Principle (SRP)
Each component and utility does one thing and does it well.

### Open/Closed Principle (OCP)
The system is open for extension but closed for modification — new features can be added without altering existing code.

### Interface Segregation Principle (ISP)
Small, specific TypeScript interfaces ensure clarity and prevent over-bloated contracts.

### Dependency Inversion Principle (DIP)
Business logic is decoupled from lower-level modules using:
- Axios interceptors for API abstraction
- Custom hooks for reusable logic encapsulation
- Environment-based injected configs

---

## Axios Interceptors

Implemented Axios interceptors to:
- Centralize request and response handling
- Provide consistent error management
- Keep API logic clean and reusable

---

## Tech Stack

| Tech | Description |
|------|-------------|
| [React 19](https://react.dev/) | Modern declarative UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Vite](https://vitejs.dev/) | Lightning-fast frontend build tool |
| [Redux Toolkit](https://redux-toolkit.js.org/) | Simplified Redux state management |
| [Axios](https://axios-http.com/) | Promise-based HTTP client |
| [SCSS](https://sass-lang.com/) | CSS with superpowers |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Elegant toast notifications |
| [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) | Code linting and formatting |
| [Jest](https://jestjs.io/) | Robust testing framework |

---
