// Caveman Decorations — interactions + motion

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const form = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");

  // Sticky header + shadow
  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav
  navToggle?.addEventListener("click", () => {
    nav.classList.toggle("open");
    navToggle.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle?.classList.remove("active");
    });
  });

  // Active section highlight
  const sections = document.querySelectorAll("section[id]");
  const observerNav = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((l) => {
            l.classList.toggle("active", l.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );
  sections.forEach((s) => observerNav.observe(s));

  // Contact form
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    formNote.hidden = false;
    form.reset();
    setTimeout(() => {
      formNote.hidden = true;
    }, 5000);
  });

  // ===== Scroll Reveal =====
  const revealTargets = document.querySelectorAll(
    ".section, .service-card, .project-card, .step, .about-content, .about-visual, .contact-info, .contact-form, .stat"
  );
  revealTargets.forEach((el, i) => {
    el.classList.add("reveal");
    const delay = i % 4;
    if (delay === 1) el.classList.add("reveal-d1");
    if (delay === 2) el.classList.add("reveal-d2");
    if (delay === 3) el.classList.add("reveal-d3");
  });

  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));
});
