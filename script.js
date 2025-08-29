// ========================= MENU TOGGLE NEON =========================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

// ========================= HEADER PARTICLES FUTURISTAS =========================
const header = document.querySelector('header');
const particleCount = 200; // mais partículas para maior imersão

for (let i = 0; i < particleCount; i++) {
  const dot = document.createElement('span');
  dot.className = 'header-dot';

  const size = Math.random() * 3 + 1;
  const delay = Math.random() * 5;
  const duration = Math.random() * 15 + 10;

  dot.style.cssText = `
    position:absolute;
    left:${Math.random() * 100}%;
    top:${Math.random() * 100}%;
    width:${size}px;
    height:${size}px;
    background: radial-gradient(circle, #00ffff, #0099ff, #aa00ff);
    border-radius:50%;
    box-shadow:0 0 ${size * 3}px #00ffff, 0 0 ${size * 6}px #aa00ff;
    animation: float ${duration}s ease-in-out ${delay}s infinite alternate,
               rotateGlow ${duration * 1.5}s linear infinite;
    opacity:${Math.random() * 0.8 + 0.3};
  `;

  header.appendChild(dot);
}

// ========================= INTERAÇÃO MOUSE (PARALLAX) =========================
document.addEventListener("mousemove", e => {
  const { innerWidth, innerHeight } = window;
  const moveX = (e.clientX - innerWidth / 2) / 100;
  const moveY = (e.clientY - innerHeight / 2) / 100;

  header.querySelectorAll(".header-dot").forEach((dot, index) => {
    const depth = index % 5 + 1; // camadas diferentes
    dot.style.transform = `translate(${moveX / depth}px, ${moveY / depth}px)`;
  });
});

// ========================= HERO TITLE EFEITO PARALLAX =========================
const heroTitle = document.querySelector(".hero h1");
document.addEventListener("mousemove", e => {
  const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
  const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
  heroTitle.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// ========================= CSS ANIMATIONS EXTRA =========================
const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  from { transform: translateY(0); }
  to { transform: translateY(-20px); }
}

@keyframes rotateGlow {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}

.menu-toggle.open span:nth-child(1) {
  transform: rotate(45deg) translateY(6px);
  background: #00ffff;
  box-shadow: 0 0 10px #00ffff;
}
.menu-toggle.open span:nth-child(2) {
  opacity: 0;
}
.menu-toggle.open span:nth-child(3) {
  transform: rotate(-45deg) translateY(-6px);
  background: #aa00ff;
  box-shadow: 0 0 10px #aa00ff;
}

.nav-links.active {
  clip-path: circle(150% at top right);
  transition: clip-path 1s ease-in-out;
}
`;
document.head.appendChild(style);
