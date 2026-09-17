/* =========================================================
   1988 Graphics — main.js
   ========================================================= */

'use strict';

/* ── How many projects to show on the homepage ── */
const HOME_PREVIEW_COUNT = 99; /* show all projects */

/* =========================================================
   1. Contact config wiring
   ─────────────────────────────────────────────────────────
   Reads from SITE_CONFIG (js/config.js).
   Wires every contact link on the page from one source.
   ========================================================= */
(function wireContactLinks() {
  const cfg = (typeof SITE_CONFIG !== 'undefined') ? SITE_CONFIG : {};

  const emailHref = cfg.email    ? 'mailto:' + cfg.email     : '#';
  const waHref    = cfg.whatsapp ? 'https://wa.me/' + cfg.whatsapp : '#';
  const igHref    = cfg.instagram  || '#';
  const igHandle  = cfg.instagramHandle || 'Instagram';

  /* Contact page primary buttons */
  _setLink('contact-email',     emailHref);
  _setLink('contact-whatsapp',  waHref);
  _setLink('contact-instagram', igHref);
  const igHandleEl = document.getElementById('contact-ig-handle');
  if (igHandleEl) igHandleEl.textContent = igHandle;

  /* Homepage / portfolio contact strip */
  _setLink('strip-email',    emailHref);
  _setLink('strip-whatsapp', waHref);

  /* Footer links — rendered dynamically on contact.html,
     hardcoded on other pages, so we patch both */
  const footerLinksWrap = document.getElementById('footer-links');
  if (footerLinksWrap) {
    /* Dynamic footer (contact.html) */
    footerLinksWrap.innerHTML = `
      <a href="${esc(igHref)}" class="footer__link" target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href="${esc(emailHref)}" class="footer__link">Email</a>
      <a href="${esc(waHref)}" class="footer__link" target="_blank" rel="noopener noreferrer">WhatsApp</a>`;
  } else {
    /* Static footers on index/portfolio/about — patch href values */
    document.querySelectorAll('.footer__link').forEach(a => {
      const text = a.textContent.trim().toLowerCase();
      if (text === 'instagram') { a.href = igHref; }
      if (text === 'email')     { a.href = emailHref; }
      if (text === 'whatsapp')  { a.href = waHref; }
    });
  }

  /* Also wire the about page "Get in Touch" btn if it exists */
  const aboutBtn = document.querySelector('a.btn--outline[href="contact.html"]');
  /* Leave as contact.html — correct navigation, not a direct action */

  function _setLink(id, href) {
    const el = document.getElementById(id);
    if (el) el.href = href;
  }

  function esc(str) {
    return String(str || '').replace(/"/g, '&quot;');
  }
})();

/* =========================================================
   2. Copyright year
   ========================================================= */
document.querySelectorAll('#year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

/* =========================================================
   3. Mobile nav toggle
   ========================================================= */
const navToggle = document.querySelector('.nav__toggle');
const navMenu   = document.querySelector('.nav__links');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  navMenu.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation');
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation');
      navToggle.focus();
    }
  });
}

/* =========================================================
   4. Scroll reveal
   ========================================================= */
if ('IntersectionObserver' in window) {
  const revealIO = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => revealIO.observe(el));
}

/* =========================================================
   5. Ticker / marquee
   ========================================================= */
const ticker = document.getElementById('ticker');
if (ticker) ticker.classList.add('is-running');

/* =========================================================
   6. Portfolio rendering
   ─────────────────────────────────────────────────────────
   Reads from PROJECTS (js/projects.js).
   Works on index.html (grid) and portfolio.html (masonry).
   ========================================================= */
if (typeof PROJECTS === 'undefined') {
  console.warn('1988 Graphics: projects.js not loaded.');
}

const ACTIVE_PROJECTS = (typeof PROJECTS !== 'undefined') ? PROJECTS : [];

/* ── Build a single portfolio card ── */
function buildCard(project, isEager) {
  const el = document.createElement('article');
  el.className = 'pf-item';
  el.setAttribute('data-size',  project.size || 'md');
  el.setAttribute('data-id',    project.id);
  el.setAttribute('role',       'listitem');
  el.setAttribute('aria-label', project.title + (project.category ? ' — ' + project.category : ''));

  const isPlaceholder = project.placeholder || !project.thumb;

  if (isPlaceholder) {
    /* Placeholder: not interactive, no tabindex, no pointer */
    el.style.cursor = 'default';
    el.innerHTML = `
      <div class="pf-placeholder">
        <p class="pf-placeholder__label">${escHtml(project.category || 'Work')}</p>
      </div>`;
  } else {
    el.setAttribute('tabindex', '0');
    /* loading="eager" for first card above fold, lazy for rest */
    const loadAttr = isEager ? 'eager' : 'lazy';
    el.innerHTML = `
      <img
        src="${escHtml(project.thumb)}"
        alt="${escHtml(project.title)}"
        class="pf-item__img"
        loading="${loadAttr}"
        decoding="async"
      />
      <div class="pf-item__overlay" aria-hidden="true">
        <p class="pf-item__title">${escHtml(project.title)}</p>
        <div class="pf-item__meta">
          ${project.category ? `<span class="pf-item__cat">${escHtml(project.category)}</span>` : ''}
        </div>
      </div>`;

    el.addEventListener('click', () => openProject(project.id));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProject(project.id); }
    });
  }

  return el;
}

/* ── Homepage grid ── */
const pfGrid = document.getElementById('pf-grid');
if (pfGrid) {
  ACTIVE_PROJECTS.slice(0, HOME_PREVIEW_COUNT).forEach((p, i) => {
    pfGrid.appendChild(buildCard(p, i === 0));
  });
}

/* ── Portfolio masonry ── */
const pfMasonry = document.getElementById('pf-masonry');
if (pfMasonry) {
  renderMasonry(ACTIVE_PROJECTS);
}

function renderMasonry(projects) {
  pfMasonry.innerHTML = '';
  if (!projects.length) {
    pfMasonry.innerHTML = `
      <div style="padding:5rem var(--gutter);text-align:center;">
        <p style="font-family:var(--font-body);font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:#2a2925;">
          No projects in this category yet.
        </p>
      </div>`;
    return;
  }
  projects.forEach((p, i) => pfMasonry.appendChild(buildCard(p, i === 0)));
}

/* ── Category filter tabs (portfolio.html only) ── */
const filtersWrap = document.querySelector('#pf-filters .pf-filters__inner');
if (filtersWrap && pfMasonry) {
  const cats = ['All', ...new Set(ACTIVE_PROJECTS.map(p => p.category).filter(Boolean))];

  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'pf-filter' + (cat === 'All' ? ' is-active' : '');
    btn.textContent = cat;
    btn.setAttribute('aria-pressed', cat === 'All' ? 'true' : 'false');
    btn.setAttribute('type', 'button');

    btn.addEventListener('click', () => {
      filtersWrap.querySelectorAll('.pf-filter').forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');

      const filtered = cat === 'All'
        ? ACTIVE_PROJECTS
        : ACTIVE_PROJECTS.filter(p => p.category === cat);

      pvList = filtered;
      renderMasonry(filtered);
    });

    filtersWrap.appendChild(btn);
  });
}

/* =========================================================
   7. Project Viewer
   ========================================================= */
const pv        = document.getElementById('pv');
const pvBack    = document.getElementById('pv-back');
const pvPrev    = document.getElementById('pv-prev');
const pvNext    = document.getElementById('pv-next');
const pvCounter = document.getElementById('pv-counter');
const pvContent = document.getElementById('pv-content');

let pvList  = ACTIVE_PROJECTS;
let pvIndex = 0;

function pvCurrent() { return pvList[pvIndex]; }

function openProject(id) {
  if (!pv) return;

  const idx = pvList.findIndex(p => p.id === id);
  pvIndex = idx >= 0 ? idx : ACTIVE_PROJECTS.findIndex(p => p.id === id);
  if (pvIndex < 0) return;
  if (idx < 0) pvList = ACTIVE_PROJECTS;

  renderProjectViewer(pvCurrent());

  pv.hidden = false;
  pv.classList.add('is-open');
  pv.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  if (pvBack) pvBack.focus();
}

function closeProjectViewer() {
  if (!pv) return;
  pv.hidden = true;
  pv.classList.remove('is-open');
  document.body.style.overflow = '';
}

function buildContactStrip() {
  /* Inline contact strip at the bottom of each project view */
  const cfg     = (typeof SITE_CONFIG !== 'undefined') ? SITE_CONFIG : {};
  const emailHref = cfg.email    ? 'mailto:' + cfg.email     : 'contact.html';
  const waHref    = cfg.whatsapp ? 'https://wa.me/' + cfg.whatsapp : 'contact.html';

  return `<div class="pv__contact-strip">
    <p class="pv__contact-text">Interested in this kind of work?</p>
    <div style="display:flex;gap:0.6rem;flex-wrap:wrap;">
      <a href="${escHtml(emailHref)}" class="btn btn--outline" style="font-size:0.75rem;padding:0.65rem 1.5rem;">Email</a>
      <a href="${escHtml(waHref)}" class="btn btn--outline" target="_blank" rel="noopener noreferrer" style="font-size:0.75rem;padding:0.65rem 1.5rem;">WhatsApp</a>
    </div>
  </div>`;
}

function renderProjectViewer(project) {
  if (!pvContent || !project) return;

  if (pvCounter) pvCounter.textContent = `${pvIndex + 1} / ${pvList.length}`;
  if (pvPrev) pvPrev.disabled = pvIndex === 0;
  if (pvNext) pvNext.disabled = pvIndex === pvList.length - 1;

  const allImages = (project.images && project.images.length)
    ? project.images
    : (project.thumb ? [project.thumb] : []);

  const mainImg   = allImages[0] || '';
  const extraImgs = allImages.slice(1);

  const descHtml = project.desc
    ? `<div><p class="pv__info-desc">${escHtml(project.desc)}</p></div>`
    : '<div></div>';

  const metaHtml = `
    <div class="pv__info-meta">
      <h2 class="pv__info-title">${escHtml(project.title)}</h2>
      ${project.category ? `<p class="pv__info-cat">${escHtml(project.category)}</p>` : ''}
    </div>
    ${descHtml}`;

  if (!mainImg) {
    pvContent.innerHTML = `
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:4rem var(--gutter);">
        <div style="text-align:center;">
          <p style="font-family:var(--font-body);font-size:0.6rem;letter-spacing:0.22em;text-transform:uppercase;color:var(--ink-light);margin-bottom:1rem;">Placeholder — add your image</p>
          <p style="font-family:var(--font-head);font-size:clamp(2rem,5vw,4rem);font-weight:900;text-transform:uppercase;color:var(--paper);letter-spacing:-0.02em;line-height:0.9;">${escHtml(project.title)}</p>
        </div>
      </div>
      <div class="pv__info">${metaHtml}</div>
      ${buildContactStrip()}`;
    return;
  }

  pvContent.innerHTML = `
    <div class="pv__main-img-wrap">
      <img
        src="${escHtml(mainImg)}"
        alt="${escHtml(project.title)}"
        class="pv__main-img"
        data-zoom-src="${escHtml(mainImg)}"
        data-zoom-alt="${escHtml(project.title)}"
        loading="eager"
        decoding="async"
      />
    </div>
    <div class="pv__info">${metaHtml}</div>
    ${extraImgs.length ? `
    <div class="pv__extra-imgs">
      ${extraImgs.map(src => `
        <div class="pv__extra-img-wrap"
             data-zoom-src="${escHtml(src)}"
             data-zoom-alt="${escHtml(project.title)}"
             role="button" tabindex="0" aria-label="Enlarge image">
          <img src="${escHtml(src)}" alt="${escHtml(project.title)}" class="pv__extra-img" loading="lazy" decoding="async" />
        </div>`).join('')}
    </div>` : ''}
    ${buildContactStrip()}`;

  pvContent.querySelectorAll('[data-zoom-src]').forEach(el => {
    el.addEventListener('click',   ()  => openZoom(el.dataset.zoomSrc, el.dataset.zoomAlt));
    el.addEventListener('keydown', e  => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openZoom(el.dataset.zoomSrc, el.dataset.zoomAlt); }
    });
  });
}

if (pvPrev) pvPrev.addEventListener('click', () => {
  if (pvIndex > 0) { pvIndex--; renderProjectViewer(pvCurrent()); pv.scrollTop = 0; }
});
if (pvNext) pvNext.addEventListener('click', () => {
  if (pvIndex < pvList.length - 1) { pvIndex++; renderProjectViewer(pvCurrent()); pv.scrollTop = 0; }
});
if (pvBack) pvBack.addEventListener('click', closeProjectViewer);

document.addEventListener('keydown', e => {
  if (!pv || pv.hidden) return;
  const izOpen = imgZoom && !imgZoom.hidden;
  if (izOpen) return;
  if (e.key === 'Escape')     closeProjectViewer();
  if (e.key === 'ArrowRight' && pvIndex < pvList.length - 1) { pvIndex++; renderProjectViewer(pvCurrent()); pv.scrollTop = 0; }
  if (e.key === 'ArrowLeft'  && pvIndex > 0)                 { pvIndex--; renderProjectViewer(pvCurrent()); pv.scrollTop = 0; }
});

if (pv) {
  let pvTouchX = 0;
  pv.addEventListener('touchstart', e => { pvTouchX = e.changedTouches[0].clientX; }, { passive: true });
  pv.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - pvTouchX;
    if (Math.abs(dx) < 50) return;
    if (dx < 0 && pvIndex < pvList.length - 1) { pvIndex++; renderProjectViewer(pvCurrent()); pv.scrollTop = 0; }
    if (dx > 0 && pvIndex > 0)                 { pvIndex--; renderProjectViewer(pvCurrent()); pv.scrollTop = 0; }
  }, { passive: true });
}

/* =========================================================
   8. Image zoom
   ========================================================= */
const imgZoom = document.getElementById('img-zoom');
const izClose = document.getElementById('iz-close');
const izImg   = document.getElementById('iz-img');

function openZoom(src, alt) {
  if (!imgZoom || !izImg) return;
  izImg.src = src || '';
  izImg.alt = alt || '';
  imgZoom.hidden = false;
  imgZoom.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  if (izClose) izClose.focus();
}

function closeZoom() {
  if (!imgZoom) return;
  imgZoom.hidden = true;
  imgZoom.classList.remove('is-open');
  if (!pv || pv.hidden) document.body.style.overflow = '';
}

if (izClose) izClose.addEventListener('click', closeZoom);
if (imgZoom) imgZoom.addEventListener('click', e => { if (e.target !== izClose && e.target !== izImg) closeZoom(); });
// clicking the image itself closes zoom too (zoom-out cursor)
if (izImg)   izImg.addEventListener('click', closeZoom);

document.addEventListener('keydown', e => {
  if (!imgZoom || imgZoom.hidden) return;
  if (e.key === 'Escape') closeZoom();
});

/* =========================================================
   9. Utility: HTML escape
   ========================================================= */
function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#39;');
}
