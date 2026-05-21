<div align="center">

<img src="public/images/logo.png" alt="Techone Heaters Logo" width="120"/>

# TECHONE HEATERS
### Industrial Heating Solutions — Official Website

> *"Our commitment isn't just to manufacture heaters; it is to engineer the reliable thermal infrastructure that keeps our clients' factories running without interruption."*
> — **K. Ram**, Founder & Managing Director

---

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Three.js](https://img.shields.io/badge/Three.js-0.184-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

**Engineered & Developed by [Routhu Satya Hemesh](https://satyahemesh.netlify.app)**

</div>

---

## 📋 Table of Contents

1. [Project Overview](#-project-overview)
2. [Live Pages & Routes](#-live-pages--routes)
3. [Full Tech Stack](#-full-tech-stack)
4. [Project Structure](#-project-structure)
5. [Product Catalog (11 Products)](#-product-catalog)
6. [Industries Served (4 Sectors)](#-industries-served)
7. [Component Deep Dive](#-component-deep-dive)
8. [Design System](#-design-system)
9. [PDF Generation Engine](#-pdf-generation-engine)
10. [3D Product Viewer](#-3d-product-viewer)
11. [Contact & RFQ System](#-contact--rfq-system)
12. [SEO & Metadata](#-seo--metadata)
13. [Getting Started](#-getting-started)
14. [Available Scripts](#-available-scripts)
15. [Deployment](#-deployment)
16. [Developer & Company Info](#-developer--company-info)

---

## 🌟 Project Overview

**Techone Heaters** is a production-grade, full-stack marketing and product catalog website for a **Hyderabad-based industrial heater manufacturer**. Built using the latest Next.js 16 App Router, it is designed to operate as a real-world B2B digital storefront — showcasing 11 industrial products, serving 4 key industry verticals, and enabling direct customer engagement via integrated WhatsApp & Email quotation forms.

### What Makes This Special

| Feature | Implementation |
|---|---|
| 🌓 **Dark / Light Mode** | `next-themes` with custom `industrial-*` Tailwind palette, default dark |
| 🧊 **Interactive 3D Models** | React Three Fiber — unique geometry per product, glowing emissive materials |
| 📄 **Enterprise PDF Spec Sheets** | `@react-pdf/renderer` with branded A4 layout + Poppins fonts from `/public/fonts/` |
| 📱 **Fully Responsive** | Mobile-first, adaptive breakpoints from `sm` → `lg` across all 8 pages |
| ⚡ **Static Generation** | `generateStaticParams()` on product detail pages for instant load |
| 🔍 **Production SEO** | Per-page `metadata`, OpenGraph, structured robots tags, `en_IN` locale |
| 💬 **B2B Lead Capture** | WhatsApp + Email dual-submit RFQ form with professional message formatting |
| ⭐ **Review System** | Interactive 5-star rating UI with WhatsApp submission |
| 🔝 **Scroll Progress** | Animated `BackToTop` with spring-physics scroll progress ring |
| 🖼️ **Product Gallery** | Multi-image carousel with dot nav, prev/next arrows, full-screen lightbox |

---

## 🗺️ Live Pages & Routes

| Route | Title | Key Sections / Components |
|---|---|---|
| `/` | **Home** | `Hero` → `ClientLogos` → `ManufacturingCategories` → `AboutPreview` → `ProductShowcase` → `IndustriesGrid` → `Testimonials` |
| `/about` | **About Us** | Founder profile (K. Ram), company legacy, 4 core pillars |
| `/products` | **Product Catalog** | Full 3×3 grid of all 11 products with category badge and "View Specs" CTA |
| `/products/[slug]` | **Product Detail** | Product image, description, feature grid, ISO/Export badges, PDF download, RFQ link |
| `/gallery` | **Product Gallery** | Interactive thermal catalog: 4 products, multi-image per product, lightbox modal |
| `/industries` | **Industries** | 4 sector cards with deployed product tags and engineering spec notes |
| `/reviews` | **Client Reviews** | 9 testimonial cards + interactive 5-star review submission form |
| `/contact` | **Contact / RFQ** | Company info (address, phone, email) + full quotation form (WhatsApp & Email) |

> **Custom 404** (`not-found.jsx`) — Industrial-themed page with blueprint grid, animated 404 text, and recovery CTAs.

---

## 🛠️ Full Tech Stack

### Runtime & Framework

| Package | Version | Role |
|---|---|---|
| `next` | `16.2.6` | Full-stack framework — App Router, SSR, Static Generation, Image optimization |
| `react` | `19.2.4` | UI library |
| `react-dom` | `19.2.4` | React DOM renderer |

### Styling

| Package | Version | Role |
|---|---|---|
| `tailwindcss` | `^4` | Utility-first CSS (v4 `@theme` syntax for custom colors & animations) |
| `@tailwindcss/postcss` | `^4` | PostCSS integration for Tailwind v4 |
| `clsx` | `^2.1.1` | Conditional class composition |
| `tailwind-merge` | `^3.6.0` | Safe merging of conflicting Tailwind utilities |
| `next-themes` | `^0.4.6` | Dark/light mode with `attribute="class"` and system detection |

### Animation

| Package | Version | Role |
|---|---|---|
| `framer-motion` | `^12.38.0` | Page transitions, scroll-driven animations, `AnimatePresence` for gallery & navbar |

### 3D Engine

| Package | Version | Role |
|---|---|---|
| `three` | `^0.184.0` | WebGL 3D engine — geometries, materials, lighting |
| `@react-three/fiber` | `^9.6.1` | React renderer for Three.js — `Canvas`, `useFrame` |
| `@react-three/drei` | `^10.7.7` | Three.js helpers — `OrbitControls`, `Environment`, `ContactShadows`, `Center` |

### PDF Generation

| Package | Version | Role |
|---|---|---|
| `@react-pdf/renderer` | `^4.5.1` | Enterprise A4 spec sheet with `PDFDownloadLink`, Poppins fonts, table layouts |
| `jspdf` | `^4.2.1` | Simple client-side PDF fallback (used in `lib/generatePdf.js`) |

### Icons & Analytics

| Package | Version | Role |
|---|---|---|
| `lucide-react` | `^1.16.0` | Icon set (ArrowRight, Shield, Globe2, Flame, Download, Send, Star, etc.) |
| `@vercel/analytics` | `^2.0.1` | Vercel Analytics injected via `<Analytics />` in root layout |

### Dev Dependencies

| Package | Version | Role |
|---|---|---|
| `typescript` | `^5` | Type safety for config files (`next.config.ts`) |
| `@types/node` | `^20` | Node type definitions |
| `@types/react` | `^19` | React type definitions |
| `eslint` | `^9` | Code linting |
| `eslint-config-next` | `16.2.6` | Next.js ESLint rules |

---

## 📁 Project Structure

```
techone-heaters/
│
├── app/                                  # Next.js App Router
│   ├── layout.jsx                        # ROOT LAYOUT — Fonts, SEO metadata, ThemeProvider,
│   │                                     #   Navbar, Footer, Analytics, BackToTop
│   ├── page.jsx                          # HOME — Assembles all 7 homepage sections
│   ├── globals.css                       # Tailwind v4 (@theme custom colors, scrollbar,
│   │                                     #   font utilities, animation tokens)
│   ├── favicon.ico
│   ├── not-found.jsx                     # CUSTOM 404 — Blueprint grid, animated 404,
│   │                                     #   industrial copywriting, recovery CTAs
│   ├── about/
│   │   └── page.jsx                      # Founder (K. Ram), Company Legacy, 4 Core Pillars
│   ├── contact/
│   │   └── page.jsx                      # Address, 2 phone numbers, email, RFQ form
│   ├── gallery/
│   │   └── page.jsx                      # Interactive catalog with multi-image per product,
│   │                                     #   dot nav, prev/next arrows, full-screen lightbox
│   ├── industries/
│   │   └── page.jsx                      # 4 sector cards with product tags & specs
│   ├── products/
│   │   ├── page.jsx                      # 11-product catalog grid, category badges
│   │   └── [slug]/
│   │       └── page.jsx                  # DYNAMIC — generateStaticParams() + generateMetadata()
│   │                                     #   Product image, features, badges, PDF + RFQ buttons
│   └── reviews/
│       └── page.jsx                      # 9 testimonials + star rating review form
│
├── components/
│   ├── 3d/
│   │   ├── Scene.jsx                     # Three.js Canvas — lighting (spot, ambient, point),
│   │   │                                 #   OrbitControls (zoom/pan disabled), ContactShadows,
│   │   │                                 #   Environment preset="city"
│   │   └── HeaterModel.jsx               # Product-specific 3D geometries:
│   │                                     #   band → open CylinderGeometry
│   │                                     #   strip → flat BoxGeometry
│   │                                     #   furnace → box + glowing inner plane
│   │                                     #   immersion/titanium → dual rods + flange
│   │                                     #   thermocouple → thin probe + sensor head
│   │                                     #   default (tubular/cartridge) → cylinder + core
│   │
│   ├── layout/
│   │   ├── Navbar.jsx                    # Fixed, backdrop-blur navbar — logo, 5 nav links,
│   │   │                                 #   ThemeToggle, phone number, "Get Quote" CTA,
│   │   │                                 #   animated mobile hamburger menu (AnimatePresence)
│   │   └── Footer.jsx                    # 4-column footer — brand, equipment links,
│   │                                     #   headquarters address, contact; Great Vibes
│   │                                     #   developer credit with link to portfolio
│   │
│   ├── pdf/
│   │   └── TechoneSpecSheet.jsx          # Alternate @react-pdf Document component
│   │                                     #   (branded header, spec table, page footer)
│   │
│   ├── providers/
│   │   └── ThemeProvider.jsx             # next-themes <ThemeProvider> wrapper
│   │
│   ├── sections/
│   │   ├── Hero.jsx                      # Full-viewport hero — badge, headline, sub-headline,
│   │   │                                 #   "Explore Products" + "Request Quotation" CTAs,
│   │   │                                 #   blueprint grid overlay, radial orange glow
│   │   ├── AboutPreview.jsx              # 4-stat grid: Global / ISO / 1400°C / Custom
│   │   │                                 #   + "Tour Our Facility" CTA, blueprint background
│   │   ├── ClientLogos.jsx               # 3 real client logos: Olectra, Kuvag, Deccan
│   │   │                                 #   "Trusted by Industry Leaders" heading
│   │   ├── ContactForm.jsx               # B2B RFQ form — name, company, email, phone,
│   │   │                                 #   equipment dropdown, message textarea;
│   │   │                                 #   dual-submit: WhatsApp (+918919095579) & Email
│   │   ├── IndustriesGrid.jsx            # Homepage industries preview
│   │   ├── ManufacturingCategories.jsx   # Product category overview cards
│   │   ├── ProductShowcase.jsx           # Featured products homepage section
│   │   ├── ReviewForm.jsx                # 5-star interactive rating (hover + click),
│   │   │                                 #   name/company/review fields; WhatsApp submit
│   │   └── Testimonials.jsx              # 9 client testimonial cards (star ratings,
│   │                                     #   name, role, company); CTA to /reviews
│   │
│   └── ui/
│       ├── BackToTop.jsx                 # Floating button — scroll progress ring
│       │                                 #   (SVG + Framer Motion spring pathLength),
│       │                                 #   Flame icon transitions to ArrowUp, "Cool Down" label
│       ├── Button.jsx                    # Reusable button component
│       ├── DownloadPdfButton.jsx         # MAIN PDF BUTTON — @react-pdf/renderer PDFDownloadLink,
│       │                                 #   hydration-safe (isClient guard), Poppins font
│       │                                 #   registration from /public/fonts/, enterprise
│       │                                 #   A4 layout (logo, header, meta grid, sections,
│       │                                 #   spec table, abbreviations, footer with page numbers)
│       ├── ProductCard.jsx               # Product card component
│       ├── SectionHeading.jsx            # Reusable section title + subtitle
│       └── ThemeToggle.jsx               # Dark/light mode toggle button
│
├── data/
│   ├── products.js                       # 11 products — id, name, category,
│   │                                     #   image path, description, features[]
│   └── industries.js                     # 4 industries — id, name, description,
│                                         #   featuredProducts[], specs
│
├── lib/
│   ├── generatePdf.js                    # jsPDF spec sheet (orange header, description,
│   │                                     #   features list, footer disclaimer)
│   └── utils.js                          # Utility helpers
│
├── public/
│   ├── clients/                          # 3 real client logos
│   │   ├── deccan.png                    # Deccan Enterprises Private Limited
│   │   ├── kuvag.png                     # Kuvag India Private Limited
│   │   └── olectra.png                   # Olectra Greentech Limited
│   ├── fonts/                            # Self-hosted for @react-pdf
│   │   ├── Poppins-Bold.ttf
│   │   └── Poppins-Regular.ttf
│   └── images/
│       ├── logo.png                      # Brand logo (used in Navbar, Footer, PDF)
│       └── products/                     # 11 product PNGs
│           ├── cartridge-heater.png
│           ├── ceramic-band-heater.png
│           ├── ceramic-strip-heater.png
│           ├── high-density-bobbin-air-heater.png
│           ├── immersion-heater.png
│           ├── mica-band-heater.png
│           ├── mica-strip-heater.png
│           ├── muffle-furnace.png
│           ├── thermocouples-and-sensors.png
│           ├── titanium-heater.png
│           └── tubular-heater.png
│
├── AGENTS.md                             # AI agent instructions
├── CLAUDE.md                             # Claude AI context
├── eslint.config.mjs
├── next.config.ts                        # devIndicators: false
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## 📦 Product Catalog

All 11 products are defined in `data/products.js` and rendered dynamically across `/products`, `/products/[slug]`, and the gallery.

### 🔴 Heaters (9 Products)

| Product | ID (URL Slug) | Key Features |
|---|---|---|
| **Ceramic Band Heater** | `ceramic-band-heater` | Spring-loaded clamping, vertical grip, internal protective cover |
| **Ceramic Strip Heater** | `ceramic-strip-heater` | Duct heating, drying ovens, food warmers, shrink tunnels |
| **Immersion Heaters** | `immersion-heaters` | Fast liquid heating, minimal maintenance, standard pipe coupling |
| **Mica Band Heaters** | `mica-band-heaters` | Up to 10% power savings, round/flat/box section options |
| **Mica Strip Heaters** | `mica-strip-heaters` | Nichrome Ribbon wire, fluted refractory insulation |
| **Titanium Heaters** | `titanium-heaters` | Corrosion-resistant, acid & chemical safe |
| **Cartridge Heaters** | `cartridge-heaters` | Brass or SS 304 pipe, shock/vibration resistant |
| **Tubular Heaters** | `tubular-heaters` | Custom shapes, multi-surface heating (liquid/gas/solid) |
| **High Density Bobbin Air Heater** | `high-density-bobbin-air-heater` | High hot air flow, LEISTER equipment compatible |

### 🟠 Furnaces (1 Product)

| Product | ID | Key Features |
|---|---|---|
| **Muffle Furnaces** | `muffle-furnaces` | Up to 1400°C, advanced thermoinsulation, safe outer body temperature (10-12°C) |

### 🔵 Sensors (1 Product)

| Product | ID | Key Features |
|---|---|---|
| **Thermocouples & Sensors** | `thermocouples-and-sensors` | Custom RTD & thermocouple designs, plastic moulding focus |

---

## 🏭 Industries Served

Defined in `data/industries.js`, rendered on `/industries` and as a preview on the homepage.

| Sector | ID | Deployed Products | Engineering Note |
|---|---|---|---|
| **Plastic Moulding & Extrusion** | `plastic-moulding` | Thermocouples & Sensors, Mica Band Heaters, Ceramic Band Heaters | Tailored band configurations and precise diagnostic instrumentation |
| **Packaging Systems** | `packaging-machinery` | High Density Bobbin Air Heater, Thermocouples & Sensors, Cartridge Heaters | Integrates with LEISTER high-flow hot air guns |
| **Chemical & Pharma Processing** | `chemical-processing` | Titanium Heaters, Immersion Heaters, Industrial Ovens | Works within corrosive acid, chemical, and salt solutions |
| **Powder Coating & Curing** | `surface-coating` | Industrial Ovens, Ceramic Strip Heaters, Duct Heaters | Supports horizontal air flows, high-temperature conveyor setups |

---

## 🧩 Component Deep Dive

### Font System (`app/layout.jsx`)

All fonts are loaded via `next/font/google` for zero-layout-shift performance:

| Font | CSS Variable | Weight(s) | Usage |
|---|---|---|---|
| **Poppins** | *(default className)* | 300–700 | All body text, labels, UI elements |
| **Montserrat** | `--font-montserrat` | 500, 700, 800, 900 | Hero headlines, product names, section titles |
| **Arimo** | `--font-arimo` | 400–700 | Subheadings, tracking labels, contact headers |
| **Great Vibes** | `--font-great-vibes` | 400 | Developer credit in footer (cursive signature style) |

### Theme System

```
next-themes → attribute="class" → defaultTheme="dark" → enableSystem=true
```

Custom `industrial-*` palette defined in `globals.css` via Tailwind v4 `@theme`:
- `--color-industrial-900: #05080c` — Deepest background
- `--color-industrial-800: #0a0f16` — Primary dark background  
- `--color-industrial-700: #0f141d` — Card/panel dark background

Custom animations also registered in `@theme`:
- `--animate-spin-slow` — 4s linear infinite (Settings icon in Hero badge)
- `--animate-pulse-slow` — 3s pulse (used for subtle effects)

Custom scrollbar via `@layer base`:
- Track: `#0a0f16` with `border-left` subtle divider
- Thumb: `#ea580c` (Heat Orange), turns `#dc2626` (Red) on hover
- Shape: Square (`border-radius: 0px`) — true industrial aesthetic

### Contact Form Logic (`ContactForm.jsx`)

The RFQ form collects: **Name, Company, Email, Phone, Equipment Type, Message** and formats them into a professional B2B message string, then submits via:

- **WhatsApp** → `https://wa.me/8919095579?text={encodedMessage}` (opens in new tab)
- **Email** → `mailto:techoneheaters@gmail.com?subject=...&body=...` (opens mail client)

### Review System (`ReviewForm.jsx`)

Interactive 5-star rating with hover preview + click selection. Validated before submission (disabled submit if `rating === 0`). Submits as a formatted WhatsApp message to `+91 89190 95579`. Shows `CheckCircle` success state for 5 seconds post-submit.

### BackToTop Button (`BackToTop.jsx`)

Technically sophisticated floating button:
- Appears after 300px of scroll using `window.scrollY` listener
- **Scroll progress ring** — SVG `<circle>` with `pathLength` animated by Framer Motion `useSpring(scrollYProgress)`
- Orange glow drop-shadow on the ring stroke
- **Flame icon** fades in as scroll progress increases; **ArrowUp** icon fades out
- "Cool Down" label appears on hover
- Smooth spring physics: `stiffness: 100, damping: 30`

---

## 🎨 Design System

### Color Palette

| Name | Value | Usage |
|---|---|---|
| **Heat Orange** | `#EA580C` (`orange-600`) | CTAs, accents, scrollbar, PDF header |
| **Deep Red** | `#DC2626` | Gradient endpoints, scrollbar hover |
| **Cyan** | `#06B6D4` (`cyan-500`) | Icons, hover states, links, badges |
| **Industrial 900** | `#05080c` | Deepest dark background |
| **Industrial 800** | `#0a0f16` | Primary page background (dark) |
| **Industrial 700** | `#0f141d` | Card/panel background (dark) |

### Blueprint Grid Texture

Used on: Hero, Products, About, Product Detail, 404
```css
background: linear-gradient(#9ca3af 1px, transparent 1px),
            linear-gradient(90deg, #9ca3af 1px, transparent 1px);
background-size: 40px 40px;
opacity: 0.20; /* light mode */  opacity: 0.10; /* dark mode */
```

### Framer Motion Animation Patterns

| Pattern | Usage |
|---|---|
| `initial: {opacity:0, y:30}` → `animate: {opacity:1, y:0}` | Hero elements, staggered entry |
| `whileInView: {opacity:1, x:0}` + `viewport: {once:true}` | About, section cards |
| `AnimatePresence` + `mode:"wait"` | Gallery image crossfade |
| `AnimatePresence` + height `0→auto` | Mobile navbar dropdown |
| `useSpring(scrollYProgress)` | BackToTop ring, icon opacity |

---

## 📄 PDF Generation Engine

### Primary — `DownloadPdfButton.jsx` (`@react-pdf/renderer`)

The enterprise-grade A4 Technical Data Sheet used on each product detail page:

**Hydration Guard:** Uses `useState(isClient)` + `useEffect` to prevent SSR/hydration mismatch from PDFDownloadLink.

**Font Registration:** Registers `Poppins-Regular.ttf` and `Poppins-Bold.ttf` from `${window.location.origin}/fonts/` on first client mount (global `fontsRegistered` flag prevents hot-reload double-registration).

**PDF Structure:**
```
┌─────────────────────────────────────────────────────┐
│ [LOGO]          TECHONE HEATERS                     │
│                 506/P, 7-920, Subhash Nagar...      │
│                 techoneheaters@gmail.com             │
├─────────────────────────────────────────────────────┤
│ {PRODUCT NAME}                                      │
│ Technical Data Sheet (TDS)                          │
├──────────────┬──────────────┬───────────────────────┤
│ Doc Ref      │ Category     │ Date Generated        │
│ TDS-XXXXX    │ {category}   │ DD MMM YYYY           │
├─────────────────────────────────────────────────────┤
│ 1.0 Engineering Overview                            │
│ {description}                                       │
├─────────────────────────────────────────────────────┤
│ 2.0 Core Technical Features                         │
│ ■ {feature 1}                                       │
│ ■ {feature 2}                                       │
├─────────────────────────────────────────────────────┤
│ 3.0 Standard Specifications                         │
│ Parameter          │ Specification                  │
│ Operating Temp     │ Dependent on application       │
│ Mounting           │ Standard Industrial Fastening  │
│ Insulation Grade   │ High-density thermal resistant │
│ Voltage Options    │ 120V / 240V / 480V Available   │
├─────────────────────────────────────────────────────┤
│ NOTES & ABBREVIATIONS: TDS | MS | SS | V | W...    │
│ * All specs are standard parameters...              │
├─────────────────────────────────────────────────────┤
│ CONFIDENTIAL & PROPRIETARY | © TECHONE HEATERS     │
│                                    PAGE 1 OF 1      │
└─────────────────────────────────────────────────────┘
```

**Filename:** `{Product_Name}_Tech_Data_Sheet.pdf`

### Secondary — `lib/generatePdf.js` (jsPDF)

Simpler spec sheet using `jsPDF` directly:
- Orange header (`#EA580C`) with company name and Hyderabad tagline
- Gray divider line
- Product name, category, description with auto text-wrap
- Bulleted feature list
- Footer disclaimer

**Usage:** `import { generateSpecSheet } from '@/lib/generatePdf'; generateSpecSheet(product);`

---

## 🧊 3D Product Viewer

### Scene Setup (`components/3d/Scene.jsx`)

```jsx
<Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
  <ambientLight intensity={0.5} />
  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
  <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />  {/* Cyan fill light */}
  <HeaterModel productId={productId} isHeating={true} />
  <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2} far={4} />
  <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={π/4} maxPolarAngle={π/1.5} />
  <Environment preset="city" />
</Canvas>
```

### Product → 3D Geometry Mapping (`HeaterModel.jsx`)

| Product ID(s) | Geometry | Description |
|---|---|---|
| `ceramic-band-heater`, `mica-band-heaters` | `CylinderGeometry(r=1.5, h=1, open=true)` | Open ring band |
| `muffle-furnaces` | `BoxGeometry(2.5, 2.5, 2.5)` + glowing `PlaneGeometry` | Oven box with glowing inner chamber |
| `ceramic-strip-heater`, `mica-strip-heaters` | `BoxGeometry(3, 0.2, 1)` | Flat rectangular strip |
| `immersion-heaters`, `titanium-heaters` | 2× `CylinderGeometry(r=0.2)` + base `CylinderGeometry(r=1.2)` | Dual rods + heavy flange |
| `thermocouples-and-sensors` | Thin `CylinderGeometry(r=0.05, h=4)` + `CylinderGeometry(r=0.3, h=1)` | Probe + sensor head |
| *(default)* tubular, cartridge, etc. | `CylinderGeometry(r=0.5, h=4)` + glowing inner cylinder | Standard industrial rod |

### Active Heating Material (`isHeating=true`)
```js
{
  color: "#ff4500",          // Hot orange-red
  metalness: 0.8,
  roughness: 0.2,
  emissive: "#ea580c",       // Techone orange glow
  emissiveIntensity: 2,      // Strong bloom
  side: THREE.DoubleSide
}
```

All models **auto-rotate** at `0.2 rad/s` via `useFrame`. Users can **drag to orbit** (zoom & pan disabled). `Center` from drei auto-centers geometry in scene.

---

## 📬 Contact & RFQ System

### Company Info (pulled from source code)

| | |
|---|---|
| 📍 **Address** | #506/P, 7-920, Subash Nagar, Quthbullapur Mdl., Jeedimetla, Hyderabad — 500 055 (T.S.), India |
| 📞 **Phone 1** | +91 91777 76501 |
| 📞 **Phone 2** | +91 97005 41138 |
| 📱 **WhatsApp Sales** | +91 89190 95579 |
| 📧 **Email** | techoneheaters@gmail.com |
| 🌐 **Website** | https://techoneheaters.com |

### RFQ Form Fields

Name → Company → Email → Phone / WhatsApp → Equipment Type (dropdown) → Technical Specifications (textarea)

**Equipment Dropdown Options:**
- Band / Strip Heaters
- Immersion / Tubular Heaters
- Industrial Ovens & Furnaces
- Thermocouples & Sensors
- Custom Engineering Solution

### Real Client Logos (Displayed on Homepage)
- **Olectra Greentech Limited** — `public/clients/olectra.png`
- **Kuvag India Private Limited** — `public/clients/kuvag.png`
- **Deccan Enterprises Private Limited** — `public/clients/deccan.png`

---

## 🔍 SEO & Metadata

Defined in `app/layout.jsx` (root) and overridden per page:

```js
// Root (app/layout.jsx)
metadata = {
  title: {
    default: 'TECHONE HEATERS | Premium Industrial Heating Solutions',
    template: '%s | TECHONE HEATERS',
  },
  description: 'Leading manufacturers and exporters...',
  keywords: ['Industrial Heaters', 'Band Heaters', 'Cartridge Heaters',
             'Muffle Furnaces', 'Techone Heaters Jeedimetla', ...],
  openGraph: {
    url: 'https://techoneheaters.com',
    locale: 'en_IN',
    type: 'website',
  },
  robots: { index: true, follow: true, googleBot: { 'max-image-preview': 'large' } }
}
```

**Per-page metadata** on `/about`, `/contact`, `/products`, `/industries`, `/reviews`, and dynamically on `/products/[slug]` via `generateMetadata({ params })`.

**Static generation:** `/products/[slug]` uses `generateStaticParams()` to pre-render all 11 product pages at build time for maximum performance.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `18.x` or later — [Download](https://nodejs.org)
- **npm** `9+` (or yarn / pnpm / bun)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/SatyaHemesh/Techone-Heaters.git
cd Techone-Heaters

# 2. Install all dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the app hot-reloads on every file save.

### Production Build

```bash
npm run build
npm start
```

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| **Dev** | `npm run dev` | Next.js dev server with Turbopack hot reload |
| **Build** | `npm run build` | Production compile + static generation |
| **Start** | `npm start` | Serve the production build |
| **Lint** | `npm run lint` | ESLint code quality check |

---

## 🚢 Deployment

### Vercel (Recommended)

This project is built for [Vercel](https://vercel.com) — zero config required.

1. Push to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js and deploys

> Note: `next.config.ts` has `devIndicators: false` — the Vercel dev indicator is intentionally hidden for a clean production UI.

### Other Platforms

| Platform | Steps |
|---|---|
| **Netlify** | Add `@netlify/plugin-nextjs`, standard build settings |
| **AWS Amplify** | Connect repo, select Next.js framework preset |
| **Self-hosted VPS** | `npm run build && npm start`, expose port 3000, use Nginx reverse proxy |

---

## 👤 Developer & Company Info

### Developer

**Routhu Satya Hemesh**
🌐 [satyahemesh.netlify.app](https://satyahemesh.netlify.app)

*Full-stack web developer — designed, engineered, and built the entire Techone Heaters digital platform.*

### Company

**TECHONE HEATERS**
*Premier Manufacturer, Exporter & Supplier of Industrial Electrical Heaters, Ovens, Furnaces & Thermal Systems*

**Founded by:** K. Ram — Founder & Managing Director
**Based in:** Jeedimetla, Hyderabad, Telangana, India

---

<div align="center">

Built with 🔥 using **Next.js 16**, **React Three Fiber**, **Tailwind CSS v4**, and **Framer Motion**

© 2025 TECHONE HEATERS. All Rights Reserved.

</div>
