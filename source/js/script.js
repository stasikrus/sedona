let menuButton = document.querySelector('.main-nav_toggle');
let navMenu = document.querySelector('.main-nav');

navMenu.classList.remove('main-nav--opened');
navMenu.classList.add('main-nav--closed');

menuButton.addEventListener('click', function() {
  if (navMenu.classList.contains('main-nav--closed')) {
    navMenu.classList.remove('main-nav--closed');
    navMenu.classList.add('main-nav--opened');
  } else {
    navMenu.classList.add('main-nav--closed');
    navMenu.classList.remove('main-nav--opened');
  }
})
