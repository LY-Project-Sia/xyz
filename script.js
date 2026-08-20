const lines = [
  "initializing portfolio...",
  "loading project history...",
  "checking system architecture...",
  "loading delivery metrics...",
  "access granted // welcome."
];

const target = document.getElementById("typing");
let line = 0, char = 0, deleting = false;

function typeTerminal() {
  const text = lines[line];

  if (!deleting) {
    target.textContent = text.slice(0, ++char);
    if (char === text.length) {
      deleting = true;
      setTimeout(typeTerminal, 1200);
      return;
    }
  } else {
    target.textContent = text.slice(0, --char);
    if (char === 0) {
      deleting = false;
      line = (line + 1) % lines.length;
    }
  }
  setTimeout(typeTerminal, deleting ? 28 : 48);
}
typeTerminal();

const sections = [...document.querySelectorAll("section[id]")];
const navLinks = [...document.querySelectorAll("nav a")];

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${entry.target.id}`
      ));
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));
