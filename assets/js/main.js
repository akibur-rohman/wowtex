(() => {
  "use strict";

  /* ── Mobile Navigation Toggle ── */
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navLinks = document.querySelector("[data-nav-links]");

  if (navToggle && navLinks) {
    const setOpen = (open) => {
      navLinks.dataset.open = open ? "true" : "false";
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    };

    setOpen(false);

    navToggle.addEventListener("click", () => {
      const open = navLinks.dataset.open === "true";
      setOpen(!open);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });

    document.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof Node)) return;
      if (!navLinks.contains(target) && !navToggle.contains(target)) setOpen(false);
    });

    navLinks.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.matches("a")) setOpen(false);
    });
  }

  /* ── Active Nav Link Detection ── */
  const path = (window.location.pathname || "/").replace(/\/+$/, "") || "/";
  const navAnchors = document.querySelectorAll("a[data-nav]");
  navAnchors.forEach((a) => {
    const href = (a.getAttribute("href") || "").trim();
    if (!href || href.startsWith("http") || href.startsWith("mailto:")) return;
    const normalized = href === "/" ? "/" : href.replace(/\/+$/, "");
    if (normalized === path || (path === "/" && normalized.endsWith("index.html")) || path.endsWith(normalized)) {
      a.setAttribute("aria-current", "page");
    }
  });

  /* ── Header Scroll Shadow ── */
  const header = document.getElementById("site-header");
  if (header) {
    let lastScroll = 0;
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
      lastScroll = scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ── Scroll Reveal (IntersectionObserver) ── */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
      );
      revealEls.forEach((el) => io.observe(el));
    }
  }

  /* ── Stagger Children Indexing ── */
  const staggerContainers = document.querySelectorAll("[data-reveal-stagger]");
  staggerContainers.forEach((container) => {
    const children = container.querySelectorAll("[data-reveal]");
    children.forEach((child, i) => {
      child.style.setProperty("--stagger-index", String(i));
    });
  });

  /* ── Animated Counters ── */
  const counterEls = document.querySelectorAll("[data-count]");
  if (counterEls.length) {
    const animateCounter = (el) => {
      const target = parseInt(el.getAttribute("data-count"), 10);
      if (isNaN(target)) return;

      const duration = 1500;
      const startTime = performance.now();

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        el.textContent = current + (target >= 50 ? "+" : "+");
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    counterEls.forEach((el) => counterObserver.observe(el));
  }

  /* ── Mailto Form Builder ── */
  const mailForm = document.querySelector("[data-mailto-form]");
  if (mailForm instanceof HTMLFormElement) {
    mailForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = mailForm.getAttribute("data-mailto") || "wowtexbd@gmail.com";
      const name = mailForm.querySelector("[name='name']")?.value?.trim() || "";
      const company = mailForm.querySelector("[name='company']")?.value?.trim() || "";
      const service = mailForm.querySelector("[name='service']")?.value?.trim() || "";
      const message = mailForm.querySelector("[name='message']")?.value?.trim() || "";

      const subjectParts = ["New inquiry", service && `(${service})`].filter(Boolean);
      const bodyLines = [
        name && `Name: ${name}`,
        company && `Company: ${company}`,
        service && `Service: ${service}`,
        "",
        message || "(Write your message here)",
        "",
        "— sent from wowtex.com",
      ].filter((line) => line !== false && line !== undefined);

      const mailto = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
        subjectParts.join(" ")
      )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

      window.location.href = mailto;
    });
  }
})();
