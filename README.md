This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Portfolio design previews

Open [the design gallery](http://localhost:3000/designs) to compare eight portfolio directions. Each preview has a bottom navigation bar with previous/next links and a menu for jumping between designs.

| Design | Route |
| --- | --- |
| Editorial engineer | `/designs/editorial` |
| Engineering field notes | `/designs/field-notes` |
| Quiet personal homepage | `/designs/quiet` |
| Bold typographic portfolio | `/designs/typographic` |
| Restrained brutalism | `/designs/restrained` |
| Neobrutalism | `/designs/neo` |
| Editorial + technical diagrams | `/designs/diagram-editorial` |
| Combined / Type + systems | `/designs/combined` |

Design 08 (Combined / Type + systems) is the homepage at `/`. The gallery marks the current homepage design, and all eight preview pages remain available. Preview routes are marked `noindex`; the homepage retains its portfolio metadata. Shared content lives in `lib/designs.ts` and uses professional contributions from `lib/data.ts`. Diagrams are simplified résumé-based illustrations; the designs omit placeholder project/social links and the missing résumé download.

### Switching the homepage design

Change `activeDesign` in `lib/site-design.ts` to any of these slugs: `editorial`, `field-notes`, `quiet`, `typographic`, `restrained`, `neo`, `diagram-editorial`, or `combined`.

```ts
export const activeDesign: DesignSlug = "combined";
```

The dev server updates automatically. Build and deploy again to change the hosted homepage. Browsing a preview leaves this setting unchanged.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
