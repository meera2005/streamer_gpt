# Netflix GPT

A React app built with Vite and Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server with HMR (alias: `npm start`) |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm test` | Run the Vitest suite once |
| `npm run test:watch` | Run Vitest in watch mode |

## Stack

- **React 19** with `@vitejs/plugin-react`
- **Vite 8** (build tool + dev server)
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **Vitest** + Testing Library + jsdom

## Tailwind Notes

Tailwind v4 needs no `tailwind.config.js`. The only required pieces are:

1. `src/index.css` starts with `@import "tailwindcss";`
2. `vite.config.js` registers the `tailwindcss()` plugin

To customize the theme, add a `@theme` block in `src/index.css`:

```css
@import "tailwindcss";

@theme {
  --color-netflix: #e50914;
}
```

Then use it as `bg-netflix`, `text-netflix`, etc.



-Create react app
-Configue tailwind css
-create components and utils folder

-FEATURES
 -Login/Sign up page
   -Sign in/Sign up form
   -Once logged in, redirect to browse page
  -Browse (only comes after authentication)
    -Header
    -Main movie
       -Trailer in Background
       -Title and description
  -NetflixGPT
   -Search bar
   -Movie suggestions



-Login Page
   - Just wrote initial components
   - Added sign in/sign up use state
   - Changes made to UI based on the sign in/sign up
   

