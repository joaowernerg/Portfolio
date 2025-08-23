// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Header Dots
const header = document.querySelector('header');
for(let i=0;i<50;i++){
  const dot = document.createElement('span');
  dot.classList.add('header-dot');
  dot.style.left = Math.random()*100 + '%';
  dot.style.top = Math.random()*100 + '%';
  header.appendChild(dot);
}
