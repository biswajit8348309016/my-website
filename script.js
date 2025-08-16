// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth Scrolling for navbar links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });

    // Close mobile menu after click
    navLinks.classList.remove("active");
  });
});

// Highlight active navbar link on scroll
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ScrollReveal animations
ScrollReveal({
  reset: false,
  distance: "50px",
  duration: 1000,
  delay: 100
});

ScrollReveal().reveal('.home-content', { origin: "top" });
ScrollReveal().reveal('.about-text', { origin: "left" });
ScrollReveal().reveal('.about-image', { origin: "right" });
ScrollReveal().reveal('.project-card', { origin: "bottom", interval: 200 });
ScrollReveal().reveal('.contact-form', { origin: "left" });
ScrollReveal().reveal('.direct-contact', { origin: "right" });
