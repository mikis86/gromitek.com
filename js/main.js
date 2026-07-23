// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen);
    });
  }

  // Footer year
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Sticky header shadow on scroll
  const header = document.querySelector(".site-header");
  if (header) {
    const updateHeaderShadow = () => {
      header.classList.toggle("site-header--scrolled", window.scrollY > 8);
    };
    updateHeaderShadow();
    window.addEventListener("scroll", updateHeaderShadow, { passive: true });
  }

  // Scroll-reveal animation
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // Contact form — submit via Web3Forms API without leaving the page
  const contactForm = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (contactForm && status) {
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const submitBtn = contactForm.querySelector("button[type=submit]");
      submitBtn.disabled = true;
      status.textContent = "Sending…";
      status.style.color = "";

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(Object.fromEntries(new FormData(contactForm))),
        });
        const result = await response.json();

        if (result.success) {
          status.textContent = "Thanks — your message has been sent.";
          status.style.color = "#1e7a3d";
          contactForm.reset();
        } else {
          status.textContent = "Something went wrong. Please email us directly instead.";
          status.style.color = "#c0392b";
        }
      } catch (err) {
        status.textContent = "Something went wrong. Please email us directly instead.";
        status.style.color = "#c0392b";
      } finally {
        submitBtn.disabled = false;
      }
    });
  }
});
