# Mannat — Next.js rebuild

A recreation of the `mannat.app` homepage (previously WordPress/Elementor),
rebuilt in Next.js 16 (App Router) + Tailwind CSS v4, ready to deploy on Vercel.

All copy, section order, links and navigation from the original site are kept.
Every image and video from the WordPress site has been replaced with a
labeled **placeholder box** so you can drop in your own files.

## Project structure

```
src/
  app/
    layout.tsx        Fonts (Amiri, Mulish, Noto Nastaliq Urdu) + metadata
    page.tsx           Assembles the whole homepage
    globals.css        Color tokens (deep green / gold "Noor" theme)
  components/
    Header.tsx          Sticky nav, mobile menu
    Hero.tsx             Top banner section
    ContentSection.tsx   Shared layout for About/Wisdom/Meditation/Health/Noorani Kalemaat
    Music.tsx            Music section (numbered benefits list)
    Footer.tsx           Newsletter form, useful links, contact, socials
    MediaPlaceholder.tsx Reusable image/video placeholder box
    Divider.tsx          Small ornamental section divider
```

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> Note: the first `npm run build`/`npm run dev` needs internet access once to
> fetch the Google Fonts used (Amiri, Mulish, Noto Nastaliq Urdu). This works
> automatically on Vercel — no action needed there.

## Replacing the placeholders with your real images/videos

1. Drop your files into the `public/` folder, e.g. `public/images/hero-banner.jpg`.
2. Open the component that renders that section (see the table below).
3. Swap the `<MediaPlaceholder ... />` line for a real `<Image>` (or `<video>`):

```tsx
// before
<MediaPlaceholder type="image" label="Banner strip (Asset-1-1)" ratio="aspect-[7/1]" />

// after
import Image from "next/image";
<Image
  src="/images/hero-banner.jpg"
  alt="Mannat banner"
  width={2142}
  height={322}
  className="w-full h-auto"
/>
```

For video, use a plain `<video>` tag (with `controls`) or embed a YouTube iframe
if the source lives on YouTube:

```tsx
<video controls className="w-full aspect-video">
  <source src="/videos/meditation-intro.mp4" type="video/mp4" />
</video>
```

| Section          | File                              | Placeholders                          |
|-------------------|------------------------------------|----------------------------------------|
| Logo              | `src/components/Header.tsx`       | 1 logo image                           |
| Hero              | `src/components/Hero.tsx`         | Noor-e-Illahi artwork + banner strip   |
| About Us          | `src/app/page.tsx`                | 1 portrait image                       |
| Wisdom            | `src/app/page.tsx`                | 2 images                               |
| Meditation        | `src/app/page.tsx`                | 1 video                                |
| Health            | `src/app/page.tsx`                | 2 images                               |
| Noorani Kalemaat  | `src/app/page.tsx`                | 1 image                                |
| Music             | `src/components/Music.tsx`        | 1 image + 1 video                      |

## Content notes / assumptions

- The original WordPress site's top nav and footer "Useful Links" pointed to
  separate WordPress pages (`/wisdom/`, `/health/`, `/music/`, etc.) that
  weren't part of what I could read from the live homepage. In this rebuild,
  the in-page nav links scroll to the matching section on the same page. The
  "More Info" / "Discover More" buttons still link out to the original
  `mannat.app/...` URLs — swap those for real routes if you build out
  separate pages later, or point them at anchors like the nav does.
- The footer email subscribe form is wired up in the UI but doesn't send
  anywhere yet — hook `handleSubmit` in `Footer.tsx` up to your email
  provider (Mailchimp, Buttondown, ConvertKit, a simple API route, etc.).

## Deploy to Vercel

**Option A — GitHub (recommended)**
1. Push this folder to a new GitHub repo.
2. Go to https://vercel.com/new, import the repo.
3. Framework preset auto-detects as Next.js — click Deploy.

**Option B — Vercel CLI**
```bash
npm i -g vercel
vercel
```
Follow the prompts; running `vercel` from inside this folder is enough since
`next.config.ts` and `package.json` are already set up correctly.
