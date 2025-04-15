// Typewriter effect
const text = "Hi, I'm a B.Tech IT Student Passionate About Tech.";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 70);
  }
}
typeWriter();

// AOS init
AOS.init({
  duration: 1000,
  once: true,
});
