# S. Suresh & Associates — Chartered Accountants

A modern, accessible, and premium corporate web application for **S. Suresh & Associates**, a leading Chartered Accountancy firm registered with the **Institute of Chartered Accountants of Nepal (ICAN)**.

The website is designed with a premium, conversion-focused layout that guides businesses through auditing, tax advisory, and compliance processes.

---

## 🌟 Key Features

### 🏛️ Corporate Interface & Brand Identity
- **Premium Aesthetics**: Engineered with deep navy (`#1e40af`), emerald/teal (`#0f766e`), and amber/gold accent tones.
- **Dynamic Micro-animations**: Smooth transitions, scrolling effects, and entrance overlays using Framer Motion.
- **Responsive Layout**: Designed mobile-first, ensuring complete layout responsiveness down to small viewports (320px).

### 🔍 Specialized Page Templates
- **Interactive About Timeline**: Visual milestone path tracing the firm's growth since 2016 alongside credentials verification.
- **Services Catalog with Tab Filters**: Grouped service offerings (Audit & Assurance, Tax & Compliance, Corporate & IT, Business Advisory) with dynamic count badges.
- **Contact Form Validation-on-Blur**: Advanced validate-on-blur feedback, spam/cooldown prevention, and automatic drop-down query parameter prefills.
- **Client Insights Portal**: Administrative compliance dashboard displaying real-time client statuses, interactive filtering, SVG circular completeness meters, and Nepalese currency formatting (`Rs. XX,XX,XXX`).

### ♿ Accessibility (WCAG 2.2 Level AA)
- Custom focus-visible rings (`outline-offset: 3px`) for complete keyboard navigation support.
- Screen reader friendly landmarks, semantic HTML structures, and accessible labels (`aria-expanded`, `aria-label`).
- High text-to-background contrast meeting a minimum of 4.5:1 ratio.

---

## 🛠️ Technology Stack

- **Core**: React 19 (Single Page Application)
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4 (native `@theme` configurations)
- **Animations**: Framer Motion
- **Routing**: React Router Dom v7
- **Icons**: Heroicons & React Icons

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18+) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Designer-PEG/ssureshandassociates.git
   cd ssureshandassociates
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Development Server

Run the development server locally:
```bash
npm run dev
```

The site will be available at [http://localhost:5173](http://localhost:5173).

### Linting & Formatting

Validate code quality and syntax rules using ESLint:
```bash
npm run lint
```

### Production Build

Create a optimized production bundle:
```bash
npm run build
```

---

## 📁 Project Structure

```text
ssureshandassociates/
├── public/                 # Static assets (favicons, CNAME)
├── src/
│   ├── assets/             # Brand logos, team headshots, and illustrations
│   ├── components/         # Reusable shell & section components
│   │   ├── Header.jsx      # Sticky navbar with mobile navigation drawer
│   │   ├── Footer.jsx      # Clean footer with quick links and mapping details
│   │   ├── Hero.jsx        # Landing hero section with dual CTAs
│   │   ├── ServicesPreview.jsx # Core service previews with tab highlights
│   │   └── CTA.jsx         # Contact call-to-action block
│   ├── data/               # Static services catalog and team details (JSON)
│   ├── pages/              # SPA route page views
│   │   ├── About.jsx       # Milestone timeline and compliance grid
│   │   ├── Contact.jsx     # Validated contact form with query prefills
│   │   ├── Insights.jsx    # Administrative client dashboard
│   │   └── Services.jsx    # Tab-filtered services catalog
│   ├── App.jsx             # React Router routing configuration
│   └── index.css           # Tailwind CSS imports & custom theme configurations
└── package.json            # Scripts and package dependencies
```

---

## 🌐 Deployment

This project is set up to deploy directly to GitHub Pages:

```bash
npm run deploy
```

This script automatically runs `npm run build` and deploys the generated production files from the `dist` directory to the `gh-pages` branch.
