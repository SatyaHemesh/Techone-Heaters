<div align="center">

# 🔥 TECHONE HEATERS
### Industrial Heating Solutions — Official Website

**A production-grade Next.js web application for Techone Heaters, a premier manufacturer, exporter, and supplier of industrial electrical heaters, ovens, furnaces, and thermal systems based in Hyderabad, India.**

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Pages & Features](#-live-pages--features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Product Catalog](#-product-catalog)
- [Industries Served](#-industries-served)
- [Component Architecture](#-component-architecture)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Design System](#-design-system)
- [PDF Generation](#-pdf-generation)
- [3D Product Viewer](#-3d-product-viewer)
- [SEO & Metadata](#-seo--metadata)
- [Deployment](#-deployment)
- [Contact & Company Info](#-contact--company-info)

---

## 🌟 Overview

The **Techone Heaters** website is a full-stack, enterprise-grade marketing and product catalog web application built with the latest Next.js App Router architecture. It showcases 11 industrial heating products across 3 categories, serves 4 key industry verticals, features an interactive 3D product viewer, a client-side PDF spec sheet generator, a customer review system, a product gallery with lightbox, and a full contact/RFQ form — all wrapped in a polished dark/light themed UI optimized for global SEO.

**Key highlights:**
- 🎨 Dual **dark/light mode** with smooth transitions (default: dark/industrial theme)
- 🧊 **Interactive 3D heater models** rendered with Three.js + React Three Fiber, unique per product type
- 📄 **Downloadable PDF spec sheets** generated client-side via jsPDF and `@react-pdf/renderer`
- 🌐 **Full SEO setup** with OpenGraph, structured robots metadata, and dynamic per-page titles
- ⚡ **Framer Motion** animations throughout for a premium, high-performance feel
- 📱 **Fully responsive** — mobile-first design with adaptive layouts at every breakpoint
- 🏭 Real client logos (Deccan, Kuvag, Olectra) and genuine customer testimonials

---

## 🗺️ Live Pages & Features

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero, client logos, manufacturing categories, about preview, product showcase, industries grid, testimonials |
| `/about` | **About Us** | Founder profile (K. Ram, MD), company legacy, core pillars (Durability, Efficiency, Precision, Export Quality) |
| `/products` | **Product Catalog** | Full grid of 11 products across 3 categories with "View Specs" links |
| `/products/[slug]` | **Product Detail** | Dynamic page per product with 3D model viewer, spec table, and PDF download button |
| `/gallery` | **Product Gallery** | Interactive thermal catalog with multi-image carousel, dot navigation, prev/next arrows, and full-screen lightbox |
| `/industries` | **Industries** | Detailed cards for 4 industry verticals with deployed product tags and engineering specs |
| `/reviews` | **Client Reviews** | Testimonials display + live review submission form |
| `/contact` | **Contact / RFQ** | Engineering support contact info + Request for Quotation form with full company address and phone numbers |

---

## 🛠️ Tech Stack

### Core Framework
| Technology | Version | Role |
|---|---|---|
| [Next.js](https://nextjs.org) | `16.2.6` | Full-stack React framework (App Router) |
| [React](https://react.dev) | `19.2.4` | UI library |
| [TypeScript](https://www.typescriptlang.org) | `^5` | Type safety (config files) |

### Styling
| Technology | Version | Role |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com) | `^4` | Utility-first CSS framework |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | `^3.6.0` | Safe Tailwind class merging |
| [clsx](https://github.com/lukeed/clsx) | `^2.1.1` | Conditional class utility |
| [next-themes](https://github.com/pacocoursey/next-themes) | `^0.4.6` | Dark/light mode switching |

### Animation
| Technology | Version | Role |
|---|---|---|
| [Framer Motion](https://www.framer.com/motion/) | `^12.38.0` | Page transitions, scroll animations, `AnimatePresence` for gallery |

### 3D Rendering
| Technology | Version | Role |
|---|---|---|
| [Three.js](https://threejs.org) | `^0.184.0` | 3D WebGL engine |
| [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) | `^9.6.1` | React renderer for Three.js |
| [@react-three/drei](https://github.com/pmndrs/drei) | `^10.7.7` | Three.js helpers (`Center`, `OrbitControls`, etc.) |

### PDF Generation
| Technology | Version | Role |
|---|---|---|
| [jsPDF](https://github.com/parallax/jsPDF) | `^4.2.1` | Client-side PDF spec sheet generation |
| [@react-pdf/renderer](https://react-pdf.org) | `^4.5.1` | React-based PDF document component |

### UI & Icons
| Technology | Version | Role |
|---|---|---|
| [Lucide React](https://lucide.dev) | `^1.16.0` | Icon library (ArrowRight, Shield, Globe2, etc.) |

### Analytics & Fonts
| Technology | Version | Role |
|---|---|---|
| [@vercel/analytics](https://vercel.com/analytics) | `^2.0.1` | Page view and event analytics |
| Google Fonts (via next/font) | — | Poppins, Montserrat, Arimo, Great Vibes |

---

## 📁 Project Structure

```
techone-heaters/
│
├── app/                          # Next.js App Router
│   ├── layout.jsx                # Root layout — fonts, SEO metadata, ThemeProvider, Navbar, Footer
│   ├── page.jsx                  # Home page — assembles all homepage sections
│   ├── globals.css               # Global CSS, Tailwind directives, custom colors
│   ├── favicon.ico               # Browser favicon
│   ├── not-found.jsx             # Custom 404 page
│   │
│   ├── about/
│   │   └── page.jsx              # About page — Founder, legacy, core pillars
│   ├── contact/
│   │   └── page.jsx              # Contact/RFQ page — company info, contact form
│   ├── gallery/
│   │   └── page.jsx              # Gallery — interactive catalog, lightbox, image carousel
│   ├── industries/
│   │   └── page.jsx              # Industries page — sector cards with deployed products
│   ├── products/
│   │   ├── page.jsx              # Products catalog grid (all 11 products)
│   │   └── [slug]/
│   │       └── page.jsx          # Dynamic product detail — 3D viewer + PDF download
│   └── reviews/
│       └── page.jsx              # Reviews page — testimonials + review form
│
├── components/                   # Reusable UI components
│   ├── 3d/
│   │   ├── HeaterModel.jsx       # 3D product geometry switcher (unique shape per product)
│   │   └── Scene.jsx             # Three.js scene wrapper — lighting, camera, canvas
│   │
│   ├── layout/
│   │   ├── Navbar.jsx            # Fixed responsive navbar with mobile menu + ThemeToggle
│   │   └── Footer.jsx            # Site footer — links, contact, social
│   │
│   ├── pdf/
│   │   └── TechoneSpecSheet.jsx  # React PDF document component — branded A4 spec sheet
│   │
│   ├── providers/
│   │   └── ThemeProvider.jsx     # next-themes wrapper component
│   │
│   ├── sections/                 # Homepage & page section components
│   │   ├── Hero.jsx              # Animated hero — headline, badge, CTA buttons, grid bg
│   │   ├── AboutPreview.jsx      # About snapshot — stat cards (Global, ISO, 1400°C, Custom)
│   │   ├── ClientLogos.jsx       # Scrolling client logo strip (Deccan, Kuvag, Olectra)
│   │   ├── ContactForm.jsx       # RFQ / enquiry form with validation
│   │   ├── IndustriesGrid.jsx    # Homepage industries preview grid
│   │   ├── ManufacturingCategories.jsx # Product category overview cards
│   │   ├── ProductShowcase.jsx   # Featured products section
│   │   ├── ReviewForm.jsx        # Customer review submission form
│   │   └── Testimonials.jsx      # Client testimonial cards (star ratings)
│   │
│   └── ui/                       # Atomic UI components
│       ├── BackToTop.jsx         # Scroll-to-top floating button
│       ├── Button.jsx            # Reusable button component
│       ├── DownloadPdfButton.jsx # PDF download trigger (client component)
│       ├── ProductCard.jsx       # Product card used in showcases
│       ├── SectionHeading.jsx    # Reusable section title + subtitle
│       └── ThemeToggle.jsx       # Dark/light mode toggle button
│
├── data/                         # Static data layer
│   ├── products.js               # All 11 products — id, name, category, description, features, image
│   └── industries.js             # 4 industry verticals — description, featured products, specs
│
├── lib/                          # Utility functions
│   ├── generatePdf.js            # jsPDF spec sheet generator function
│   └── utils.js                  # Shared utility helpers (clsx, etc.)
│
├── public/                       # Static assets
│   ├── clients/                  # Client logos (deccan.png, kuvag.png, olectra.png)
│   ├── fonts/                    # Local font files (Poppins-Bold.ttf, Poppins-Regular.ttf)
│   └── images/
│       ├── logo.png              # Techone Heaters brand logo
│       └── products/             # Product images (11 PNG files)
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
├── .gitignore
├── AGENTS.md                     # Instructions for AI coding agents
├── CLAUDE.md                     # Claude AI context file
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## 📦 Product Catalog

The app features **11 products** across **3 categories**, sourced from `data/products.js`:

### 🔴 Heaters
| Product | Key Features |
|---|---|
| **Ceramic Band Heater** | Spring-loaded clamping, vertical mounting grip, internal protective cover |
| **Ceramic Strip Heater** | Duct heating, drying ovens, food warmers, shrink tunnels |
| **Immersion Heaters** | Fast liquid heating, minimal maintenance, standard pipe coupling mount |
| **Mica Band Heaters** | Up to 10% power savings, flexible, round/flat/box section options |
| **Mica Strip Heaters** | Nichrome Ribbon wire, fluted refractory insulation, max heat distribution |
| **Titanium Heaters** | Corrosion-resistant, acid & chemical safe, titanium construction |
| **Cartridge Heaters** | Brass or SS 304 pipe, shock/vibration resistant, moderate density |
| **Tubular Heaters** | Custom shapes, multi-surface heating, versatile application |
| **High Density Bobbin Air Heater** | High hot air flow, packaging industry, LEISTER equipment compatible |

### 🟠 Furnaces
| Product | Key Features |
|---|---|
| **Muffle Furnaces** | Up to 1400°C, advanced thermoinsulation, safe outer body temperature |

### 🔵 Sensors
| Product | Key Features |
|---|---|
| **Thermocouples & Sensors** | Custom RTD designs, plastic moulding focus, K-type compatible |

---

## 🏭 Industries Served

Sourced from `data/industries.js`:

| Industry | Deployed Products |
|---|---|
| **Plastic Moulding & Extrusion** | Thermocouples & Sensors, Mica Band Heaters, Ceramic Band Heaters |
| **Packaging Systems** | High Density Bobbin Air Heater, Thermocouples & Sensors, Cartridge Heaters |
| **Chemical & Pharma Processing** | Titanium Heaters, Immersion Heaters, Industrial Ovens |
| **Powder Coating & Curing** | Industrial Ovens, Ceramic Strip Heaters, Duct Heaters |

---

## 🧩 Component Architecture

### Fonts (loaded via `next/font/google` in `app/layout.jsx`)
| Font | Variable | Usage |
|---|---|---|
| **Poppins** | default `className` | Body text, descriptions, general UI |
| **Montserrat** | `--font-montserrat` | Hero headings, section titles, product names |
| **Arimo** | `--font-arimo` | Subheadings, tracking labels, contact info headers |
| **Great Vibes** | `--font-great-vibes` | Decorative / signature-style elements |

### Theme System
- Implemented via `next-themes` with `attribute="class"` and `defaultTheme="dark"`
- Custom Tailwind color `industrial-*` (800, 900, 700) used throughout for the dark industrial palette
- All components use paired light/dark class utilities (e.g. `bg-gray-50 dark:bg-industrial-800`)
- Smooth `transition-colors duration-300` applied globally

### 3D Scene (`components/3d/`)
- `Scene.jsx` — wraps the Three.js canvas with lighting and camera setup
- `HeaterModel.jsx` — switches geometry based on `productId`:
  - **Band heaters** → Open `CylinderGeometry` ring
  - **Strip heaters** → Flat `BoxGeometry`
  - **Muffle furnace** → Hollow box with glowing inner chamber plane
  - **Immersion/Titanium** → Dual cylinder rods + base flange
  - **Thermocouples** → Thin precision probe + sensor head
  - **Default (tubular/cartridge)** → Standard cylinder with glowing core

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** `18.x` or later ([download](https://nodejs.org))
- **npm** `9+`, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/SatyaHemesh/Techone-Heaters.git

# 2. Navigate into the project
cd Techone-Heaters

# 3. Install dependencies
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app hot-reloads automatically on file changes.

### Build for Production

```bash
npm run build
npm start
```

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| **Dev Server** | `npm run dev` | Starts Next.js dev server at `localhost:3000` with hot reload |
| **Build** | `npm run build` | Compiles and optimizes the app for production |
| **Start** | `npm start` | Starts the compiled production server |
| **Lint** | `npm run lint` | Runs ESLint across the codebase |

---

## 🎨 Design System

The site uses a custom **industrial dark theme** built on top of Tailwind CSS v4:

- **Primary accent:** Orange (`orange-600` / `#EA580C`) — CTAs, borders, highlights
- **Secondary accent:** Cyan (`cyan-500` / `#06B6D4`) — icons, hover effects, links
- **Dark backgrounds:** Custom `industrial-800`, `industrial-900`, `industrial-700`
- **Light backgrounds:** `gray-50`, `white` with subtle `gray-200` borders
- **Blueprint grid overlay:** Repeated 40×40px grid pattern used as atmospheric texture on hero, products, and about sections
- **Typography scale:** Extrabold uppercase headings → Semibold subheadings → Regular body copy

### Animation Patterns (Framer Motion)
- **Hero elements:** `opacity 0→1` + `y 30→0` stagger on page load
- **Section cards:** `whileInView` scroll-triggered fade-in from left/right
- **Gallery transitions:** `AnimatePresence` with scale + opacity crossfade
- **Navbar mobile menu:** Slide-down with `AnimatePresence`

---

## 📄 PDF Generation

The app offers **two PDF generation methods** for product spec sheets:

### Method 1 — `lib/generatePdf.js` (jsPDF, client-triggered)
Used by `DownloadPdfButton.jsx`. Generates a complete A4 PDF directly in the browser with:
- Orange-themed corporate header ("TECHONE HEATERS")
- Product name, category, and description
- Bulleted feature list
- Footer with disclaimer

```js
import { generateSpecSheet } from '@/lib/generatePdf';
generateSpecSheet(product); // triggers browser download of `{product.id}-spec-sheet.pdf`
```

### Method 2 — `components/pdf/TechoneSpecSheet.jsx` (`@react-pdf/renderer`)
A React component that renders a fully branded A4 PDF document:
- Logo placeholder + company header with orange accent line
- Document title: `{productName} — Technical Specifications`
- Clean engineering-grade spec table (Parameter / Value columns)
- Page-numbered footer: `Page X of Y`

---

## 🧊 3D Product Viewer

Each product detail page (`/products/[slug]`) features an interactive 3D model:

- Built with **Three.js + React Three Fiber**
- Models use `meshStandardMaterial` with **glowing emissive** properties to simulate active heating (`isHeating` prop)
- Hot metal appearance: `color: #ff4500`, `emissive: #ea580c`, `emissiveIntensity: 2`
- Each product type renders a **unique 3D geometry** (see Component Architecture above)
- Models **auto-rotate** at `0.2 rad/s` using `useFrame`
- Helpers from `@react-three/drei`: `Center` for scene centering

---

## 🔍 SEO & Metadata

Configured in `app/layout.jsx` and individual page files using Next.js `metadata` exports:

```js
// Root metadata (app/layout.jsx)
export const metadata = {
  title: {
    default: 'TECHONE HEATERS | Premium Industrial Heating Solutions',
    template: '%s | TECHONE HEATERS',
  },
  description: 'Leading manufacturers and exporters of custom industrial electrical heaters, industrial ovens, furnaces, and highly accurate thermocouples based in Hyderabad, India.',
  keywords: ['Industrial Heaters', 'Band Heaters', 'Cartridge Heaters', 'Muffle Furnaces', ...],
  openGraph: {
    title: 'TECHONE HEATERS | Industrial Heating Solutions',
    url: 'https://techoneheaters.com',
    locale: 'en_IN',
    type: 'website',
  },
  robots: { index: true, follow: true, googleBot: { ... } }
};
```

Every page also declares its own `metadata` for unique per-route titles and descriptions.

---

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The project is optimized for deployment on [Vercel](https://vercel.com), the platform built by the Next.js team.

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the `Techone-Heaters` repository
4. Vercel auto-detects Next.js and deploys with zero configuration

For detailed instructions, see the [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### Other Platforms

| Platform | Notes |
|---|---|
| **Netlify** | Requires `@netlify/plugin-nextjs` |
| **AWS Amplify** | Supports Next.js SSR out of the box |
| **Self-hosted** | Run `npm run build && npm start` with Node.js 18+ |

---

## 📬 Contact & Company Info

**TECHONE HEATERS**
Manufacturing & Export of Industrial Heating Systems

| | |
|---|---|
| 📍 **Address** | #506/P, 7-920, Subash Nagar, Quthbullapur Mdl., Jeedimetla, Hyderabad — 500 055 (T.S.), India |
| 📞 **Phone** | +91 91777 76501 / +91 97005 41138 |
| 📧 **Email** | techoneheaters@gmail.com |
| 🌐 **Website** | https://techoneheaters.com |

---

## 👤 Founder

**K. Ram** — Founder & Managing Director

> *"Our commitment isn't just to manufacture heaters; it is to engineer the reliable thermal infrastructure that keeps our clients' factories running without interruption."*

---

<div align="center">

Built with ❤️ using **Next.js**, **React Three Fiber**, and **Tailwind CSS**

© 2025 Techone Heaters. All rights reserved.

</div>
