// ===============================
// CONFIGURAÇÃO DO CANVAS DE PARTÍCULAS
// ===============================
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

// Ajusta o tamanho do canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Cria partículas adaptáveis à tela
const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 15000);
const particles = [];

for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,
    speedY: Math.random() * 0.5 + 0.2,
    hue: Math.random() * 360
  });
}

// Anima partículas
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${p.hue}, 100%, 50%)`;
    ctx.fill();

    // Movimento vertical
    p.y -= p.speedY;
    if (p.y < 0) p.y = canvas.height;

    // Mudança suave de cor
    p.hue += 0.5;
    if (p.hue > 360) p.hue = 0;
  });

  requestAnimationFrame(animateParticles);
}
animateParticles();

// ===============================
// SCROLL SUAVE AO CLICAR NOS LINKS
// ===============================
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================
const backTop = document.createElement('button');
backTop.textContent = '↑';
backTop.id = 'backTop';
document.body.appendChild(backTop);

backTop.style.cssText = `
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  padding: 1rem 1.2rem;
  font-size: 1.6rem;
  border: none;
  border-radius: 50%;
  background: #00ffea;
  color: #0d0d1a;
  cursor: pointer;
  box-shadow: 0 0 2rem #00ffea;
  display: none;
  z-index: 999;
  transition: transform 0.3s, background 0.3s;
`;

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  backTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// ===============================
// ABRIR DIRETO EM UMA SEÇÃO
// ===============================
window.addEventListener('load', () => {
  const sectionInicial = 'sobre'; // altere para a seção desejada
  const target = document.getElementById(sectionInicial);
  if (target) target.scrollIntoView({ behavior: 'smooth' });
});
