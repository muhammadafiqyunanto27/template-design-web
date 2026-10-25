/**
 * Shared Locale Utilities
 * Framework-agnostic formatters for currency, phone, dates, addresses
 */

// ============================================
// INTERNATIONAL (DEFAULT) FORMATTERS
// ============================================

export const intlLocale = {
  // Currency
  formatCurrency: (amount: number, currency = 'USD', locale = 'en-US') =>
    new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: currency === 'JPY' ? 0 : 2,
      maximumFractionDigits: currency === 'JPY' ? 0 : 2,
    }).format(amount),

  // Phone
  formatPhone: (phone: string, countryCode = 'US') => {
    const cleaned = phone.replace(/\D/g, '');
    // Basic E.164 formatting
    if (cleaned.startsWith('1') && cleaned.length === 11) {
      return `+1 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
    }
    return `+${cleaned}`;
  },

  // Date
  formatDate: (date: Date | string, locale = 'en-US', options: Intl.DateTimeFormatOptions = {}) =>
    new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      ...options,
    }).format(new Date(date)),

  formatDateShort: (date: Date | string, locale = 'en-US') =>
    new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(new Date(date)),

  // Relative time
  formatRelativeTime: (date: Date | string, locale = 'en-US') => {
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
    const diffMs = new Date(date).getTime() - Date.now();
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.round(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.round(diffMs / (1000 * 60));

    if (Math.abs(diffDays) > 0) return rtf.format(diffDays, 'day');
    if (Math.abs(diffHours) > 0) return rtf.format(diffHours, 'hour');
    return rtf.format(diffMinutes, 'minute');
  },

  // Number
  formatNumber: (num: number, locale = 'en-US', options: Intl.NumberFormatOptions = {}) =>
    new Intl.NumberFormat(locale, options).format(num),

  formatCompact: (num: number, locale = 'en-US') =>
    new Intl.NumberFormat(locale, { notation: 'compact', compactDisplay: 'short' }).format(num),

  // Address
  formatAddress: (parts: { street?: string; city?: string; state?: string; zip?: string; country?: string }) => {
    const lines = [];
    if (parts.street) lines.push(parts.street);
    const cityStateZip = [parts.city, parts.state, parts.zip].filter(Boolean).join(', ');
    if (cityStateZip) lines.push(cityStateZip);
    if (parts.country) lines.push(parts.country);
    return lines.join('\n');
  },

  // RTL support
  isRTL: (locale: string) => ['ar', 'he', 'fa', 'ur'].some(l => locale.startsWith(l)),

  // Locale metadata
  metadata: {
    defaultLocale: 'en-US',
    supportedLocales: ['en-US', 'en-GB', 'de-DE', 'fr-FR', 'es-ES', 'ja-JP', 'zh-CN', 'ko-KR'],
    currencies: { 'en-US': 'USD', 'en-GB': 'GBP', 'de-DE': 'EUR', 'fr-FR': 'EUR', 'es-ES': 'EUR', 'ja-JP': 'JPY', 'zh-CN': 'CNY', 'ko-KR': 'KRW' },
  },
};

// ============================================
// INDONESIA-SPECIFIC FORMATTERS
// ============================================

export const idLocale = {
  // Currency - IDR (no decimals, Rp prefix, dot separators)
  formatCurrency: (amount: number, currency = 'IDR') =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount).replace('IDR', 'Rp'), // "Rp1.234.567"

  formatCurrencyCompact: (amount: number) => {
    if (amount >= 1_000_000_000) return `Rp${(amount / 1_000_000_000).toFixed(1)}M`; // Miliar
    if (amount >= 1_000_000) return `Rp${(amount / 1_000_000).toFixed(1)}jt`;        // Juta
    if (amount >= 1_000) return `Rp${(amount / 1_000).toFixed(1)}rb`;                  // Ribu
    return `Rp${amount}`;
  },

  // Phone - Indonesian format (+62, WhatsApp ready)
  formatPhone: (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');

    // Normalize to +62
    let normalized = cleaned;
    if (cleaned.startsWith('62')) normalized = cleaned;
    else if (cleaned.startsWith('0')) normalized = '62' + cleaned.slice(1);
    else if (cleaned.startsWith('8')) normalized = '62' + cleaned; // Mobile without leading 0
    else normalized = '62' + cleaned;

    // Format: +62 8xx-xxxx-xxxx or +62 21-xxxx-xxxx (landline)
    const withoutCountry = normalized.slice(2);
    if (withoutCountry.startsWith('8') && withoutCountry.length >= 10) {
      // Mobile: +62 8xx-xxxx-xxxx
      return `+62 ${withoutCountry.slice(0, 3)}-${withoutCountry.slice(3, 7)}-${withoutCountry.slice(7, 11)}`;
    } else if (withoutCountry.startsWith('21') && withoutCountry.length >= 9) {
      // Jakarta landline: +62 21-xxxx-xxxx
      return `+62 21-${withoutCountry.slice(2, 6)}-${withoutCountry.slice(6, 10)}`;
    } else if (withoutCountry.length >= 9) {
      // Other area codes: +62 xxx-xxxx-xxx
      return `+62 ${withoutCountry.slice(0, 3)}-${withoutCountry.slice(3, 7)}-${withoutCountry.slice(7)}`;
    }
    return `+62 ${withoutCountry}`;
  },

  // WhatsApp link generator
  whatsappLink: (phone: string, message?: string) => {
    const cleaned = phone.replace(/\D/g, '');
    let normalized = cleaned;
    if (cleaned.startsWith('62')) normalized = cleaned;
    else if (cleaned.startsWith('0')) normalized = '62' + cleaned.slice(1);
    else normalized = '62' + cleaned;

    const url = `https://wa.me/${normalized}`;
    return message ? `${url}?text=${encodeURIComponent(message)}` : url;
  },

  // Date - Indonesian format
  formatDate: (date: Date | string, options: Intl.DateTimeFormatOptions = {}) =>
    new Intl.DateTimeFormat('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      ...options,
    }).format(new Date(date)),

  formatDateShort: (date: Date | string) =>
    new Intl.DateTimeFormat('id-ID', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(new Date(date)),

  // Indonesian month names (for manual formatting)
  monthNames: [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ],

  monthNamesShort: [
    'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
    'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
  ],

  // Relative time (Indonesian)
  formatRelativeTime: (date: Date | string) => {
    const rtf = new Intl.RelativeTimeFormat('id-ID', { numeric: 'auto' });
    const diffMs = new Date(date).getTime() - Date.now();
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.round(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.round(diffMs / (1000 * 60));

    if (Math.abs(diffDays) > 0) return rtf.format(diffDays, 'day');
    if (Math.abs(diffHours) > 0) return rtf.format(diffHours, 'hour');
    return rtf.format(diffMinutes, 'minute');
  },

  // Number
  formatNumber: (num: number, options: Intl.NumberFormatOptions = {}) =>
    new Intl.NumberFormat('id-ID', options).format(num),

  formatCompact: (num: number) =>
    new Intl.NumberFormat('id-ID', { notation: 'compact', compactDisplay: 'short' }).format(num),

  // Address - Indonesian format (Kelurahan, Kecamatan, Kota/Kabupaten, Provinsi)
  formatAddress: (parts: {
    street?: string;
    kelurahan?: string;
    kecamatan?: string;
    kota?: string;        // Kota/Kabupaten
    provinsi?: string;
    kodePos?: string;
  }) => {
    const lines = [];
    if (parts.street) lines.push(parts.street);
    const kelKec = [parts.kelurahan, parts.kecamatan].filter(Boolean).join(', ');
    if (kelKec) lines.push(kelKec);
    const kotaProv = [parts.kota, parts.provinsi].filter(Boolean).join(', ');
    if (kotaProv) lines.push(kotaProv);
    if (parts.kodePos) lines.push(parts.kodePos);
    return lines.join('\n');
  },

  // Indonesian holidays (major ones for 2024-2025)
  holidays: {
    2024: [
      { date: '2024-01-01', name: 'Tahun Baru Masehi' },
      { date: '2024-02-10', name: 'Tahun Baru Imlek' },
      { date: '2024-03-11', name: 'Isra Mi\'raj' },
      { date: '2024-03-29', name: 'Wafat Isa Almasih' },
      { date: '2024-04-10', name: 'Hari Raya Idul Fitri 1445 H' },
      { date: '2024-04-11', name: 'Hari Raya Idul Fitri 1445 H (2)' },
      { date: '2024-05-01', name: 'Hari Buruh Internasional' },
      { date: '2024-05-09', name: 'Kenaikan Isa Almasih' },
      { date: '2024-05-23', name: 'Hari Raya Waisak 2567 BE' },
      { date: '2024-06-17', name: 'Hari Raya Idul Adha 1445 H' },
      { date: '2024-07-07', name: 'Tahun Baru Hijriah 1446 H' },
      { date: '2024-08-17', name: 'Hari Kemerdekaan RI' },
      { date: '2024-09-16', name: 'Maulid Nabi Muhammad SAW' },
      { date: '2024-12-25', name: 'Hari Raya Natal' },
    ],
    2025: [
      { date: '2025-01-01', name: 'Tahun Baru Masehi' },
      { date: '2025-01-29', name: 'Tahun Baru Imlek' },
      { date: '2025-03-01', name: 'Isra Mi\'raj' },
      { date: '2025-03-29', name: 'Hari Raya Idul Fitri 1446 H' },
      { date: '2025-03-30', name: 'Hari Raya Idul Fitri 1446 H (2)' },
      { date: '2025-04-18', name: 'Wafat Isa Almasih' },
      { date: '2025-05-01', name: 'Hari Buruh Internasional' },
      { date: '2025-05-12', name: 'Hari Raya Waisak 2569 BE' },
      { date: '2025-05-29', name: 'Kenaikan Isa Almasih' },
      { date: '2025-06-07', name: 'Hari Raya Idul Adha 1446 H' },
      { date: '2025-06-27', name: 'Tahun Baru Hijriah 1447 H' },
      { date: '2025-08-17', name: 'Hari Kemerdekaan RI' },
      { date: '2025-09-05', name: 'Maulid Nabi Muhammad SAW' },
      { date: '2025-12-25', name: 'Hari Raya Natal' },
    ],
  },

  isHoliday: (date: Date | string) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const dateStr = d.toISOString().split('T')[0];
    return idLocale.holidays[year as keyof typeof idLocale.holidays]?.some(h => h.date === dateStr) ?? false;
  },

  // Trust badges
  trustBadges: [
    { id: 'bpom', name: 'BPOM RI', icon: 'bpom', color: '#0066cc' },
    { id: 'halal', name: 'Halal MUI', icon: 'halal', color: '#008751' },
    { id: 'kominfo', name: 'Kominfo', icon: 'kominfo', color: '#1e3a5f' },
    { id: 'ojk', name: 'OJK', icon: 'ojk', color: '#0066cc' },
    { id: 'bnsp', name: 'BNSP', icon: 'bnsp', color: '#e61e2a' },
    { id: 'iso', name: 'ISO 9001', icon: 'iso', color: '#374151' },
  ],

  // Payment methods
  paymentMethods: [
    { id: 'gopay', name: 'GoPay', color: '#00aa13', type: 'ewallet' },
    { id: 'ovo', name: 'OVO', color: '#6c3db8', type: 'ewallet' },
    { id: 'dana', name: 'DANA', color: '#007bff', type: 'ewallet' },
    { id: 'shopeepay', name: 'ShopeePay', color: '#ff6b00', type: 'ewallet' },
    { id: 'linkaja', name: 'LinkAja', color: '#e60012', type: 'ewallet' },
    { id: 'bca_va', name: 'BCA Virtual Account', color: '#0066cc', type: 'va' },
    { id: 'mandiri_va', name: 'Mandiri Virtual Account', color: '#ffcc00', type: 'va' },
    { id: 'bri_va', name: 'BRI Virtual Account', color: '#e61e2a', type: 'va' },
    { id: 'bni_va', name: 'BNI Virtual Account', color: '#ff6600', type: 'va' },
    { id: 'permata_va', name: 'Permata Virtual Account', color: '#00a3e0', type: 'va' },
    { id: 'alfamart', name: 'Alfamart/Indomaret', color: '#e61e2a', type: 'retail' },
    { id: 'cod', name: 'COD (Bayar di Tempat)', color: '#374151', type: 'cod' },
  ],

  // Locale metadata
  metadata: {
    defaultLocale: 'id-ID',
    supportedLocales: ['id-ID', 'en-US'],
    currencies: { 'id-ID': 'IDR', 'en-US': 'USD' },
    timezones: ['WIB (UTC+7)', 'WITA (UTC+8)', 'WIT (UTC+9)'],
    phonePrefix: '+62',
  },
};

// ============================================
// UNIFIED EXPORT (auto-detect or explicit)
// ============================================

export type LocaleType = 'intl' | 'id';

export const localeRegistry: Record<LocaleType, typeof intlLocale> = {
  intl: intlLocale,
  id: idLocale,
};

export function getLocale(type: LocaleType = 'intl') {
  return localeRegistry[type];
}

export function formatCurrency(amount: number, locale: LocaleType = 'intl', currency?: string) {
  return localeRegistry[locale].formatCurrency(amount, currency);
}

export function formatPhone(phone: string, locale: LocaleType = 'intl') {
  return localeRegistry[locale].formatPhone(phone);
}

export function formatDate(date: Date | string, locale: LocaleType = 'intl', options?: Intl.DateTimeFormatOptions) {
  return localeRegistry[locale].formatDate(date, options);
}

export function whatsappLink(phone: string, message?: string) {
  return idLocale.whatsappLink(phone, message);
}