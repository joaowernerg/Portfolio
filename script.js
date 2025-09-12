const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 100;

// Criar partículas
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
    p.hue += 0.5;
    if(p.y < 0) p.y = canvas.height;
  });
  requestAnimationFrame(animate);
}

animate();

// Redimensionar
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
