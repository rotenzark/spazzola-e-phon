/* Spazzola & Phon Acconciature Franco — main.js
   heroEntrance (PRIMA del plumbing) + PLUMBING_V 1 + firma «phon che soffia». */

window.bespokeHeroEntrance = function () {
  var els = document.querySelectorAll('.hero .reveal-hero');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!window.gsap || reduce) { els.forEach(function (el) { el.style.opacity = '1'; el.style.transform = 'none'; }); return; }
  gsap.set(els, { opacity: 0, y: 24 });
  gsap.to(els, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.12, delay: 0.1 });
};

(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) root.classList.add('reduced-motion');

  var SITE = {
    slug: 'spazzola-e-phon',
    whatsapp: { number: '', message: '', ids: [] },
    hours: { 0: [], 1: [], 2: [['09:00', '19:00']], 3: [['09:00', '19:00']], 4: [['09:00', '19:00']], 5: [['09:00', '19:00']], 6: [['09:00', '19:00']] },
    hoursStatusId: 'orarioStato',
    hoursTableSelector: '[data-day]',
    todayClass: 'is-today',
    introId: 'intro',
    introDuration: 1800,
    revealSelector: '.reveal',
    inViewClass: 'in-view',
    breakpointMenu: 960,
    EN: {
      'nav.piega': 'The real blow-out', 'nav.franco': 'At Franco’s', 'nav.poltrona': 'In the chair', 'nav.dove': 'Find us',
      'cta.chiama': 'Call',
      'hero.eyebrow': 'Unisex hairdresser · Bovisa',
      'hero.t1': 'A real blow-out', 'hero.t2': 'is done by hand',
      'hero.lead': 'At Franco’s, in Bovisa, the cut and blow-out are done properly: with dryer and brush. And while you wait, the coffee is on the house — even without an appointment.',
      'hero.cta1': 'Call Franco', 'hero.cta2': 'Our blow-out',
      'piega.kicker': 'The house signature',
      'piega.title': 'Dryer and brush, not the flat iron',
      'piega.script': '“A real blow-out is done with dryer and brush.”',
      'piega.lead': 'That’s where you see the technique, the hand and the hold: a blow-out done well lasts you days, not hours. The iron? That’s only for finishing. The rest is craft.',
      'franco.kicker': 'Who welcomes you',
      'franco.title': 'At Franco’s, you feel at home',
      'franco.lead': 'Franco has worked in the neighbourhood for over twenty years, and some clients have been coming forever. You walk in, he offers you a coffee, understands what you want — and tells you when it’s time to change cut or colour. No rush, and no need to book.',
      'poltrona.kicker': 'In the chair',
      'poltrona.title': 'Cut, blow-out and colour — men and women',
      'poltrona.lead': 'A unisex salon where everyone finds their own. Taken with care, with the right products and a blow-out that lasts.',
      'poltrona.s1t': 'Cut & blow-out', 'poltrona.s1': 'The cut that suits you, and the blow-out done with dryer and brush: soft and holding for days.',
      'poltrona.s2t': 'Colour', 'poltrona.s2': 'Colour, highlights and shades, with Franco’s advice on when it’s time to try something new.',
      'poltrona.s3t': 'Men', 'poltrona.s3': 'A cut and a quick tidy-up, even on the go: walk in, sit down, walk out sharp.',
      'poltrona.s4t': 'Care & products', 'poltrona.s4': 'Treatments and Davines products to leave hair soft and healthy. Quality you can feel.',
      'rev.kicker': 'The word',
      'rev.title': '4.9 from 46 reviews',
      'rev.lead': 'What people say about Franco, in Bovisa.',
      'dove.kicker': 'Find us',
      'dove.title': 'On Via Varè, the heart of Bovisa',
      'dove.addr': 'Address', 'dove.tel': 'Phone', 'dove.status': 'Right now', 'dove.call': 'Call for a cut',
      'd.lun': 'Monday', 'd.mar': 'Tuesday', 'd.mer': 'Wednesday', 'd.gio': 'Thursday', 'd.ven': 'Friday', 'd.sab': 'Saturday', 'd.dom': 'Sunday', 'd.chiuso': 'Closed', 'd.chiuso2': 'Closed',
      'footer.demo': 'Demonstration site (concept) created by Bespoke Studio for presentation purposes. It is not the official website of Spazzola & Phon Acconciature Franco; text and photos come from public sources and may be out of date.',
    },
  };

  if (SITE.whatsapp.number) {
    var waHref = 'https://wa.me/' + SITE.whatsapp.number + '?text=' + encodeURIComponent(SITE.whatsapp.message);
    SITE.whatsapp.ids.forEach(function (id) { var el = document.getElementById(id); if (el) { el.href = waHref; el.target = '_blank'; el.rel = 'noopener'; } });
  }

  var hasGsap = typeof gsap !== 'undefined';
  var hasST = hasGsap && typeof ScrollTrigger !== 'undefined';
  if (hasST) gsap.registerPlugin(ScrollTrigger);

  function showAllReveals() {
    var els = document.querySelectorAll(SITE.revealSelector);
    els.forEach(function (el) { el.classList.add(SITE.inViewClass); });
    if (hasGsap) {
      if (hasST) { els.forEach(function (el) { ScrollTrigger.getAll().forEach(function (st) { if (st.trigger === el && !st.progress) st.kill(); }); }); }
      gsap.set(els, { opacity: 1, y: 0, x: 0 });
    }
  }
  setTimeout(function () { if (!hasGsap || reducedMotion) showAllReveals(); }, 1500);

  if (hasGsap && !reducedMotion) {
    gsap.utils.toArray(SITE.revealSelector).forEach(function (el) {
      gsap.fromTo(el, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', immediateRender: false, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
    });
  } else {
    if ('IntersectionObserver' in window && !reducedMotion) {
      var io = new IntersectionObserver(function (entries) { entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add(SITE.inViewClass); io.unobserve(e.target); } }); }, { threshold: 0.12 });
      document.querySelectorAll(SITE.revealSelector).forEach(function (el) { io.observe(el); });
    } else { showAllReveals(); }
  }

  var intro = document.getElementById(SITE.introId);
  var heroEntrance = window.bespokeHeroEntrance || function () {};
  function hideIntro() { if (!intro) return; var el = intro; intro = null; el.classList.add('hide'); setTimeout(function () { el.remove(); }, 700); heroEntrance(); }
  if (reducedMotion || !intro) { if (intro) { intro.remove(); intro = null; } heroEntrance(); }
  else { setTimeout(hideIntro, SITE.introDuration); setTimeout(hideIntro, 6000); intro.addEventListener('click', hideIntro); }

  var burger = document.getElementById('burger');
  var nav = document.getElementById('mainNav');
  if (burger && nav) {
    var lastFocus = null;
    var closeNav = function () { nav.classList.remove('nav-open'); burger.setAttribute('aria-expanded', 'false'); if (lastFocus) { lastFocus.focus(); lastFocus = null; } };
    var openNav = function () { lastFocus = document.activeElement; nav.classList.add('nav-open'); burger.setAttribute('aria-expanded', 'true'); var first = nav.querySelector('a, button'); if (first) first.focus(); };
    burger.addEventListener('click', function () { nav.classList.contains('nav-open') ? closeNav() : openNav(); });
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('nav-open')) closeNav(); });
    window.addEventListener('resize', function () { if (window.innerWidth > SITE.breakpointMenu) closeNav(); });
  }

  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');
  if (lightbox && lightboxImg) {
    var opener = null;
    var openLb = function (src, alt) { lightboxImg.src = src; lightboxImg.alt = alt || ''; lightbox.hidden = false; document.body.style.overflow = 'hidden'; if (lightboxClose) lightboxClose.focus(); };
    var closeLb = function () { lightbox.hidden = true; lightboxImg.src = ''; document.body.style.overflow = ''; if (opener) { opener.focus(); opener = null; } };
    document.querySelectorAll('[data-full]').forEach(function (btn) { btn.addEventListener('click', function () { opener = btn; var img = btn.querySelector('img'); openLb(btn.getAttribute('data-full'), img ? img.alt : ''); }); });
    if (lightboxClose) lightboxClose.addEventListener('click', closeLb);
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLb(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lightbox.hidden) closeLb(); });
  }

  function romeNow() {
    try {
      var f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false });
      var p = f.formatToParts(new Date());
      var map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      var get = function (t) { return p.find(function (x) { return x.type === t; }).value; };
      return { day: map[get('weekday')], mins: parseInt(get('hour'), 10) * 60 + parseInt(get('minute'), 10) };
    } catch (e) { var d = new Date(); return { day: d.getDay(), mins: d.getHours() * 60 + d.getMinutes() }; }
  }
  var toMin = function (hm) { var a = hm.split(':'); return parseInt(a[0], 10) * 60 + parseInt(a[1], 10); };
  var fmt = function (m) { m = m % 1440; return ('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + (m % 60)).slice(-2); };
  var DAYS_IT = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  var DAYS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function hoursState() {
    var now = romeNow();
    var wins = SITE.hours[now.day] || [];
    for (var i = 0; i < wins.length; i++) { var s = toMin(wins[i][0]), e = toMin(wins[i][1]); if (now.mins >= s && now.mins < Math.min(e, 1440)) return { open: true, day: now.day, closesAt: fmt(e) }; }
    var prev = (now.day + 6) % 7;
    var pw = SITE.hours[prev] || [];
    for (var j = 0; j < pw.length; j++) { var pe = toMin(pw[j][1]); if (pe > 1440 && now.mins < pe - 1440) return { open: true, day: prev, closesAt: fmt(pe) }; }
    for (var k = 0; k < wins.length; k++) { if (now.mins < toMin(wins[k][0])) return { open: false, day: now.day, opensToday: fmt(toMin(wins[k][0])) }; }
    for (var d = 1; d <= 7; d++) { var nd = (now.day + d) % 7; var nw = SITE.hours[nd] || []; if (nw.length) return { open: false, day: now.day, opensDay: nd, opensAt: fmt(toMin(nw[0][0])) }; }
    return { open: false, day: now.day };
  }
  function renderHours() {
    var el = document.getElementById(SITE.hoursStatusId);
    var st = hoursState();
    document.querySelectorAll(SITE.hoursTableSelector).forEach(function (row) { row.classList.toggle(SITE.todayClass, parseInt(row.getAttribute('data-day'), 10) === st.day); });
    if (!el) return;
    var en = root.lang === 'en';
    var txt;
    if (st.open) txt = (en ? 'Open now' : 'Aperto ora') + ' · ' + (en ? 'closes at ' : 'chiude alle ') + st.closesAt;
    else if (st.opensToday) txt = (en ? 'Closed · opens today at ' : 'Chiuso · apre oggi alle ') + st.opensToday;
    else if (st.opensAt !== undefined) txt = (en ? 'Closed · opens ' + DAYS_EN[st.opensDay] + ' at ' : 'Chiuso · apre ' + DAYS_IT[st.opensDay] + ' alle ') + st.opensAt;
    else txt = en ? 'Closed' : 'Chiuso';
    el.textContent = txt;
  }
  renderHours();
  setInterval(renderHours, 60000);

  var originals = {};
  var I18N_ATTRS = [['data-i18n', null], ['data-i18n-aria', 'aria-label'], ['data-i18n-alt', 'alt'], ['data-i18n-placeholder', 'placeholder'], ['data-i18n-title', 'title']];
  function setLang(lang) {
    root.lang = lang === 'en' ? 'en' : 'it';
    I18N_ATTRS.forEach(function (pair) {
      var dattr = pair[0], target = pair[1];
      if (!originals[dattr]) originals[dattr] = {};
      document.querySelectorAll('[' + dattr + ']').forEach(function (el) {
        var key = el.getAttribute(dattr);
        var store = originals[dattr];
        /* innerHTML, NON textContent: gli elementi tradotti contengono
           quasi sempre markup (<strong>, <br>) e con textContent il primo
           passaggio a EN lo appiattisce — tornando in italiano il grassetto
           non torna più. I valori del dizionario sono statici e scritti da
           noi. (20/7/2026: la flotta era già così, il boilerplate no.) */
        if (!(key in store)) store[key] = target ? el.getAttribute(target) : el.innerHTML;
        var val = lang === 'en' && SITE.EN[key] !== undefined ? SITE.EN[key] : store[key];
        if (target) el.setAttribute(target, val); else el.innerHTML = val;
      });
    });
    renderHours();
    try { localStorage.setItem(SITE.slug + '-lang', lang); } catch (e) {}
  }
  var langToggle = document.getElementById('langToggle');
  if (langToggle) langToggle.addEventListener('click', function () { setLang(root.lang === 'en' ? 'it' : 'en'); });
  try { if (localStorage.getItem(SITE.slug + '-lang') === 'en') setLang('en'); } catch (e) {}
})();

/* ══════════ FIRMA — il phon soffia sulla spazzola (airflow che si disegna) ══════════
   Flash-safe: NON è .reveal; strokeDashoffset (stroke, non opacity); immediateRender:false. */
(function () {
  if (!window.gsap || !window.ScrollTrigger) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var paths = document.querySelectorAll('.tools__air path');
  if (!paths.length) return;
  paths.forEach(function (p) { p.style.strokeDasharray = p.getTotalLength(); });
  gsap.fromTo(paths,
    { strokeDashoffset: function (i, t) { return t.getTotalLength(); } },
    { strokeDashoffset: 0, duration: 0.7, ease: 'power2.out', stagger: 0.18, immediateRender: false,
      scrollTrigger: { trigger: '#piega', start: 'top 66%', once: true } });
})();
