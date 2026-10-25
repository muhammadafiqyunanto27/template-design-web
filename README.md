# Template Design — Company Profile Landing Pages

A collection of **10 radically different** company profile landing page templates, each implemented in **both Next.js (App Router) and Astro**, with **International and Indonesia-specific variants**.

## 🎯 Design Philosophy

> **"Design It Twice"** — Your first idea is unlikely to be the best. Each template explores a radically different design direction tailored to a specific segment of the market: from UMKM to SpaceX/NASA/Meta/Google scale.

### No AI Slop
- ❌ Zero purple gradients (the "AI-generated" tell)
- ❌ No generic "hero with illustration + 3-column features" templates
- ❌ No meaningless animations or decorative gradients
- ✅ Max 1 subtle gradient per template (hero only)
- ✅ Semantic color tokens — every color has a purpose
- ✅ WCAG AA contrast minimum everywhere
- ✅ Dark mode by default where appropriate

---

## 📁 Project Structure

```
template-design/
├── DESIGN_BRIEF.md                 # Complete design specifications
├── shared/                         # Shared design system
│   ├── tokens/
│   │   ├── intl/                   # International base tokens
│   │   │   ├── colors.css          # Semantic color system
│   │   │   ├── typography.css      # Fluid type scale + font stacks
│   │   │   └── spacing.css         # 4px base unit, fluid spacing
│   │   └── id/                     # Indonesia-specific overrides
│   │       └── colors.css          # ID accent colors, batik patterns, trust badges
│   ├── components/
│   │   └── spec.md                 # Framework-agnostic component interfaces
│   ├── utils/
│   │   └── locale.ts               # Currency, phone, date formatters (intl + ID)
│   └── locale/
│       ├── en.json                 # English UI dictionary
│       └── id.json                 # Bahasa Indonesia UI dictionary
│
├── enterprise-authority/           # Template 1: Fortune 500 / Gov / Big Tech
│   ├── nextjs-intl/                # Next.js App Router (English)
│   ├── nextjs-id/                  # Next.js App Router (Bahasa Indonesia)
│   ├── astro-intl/                 # Astro (English)
│   └── astro-id/                   # Astro (Bahasa Indonesia)
│
├── deep-tech-frontier/             # Template 2: SpaceX, NASA, Anduril, Quantum
│   ├── nextjs-intl/
│   ├── nextjs-id/
│   ├── astro-intl/
│   └── astro-id/
│
├── umkm-warmth/                    # Template 3: Local coffee, batik, workshop
│   ├── nextjs-intl/
│   ├── nextjs-id/
│   ├── astro-intl/
│   └── astro-id/
│
├── creative-studio/                # Template 4: Design agencies, architects
│   ├── nextjs-intl/
│   ├── nextjs-id/
│   ├── astro-intl/
│   └── astro-id/
│
├── saas-product-led/               # Template 5: Vercel, Linear, Stripe style
│   ├── nextjs-intl/
│   ├── nextjs-id/
│   ├── astro-intl/
│   └── astro-id/
│
├── innovation-lab/                 # Template 6: Google X, DeepMind, R&D
│   ├── nextjs-intl/
│   ├── nextjs-id/
│   ├── astro-intl/
│   └── astro-id/
│
├── corporate-institutional/        # Template 7: Banks, healthcare, universities
│   ├── nextjs-intl/
│   ├── nextjs-id/
│   ├── astro-intl/
│   └── astro-id/
│
├── mission-driven/                 # Template 8: Non-profits, climate, social enterprise
│   ├── nextjs-intl/
│   ├── nextjs-id/
│   ├── astro-intl/
│   └── astro-id/
│
├── developer-platform/             # Template 9: AWS, Cloudflare, Supabase
│   ├── nextjs-intl/
│   ├── nextjs-id/
│   ├── astro-intl/
│   └── astro-id/
│
└── modular-agency/                 # Template 10: White-label, design systems
    ├── nextjs-intl/
    ├── nextjs-id/
    ├── astro-intl/
    └── astro-id/
```

---

## 🎨 The 10 Template Directions

| # | Template | Target Audience | Core Vibe | Color Approach | Typography |
|---|----------|-----------------|-----------|----------------|------------|
| 1 | **enterprise-authority** | Google, Meta, Gov, Fortune 500 | Restrained authority | Navy + warm neutral + 1 accent | Inter (system UI) |
| 2 | **deep-tech-frontier** | SpaceX, NASA, Blue Origin, Quantum | Dark, technical, data-dense | Near-black + electric cyan/amber | JetBrains Mono + Space Grotesk |
| 3 | **umkm-warmth** | Coffee roasters, batik makers, workshops | Human, authentic, warm | Cream + terracotta/ochre/sage | Fraunces (serif) + DM Sans |
| 4 | **creative-studio** | Design agencies, architects, production | Portfolio-first, visual density | Mono base + project-driven accents | Syne (display) + Inter |
| 5 | **saas-product-led** | DevTools, B2B SaaS, AI startups | Demo-driven, dev-friendly | Clean light/dark + tasteful accent | Geist + Geist Mono |
| 6 | **innovation-lab** | Google X, DeepMind, Research institutes | Experimental, motion, 3D, WebGL | Dark + iridescent/glassmorphism | Variable fonts, kinetic type |
| 7 | **corporate-institutional** | Banks, insurance, healthcare, unis | Structured, compliant, accessible | Navy/charcoal/gold + high contrast | Merriweather + Source Sans |
| 8 | **mission-driven** | Non-profits, climate tech, social enterprise | Story-led, evidence-based | Earth tones + urgent accent | Literata + Inter |
| 9 | **developer-platform** | AWS, Cloudflare, Supabase, API companies | API-first, dark-native, searchable | Dark + syntax highlighting | JetBrains Mono + IBM Plex Sans |
| 10 | **modular-agency** | White-label platforms, design systems | Component showcase, themeable | Neutral + CSS custom properties | Token-driven, configurable |

---

## 🇮🇩 Indonesia Variants — What's Different

Each template has a fully localized Indonesian variant (`-id` suffix):

| Aspect | International (`-intl`) | Indonesia (`-id`) |
|--------|------------------------|-------------------|
| **Language** | English | Bahasa Indonesia |
| **Currency** | USD/EUR/GBP (configurable) | IDR (Rp1.234.567 format) |
| **Phone** | E.164 (+1, +44, etc.) | +62 format, WhatsApp primary CTA |
| **Address** | Street/City/State/ZIP | Kelurahan/Kecamatan/Kota/Provinsi |
| **Trust Signals** | SOC2, ISO, GDPR, HIPAA | BPOM, Halal MUI, Kominfo, OJK |
| **Payments** | Stripe, Credit Card | GoPay, OVO, DANA, ShopeePay, VA, COD, QRIS |
| **Date/Time** | ISO 8601, locale-aware | DD MMMM YYYY, WIB/WITA/WIT |
| **Cultural** | Neutral | Batik accent patterns, gotong royong imagery |
| **Legal** | GDPR, CCPA | UU PDP (PDPA), Kominfo registration |

---

## 🚀 Quick Start

### Next.js (App Router)
```bash
# Enterprise Authority - International
cd enterprise-authority/nextjs-intl
npm install
npm run dev

# Enterprise Authority - Indonesia
cd enterprise-authority/nextjs-id
npm install
npm run dev
```

### Astro
```bash
# Enterprise Authority - International
cd enterprise-authority/astro-intl
npm install
npm run dev

# Enterprise Authority - Indonesia
cd enterprise-authority/astro-id
npm install
npm run dev
```

### Build for Production
```bash
# Next.js
npm run build
npm run start

# Astro
npm run build
npm run preview
```

---

## 🎨 Design Tokens Usage

All templates use CSS custom properties from `shared/tokens/`:

```css
/* In your component */
.my-component {
  background: var(--color-bg);
  color: var(--color-fg);
  padding: var(--space-lg);
  border-radius: var(--radius-card);
  font: var(--style-body);
  border: 1px solid var(--color-border);
}

.my-component:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--color-border-strong);
}

/* Focus states */
.my-component:focus-visible {
  box-shadow: var(--shadow-focus);
}
```

### Key Token Categories

| Category | Example Tokens |
|----------|----------------|
| **Colors** | `--color-bg`, `--color-fg`, `--color-accent`, `--color-border`, `--color-success`, `--color-warning`, `--color-error` |
| **Typography** | `--text-base`, `--text-lg`, `--text-xl`, `--font-sans`, `--font-mono`, `--leading-normal` |
| **Spacing** | `--space-4` (16px), `--space-lg` (24px), `--space-xl` (32px), `--space-2xl` (48px) |
| **Radius** | `--radius-sm` (4px), `--radius-md` (6px), `--radius-lg` (8px), `--radius-full` |
| **Shadows** | `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-focus` |
| **Transitions** | `--duration-fast` (150ms), `--duration-normal` (250ms), `--ease-out` |

---

## ♿ Accessibility Baseline

All templates include:

- ✅ Semantic HTML5 landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`)
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Skip to main content link
- ✅ Focus-visible styles on all interactive elements
- ✅ ARIA labels where needed
- ✅ Color not sole information carrier
- ✅ `prefers-reduced-motion` respected
- ✅ WCAG AA contrast ratios
- ✅ Screen reader tested (NVDA + Indonesian voices for ID variant)

---

## 🌐 Internationalization

### Adding a New Locale

1. Create `shared/locale/{locale}.json` with UI strings
2. Create `shared/tokens/{locale}/colors.css` for color overrides
3. Extend `shared/utils/locale.ts` with formatters
4. Create template variants in `{template}/{framework}-{locale}/`

### Current Locale Support

| Locale | Code | Currency | Status |
|--------|------|----------|--------|
| English (US) | `en-US` | USD | ✅ Base |
| English (UK) | `en-GB` | GBP | 🔧 Extensible |
| Indonesia | `id-ID` | IDR | ✅ Complete |
| Germany | `de-DE` | EUR | 🔧 Extensible |
| Japan | `ja-JP` | JPY | 🔧 Extensible |

---

## 📦 Component Library

Each template implements the shared component spec (`shared/components/spec.md`):

- **Button** — 5 variants, 4 sizes, loading state
- **Card** — 5 variants, interactive hover states
- **Section** — 5 background variants, responsive padding
- **Container** — 7 width constraints + content widths
- **Grid** — Responsive columns, flexible gaps
- **Typography** — Heading (h1-h4), Body, Label, Code, Number styles
- **Form** — Input, Textarea, Select, Checkbox, Radio with validation
- **Navigation** — Navbar (mega-menu ready), Footer, Breadcrumb
- **Data Display** — Table, Stat/Metric, Badge/Tag
- **Feedback** — Alert, Toast, Modal, Tooltip
- **Media** — Image (responsive, lazy), Video
- **Indonesia-Specific** — WhatsAppButton, TrustBadges, PaymentMethods, IndonesianAddress

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| **Frameworks** | Next.js 14 (App Router), Astro 4 |
| **Styling** | CSS Custom Properties (no Tailwind dependency) |
| **Fonts** | Self-hosted Google Fonts (preload + print fallback) |
| **Icons** | Inline SVG (zero dependency) |
| **Images** | Next.js Image / Astro Assets (WebP/AVIF) |
| **TypeScript** | Strict mode, path aliases |
| **Build** | Static export (SSG) for maximum performance |

---

## 📊 Performance Targets

| Metric | Target |
|--------|--------|
| **LCP** | < 2.5s |
| **CLS** | < 0.1 |
| **INP** | < 200ms |
| **Bundle JS** | < 50KB gzipped (Astro), < 80KB (Next.js) |
| **CSS** | < 15KB gzipped |
| **Fonts** | Subsetted, `font-display: swap` |

---

## 🔧 Customization Guide

### Changing Colors Per Template

```css
/* In template-specific CSS */
.template-enterprise-authority {
  --color-accent: #2563eb;        /* Blue */
  --color-accent-hover: #1d4ed8;
}

.template-deep-tech-frontier {
  --color-accent: #06b6d4;        /* Cyan */
  --color-accent-hover: #22d3ee;
}

.template-umkm-warmth {
  --color-accent: #c8553d;        /* Terracotta */
  --color-accent-hover: #b44734;
}
```

### Switching Fonts

```css
/* In template-specific CSS */
.template-creative-studio {
  --font-display: 'Syne', var(--font-sans);
  --font-heading: 'Syne', var(--font-sans);
  --font-body: 'Inter', var(--font-sans);
}

.template-corporate-institutional {
  --font-display: 'Merriweather', var(--font-serif);
  --font-heading: 'Merriweather', var(--font-serif);
  --font-body: 'Source Sans 3', var(--font-sans);
}
```

---

## 📝 License

MIT License — Use freely for personal and commercial projects.

---

## 🤝 Contributing

1. Follow the existing design token system
2. Maintain accessibility baseline
3. No purple gradients
4. Test both intl and ID variants
5. Verify static export works

---

## 📚 Further Reading

- [DESIGN_BRIEF.md](DESIGN_BRIEF.md) — Complete design specifications
- [shared/components/spec.md](shared/components/spec.md) — Component interfaces
- [shared/utils/locale.ts](shared/utils/locale.ts) — Locale utilities
- [A Philosophy of Software Design](https://web.stanford.edu/~ouster/cgi-bin/book.php) — "Design It Twice" methodology