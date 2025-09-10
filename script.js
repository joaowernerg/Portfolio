// ===========================
// MENU TOGGLE NEON
// ===========================
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

// ===========================
// HEADER PARTICLES FUTURISTAS
// ===========================
const header = document.querySelector("header");
const fragment = document.createDocumentFragment();
const PARTICLES = 120; // mais leve e ainda imersivo

for (let i = 0; i < PARTICLES; i++) {
  const dot = document.createElement("span");
  const size = Math.random() * 3 + 1;
  const delay = Math.random() * 5;
  const duration = Math.random() * 10 + 8;

  dot.className = "header-dot";
  dot.style.cssText = `
    left:${Math.random() * 100}%;
    top:${Math.random() * 100}%;
    width:${size}px; height:${size}px;
    background: radial-gradient(circle, #00ffff, #0099ff, #aa00ff);
    border-radius:50%;
    box-shadow:0 0 ${size * 3}px #00ffff, 0 0 ${size * 6}px #aa00ff;
    animation: float ${duration}s ease-in-out ${delay}s infinite alternate,
               rotateGlow ${duration * 1.5}s linear infinite;
    opacity:${Math.random() * 0.5 + 0.5};
    position:absolute;
  `;
  fragment.appendChild(dot);
}
header.appendChild(fragment);

// ===========================
// INTERAÇÃO PARALLAX
// ===========================
document.addEventListener("mousemove", ({ clientX, clientY }) => {
  const moveX = (clientX - window.innerWidth / 2) / 100;
  const moveY = (clientY - window.innerHeight / 2) / 100;

  header.querySelectorAll(".header-dot").forEach((dot, i) => {
    const depth = (i % 5) + 1;
    dot.style.transform = `translate(${moveX / depth}px, ${moveY / depth}px)`;
  });

  const heroTitle = document.querySelector(".hero h1");
  if (heroTitle) {
    const offsetX = (clientX / window.innerWidth - 0.5) * 15;
    const offsetY = (clientY / window.innerHeight - 0.5) * 15;
    heroTitle.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }
});

// ===========================
// CSS INLINE ANIMATIONS
// ===========================
const style = document.createElement("style");
style.textContent = `
@keyframes float {
  from { transform: translateY(0); }
  to   { transform: translateY(-20px); }
}
@keyframes rotateGlow {
  0%   { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}
.menu-toggle.open span:nth-child(1) {
  transform: rotate(45deg) translateY(6px);
  background:#00ffff; box-shadow:0 0 10px #00ffff;
}
.menu-toggle.open span:nth-child(2) { opacity:0; }
.menu-toggle.open span:nth-child(3) {
  transform: rotate(-45deg) translateY(-6px);
  background:#aa00ff; box-shadow:0 0 10px #aa00ff;
}
.nav-links.active {
  clip-path: circle(150% at top right);
  transition: clip-path 0.8s ease-in-out;
}
`;
document.head.appendChild(style);
