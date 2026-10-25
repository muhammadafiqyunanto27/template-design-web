// Theme toggle - runs on client only
const toggle = document.getElementById('themeToggle');
const html = document.documentElement;
const saved = localStorage.getItem('mafyn-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (saved === 'dark' || (!saved && prefersDark)) {
  html.setAttribute('data-theme', 'dark');
  toggle.textContent = '☀️';
} else {
  html.removeAttribute('data-theme');
  toggle.textContent = '🌙';
}

toggle.addEventListener('click', () => {
  if (html.getAttribute('data-theme') === 'dark') {
    html.removeAttribute('data-theme');
    localStorage.setItem('mafyn-theme', 'light');
    toggle.textContent = '🌙';
  } else {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('mafyn-theme', 'dark');
    toggle.textContent = '☀️';
  }
});

// Language toggle - switch between locale variants
const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
  const currentPath = window.location.pathname;
  const isIntl = currentPath.includes('/intl/');
  const newPath = isIntl ? currentPath.replace('/intl/', '/id/') : currentPath.replace('/id/', '/intl/');
  window.location.href = newPath;
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbarNav = document.querySelector('.navbar-nav');

if (menuToggle && navbarNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navbarNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
}