// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Fade animation
document.querySelectorAll("section").forEach((sec, i) => {
  sec.style.opacity = 0;
  setTimeout(() => {
    sec.style.transition = "1s";
    sec.style.opacity = 1;
  }, i * 300);
});
