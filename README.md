# 🔥 Techone Heaters

A modern, full-featured web application for **Techone Heaters** — built with Next.js 16, React 19, and a powerful set of libraries for rich 3D visuals, smooth animations, and PDF generation.

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.2.6 | Full-stack React framework |
| [React](https://react.dev) | 19.2.4 | UI library |
| [TypeScript](https://www.typescriptlang.org) | ^5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | ^4 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | ^12 | Animations & transitions |
| [Three.js](https://threejs.org) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) | ^0.184 / ^9 | 3D rendering |
| [@react-three/drei](https://github.com/pmndrs/drei) | ^10 | Three.js helpers |
| [@react-pdf/renderer](https://react-pdf.org) | ^4 | PDF generation |
| [jsPDF](https://github.com/parallax/jsPDF) | ^4 | Client-side PDF export |
| [Lucide React](https://lucide.dev) | ^1.16 | Icon library |
| [next-themes](https://github.com/pacocoursey/next-themes) | ^0.4 | Dark/light mode |
| [@vercel/analytics](https://vercel.com/analytics) | ^2 | Usage analytics |

---

## 📁 Project Structure

```
techone-heaters/
├── app/             # Next.js App Router — pages, layouts, routes
├── components/      # Reusable UI components
├── data/            # Static data files (products, configurations, etc.)
├── lib/             # Utility functions and helpers
├── public/          # Static assets (images, icons, fonts)
├── CLAUDE.md        # AI agent context
├── AGENTS.md        # Notes for AI coding agents
├── next.config.ts   # Next.js configuration
├── tailwind.config  # Tailwind CSS configuration
└── tsconfig.json    # TypeScript configuration
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** 18.x or later
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/SatyaHemesh/Techone-Heaters.git
cd Techone-Heaters

# Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

The app hot-reloads automatically as you edit files. Start with `app/page.tsx`.

---

## 🛠️ Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the app for production |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint to check code quality |

---

## 🌟 Key Features

- **3D Product Visualization** — Interactive 3D heater models powered by Three.js and React Three Fiber
- **Smooth Animations** — Fluid page transitions and UI animations via Framer Motion
- **PDF Export** — Generate product brochures and quotes using `@react-pdf/renderer` and jsPDF
- **Dark / Light Mode** — Theme switching with `next-themes`
- **Type-Safe Codebase** — Full TypeScript support throughout
- **Performance Analytics** — Integrated Vercel Analytics for monitoring
- **Responsive Design** — Mobile-first layout with Tailwind CSS v4

---

## 🚢 Deployment

The easiest way to deploy this app is via [Vercel](https://vercel.com), the platform built by the creators of Next.js.

1. Push your code to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Vercel will auto-detect the Next.js project and deploy it.

For detailed deployment instructions, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is private and proprietary. All rights reserved © Techone Heaters.

---

## 📬 Contact

For inquiries, reach out via the [GitHub repository](https://github.com/SatyaHemesh/Techone-Heaters).
