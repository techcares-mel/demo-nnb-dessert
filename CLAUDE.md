# CLAUDE.md — NNB Dessert House

## Business Details

- **Name**: NNB Dessert House
- **Full Name**: Nhung Nguoi Ban (NNB) Dessert House — "Friends" Dessert House
- **Type**: Vietnamese dessert shop + street food
- **Tagline**: A taste of Vietnamese late-night dessert culture

### Locations

**Sunshine (Primary)**
- 221A Hampshire Rd, Sunshine VIC 3020
- Phone: (03) 9078 5135
- Hours: Mon–Sun · 11:00 AM – 9:00 PM
- Atmosphere: hidden down a fairy-lit alleyway off Hampshire Road, cosy hallway-like shop with bar stools and a glass cabinet of dessert toppings

**Footscray (Secondary)**
- 57 Byron St, Footscray VIC 3011
- Phone: (not separately confirmed — display address only)
- Hours: Mon–Sun · 11:00 AM – 9:00 PM (same as Sunshine)

### Social

- Facebook: https://www.facebook.com/nnbdesserthouse/
- Instagram: https://www.instagram.com/nnbdessert/

### Stats from research

- Google rating: 4.3 stars
- Review count: ~170 reviews

## Language

- ALL site text in English only.
- Brand name "NNB Dessert House" and Vietnamese dish/category names (Chè, Bánh Flan, Bột Chiên, Bò Né, Bún Riêu, Bánh Tráng Trộn) used as widely-recognised proper nouns.

## Design System

- **Theme**: light (warm cream)
- **Template**: B — Restaurant / Café / Food
- **Accent color**: `#da902c` (warm amber/orange — extracted from logo via `colors.json`)
- **Accent hover**: `#b8761e`
- **Background**: `#fdf6ed` (cream)
- **Surface**: `#f0e4cc` (deeper cream — for alternate sections)
- **Card**: `#ffffff`
- **Text**: `#1c1209` (near-black warm)
- **Text muted**: `#7a6550`
- **Heading font**: Cormorant Garamond (700 italic for display)
- **Body font**: Be Vietnam Pro (400/500/600/700)
- **Inspiration**: warm cream café aesthetic — soft serif italic display headings, modern Vietnamese-friendly sans-serif body, food photography in rounded cards, generous whitespace, accent strip for "Our Story", split-layout hero (NOT full-bleed).

## Assets

- **Logo**: `images/logo.jpg` — used in nav (circular, height 56px) and footer (height 64px)
- **images/**:
  - `image1.jpg` — Hero card (right column of split hero) + Gallery item 1 (signature chè)
  - `image2.jpg` — How It Works step 2 + Feature strip top + Gallery item 2 (sweet treats)
  - `image3.jpg` — How It Works step 3 + Feature strip bottom + Gallery item 3 (fresh daily)
  - `image4.jpg` — How It Works step 4 + About section right column + Gallery item 4 (welcome, spans full row)

## Page Sections

1. **Nav** — Fixed top; logo + brand text + 5 links (Home/Menu/About/Locations/Contact) + "Order Now" pill CTA; hamburger overlay below 768px.
2. **Hero** — Split layout: left text (eyebrow pill, h1 with `<em>NNB</em>`, tagline, two pill CTAs); right rounded card with `image1.jpg`. NOT full-bleed.
3. **How It Works** — 4-card grid (Browse / Choose Location / Made Fresh / Enjoy) on surface background, each with image + step number + title + description.
4. **Feature Strip** — Full-bleed accent (`#da902c`) block. Left: "Our Story" + h2 "A Taste of *Vietnam*" + paragraph + checkmark feature list + dark CTA. Right: 2 stacked images (image2 + image3).
5. **About** — 2-col: left text "More Than *Just Dessert*" + 2×2 icon badges (Authentic / Family Run / Fresh Daily / Two Locations); right image4 rounded portrait.
6. **Menu** — 2×2 category grid on surface bg: Chè · Yogurts & Creams · Street Food · Drinks. Items listed under each, no prices.
7. **Gallery** — 3-col grid, 4 images, last image spans full row. Hover caption slides up.
8. **Stats** — 4-col: 10+ Menu Categories · 4.3★ Loved by Locals · 2 Locations · 100% Authentic. Animated count-up on scroll.
9. **Testimonials** — 3 real testimonials from research.json with star ratings (5★, 5★, 4★).
10. **Locations** — Dedicated section with 2 cards: each shows Google Maps embed + address + (phone for Sunshine only) + hours + Get Directions link.
11. **Contact** — 2-col: left contact info (phone, both addresses, hours, social icons); right form (Name/Phone/Email/Message + Send Message).
12. **Footer** — Dark warm `var(--text)` bg with cream text. Centered top: logo + brand name + tagline. 3-col nav (Visit / Menu / Connect). Bottom: © 2026 copyright.

## Rules

- Mobile-first responsive, breakpoints: 480 / 768 / 1024 / 1280px
- Scroll-reveal on all section heads, cards, badges and images (80ms stagger via .d1/.d2/.d3/.d4)
- Back-to-top button (fixed bottom-right, scrollY > 300)
- Scroll progress bar (fixed top, 3px, accent color)
- DEMO watermark (fixed right side, rotated, pulsing glow, opacity 0.28–0.45)
- No Lorem Ipsum — real business data from `research.json`
- Pure HTML5 / CSS3 / vanilla JS — no frameworks, no build step
- Font Awesome CDN included (social links + UI icons used)
- Google Fonts: Cormorant Garamond + Be Vietnam Pro

## Redeployment

After making changes, commit and redeploy from inside this folder:
```bash
git add -A
git commit -m "describe your changes"
git push
vercel --prod --yes
```
The Vercel project is already linked (`.vercel/project.json`) — no token or scope flags needed.
