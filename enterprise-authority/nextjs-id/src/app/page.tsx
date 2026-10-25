import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dipercaya Pemimpin Industri Indonesia',
  description: 'Solusi enterprise-grade untuk BUMN, korporasi besar, dan instansi pemerintah Indonesia. Keamanan, kepatuhan, dan skala terintegrasi.',
};

const navigation = [
  { label: 'Solusi', href: '#solusi' },
  { label: 'Produk', href: '#produk' },
  { label: 'Studi Kasus', href: '#studi-kasus' },
  { label: 'Sumber Daya', href: '#sumber-daya' },
  { label: 'Perusahaan', href: '#perusahaan' },
];

// IDR formatting helper
function formatIDR(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount).replace('IDR', 'Rp');
}

const stats = [
  { value: '500+', label: 'Enterprise Pelanggan' },
  { value: '99,99%', label: 'Uptime SLA' },
  { value: '34', label: 'Provinsi Terlayani' },
  { value: 'ISO 27001', label: 'Tersertifikasi' },
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
    title: 'Infrastruktur Nasional',
    description: 'Deploy di 4 region Indonesia (Jakarta, Surabaya, Batam, Makassar) dengan latensi <10ms. Redundansi bawaan dan failover otomatis.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Keamanan Tingkat Enterprise',
    description: 'Enkripsi end-to-end, arsitektur zero-trust, dan sertifikasi kepatuhan untuk setiap industri di Indonesia.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: 'Skala Tanpa Batas',
    description: 'Menangani jutaan permintaan per detik dengan penskalaan horizontal otomatis. Bayar sesuai penggunaan.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Observabilitas Real-time',
    description: 'Log, metrik, dan trace terpadu. Deteksi anomali bertenaga AI dan respons insiden otomatis.',
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
    title: 'Kolaborasi Tim',
    description: 'Code review bawaan, pipeline deployment, dan berbagi pengetahuan. SSO dan RBAC sudah termasuk.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Biaya Terprediksi',
    description: 'Harga transparan dengan diskon volume. Tidak ada tagihan mengejutkan. Peringatan budget dan optimasi biaya.',
  },
];

const caseStudies = [
  {
    company: 'Bank Nasional Terkemuka',
    industry: 'Jasa Keuangan / Perbankan',
    logo: 'BNT',
    challenge: 'Memodernisasi platform perbankan inti di 500+ cabang dengan mempertahankan ketersediaan 99,99% dan kepatuhan OJK',
    solution: 'Migrasi bertahap ke arsitektur cloud-native dengan deployment zero-downtime dan enkripsi data lokal',
    results: [
      'Pengurangan 50% biaya infrastruktur',
      'Ketersediaan 99,999% tercapai',
      'Frekuensi deployment: bulanan → harian',
    ],
    metrics: { nasabah: '25Jt+', transaksi: formatIDR(500_000_000_000_000) + '/thn', uptime: '99,999%' },
  },
  {
    company: 'Sistem Kesehatan Nasional',
    industry: 'Sektor Publik / Kesehatan',
    logo: 'SKN',
    challenge: 'Menyatukan rekam medis pasien di 2.000+ fasilitas kesehatan dengan ketatnya ketentuan kedaulatan data dan BPOM',
    solution: 'Data mesh terfederasi dengan enkripsi end-to-end dan kontrol akses granular per regulasi Kominfo',
    results: [
      '40% lebih cepat pengambilan keputusan klinis',
      '100% kepatuhanUndang-Undang PDP & data residency',
      'Hemat operasional Rp300M+ per tahun',
    ],
    metrics: { pasien: '100Jt+', fasilitas: '2.000+', rekamMedis: '5M+' },
  },
  {
    company: 'Platform E-commerce Nasional',
    industry: 'Teknologi / E-commerce',
    logo: 'PEN',
    challenge: 'Menangani lonjakan trafik 12,12 & Harbolnas hingga 15M request/detik dengan latensi <50ms',
    solution: 'Arsitektur edge-native dengan caching cerdas dan penskalaan prediktif multi-region',
    results: [
      'Nol downtime saat event puncak',
      'P99 latency < 50ms di seluruh Indonesia',
      'Pengurangan 35% biaya komputasi',
    ],
    metrics: { rps: '15M+', latency: '<50ms P99', wilayah: '34 Provinsi' },
  },
];

const trustBadges = [
  { name: 'Terdaftar Kominfo', description: 'Penyelenggara Sistem Elektronik (PSE)', color: 'var(--color-trust-kominfo)', variant: 'kominfo' },
  { name: 'Sertifikat ISO 27001', description: 'Manajemen keamanan informasi', color: 'var(--color-accent)', variant: 'default' },
  { name: 'Kepatuhan UU PDP', description: 'Perlindungan Data Pribadi Indonesia', color: 'var(--color-trust-kominfo)', variant: 'kominfo' },
  { name: 'Standar OJK', description: 'Keamanan data jasa keuangan', color: 'var(--color-trust-ojk)', variant: 'ojk' },
  { name: 'Sertifikat BPOM', description: 'Validasi sistem untuk industri farmasi', color: 'var(--color-trust-bpom)', variant: 'bpom' },
  { name: 'Sertifikat Halal MUI', description: 'Proses sistem sesuai standar Halal', color: 'var(--color-trust-halal)', variant: 'halal' },
];

const footerNav = {
  Solusi: [
    { label: 'Infrastruktur Cloud', href: '#' },
    { label: 'Data & Analitik', href: '#' },
    { label: 'Keamanan & Kepatuhan', href: '#' },
    { label: 'AI & Machine Learning', href: '#' },
    { label: 'Modernisasi Aplikasi', href: '#' },
  ],
  Produk: [
    { label: 'Komputasi', href: '#' },
    { label: 'Penyimpanan', href: '#' },
    { label: 'Jaringan', href: '#' },
    { label: 'Database', href: '#' },
    { label: 'Alat Pengembang', href: '#' },
  ],
  SumberDaya: [
    { label: 'Dokumentasi', href: '#' },
    { label: 'Pusat Arsitektur', href: '#' },
    { label: 'Studi Kasus', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Webinar', href: '#' },
  ],
  Perusahaan: [
    { label: 'Tentang Kami', href: '#' },
    { label: 'Kepemimpinan', href: '#' },
    { label: 'Karir', href: '#' },
    { label: 'Pers', href: '#' },
    { label: 'Kontak', href: '#' },
  ],
};

const socialLinks = [
  { platform: 'twitter', href: 'https://twitter.com/enterpriseauth_id', label: 'Twitter (X)' },
  { platform: 'linkedin', href: 'https://linkedin.com/company/enterpriseauth-id', label: 'LinkedIn' },
  { platform: 'github', href: 'https://github.com/enterpriseauth-id', label: 'GitHub' },
  { platform: 'youtube', href: 'https://youtube.com/@enterpriseauth-id', label: 'YouTube' },
  { platform: 'instagram', href: 'https://instagram.com/enterpriseauth.id', label: 'Instagram' },
  { platform: 'whatsapp', href: 'https://wa.me/622155550000?text=Halo%20Enterprise%20Authority%2C%20saya%20tertarik%20dengan%20solusi%20Anda', label: 'WhatsApp' },
];

// Indonesia-specific payment methods display
const paymentMethods = [
  { id: 'va_bca', name: 'BCA Virtual Account', color: '#0066cc' },
  { id: 'va_mandiri', name: 'Mandiri Virtual Account', color: '#ffcc00' },
  { id: 'va_bri', name: 'BRI Virtual Account', color: '#e61e2a' },
  { id: 'va_bni', name: 'BNI Virtual Account', color: '#ff6600' },
  { id: 'gopay', name: 'GoPay', color: '#00aa13' },
  { id: 'ovo', name: 'OVO', color: '#6c3db8' },
  { id: 'dana', name: 'DANA', color: '#007bff' },
  { id: 'shopeepay', name: 'ShopeePay', color: '#ff6b00' },
  { id: 'qris', name: 'QRIS', color: '#000000' },
  { id: 'cod', name: 'Bayar di Tempat (COD)', color: '#374151' },
];

function Navbar() {
  return (
    <header className="navbar" role="banner">
      <div className="navbar-inner">
        <Link href="/" className="navbar-brand" aria-label="Enterprise Authority Indonesia Beranda">
          <svg className="navbar-logo" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="6" fill="currentColor" />
            <path d="M8 16h16M16 8v16" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span className="navbar-name">Enterprise Authority</span>
        </Link>

        <nav className="navbar-nav" role="navigation" aria-label="Navigasi utama">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} className="navbar-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="navbar-actions">
          <Link href="/masuk" className="btn btn-ghost btn-sm">
            Masuk
          </Link>
          <Link href="/mulai-sekarang" className="btn btn-primary btn-sm">
            Mulai Sekarang
          </Link>
          <a href="https://wa.me/622155550000?text=Halo%20Enterprise%20Authority%2C%20saya%20ingin%20konsultasi%20solusi%20enterprise" className="btn btn-whatsapp btn-sm" target="_blank" rel="noopener noreferrer" aria-label="Hubungi via WhatsApp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.454.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.402h-.004a9.87 9.87 0 01-5.031-1.378 9.86 9.86 0 01-1.718-5.274c.274-3.023 2.795-5.64 5.832-5.93a9.79 9.79 0 014.213 1.286 9.866 9.866 0 012.238 6.533c-.055 2.56-1.182 4.277-2.487 5.256a9.876 9.876 0 01-4.213.892z" />
            </svg>
          </a>
        </div>

        <button className="navbar-toggle" aria-label="Buka menu" aria-expanded="false" aria-controls="mobile-menu">
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
          <span className="badge badge-accent">Baru: Observabilitas Berbasis AI</span>
        </div>
        <h1 id="hero-title" className="heading-display hero-title">
          Infrastruktur yang Dipercaya Enterprise Indonesia
        </h1>
        <p className="hero-description">
          Platform yang menggerakkan 500+ organisasi terkemuka di Indonesia. Keamanan, kepatuhan, dan skala — tanpa kompromi.
        </p>
        <div className="hero-actions">
          <Link href="/mulai-sekarang" className="btn btn-primary btn-lg">
            Coba Gratis 30 Hari
          </Link>
          <Link href="/hubungi-sales" className="btn btn-secondary btn-lg">
            Hubungi Sales
          </Link>
          <a href="https://wa.me/622155550000?text=Halo%20Enterprise%20Authority%2C%20saya%20ingin%20konsultasi%20solusi%20enterprise" className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.454.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.402h-.004a9.87 9.87 0 01-5.031-1.378 9.86 9.86 0 01-1.718-5.274c.274-3.023 2.795-5.64 5.832-5.93a9.79 9.79 0 014.213 1.286 9.866 9.866 0 012.238 6.533c-.055 2.56-1.182 4.277-2.487 5.256a9.876 9.876 0 01-4.213.892z" />
            </svg>
            Chat WhatsApp
          </a>
        </div>
        <div className="hero-stats" role="list" aria-label="Metrik kunci">
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
    <section aria-label="Dipercaya organisasi terkemuka Indonesia" style={{ padding: 'var(--space-xl) 0', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <p className="body-sm text-muted" style={{ textAlign: 'center', marginBottom: 'var(--space-lg)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)' }}>
          Dipercaya pemimpin industri di seluruh Indonesia
        </p>
        <div className="logo-cloud" role="img" aria-label="Logo pelanggan: Bank Nasional, Sistem Kesehatan, Platform E-commerce, dan lainnya">
          {['Bank Nasional Terkemuka', 'Sistem Kesehatan Nasional', 'Platform E-commerce Nasional', 'Pesawat Udara Nasional', 'Telekomunikasi Negara', 'Instansi Pemerintah'].map((name) => (
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
    <section id="solusi" className="section" aria-labelledby="solusi-title">
      <div className="container">
        <header className="section-header">
          <span className="section-badge badge badge-accent">Solusi</span>
          <h2 id="solusi-title" className="section-title">Dibangun untuk Tantangan Enterprise Indonesia</h2>
          <p className="section-description">
            Solusi bersifat khusus untuk persyaratan regulasi, skala, dan keamanan paling menuntut di Indonesia.
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
    <section id="studi-kasus" className="section" style={{ background: 'var(--color-bg-subtle)' }} aria-labelledby="studi-kasus-title">
      <div className="container">
        <header className="section-header">
          <span className="section-badge badge badge-accent">Studi Kasus</span>
          <h2 id="studi-kasus-title" className="section-title">Dampak Terukur di Skala Nasional</h2>
          <p className="section-description">
            Bagaimana organisasi paling menuntut di Indonesia mencapai hasil transformatif.
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
                <h4 className="heading-4" style={{ marginBottom: 'var(--space-3)' }}>Tantangan</h4>
                <p className="body text-muted" style={{ marginBottom: 'var(--space-4)' }}>{study.challenge}</p>
                <h4 className="heading-4" style={{ marginBottom: 'var(--space-3)' }}>Solusi</h4>
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
          <Link href="/studi-kasus" className="btn btn-outline btn-lg">
            Lihat Semua Studi Kasus
          </Link>
        </div>
      </div>
    </section>
  );
}

function Compliance() {
  return (
    <section className="section" aria-labelledby="kepatuhan-title">
      <div className="container">
        <header className="section-header">
          <span className="section-badge badge badge-accent">Kepatuhan</span>
          <h2 id="kepatuhan-title" className="section-title">Sertifikasi & Standar Indonesia</h2>
          <p className="section-description">
            Cakupan kepatuhan komprehensif untuk industri terregulasi di Indonesia.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 'var(--space-lg)' }}>
          {trustBadges.map((badge, index) => (
            <article key={index} className="card card-bordered">
              <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-2)' }}>
                <span 
                  className={`badge-trust badge-trust-${badge.variant}`}
                  style={{ borderColor: badge.color, color: badge.color }}
                >
                  {badge.name}
                </span>
                <p className="body-sm text-muted">{badge.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PaymentMethodsSection() {
  return (
    <section className="section" aria-labelledby="pembayaran-title" style={{ background: 'var(--color-bg-subtle)' }}>
      <div className="container">
        <header className="section-header">
          <span className="section-badge badge badge-gold">Pembayaran</span>
          <h2 id="pembayaran-title" className="section-title">Metode Pembayaran Lokal</h2>
          <p className="section-description">
            Mendukung seluruh metode pembayaran populer di Indonesia untuk kemudahan transaksi Anda.
          </p>
        </header>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" style={{ gap: 'var(--space-md)', justifyContent: 'center' }}>
          {paymentMethods.map((method) => (
            <div key={method.id} className="card card-bordered" style={{ padding: 'var(--space-md)', textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: method.color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-2)', color: method.color === '#ffcc00' ? '#000' : '#fff', fontWeight: 600, fontSize: 'var(--text-xs)' }}>
                {method.id.includes('va_') ? 'VA' : method.id === 'qris' ? 'QR' : method.id === 'cod' ? 'COD' : 'EW'}
              </div>
              <p className="body-sm" style={{ fontWeight: 500 }}>{method.name}</p>
            </div>
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
          <h2 id="cta-title" className="cta-title">Siap Transformasi Infrastruktur Anda?</h2>
          <p className="cta-description">
            Bergabunglah dengan 500+ enterprise Indonesia yang menjalankan beban kerja misi-kritis di platform kami. Mulai uji coba gratis atau bicara dengan arsitek solusi kami.
          </p>
          <div className="cta-actions">
            <Link href="/mulai-sekarang" className="btn btn-primary btn-lg">
              Mulai Uji Coba Gratis
            </Link>
            <Link href="/hubungi-sales" className="btn btn-secondary btn-lg">
              Bicara dengan Ahli
            </Link>
            <a href="https://wa.me/622155550000?text=Halo%20Enterprise%20Authority%2C%20saya%20ingin%20konsultasi%20solusi%20enterprise" className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.454.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.402h-.004a9.87 9.87 0 01-5.031-1.378 9.86 9.86 0 01-1.718-5.274c.274-3.023 2.795-5.64 5.832-5.93a9.79 9.79 0 014.213 1.286 9.866 9.866 0 012.238 6.533c-.055 2.56-1.182 4.277-2.487 5.256a9.876 9.876 0 01-4.213.892z" />
              </svg>
              Chat WhatsApp
            </a>
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
              Infrastruktur enterprise-grade untuk organisasi paling menuntut di Indonesia.
              Keamanan, kepatuhan, dan skala — terwujud.
            </p>
            <div style={{ marginTop: 'var(--space-6)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-border)' }}>
              <p className="label" style={{ color: 'var(--color-accent-gold)', marginBottom: 'var(--space-2)' }}>Kantor Pusat Jakarta</p>
              <address className="body-sm text-muted" style={{ fontStyle: 'normal', lineHeight: 'var(--leading-relaxed)' }}>
                Gedung Enterprise Authority, 25th Floor<br />
                Jl. Jend. Sudirman Kav. 52-53, SCBD<br />
                Kelurahan Senayan, Kecamatan Kebayoran Baru<br />
                Kota Jakarta Selatan, DKI Jakarta 12190<br />
                <a href="tel:+622155550000" className="footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +62 21 5555 0000
                </a>
              </address>
            </div>
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
          <p className="footer-copyright">© 2024 Enterprise Authority Indonesia. Hak cipta dilindungi undang-undang.</p>
          <nav className="footer-legal" aria-label="Legal">
            <Link href="/kebijakan-privasi" className="footer-link">Kebijakan Privasi</Link>
            <Link href="/syarat-ketentuan" className="footer-link">Syarat & Ketentuan</Link>
            <Link href="/kebijakan-cookie" className="footer-link">Kebijakan Cookie</Link>
            <Link href="/aksesibilitas" className="footer-link">Aksesibilitas</Link>
          </nav>
          <div className="footer-social" aria-label="Media sosial">
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
                {social.platform === 'instagram' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                )}
                {social.platform === 'whatsapp' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.454.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.402h-.004a9.87 9.87 0 01-5.031-1.378 9.86 9.86 0 01-1.718-5.274c.274-3.023 2.795-5.64 5.832-5.93a9.79 9.79 0 014.213 1.286 9.866 9.866 0 012.238 6.533c-.055 2.56-1.182 4.277-2.487 5.256a9.876 9.876 0 01-4.213.892z" />
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
        <PaymentMethodsSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}