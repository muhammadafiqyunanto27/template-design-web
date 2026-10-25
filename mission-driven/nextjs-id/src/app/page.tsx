import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welcome',
  description: 'Landing page for Mission Driven',
};

const navigation = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <header className="navbar" role="banner">
      <div className="navbar-inner">
        <Link href="/" className="navbar-brand" aria-label="Home">
          <span className="navbar-name">Mission Driven</span>
        </Link>
        <nav className="navbar-nav" role="navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} className="navbar-link">{item.label}</Link>
          ))}
        </nav>
        <div className="navbar-actions">
          <Link href="/contact" className="btn btn-primary btn-sm">Contact</Link>
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
        <h1 id="hero-title" className="heading-display hero-title">
          Welcome to Mission Driven
        </h1>
        <p className="hero-description">
          This is the mission-driven template - Story-led, evidence-based, transparent
        </p>
        <div className="hero-actions">
          <Link href="/about" className="btn btn-primary btn-lg">Learn More</Link>
          <Link href="/contact" className="btn btn-secondary btn-lg">Get in Touch</Link>
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
          <h2 id="cta-title" className="cta-title">Ready to Get Started?</h2>
          <p className="cta-description">Contact us today to learn more about our services.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
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
            <span className="footer-name">Mission Driven</span>
            <p className="footer-description">A modern company profile template.</p>
          </div>
          <nav aria-label="Quick Links">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <Link href="/" className="footer-link">Home</Link>
              <Link href="/about" className="footer-link">About</Link>
              <Link href="/services" className="footer-link">Services</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
            </div>
          </nav>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2024 Mission Driven. All rights reserved.</p>
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
        <CTA />
      </main>
      <Footer />
    </>
  );
}
