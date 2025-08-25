// Menu Toggle futurista
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.onclick = () => navLinks.classList.toggle('active');

// Header Particles Neon Ultra-futurista
const header = document.querySelector('header');
const particleCount = 120;

for(let i=0;i<particleCount;i++){
  const dot = document.createElement('span');
  dot.className = 'header-dot';
  const size = Math.random()*3 + 1.5;
  dot.style.cssText = `
    position:absolute;
    left:${Math.random()*100}%;
    top:${Math.random()*100}%;
    width:${size}px;
    height:${size}px;
    background: linear-gradient(45deg,#00ffff,#0099ff,#aa00ff);
    border-radius:50%;
    box-shadow:0 0 ${size*2}px #00ffff,0 0 ${size*4}px #aa00ff;
    animation:float ${Math.random()*15+5}s ease-in-out infinite alternate;
    opacity:${Math.random()*0.8+0.2};
  `;
  header.appendChild(dot);
}

// CSS Animations dinâmicas
const style = document.createElement('style');
style.innerHTML = `
@keyframes float {
  0%{transform:translate(0px,0px);}
  25%{transform:translate(${Math.random()*30-15}px,${Math.random()*20-10}px);}
  50%{transform:translate(${Math.random()*30-15}px,${Math.random()*20-10}px);}
  75%{transform:translate(${Math.random()*30-15}px,${Math.random()*20-10}px);}
  100%{transform:translate(0px,0px);}
}

/* Glow animado para hero */
.hero h1 span {
  animation: neonPulse 2s ease-in-out infinite alternate;
}
@keyframes neonPulse {
  0%{text-shadow:0 0 10px #00ffff,0 0 20px #00ffff,0 0 30px #aa00ff;}
  50%{text-shadow:0 0 20px #00ffff,0 0 30px #00ffff,0 0 40px #aa00ff;}
  100%{text-shadow:0 0 10px #00ffff,0 0 20px #00ffff,0 0 30px #aa00ff;}
}

/* Menu toggle neon */
.menu-toggle { transition:0.3s; color:#00ffff; }
.menu-toggle:hover { color:#aa00ff; text-shadow:0 0 10px #00ffff,0 0 20px #aa00ff; }
`;
document.head.appendChild(style);
