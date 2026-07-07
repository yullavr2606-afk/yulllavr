// Mobile menu toggle
const burger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    burger.innerHTML = isOpen
      ? '<svg width="24" height="24"><use href="#icon-close"></use></svg>'
      : '<svg width="24" height="24"><use href="#icon-menu"></use></svg>';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      burger.innerHTML = '<svg width="24" height="24"><use href="#icon-menu"></use></svg>';
    });
  });
}

// Sticky nav shadow on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 8) {
    nav.style.boxShadow = '0 8px 24px rgba(20,30,20,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
