/* Casa de Origem — interações */
(function () {
  "use strict";

  /* Navbar scrolled state */
  const nav = document.querySelector(".nav");
  const onScroll = () => nav && nav.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Menu mobile */
  const burger = document.querySelector(".nav-burger");
  const links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      burger.textContent = open ? "✕" : "☰";
    });
    links.addEventListener("click", (e) => {
      if (e.target.tagName === "A") { links.classList.remove("open"); burger.textContent = "☰"; }
    });
  }

  /* Reveal on scroll */
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add("in"));
  }

  /* Parallax leve no hero */
  const heroMedia = document.querySelector(".hero__media");
  if (heroMedia && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      if (y < window.innerHeight) heroMedia.style.transform = `translateY(${y * 0.18}px) scale(1.04)`;
    }, { passive: true });
  }

  /* Filtros do acervo */
  const chips = document.querySelectorAll(".chip");
  const works = document.querySelectorAll(".works-grid [data-col]");
  if (chips.length) {
    chips.forEach((chip) => chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const f = chip.dataset.filter;
      works.forEach((w) => {
        const show = f === "all" || (w.dataset.col || "").split(" ").includes(f);
        w.style.display = show ? "" : "none";
      });
    }));
  }

  /* Form — demonstração (sem backend) */
  const form = document.querySelector("form[data-demo]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = form.querySelector(".form-note");
      if (note) note.textContent = "Obrigado. Sua solicitação foi registrada — a curadoria entrará em contato. (Formulário em modo demonstração.)";
      form.reset();
    });
  }
})();
