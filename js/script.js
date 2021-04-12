const sideMenu = document.querySelector('.side-menu__list');
const menuButton = document.querySelector('.side-menu__button');
const MOBILE_MAX_WIDTH = 767;

if (innerWidth <= MOBILE_MAX_WIDTH) {
  sideMenu.classList.add('side-menu__list--hide');
}

menuButton.addEventListener('click', function () {
  sideMenu.classList.toggle('side-menu__list--hide');
});
