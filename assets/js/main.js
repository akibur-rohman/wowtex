(() => {
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

  const path = (window.location.pathname || "/").replace(/\/+$/, "") || "/";
  const navAnchors = document.querySelectorAll("a[data-nav]");
  navAnchors.forEach((a) => {
    const href = (a.getAttribute("href") || "").trim();
    if (!href || href.startsWith("http") || href.startsWith("mailto:")) return;
    const normalized = href === "/" ? "/" : href.replace(/\/+$/, "");
    if (normalized === path || (path === "/" && normalized.endsWith("index.html"))) {
      a.setAttribute("aria-current", "page");
    }
  });

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
        "— sent from wowtex website",
      ].filter(Boolean);

      const mailto = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
        subjectParts.join(" ")
      )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

      window.location.href = mailto;
    });
  }

  /* Scroll reveals */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      revealEls.forEach((el) => el.classList.add("is-inview"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-inview");
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
      );
      revealEls.forEach((el) => io.observe(el));
    }
  }
})();
