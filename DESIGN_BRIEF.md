# Template Design Brief: 10 Company Profile Landing Pages

## Scope
- **Parent folder**: `template-design/`
- **Each template**: Own subfolder with both **Next.js (App Router)** and **Astro** implementations
- **Target range**: UMKM (small business) → Enterprise/Deep Tech (SpaceX, NASA, Meta, Google)

---

## 10 Radically Different Design Directions

### 1. `enterprise-authority` — "Trust at Scale"
**For**: Google, Meta, Microsoft, Fortune 500, Government
**Vibe**: Restrained, authoritative, accessible, boring in the right way
**Color**: Deep navy + warm neutral + single accent (blue/cyan)
**Typography**: System font stack (Inter/Roboto) or custom geometric sans
**Layout**: Grid-based, generous whitespace, clear hierarchy
**Key components**: Mega-nav, trust badges, compliance, global footer, search
**Avoids**: Gradients, animations, "personality" — confidence through restraint

---

### 2. `deep-tech-frontier` — "Engineering the Impossible"
**For**: SpaceX, NASA, Blue Origin, Anduril, Quantum computing, Fusion
**Vibe**: Dark, technical, data-dense, mission-focused
**Color**: Near-black (#0a0a0f) + electric cyan/amber + monospace accents
**Typography**: Monospace (JetBrains Mono) + geometric sans (Space Grotesk)
**Layout**: Asymmetric grid, technical diagrams, telemetry-style dashboards
**Key components**: Mission timeline, specs tables, live data feeds, schematics
**Avoids**: Marketing fluff, rounded corners, pastel colors

---

### 3. `umkm-warmth` — "Human Scale, Real Trust"
**For**: Local coffee roaster, batik maker, furniture workshop, family restaurant
**Vibe**: Warm, approachable, authentic, imperfect-in-a-good-way
**Color**: Cream/off-white base + terracotta/ochre/sage + handwritten accent
**Typography**: Serif for headlines (Fraunces, Playfair) + readable sans for body
**Layout**: Asymmetric, organic flow, generous line height, texture hints
**Key components**: Founder story, process photos, map/location, WhatsApp CTA
**Avoids**: Corporate stock photos, sterile grids, tiny text

---

### 4. `creative-studio` — "Work Speaks Louder"
**For**: Design agencies, branding studios, production houses, architects
**Vibe**: Portfolio-first, visual density, curated chaos, interactive
**Color**: Monochrome base + project-driven accent colors (per case study)
**Typography**: Distinctive display font (varies per template) + neutral sans
**Layout**: Masonry/irregular grid, full-bleed images, horizontal scroll sections
**Key components**: Case study deep-dives, process breakdowns, team bios, contact form
**Avoids**: Template-looking grids, generic "our services" cards

---

### 5. `saas-product-led` — "Show, Don't Tell"
**For**: DevTools, B2B SaaS, API platforms, AI startups (Vercel, Linear, Stripe style)
**Vibe**: Product-centered, interactive demos, developer-friendly, fast
**Color**: Clean light/dark mode + brand accent (purple/indigo/emerald - but tasteful)
**Typography**: System UI + mono for code (Geist, SF Pro)
**Layout**: Hero with live demo, feature grid, code snippets, changelog
**Key components**: Interactive playground, API reference preview, pricing, docs link
**Avoids**: Marketing hero illustrations, vague benefit statements

---

### 6. `innovation-lab` — "Bleeding Edge, Beautifully"
**For**: R&D divisions, X (Google X), Meta Reality Labs, DeepMind, research institutes
**Vibe**: Experimental, motion-heavy, webgl/3d, futuristic but usable
**Color**: Dark theme + iridescent/prismatic accents, glassmorphism
**Typography**: Variable fonts, kinetic type, experimental pairings
**Layout**: Fluid, scroll-driven animations, 3D backgrounds, cursor-following elements
**Key components**: Research publications, patent showcase, team publications, careers
**Avoids**: Conventional grids, static layouts, safe choices

---

### 7. `corporate-institutional` — "Structure Serves Stakeholders"
**For**: Banks, insurance, conglomerates, healthcare systems, universities
**Vibe**: Organized, compliant, multi-audience, searchable, accessible
**Color**: Conservative palette (navy, charcoal, gold/cream accent) + high contrast
**Typography**: Classic serif/sans pairing (Merriweather + Source Sans, etc.)
**Layout**: Mega-menu, clear IA, breadcrumbs, skip links, print stylesheets
**Key components**: Investor relations, careers, sustainability, governance, newsroom
**Avoids**: Trendy interactions, single-page app feel, hidden navigation

---

### 8. `mission-driven` — "Impact First, Brand Second"
**For**: Non-profits, social enterprises, climate tech, education, healthcare access
**Vibe**: Story-led, evidence-based, transparent, urgent but hopeful
**Color**: Earth tones + one urgent accent (coral, amber) + high contrast for accessibility
**Typography**: Readable serif for stories + clean sans for data
**Layout**: Narrative scroll, impact metrics sticky, donor/logos wall, volunteer CTA
**Key components**: Theory of change, annual reports, financial transparency, get involved
**Avoids**: Generic stock photography, vague mission statements, dark patterns

---

### 9. `developer-platform` — "API First, Docs Always"
**For**: Cloud providers, API companies, infrastructure, developer tools (AWS, Cloudflare, Supabase)
**Vibe**: Technical, searchable, copy-pasteable, dark-mode-native
**Color**: Dark default + syntax-highlighting palette + semantic status colors
**Typography**: Mono-first (JetBrains, Fira Code) + UI sans
**Layout**: Two-pane (nav + content), command palette, versioned docs, playground
**Key components**: API reference, SDK tabs, status page, changelog, community
**Avoids**: Marketing pages, illustrations, non-technical hero sections

---

### 10. `modular-agency` — "Build Once, Adapt Forever"
**For**: Agencies building for clients, white-label platforms, multi-brand systems
**Vibe**: Component showcase, themeable, design-system-ready, documented
**Color**: Neutral base + CSS custom properties for theming + demo brand palettes
**Typography**: Token-driven, configurable scale
**Layout**: Component library homepage, theme switcher, variant playground
**Key components**: Token reference, component catalog, code snippets, Figma sync
**Avoids**: Opinionated design decisions, hardcoded brand values

---

## Shared Technical Requirements

### Color Philosophy (All Templates)
- **No purple gradients** — the "AI slop" tell
- **Max 1 gradient per template**, subtle (hero only)
- **Semantic color tokens**: `--color-bg`, `--color-fg`, `--color-muted`, `--color-accent`, `--color-border`, `--color-focus`
- **Dark mode by default** where appropriate (deep-tech, developer, innovation)
- **WCAG AA contrast minimum** everywhere

### Typography System
- Fluid type scale (clamp)
- CSS custom properties for all tokens
- Variable fonts where beneficial
- Respect `prefers-reduced-motion`

### Locale Variants (Per Template)
Each template has **two locale implementations**:

| Aspect | International (`intl`) | Indonesia (`id`) |
|--------|------------------------|------------------|
| Language | English (default) | Bahasa Indonesia |
| Currency | USD/EUR/GBP (configurable) | IDR (Rp1.234.567) |
| Phone | E.164 (+1, +44, etc.) | +62 format, WhatsApp primary |
| Address | Street/City/State/ZIP | Kelurahan/Kecamatan/Kota/Provinsi |
| Trust signals | SOC2, ISO, GDPR | BPOM, Halal (MUI), Kominfo, OJK |
| Payments | Stripe, Credit card | GoPay, OVO, DANA, ShopeePay, VA, COD |
| Date/Time | ISO 8601, locale-aware | DD MMMM YYYY, WIB/WITA/WIT |
| Cultural cues | Neutral | Batik accent patterns, gotong royong imagery, local holidays |
| Legal | GDPR, CCPA | PDPA (UU PDP), Kominfo registration |

### Component Architecture (Shared)
```
template-design/
├── enterprise-authority/
│   ├── nextjs-intl/
│   ├── nextjs-id/
│   ├── astro-intl/
│   └── astro-id/
├── deep-tech-frontier/
│   ├── nextjs-intl/
│   ├── nextjs-id/
│   ├── astro-intl/
│   └── astro-id/
... (8 more)
├── shared/
│   ├── tokens/              # Design tokens (colors, spacing, type)
│   │   ├── intl/            # International token sets
│   │   └── id/              # Indonesia-specific token overrides
│   ├── components/          # Framework-agnostic component specs
│   ├── utils/               # Shared utilities (currency, phone, date)
│   └── locale/              # i18n dictionaries, formatters
```

### Performance Baselines
- LCP < 2.5s, CLS < 0.1, INP < 200ms
- Static generation where possible
- Images: next/image / Astro assets + WebP/AVIF
- Fonts: self-hosted, subsetted, `font-display: swap`
- **Indonesia variant**: Optimize for 3G/4G, lazy-load non-critical, CDN in SG/Jakarta

### Accessibility Baseline
- Semantic HTML, landmarks, heading hierarchy
- Focus visible, skip links, ARIA only where needed
- Reduced motion respected
- Color not sole information carrier
- **Indonesia variant**: Screen reader testing with NVDA + Indonesian voices, high contrast for outdoor mobile use

---

## Next Steps
1. Review and confirm/Adjust design directions
2. Create shared token system
3. Build Template 1 (enterprise-authority) in both frameworks as reference
4. Build remaining 9 templates in parallel batches
5. Create template selector/index page