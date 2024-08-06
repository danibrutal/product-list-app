This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

## Gallery page

Open [http://localhost:3000/products](http://localhost:3000/products) with your browser to see the gallery page.

## Explanation

- I've used next.js to assemble the basics of the app.
- There are 2 pages in `src/pages`: `index.tsx` (PLP), and `[...slug].tsx` (PDP)
- While the PLP page is a basic grid, in the PDP page I had to handle state changes via `src/providers/ProductProvider.tsx`, which exposes interesting data and actions for other components to consume.
- I created a set of components for the app under `src/components`.
- Created an endpoing in `src/pages/api/products.ts` that consumes the API provided by the document.
- I only implemented a color selector due to time constraints

## Improvements

- For sure, handling of the images could be better for a production app
- Error handling and tests
- Implementation of other variants, such as Memory selector, and TV sizes
- Design, in general
