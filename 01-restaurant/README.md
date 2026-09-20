# Gulmohar Kitchen

A portfolio demo website for **Gulmohar Kitchen**, a North Indian and Continental dining room on College Road, Nashik. Built to send to real small-business clients as proof of work. Rebrand by editing `/content` — no JSX copy hunt.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 (`@theme` in `app/globals.css`)
- shadcn/ui primitives (re-themed: button, input, dialog, tabs, accordion, select)
- motion for scroll reveals
- lucide-react icons
- react-hook-form + zod for the reservation form
- `next/image` (Unsplash) and `next/font/google` (Fraunces + DM Sans)

## Run locally

```bash
cd 01-restaurant
npm install
npm run dev
```

Open the printed localhost URL. Then:

```bash
npm run build
npm start
```

Deploy the `01-restaurant` folder to Vercel as its own project.

## To rebrand this for a client, edit these files

Everything the client will change lives here:

- `content/site.ts` — name, tagline, phone, WhatsApp, email, address, maps, hours, social, Swiggy/Zomato links
- `content/nav.ts` — header, mobile bar and skip-link labels
- `content/pages.ts` — page titles, descriptions and headlines
- `content/menu.ts` — dishes, prices, diet tags, spice, categories, filters
- `content/gallery.ts` — photo URLs, alt text, captions
- `content/about.ts` — chef story, room notes, FAQ
- `content/reviews.ts` — Google-style reviews
- `content/reserve.ts` — reservation form copy and seating times
- `content/hours.ts` — weekday labels and open/closed badge text
- `content/ui.ts` — shared chrome labels (directions, diet marks, form errors)
- `content/not-found.ts` — 404 copy

The reservation form posts to `app/api/enquiry/route.ts`, which logs the payload and returns 200. Comments in that file show where to plug in Resend, Google Sheets, or the WhatsApp Cloud API.
