import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trusted by Global Leaders',
  description: 'Enterprise-grade solutions for Fortune 500 companies, governments, and institutions. Security, compliance, and scale built in.',
};

const navigation = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Products', href: '#products' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Resources', href: '#resources' },
  { label: 'Company', href: '#company' },
];

const stats = [
  { value: '2,000+', label: 'Enterprise Customers' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '50+', label: 'Countries Served' },
  { value: 'SOC 2', label: 'Type II Certified' },
];

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
    title: 'Global Infrastructure',
    description: 'Deploy across 35+ regions with sub-10ms latency. Built-in redundancy and automatic failover.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Enterprise Security',
    description: 'End-to-end encryption, zero-trust architecture, and compliance certifications for every industry.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: 'Infinite Scale',
    description: 'Handle millions of requests per second with automatic horizontal scaling. Pay only for what you use.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Real-time Observability',
    description: 'Unified logs, metrics, and traces. AI-powered anomaly detection and automated incident response.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Team Collaboration',
    description: 'Built-in code review, deployment pipelines, and knowledge sharing. SSO and RBAC included.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Predictable Costs',
    description: 'Transparent pricing with volume discounts. No surprise bills. Budget alerts and cost optimization.',
  },
];

const caseStudies = [
  {
    company: 'Global Financial Bank',
    industry: 'Financial Services',
    logo: 'GFB',
    challenge: 'Modernize core banking platform across 40 countries while maintaining 99.99% availability',
    solution: 'Phased migration to cloud-native architecture with zero-downtime deployment',
    results: [
      '60% reduction in infrastructure costs',
      '99.999% availability achieved',
      'Deployment frequency: monthly → daily',
    ],
    metrics: { customers: '50M+', transactions: '$2T+/yr', uptime: '99.999%' },
  },
  {
    company: 'National Healthcare System',
    industry: 'Public Sector',
    logo: 'NHS',
    challenge: 'Unify patient records across 1,200 facilities with strict data sovereignty requirements',
    solution: 'Federated data mesh with end-to-end encryption and granular access controls',
    results: [
      '40% faster clinical decision-making',
      '100% compliance with data residency laws',
      '$200M annual operational savings',
    ],
    metrics: { patients: '80M+', facilities: '1,200+', records: '2.5B+' },
  },
  {
    company: 'Global E-commerce Platform',
    industry: 'Technology',
    logo: 'GEP',
    challenge: 'Handle Black Friday traffic spikes of 10M requests/second with sub-50ms latency',
    solution: 'Edge-native architecture with intelligent caching and predictive scaling',
    results: [
      'Zero downtime during peak events',
      'P99 latency < 50ms globally',
      '40% compute cost reduction',
    ],
    metrics: { rps: '10M+', latency: '<50ms P99', countries: '190+' },
  },
];

const trustBadges = [
  { name: 'SOC 2 Type II', description: 'Security, availability, confidentiality' },
  { name: 'ISO 27001', description: 'Information security management' },
  { name: 'GDPR Compliant', description: 'EU data protection regulation' },
  { name: 'HIPAA Ready', description: 'Healthcare data protection' },
  { name: 'FedRAMP High', description: 'US federal cloud authorization' },
  { name: 'PCI DSS Level 1', description: 'Payment card industry security' },
];

const footerNav = {
  Solutions: [
    { label: 'Cloud Infrastructure', href: '#' },
    { label: 'Data & Analytics', href: '#' },
    { label: 'Security & Compliance', href: '#' },
    { label: 'AI & Machine Learning', href: '#' },
    { label: 'Application Modernization', href: '#' },
  ],
  Products: [
    { label: 'Compute', href: '#' },
    { label: 'Storage', href: '#' },
    { label: 'Networking', href: '#' },
    { label: 'Databases', href: '#' },
    { label: 'Developer Tools', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Architecture Center', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Webinars', href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Leadership', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Contact', href: '#' },
  ],
};

const socialLinks = [
  { platform: 'twitter', href: 'https://twitter.com/enterpriseauth', label: 'Twitter' },
  { platform: 'linkedin', href: 'https://linkedin.com/company/enterpriseauth', label: 'LinkedIn' },
  { platform: 'github', href: 'https://github.com/enterpriseauth', label: 'GitHub' },
  { platform: 'youtube', href: 'https://youtube.com/@enterpriseauth', label: 'YouTube' },
];

function Navbar() {
  return (
    <header className="navbar" role="banner">
      <div className="navbar-inner">
        <Link href="/" className="navbar-brand" aria-label="Enterprise Authority Home">
          <svg className="navbar-logo" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="6" fill="currentColor" />
            <path d="M8 16h16M16 8v16" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span className="navbar-name">Enterprise Authority</span>
        </Link>

        <nav className="navbar-nav" role="navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} className="navbar-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="navbar-actions">
          <Link href="/login" className="btn btn-ghost btn-sm">
            Sign in
          </Link>
          <Link href="/get-started" className="btn btn-primary btn-sm">
            Get Started
          </Link>
        </div>

        <button className="navbar-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
          <span className="navbar-toggle-icon" aria-hidden="true"></span>
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge badge-accent">New: AI-Powered Observability</span>
        </div>
        <h1 id="hero-title" className="heading-display hero-title">
          Infrastructure That Enterprises Trust
        </h1>
        <p className="hero-description">
          The platform powering 2,000+ global organizations. Security, compliance, and scale — without compromise.
        </p>
        <div className="hero-actions">
          <Link href="/get-started" className="btn btn-primary btn-lg">
            Start Free Trial
          </Link>
          <Link href="/contact-sales" className="btn btn-secondary btn-lg">
            Contact Sales
          </Link>
        </div>
        <div className="hero-stats" role="list" aria-label="Key metrics">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat" role="listitem">
              <span className="hero-stat-value number">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section aria-label="Trusted by leading organizations" style={{ padding: 'var(--space-xl) 0', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <p className="body-sm text-muted" style={{ textAlign: 'center', marginBottom: 'var(--space-lg)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)' }}>
          Trusted by industry leaders worldwide
        </p>
        <div className="logo-cloud" role="img" aria-label="Customer logos: Global Financial Bank, National Healthcare System, Global E-commerce Platform, and more">
          {['Global Financial Bank', 'National Healthcare System', 'Global E-commerce Platform', 'Aerospace Leader', 'Telecommunications Giant', 'Government Agency'].map((name) => (
            <div key={name} style={{ fontWeight: 600, color: 'var(--color-fg-muted)', fontSize: 'var(--text-lg)' }}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="section" aria-labelledby="solutions-title">
      <div className="container">
        <header className="section-header">
          <span className="section-badge badge badge-accent">Solutions</span>
          <h2 id="solutions-title" className="section-title">Built for Enterprise Challenges</h2>
          <p className="section-description">
            Purpose-built solutions for the most demanding regulatory, scale, and security requirements.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 'var(--space-xl)' }}>
          {features.map((feature, index) => (
            <article key={index} className="card feature-card card-interactive">
              <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section id="case-studies" className="section" style={{ background: 'var(--color-bg-subtle)' }} aria-labelledby="case-studies-title">
      <div className="container">
        <header className="section-header">
          <span className="section-badge badge badge-accent">Case Studies</span>
          <h2 id="case-studies-title" className="section-title">Measurable Impact at Scale</h2>
          <p className="section-description">
            How the world's most demanding organizations achieve transformative results.
          </p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: 'var(--space-xl)' }}>
          {caseStudies.map((study, index) => (
            <article key={index} className="card card-elevated">
              <div className="card-header">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="feature-icon" style={{ width: 40, height: 40 }}>{study.logo}</div>
                    <div>
                      <p className="body-sm text-muted">{study.industry}</p>
                      <p className="label" style={{ color: 'var(--color-fg)' }}>{study.company}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h4 className="heading-4" style={{ marginBottom: 'var(--space-3)' }}>Challenge</h4>
                <p className="body text-muted" style={{ marginBottom: 'var(--space-4)' }}>{study.challenge}</p>
                <h4 className="heading-4" style={{ marginBottom: 'var(--space-3)' }}>Solution</h4>
                <p className="body text-muted" style={{ marginBottom: 'var(--space-6)' }}>{study.solution}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
                  {study.results.map((result, i) => (
                    <span key={i} className="badge badge-success">{result}</span>
                  ))}
                </div>
              </div>
              <div className="card-footer">
                <div className="grid grid-cols-3" style={{ gap: 'var(--space-4)', textAlign: 'center' }}>
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div key={key}>
                      <p className="number" style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)' }}>{value}</p>
                      <p className="body-sm text-muted">{key}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
          <Link href="/case-studies" className="btn btn-outline btn-lg">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}

function Compliance() {
  return (
    <section className="section" aria-labelledby="compliance-title">
      <div className="container">
        <header className="section-header">
          <span className="section-badge badge badge-accent">Compliance</span>
          <h2 id="compliance-title" className="section-title">Certifications & Standards</h2>
          <p className="section-description">
            Comprehensive compliance coverage for regulated industries worldwide.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 'var(--space-lg)' }}>
          {trustBadges.map((badge, index) => (
            <article key={index} className="card card-bordered">
              <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-2)' }}>
                <div className="badge badge-accent" style={{ fontSize: 'var(--text-base)', padding: 'var(--space-2) var(--space-4)' }}>
                  {badge.name}
                </div>
                <p className="body-sm text-muted">{badge.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta">
          <h2 id="cta-title" className="cta-title">Ready to Transform Your Infrastructure?</h2>
          <p className="cta-description">
            Join 2,000+ enterprises running mission-critical workloads on our platform. Start your free trial or talk to our solutions architects.
          </p>
          <div className="cta-actions">
            <Link href="/get-started" className="btn btn-primary btn-lg">
              Start Free Trial
            </Link>
            <Link href="/contact-sales" className="btn btn-secondary btn-lg">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <svg className="footer-logo" viewBox="0 0 120 32" fill="none" aria-hidden="true">
              <rect x="0" y="0" width="32" height="32" rx="6" fill="currentColor" />
              <path d="M8 16h16M16 8v16" stroke="white" strokeWidth="3" strokeLinecap="round" />
              <text x="40" y="22" fontSize="20" fontWeight="bold" fill="currentColor">Enterprise Authority</text>
            </svg>
            <p className="footer-description">
              Enterprise-grade infrastructure for the world's most demanding organizations.
              Security, compliance, and scale — delivered.
            </p>
          </div>
          {Object.entries(footerNav).map(([title, links]) => (
            <nav key={title} aria-label={title}>
              <h3 className="footer-title">{title}</h3>
              <div className="footer-links">
                {links.map((link) => (
                  <Link key={link.label} href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          ))}
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2024 Enterprise Authority. All rights reserved.</p>
          <nav className="footer-legal" aria-label="Legal">
            <Link href="/privacy" className="footer-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-link">Terms of Service</Link>
            <Link href="/cookies" className="footer-link">Cookie Policy</Link>
            <Link href="/accessibility" className="footer-link">Accessibility</Link>
          </nav>
          <div className="footer-social" aria-label="Social media">
            {socialLinks.map((social) => (
              <a key={social.platform} href={social.href} className="footer-link" aria-label={social.label} target="_blank" rel="noopener noreferrer">
                {social.platform === 'twitter' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                )}
                {social.platform === 'linkedin' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                )}
                {social.platform === 'github' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                )}
                {social.platform === 'youtube' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                    <path d="M10.03 17.24V6.967l8.19 5.136-8.19 5.139z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <TrustBar />
        <Solutions />
        <CaseStudies />
        <Compliance />
        <CTA />
      </main>
      <Footer />
    </>
  );
}