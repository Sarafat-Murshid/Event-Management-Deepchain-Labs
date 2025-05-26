# Event Buddy – Event Booking System

A fully responsive, frontend-only event booking platform built with React, TypeScript, and Tailwind CSS.

## Features

- **Public Site**

  - Browse upcoming and past events (dynamically rendered from mock data)
  - View event details and description
  - "Book Now" button (prompts login/signup if not authenticated)

- **User Dashboard**

  - Simulated login/signup (dummy authentication, no backend)
  - Book 1–4 seats for upcoming events
  - View "My Bookings" (dynamically rendered from user state)

- **Admin Dashboard**

  - Separate admin login (dummy, role-based)
  - View, create, edit, and delete events (all dynamic, no backend)
  - All event lists and actions update the UI in real time

- **Technology**
  - React + TypeScript
  - Tailwind CSS (fully mobile responsive)
  - React Context for global state (events, bookings, auth)
  - No backend/API calls; all data is in state or localStorage

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

```sh
npm install
```

### Running the App

```sh
npm run dev
```

- Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### Building for Production

```sh
npm run build
```

## Project Structure

```
src/
  components/         # Reusable UI components (Button, Input, EventCard, etc.)
  contexts/           # React Contexts for Auth, Events, Bookings
  screens/            # Page-level components (LandingPage, Dashboard, AdminDashboard, etc.)
  lib/                # Utility functions
  types/              # TypeScript types/interfaces
  App.tsx             # Main app with routing
  index.tsx           # Entry point
public/               # Static assets (images, SVGs)
tailwind.css          # Tailwind base styles
```

## Simulated Authentication

- **User:** Sign up or sign in with any email/password (dummy, no backend)
- **Admin:** Use email `admin@event.com` and password `admin123` to access the admin dashboard

## Notes

- All event and booking lists are rendered dynamically from arrays/state.
- The app is fully mobile responsive (uses Tailwind's responsive utilities).
- No backend/API integration; all data is in React state or localStorage.
- Role-based routing ensures users and admins see only their respective dashboards.

## License

MIT

---

**Figma Design Reference:**

- [Clickable Prototype](#)
- [UI Screens](#)
