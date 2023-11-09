"strict";

// NAV BTN MOBILE
const btn_nav_mobile = document.querySelector(".btn-mobile-nav");

btn_nav_mobile.addEventListener("click", (e) => {
  const header = e.target.closest(".header");
  header.classList.toggle("nav-open");
});

// Scroll smooth
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el.scrollIntoView({ behavior: "smooth" });
    }

    const nav = e.target.closest(".nav-open");
    if (nav) {
      nav.classList.toggle("nav-open");
    }
  });
});

//Sticky nav
const heroSectionEl = document.querySelector(".hero-section");
const ob = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      document.body.classList.add("nav-sticky");
    } else {
      document.body.classList.remove("nav-sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

ob.observe(heroSectionEl);
