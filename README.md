# Dr. Maya Reynolds — Therapy Website

Next.js + Tailwind CSS build for the internship assignment.

## How to run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Before you submit — things to finish

1. **Replace placeholder images.** Every image with a `picsum.photos` URL has a
   `PLACEHOLDER` comment above it in the component file. Search for
   `PLACEHOLDER` across the project and swap these for real, licensed images
   (Unsplash, Pexels, etc.) that match the warm/calm/therapy theme.
2. **Second office photo.** `components/OurOffice.tsx` currently uses one
   real photo (`/public/images/office-1.jpg`) and one placeholder. Add your
   second office photo to `public/images/` and update the `src` in
   `OurOffice.tsx`.
3. **Double check the office address** — it was pulled from a slightly
   garbled snippet ("123th Street 45 W"). Confirm the exact address from the
   full profile doc and update it in `OurOffice.tsx` and `Footer.tsx`.
4. **Test responsiveness** — resize your browser / use dev tools device mode
   to check mobile, tablet, and desktop views (this is explicitly graded).
5. **Run `npm run build`** once before submitting to confirm there are no
   errors.

## Project structure

- `app/layout.tsx` — fonts (Fraunces + Inter) and page metadata (SEO title/description)
- `app/page.tsx` — assembles all sections in order
- `app/globals.css` — global styles, reusable button/container classes
- `tailwind.config.ts` — custom color palette (clay/moss/linen/charcoal) and fonts
- `components/` — one file per homepage section
