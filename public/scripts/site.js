const scrollBar = document.getElementById('scroll-progress');
const nav = document.getElementById('site-nav');
const mobileMenuButton = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIconOpen = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');
const mobileMenuOpenLabel = 'Open navigation menu';
const mobileMenuCloseLabel = 'Close navigation menu';

const setEmailLinks = () => {
  for (const el of document.querySelectorAll('[data-eu][data-ed]')) {
    el.href = `mailto:${el.dataset.eu}@${el.dataset.ed}`;
  }
};

const updateScrollProgress = () => {
  if (!scrollBar) return;
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  scrollBar.style.width = total > 0 ? `${(scrolled / total) * 100}%` : '0%';
};

const updateNav = () => {
  if (!nav) return;
  if (window.scrollY > 20) {
    nav.style.background = 'rgba(248, 250, 252, 0.92)';
    nav.style.backdropFilter = 'blur(12px)';
    nav.style.borderBottom = '1px solid rgba(0,0,0,0.06)';
  } else {
    nav.style.background = 'transparent';
    nav.style.backdropFilter = 'none';
    nav.style.borderBottom = 'none';
  }
};

const closeMobileMenu = ({ returnFocus = false } = {}) => {
  if (!mobileMenu || !mobileMenuButton) return;
  mobileMenu.classList.add('hidden');
  mobileMenu.setAttribute('aria-hidden', 'true');
  mobileMenuButton.setAttribute('aria-expanded', 'false');
  mobileMenuButton.setAttribute('aria-label', mobileMenuOpenLabel);
  menuIconOpen?.classList.remove('hidden');
  menuIconClose?.classList.add('hidden');
  if (returnFocus) {
    mobileMenuButton.focus();
  }
};

const openMobileMenu = () => {
  if (!mobileMenu || !mobileMenuButton) return;
  mobileMenu.classList.remove('hidden');
  mobileMenu.setAttribute('aria-hidden', 'false');
  mobileMenuButton.setAttribute('aria-expanded', 'true');
  mobileMenuButton.setAttribute('aria-label', mobileMenuCloseLabel);
  menuIconOpen?.classList.add('hidden');
  menuIconClose?.classList.remove('hidden');
};

mobileMenuButton?.addEventListener('click', () => {
  const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
  if (expanded) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

for (const link of mobileMenu?.querySelectorAll('a') ?? []) {
  link.addEventListener('click', () => closeMobileMenu());
}

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' || mobileMenuButton?.getAttribute('aria-expanded') !== 'true') {
    return;
  }
  closeMobileMenu({ returnFocus: true });
});

window.addEventListener('scroll', updateScrollProgress, { passive: true });
window.addEventListener('scroll', updateNav, { passive: true });

updateScrollProgress();
updateNav();
closeMobileMenu();
setEmailLinks();

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  for (const element of document.querySelectorAll('.reveal')) {
    observer.observe(element);
  }
} else {
  for (const element of document.querySelectorAll('.reveal')) {
    element.classList.add('revealed');
  }
}
