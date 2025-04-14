// Scroll reveal effect (optional)
window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.card');
  reveals.forEach(card => {
    const windowHeight = window.innerHeight;
    const elementTop = card.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      card.classList.add('animate__fadeInUp');
    }
  });
});
