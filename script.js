
const hamburger =  document.getElementById('hamburger');
const closemenu =  document.getElementById('close-menu');
const menu =  document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

closemenu.addEventListener('click', () => {
  menu.classList.toggle('show');
});
