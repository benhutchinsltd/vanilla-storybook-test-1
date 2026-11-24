# vanilla-storybook-test-1

A clean starter: Vite + React + TypeScript, Tailwind CSS v4, every shadcn/ui component (preset `b0`, `base-nova`, built on Base UI) and Storybook with a story for each component.

## Stack

- Vite, React 19, TypeScript 7 (`tsc`), with TypeScript 6 installed as `typescript` for Storybook's prop-type docs
- Tailwind CSS v4 via `@tailwindcss/vite`
- shadcn/ui components in `src/components/ui` (unmodified CLI output)
- Storybook (beta) with stories in `src/components/ui/*.stories.tsx`

## Commands

```
npm install
npm run dev          # Vite dev server
npm run storybook    # Storybook on http://localhost:6006
```

Type-check with `npx tsc -p tsconfig.app.json --noEmit` and build Storybook with `npm run build-storybook`.
