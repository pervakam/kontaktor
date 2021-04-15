const sideMenu = document.querySelector('.side-menu__list');
const body = document.querySelector('body')
const menuButton = document.querySelector('.side-menu__button');
const typedSupportAdvantages = document.querySelector('.content__support-advantages');
const supportButton = document.querySelector('.content__support-button');
const supportFormOverlay = document.querySelector('.content__form-overlay');
const supportForm = document.querySelector('.content__form');
const supportFormCloseButton = document.querySelector('.content__form-close');
const MOBILE_MAX_WIDTH = 767;
const ESC_KEY = 'Escape';

if (innerWidth <= MOBILE_MAX_WIDTH) {
  sideMenu.classList.add('side-menu__list--hide');
}

if (menuButton) {
  menuButton.addEventListener('click', function () {
    sideMenu.classList.toggle('side-menu__list--hide');
  });
}

const options = {
  strings: ['качество', 'оперативность', 'эффективность'],
  typeSpeed: 70,
  smartBackspace: true,
  startDelay: 200,
  backSpeed: 70,
  loop: true,
};

if (typedSupportAdvantages) {
  const typed = new Typed(typedSupportAdvantages, options);
}

const openSupportForm = function () {
  body.classList.add('no-scroll');
  supportFormOverlay.classList.remove('content__form-overlay--hide');
  closeSupportFormByClick()
}

const closeSupportForm = function () {
  supportFormOverlay.classList.add('content__form-overlay--hide');
  body.classList.remove('no-scroll');

  supportFormCloseButton.removeEventListener('click', closeSupportForm);
  window.removeEventListener('keydown', escSupportFormHandler);
  document.removeEventListener('click', overlaySupportFormHandler);
};

const escSupportFormHandler = function (evt) {
  if (evt.key === ESC_KEY) {
    evt.preventDefault();
    closeSupportForm();
  }
};

const overlaySupportFormHandler = function (evt) {
  if (evt.target !== supportButton && evt.target !== supportForm && !supportForm.contains(evt.target)) {
    closeSupportForm();
  }
};

const closeSupportFormByClick = function () {
  supportFormCloseButton.addEventListener('click', closeSupportForm);
  window.addEventListener('keydown', escSupportFormHandler);
  document.addEventListener('click', overlaySupportFormHandler);
};

if (supportButton) {
  supportButton.addEventListener('click', openSupportForm)
}
