/* Reveal on scroll ---------------------------------------- */
(function () {
  const targets = document.querySelectorAll(
    ".grid__item, .about-band__title, .about-band__body p, .about-band__portrait, .about-band__stats div, .contact-band__title, .contact-band__card, .project-book__page, .about-page__intro, .about-page__portrait, .resume__heading, .resume__aside, .resume-section, .eyebrow"
  );
  if (!targets.length) return;
  targets.forEach((el) => el.classList.add("reveal"));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );
  targets.forEach((el) => io.observe(el));
})();

/* Page transitions ---------------------------------------- */
(function () {
  const internal = document.querySelectorAll(
    'a[href]:not([target="_blank"]):not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"])'
  );
  internal.forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href.startsWith("http")) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      document.body.classList.add("is-leaving");
      setTimeout(() => { window.location.href = href; }, 420);
    });
  });
})();
