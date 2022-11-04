// Variables

const navLinks = document.querySelector('.nav-links');
const hamMenu = document.querySelector('.hamburger-menu');
const hamMenuIcon = document.querySelector('.hamburger-menu i');
const header = document.querySelector('.header');

hamMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  // hamburger menu icon toggle
  if (hamMenuIcon.classList.contains('fa-bars')) {
    hamMenuIcon.classList.remove('fa-bars');
    hamMenuIcon.classList.add('fa-times');
    hamMenuIcon.style = 'display: block';
  } else {
    hamMenuIcon.classList.add('fa-bars');
    hamMenuIcon.classList.remove('fa-times');
    hamMenuIcon.style = 'display: block';
  }
});

window.addEventListener('scroll', () => {
  let windowPosition = window.scrollY > 50;
  header.classList.toggle('active', windowPosition);
});
