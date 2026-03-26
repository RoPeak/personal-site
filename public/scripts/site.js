const scrollBar = document.getElementById('scroll-progress');
const nav = document.getElementById('site-nav');
const mobileMenuButton = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIconOpen = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');

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

const closeMobileMenu = () => {
  if (!mobileMenu || !mobileMenuButton) return;
  mobileMenu.classList.add('hidden');
  mobileMenu.setAttribute('aria-hidden', 'true');
  mobileMenuButton.setAttribute('aria-expanded', 'false');
  menuIconOpen?.classList.remove('hidden');
  menuIconClose?.classList.add('hidden');
};

const openMobileMenu = () => {
  if (!mobileMenu || !mobileMenuButton) return;
  mobileMenu.classList.remove('hidden');
  mobileMenu.setAttribute('aria-hidden', 'false');
  mobileMenuButton.setAttribute('aria-expanded', 'true');
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

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMobileMenu);
});

window.addEventListener('scroll', updateScrollProgress, { passive: true });
window.addEventListener('scroll', updateNav, { passive: true });

updateScrollProgress();
updateNav();
closeMobileMenu();

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('revealed'));
}
