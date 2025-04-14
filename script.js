// JavaScript to toggle the menu visibility
const toggle = document.getElementById('navbar-toggle');
const nav = document.getElementById('navbar-nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});