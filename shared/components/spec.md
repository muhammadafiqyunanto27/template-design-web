# Shared Component Specifications

Framework-agnostic component interfaces. Each template implements these with its own visual design.

---

## 1. Button

### Props
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  asChild?: boolean; // For Next.js Link / Astro <a>
  href?: string;     // When used as link
}
```

### Variants (per template)
| Variant | enterprise-authority | deep-tech-frontier | umkm-warmth |
|---------|---------------------|-------------------|-------------|
| primary | Blue fill, white text | Cyan fill, dark text | Terracotta fill, cream text |
| secondary | Gray fill | Dark gray fill | Sage fill |
| outline | Blue border, blue text | Cyan border, cyan text | Terracotta border, terracotta text |
| ghost | Blue text, hover: blue bg | Cyan text, hover: cyan bg | Terracotta text, hover: terracotta bg |
| destructive | Red fill | Amber fill | Terracotta fill |

### States
- Default, Hover, Active, Focus-visible, Disabled, Loading

---

## 2. Card

### Props
```typescript
interface CardProps {
  variant: 'default' | 'bordered' | 'elevated' | 'outlined' | 'interactive';
  padding: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  href?: string; // Makes entire card a link
  image?: { src: string; alt: string; position: 'top' | 'background' };
  badge?: string;
}
```

### Slots
- `header` - Badge, category, meta
- `media` - Image, video, diagram
- `title` - Heading
- `description` - Body text
- `meta` - Tags, author, date, stats
- `actions` - Buttons, links
- `footer` - Secondary info

---

## 3. Section

### Props
```typescript
interface SectionProps {
  variant: 'default' | 'alternate' | 'accent' | 'dark' | 'gradient';
  size: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  align: 'left' | 'center' | 'right';
  divider?: boolean;
  background?: 'none' | 'subtle' | 'pattern' | 'image';
}
```

### CSS Variables (per template)
```css
.section {
  --section-padding-block: var(--space-2xl);
  --section-padding-inline: var(--space-lg);
  --section-max-width: var(--container-xl);
  --section-gap: var(--space-xl);
}
```

---

## 4. Container

### Props
```typescript
interface ContainerProps {
  size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'content-narrow' | 'content-normal' | 'content-wide';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}
```

---

## 5. Grid

### Props
```typescript
interface GridProps {
  cols: 1 | 2 | 3 | 4 | 5 | 6 | 'auto-fit' | 'auto-fill';
  gap: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  responsive?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  align?: 'start' | 'center' | 'end' | 'stretch';
}
```

---

## 6. Typography Components

### Heading
```typescript
interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'inherit';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  color?: 'default' | 'muted' | 'accent' | 'inverse';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
}
```

### Text
```typescript
interface TextProps {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'default' | 'muted' | 'subtle' | 'accent' | 'success' | 'warning' | 'error' | 'inverse';
  align?: 'left' | 'center' | 'right' | 'justify';
  italic?: boolean;
  code?: boolean;
  truncate?: boolean | number; // number = max lines
}
```

### CodeBlock
```typescript
interface CodeBlockProps {
  language: string;
  code: string;
  filename?: string;
  highlightLines?: number[];
  showLineNumbers?: boolean;
  copyable?: boolean;
  theme?: 'light' | 'dark' | 'auto';
}
```

---

## 7. Form Components

### Input
```typescript
interface InputProps {
  type: 'text' | 'email' | 'tel' | 'url' | 'password' | 'number' | 'search';
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  hint?: string;
  disabled?: boolean;
  required?: boolean;
  autocomplete?: string;
  inputMode?: 'text' | 'email' | 'tel' | 'url' | 'numeric' | 'decimal';
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
}
```

### Textarea
```typescript
interface TextareaProps extends Omit<InputProps, 'type' | 'inputMode'> {
  rows?: number;
  maxLength?: number;
  showCount?: boolean;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}
```

### Select
```typescript
interface SelectProps {
  label: string;
  placeholder: string;
  options: { value: string; label: string; disabled?: boolean }[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  hint?: string;
  disabled?: boolean;
  required?: boolean;
  searchable?: boolean;
  multiple?: boolean;
}
```

### Checkbox / Radio
```typescript
interface CheckboxProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  indeterminate?: boolean;
}

interface RadioGroupProps {
  label: string;
  options: { value: string; label: string; description?: string; disabled?: boolean }[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  hint?: string;
  disabled?: boolean;
  required?: boolean;
  orientation?: 'vertical' | 'horizontal';
}
```

---

## 8. Navigation

### Header / NavBar
```typescript
interface NavBarProps {
  logo: { src: string; alt: string; href: string };
  navigation: NavItem[];
  actions: NavAction[];
  sticky?: boolean;
  transparent?: boolean;
  variant?: 'default' | 'minimal' | 'mega';
}

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[]; // For mega menu
  badge?: string;
  icon?: ReactNode;
}

interface NavAction {
  label: string;
  href?: string;
  onClick?: () => void;
  variant: 'primary' | 'secondary' | 'ghost';
  icon?: ReactNode;
}
```

### Footer
```typescript
interface FooterProps {
  brand: { logo: string; name: string; description: string };
  columns: FooterColumn[];
  bottom: {
    copyright: string;
    legal: FooterLink[];
    social: SocialLink[];
  };
  variant?: 'default' | 'minimal' | 'newsletter';
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface SocialLink {
  platform: 'twitter' | 'linkedin' | 'github' | 'instagram' | 'youtube' | 'tiktok' | 'whatsapp' | 'email';
  href: string;
  label: string;
}
```

### Breadcrumb
```typescript
interface BreadcrumbProps {
  items: { label: string; href?: string; current?: boolean }[];
  separator?: ReactNode;
  maxItems?: number;
}
```

---

## 9. Data Display

### Table
```typescript
interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  keyExtractor: (item: T) => string;
  sortable?: boolean;
  filterable?: boolean;
  pagination?: { pageSize: number; showSizeChanger: boolean };
  selection?: { mode: 'single' | 'multiple'; onChange: (keys: string[]) => void };
  rowActions?: TableRowAction<T>[];
  emptyState?: ReactNode;
  loading?: boolean;
}

interface TableColumn<T> {
  key: string;
  header: string;
  render?: (item: T) => ReactNode;
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
  sticky?: 'left' | 'right';
}
```

### Stat / Metric
```typescript
interface StatProps {
  label: string;
  value: string | number;
  prefix?: string;
  suffix?: string;
  trend?: { value: number; label: string; positive: boolean };
  icon?: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'error';
}
```

### Badge / Tag
```typescript
interface BadgeProps {
  children: ReactNode;
  variant: 'default' | 'accent' | 'success' | 'warning' | 'error' | 'info' | 'outline';
  size: 'sm' | 'md' | 'lg';
  dot?: boolean;
  removable?: boolean;
  onRemove?: () => void;
  href?: string; // Makes it a link
}
```

---

## 10. Feedback

### Alert
```typescript
interface AlertProps {
  variant: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  action?: { label: string; onClick: () => void };
  icon?: boolean;
}
```

### Toast
```typescript
interface ToastProps {
  id: string;
  variant: 'info' | 'success' | 'warning' | 'error' | 'loading';
  title: string;
  description?: string;
  action?: { label: string; onClick: () => void };
  duration?: number; // ms, 0 = persistent
  onClose: (id: string) => void;
}
```

### Modal / Dialog
```typescript
interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  footer?: ReactNode;
}
```

### Tooltip
```typescript
interface TooltipProps {
  content: ReactNode;
  children: ReactElement;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  disabled?: boolean;
}
```

---

## 11. Media

### Image
```typescript
interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}
```

### Video
```typescript
interface VideoProps {
  src: string;
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  width?: number;
  height?: number;
}
```

---

## 12. Indonesia-Specific Components

### WhatsAppButton
```typescript
interface WhatsAppButtonProps {
  phone: string; // Will be formatted to +62
  message?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline';
  showIcon?: boolean;
  prefilledText?: string;
}
```

### TrustBadges
```typescript
interface TrustBadgesProps {
  badges: ('bpom' | 'halal' | 'kominfo' | 'ojk' | 'bnsp' | 'iso' | 'pppk' | 'akta' | 'npwp')[];
  size?: 'sm' | 'md' | 'lg';
  layout?: 'horizontal' | 'vertical' | 'grid';
  showLabels?: boolean;
}
```

### PaymentMethods
```typescript
interface PaymentMethodsProps {
  methods: ('gopay' | 'ovo' | 'dana' | 'shopeepay' | 'linkaja' | 'bca_va' | 'mandiri_va' | 'bri_va' | 'bni_va' | 'permata_va' | 'alfamart' | 'cod' | 'qris' | 'transfer' | 'credit_card' | 'installment')[];
  size?: 'sm' | 'md' | 'lg';
  layout?: 'horizontal' | 'grid';
  showLabels?: boolean;
}
```

### IndonesianAddress
```typescript
interface IndonesianAddressProps {
  street?: string;
  kelurahan?: string;
  kecamatan?: string;
  kota?: string;
  provinsi?: string;
  kodePos?: string;
  rt?: string;
  rw?: string;
  showMap?: boolean;
  mapEmbedUrl?: string;
}
```

---

## Implementation Notes

### Next.js (App Router)
- Components in `components/ui/` with `'use client'` where needed
- Server components by default
- Use `@/shared/tokens` CSS variables via Tailwind config or CSS modules

### Astro
- Components in `src/components/` as `.astro` files
- Use `<slot />` for content projection
- CSS variables via global stylesheet import
- Framework-agnostic (no React dependency)

### Shared Token Usage
```css
/* In any component */
.my-button {
  background: var(--color-accent);
  color: var(--color-fg-inverse);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-button);
  font: var(--style-label);
  transition: background var(--duration-fast) var(--ease-out);
}

.my-button:hover {
  background: var(--color-accent-hover);
}

.my-button:focus-visible {
  box-shadow: var(--shadow-focus);
}
```

### Locale-Aware Components
Components that need locale-specific behavior (currency, phone, date) should:
1. Accept `locale?: 'intl' | 'id'` prop
2. Import formatters from `@/shared/utils/locale`
3. Use dictionary from `@/shared/locale/{en,id}.json`