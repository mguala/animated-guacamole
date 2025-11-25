// Sony Alpha - Enhanced interactions
function main() {
  console.log("Sony Alpha loaded. Ready to capture excellence.");

  // Intersection Observer for lazy loading animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe sections for scroll animations
  const animatedSections = document.querySelectorAll(
    ".visual-section, .info-section"
  );
  animatedSections.forEach((section) => {
    section.classList.add("lazy-animate");
    observer.observe(section);
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add subtle parallax effect to hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector(".hero-section");
    if (heroSection && scrolled < 500) {
      heroSection.style.transform = `translateY(${scrolled * 0.3}px)`;
      heroSection.style.opacity = 1 - scrolled / 800;
    }
  });
}

document.addEventListener("DOMContentLoaded", main);
