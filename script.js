const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

// Ajusta o tamanho do canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Configuração das partículas
const particleCount = 100;
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

// Função de animação
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${p.hue}, 100%, 50%)`;
    ctx.fill();

    // Movimento vertical
    p.y -= p.speedY;
    if(p.y < 0) p.y = canvas.height;

    // Mudança de cor suave
    p.hue += 0.5;
    if(p.hue > 360) p.hue = 0;
  });

  requestAnimationFrame(animate);
}

// Inicia animação
animate();
// FUNDO DE PARTÍCULAS
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particleCount = 100;
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

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${p.hue}, 100%, 50%)`;
    ctx.fill();
    p.y -= p.speedY;
    if (p.y < 0) p.y = canvas.height;
    p.hue += 0.5;
    if (p.hue > 360) p.hue = 0;
  });
  requestAnimationFrame(animate);
}
animate();

// SCROLL SUAVE AO CLICAR NOS LINKS
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// BOTÃO VOLTAR AO TOPO
const backTop = document.createElement('button');
backTop.textContent = '↑';
backTop.id = 'backTop';
document.body.appendChild(backTop);

backTop.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 10px 15px;
  font-size: 1.2rem;
  border: none;
  border-radius: 50%;
  background: #00aaff;
  color: #000;
  cursor: pointer;
  box-shadow: 0 0 10px #00ffff;
  display: none;
  z-index: 999;
  transition: transform 0.3s;
`;

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) backTop.style.display = 'block';
  else backTop.style.display = 'none';
});

// ABRIR DIRETO EM UMA SEÇÃO
window.addEventListener('load', () => {
  const sectionInicial = 'sobre'; // Alterar para a seção desejada
  const target = document.getElementById(sectionInicial);
  if (target) target.scrollIntoView({ behavior: 'smooth' });
});

