// Reveal sections on scroll
const sections = document.querySelectorAll(".section");
const revealOptions = {
  threshold: 0.2,
};
const revealOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, revealOptions);

sections.forEach((section) => {
  section.classList.add("opacity-0");
  revealOnScroll.observe(section);
});
