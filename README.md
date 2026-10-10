#  Brew & Bind — Landing Page

> **"Where stories are Brewed, Bound, and Shared."**  
> An artisanal landing page for a hybrid café, independent bookstore, and hands-on bookbinding workshop that was developed as part of the **Elevvo Internship Program**.

---



**Brew & Bind** is a concept space that merges the warmth of specialty coffee with the tactile charm of curated literature and bookbinding craftsmanship. 

This repository contains the official high-performance, fully responsive landing page designed with rich editorial aesthetics, smooth interactive animations, and comprehensive bilingual (English / Arabic) support with native RTL handling.

---

## Main Features

- ** Editorial Splash Screen:** Elegant introductory screen setting the brand tone before transitioning smoothly into the main experience.
- ** Full Bilingual Support (EN / AR):** Instant language switching with dynamic context, complete Arabic translations, and automatic Left-to-Right (LTR) / Right-to-Left (RTL) layout adjustments.
- ** Warm Artisanal Design System:** Custom-tailored typography (`Sorts Mill Goudy`, `Lateef`, and `Geist`), botanical textures, and an earthy color palette (`MainOrange`, `MainGreen`, `DarkBrown`, `Cream`).
- ** Smooth Inertia Scrolling:** Powered by [Lenis](https://github.com/darkroomengineering/lenis) for a fluid, polished browsing feel.
- ** Interactive Micro-Animations:** Section transitions, card hovers, and animated navigation drawers powered by [Framer Motion](https://www.framer.com/motion/).
- ** Highlighted Brand Pillars:**
  - **Specialty Coffee:** Slow pour-overs, rich espresso, and rotating seasonal drinks.
  - **Curated Reads:** Hand-picked fiction, poetry, and local literature.
  - **Bookbinding Workshops:** Hands-on sessions to craft custom journals and sketchbooks from scratch.
- ** Waitlist & Pre-registration:** Integrated waitlist registration form with client-side validation using [React Hook Form](https://react-hook-form.com/).
- * Fully Responsive:** Carefully optimized across extra-small mobile displays, tablets, laptops, and ultra-wide screens.

---

##  Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Smooth Scrolling** | [Lenis](https://lenis.darkroom.engineering/) |
| **Form Handling** | [React Hook Form](https://react-hook-form.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | `Sorts Mill Goudy`, `Lateef` (Arabic), `Geist` via `next/font` |
| **Image Processing** | `sharp` & Next.js Image Optimization |

---

##  Project Structure

```text
├── public/
│   └── images/              # Optimized brand photography, artwork & textures
├── src/
│   ├── app/
│   │   ├── fonts/           # Local font assets
│   │   ├── globals.css      # Base styles & Tailwind directives
│   │   ├── layout.tsx       # Root layout & font variable injections
│   │   └── page.tsx         # Main entry page assembling sections
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, OrangeDivider
│   │   ├── sections/        # Hero, About, Feature, Form (Waitlist)
│   │   └── ui/              # Reusable UI cards, LanguageSwitcher, SplashScreen
│   ├── lib/
│   │   ├── LanguageContext.tsx  # Bilingual state & RTL direction manager
│   │   └── ScrollContext.tsx    # Smooth scroll navigation helper
│   └── locales/
│       └── translation.ts   # English & Arabic dictionary
├── tailwind.config.ts       # Custom color tokens & screen breakpoints
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies & scripts
```

---

##  Getting Started

### Prerequisites

Make sure you have **Node.js 18+** installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nooressam1/Brew-Bind-Landing-Page-Elevvopaths-Internship-.git
   cd Brew-Bind-Landing-Page-Elevvopaths-Internship-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**  
   Open [http://localhost:3000](http://localhost:3000) to view the landing page.

---

##  Available Scripts

- `npm run dev` — Launches the Next.js development server.
- `npm run build` — Compiles the production build.
- `npm run start` — Runs the compiled production server.
- `npm run lint` — Runs ESLint to check for code quality and styling errors.

---

##  Color Palette Reference

| Color Name | Hex Code | Preview |
|---|---|---|
| **Main Orange** | `#BE704D` | ![#BE704D](https://via.placeholder.com/15/BE704D/000000?text=+) |
| **Main Green** | `#8A9A5B` | ![#8A9A5B](https://via.placeholder.com/15/8A9A5B/000000?text=+) |
| **Dark Brown** | `#3B2A20` | ![#3B2A20](https://via.placeholder.com/15/3B2A20/000000?text=+) |
| **Cream** | `#F5EDE0` | ![#F5EDE0](https://via.placeholder.com/15/F5EDE0/000000?text=+) |

---

##  Acknowledgments

Developed as part of the **Elevvo Internship Program (Elevvopaths)**.
