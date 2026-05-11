// =====================================================================
// NNB Dessert House — script.js
// =====================================================================

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('mainNav');
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('mobileOverlay');
  const closeBtn = document.getElementById('closeMenu');
  const progressBar = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');
  const contactForm = document.getElementById('contactForm');
  const navLinks = document.querySelectorAll('.nav-links a');

  // ===== Nav scrolled state =====
  const onScroll = () => {
    const y = window.scrollY;
    if (y > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');

    // Scroll progress
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (y / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';

    // Back to top
    if (y > 300) backToTop.classList.add('visible');
    else backToTop.classList.remove('visible');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ===== Back to top click =====
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ===== Mobile menu =====
  const openMenu = () => { overlay.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const closeMenu = () => { overlay.classList.remove('open'); document.body.style.overflow = ''; };
  hamburger.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  // ===== Reveal on scroll =====
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ===== Stats counter =====
  const easeOutQuad = t => t * (2 - t);
  const animateCount = (el) => {
    const target = parseFloat(el.getAttribute('data-target')) || 0;
    const decimal = parseInt(el.getAttribute('data-decimal') || '0', 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1500;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      const eased = easeOutQuad(t);
      const value = target * eased;

      if (decimal > 0) {
        el.textContent = (value / Math.pow(10, decimal)).toFixed(decimal) + suffix;
      } else {
        el.textContent = Math.floor(value) + suffix;
      }

      if (t < 1) requestAnimationFrame(step);
      else {
        if (decimal > 0) el.textContent = (target / Math.pow(10, decimal)).toFixed(decimal) + suffix;
        else el.textContent = target + suffix;
      }
    };
    requestAnimationFrame(step);
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.stat-number').forEach(el => statsObserver.observe(el));

  // ===== Active nav link via IntersectionObserver =====
  const sections = document.querySelectorAll('section[id]');
  const linkMap = {};
  navLinks.forEach(a => {
    const id = a.getAttribute('href').replace('#', '');
    linkMap[id] = a;
  });
  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(a => a.classList.remove('active'));
        if (linkMap[id]) linkMap[id].classList.add('active');
      }
    });
  }, { threshold: 0.4, rootMargin: '-80px 0px -40% 0px' });
  sections.forEach(s => activeObserver.observe(s));

  // ===== Contact form submit =====
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.style.opacity = '0';
      setTimeout(() => {
        contactForm.style.display = 'none';
        const thanks = document.createElement('div');
        thanks.className = 'form-thanks';
        thanks.innerHTML = '<h3>Thank you!</h3><p>We have received your message and will be in touch shortly.</p>';
        contactForm.parentNode.appendChild(thanks);
      }, 300);
    });
  }
});
