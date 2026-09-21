(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const menuButton = document.getElementById('menuButton');
  const mobileNav = document.getElementById('mobileNav');
  const header = document.querySelector('.site-header');
  const backTop = document.getElementById('backTop');
  const copyEmail = document.getElementById('copyEmail');
  const copyStatus = document.getElementById('copyStatus');
  const year = document.getElementById('year');
  const scrollProgress = document.getElementById('scrollProgress');
  const navLinks = [...document.querySelectorAll('.desktop-nav a, .mobile-nav a[href^="#"]')];

  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
  root.dataset.theme = savedTheme || (systemLight ? 'light' : 'dark');

  themeToggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    localStorage.setItem('portfolio-theme', next);
  });

  function closeMenu() {
    mobileNav?.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    mobileNav?.classList.toggle('open', !open);
    document.body.classList.toggle('menu-open', !open);
  });

  mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

  // Keep the layout usable when a device rotates or crosses the mobile/desktop breakpoint.
  const desktopBreakpoint = window.matchMedia?.('(min-width: 1081px)');
  const handleBreakpointChange = event => {
    if (event.matches) closeMenu();
  };
  if (desktopBreakpoint?.addEventListener) {
    desktopBreakpoint.addEventListener('change', handleBreakpointChange);
  } else if (desktopBreakpoint?.addListener) {
    desktopBreakpoint.addListener(handleBreakpointChange);
  }

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -45px 0px' });
    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  const sections = [...document.querySelectorAll('main section[id]')];
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-28% 0px -62% 0px', threshold: 0 });
    sections.forEach(section => navObserver.observe(section));
  }

  function onScroll() {
    const y = window.scrollY;
    header?.classList.toggle('scrolled', y > 20);
    backTop?.classList.toggle('visible', y > 680);
    if (scrollProgress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(100, (y / max) * 100) : 0;
      scrollProgress.style.width = `${pct}%`;
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // The #top target is a fixed header, so native anchor navigation can be
  // unreliable on some browsers. Scroll the document explicitly instead.
  backTop?.addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    history.replaceState(null, '', `${location.pathname}${location.search}#top`);
  });

  copyEmail?.addEventListener('click', async () => {
    const email = copyEmail.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = 'Email copied to clipboard.';
      copyEmail.textContent = 'Copied ✓';
      setTimeout(() => {
        copyStatus.textContent = '';
        copyEmail.textContent = 'Copy email';
      }, 1800);
    } catch {
      copyStatus.textContent = email;
    }
  });

  // Keep the hero portrait static so browsers render the image and caption sharply.

  if (year) year.textContent = new Date().getFullYear();
})();
