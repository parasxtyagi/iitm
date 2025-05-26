// mobile menu toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// dark mode toggle
const darkToggle = document.getElementById('dark-toggle');
const htmlEl = document.documentElement;
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');

darkToggle.addEventListener('click', () => {
  htmlEl.classList.toggle('dark');
  iconSun.classList.toggle('hidden');
  iconMoon.classList.toggle('hidden');
});
