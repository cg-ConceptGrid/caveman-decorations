// Caveman Decorations — interactions

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const form = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");

  // Sticky header
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
  const observer = new IntersectionObserver(
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
  sections.forEach((s) => observer.observe(s));

  // Contact form (front-end only)
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    formNote.hidden = false;
    form.reset();
    setTimeout(() => {
      formNote.hidden = true;
    }, 5000);
  });
});
