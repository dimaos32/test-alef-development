import {disableScrolling, enableScrolling} from './../utils/scroll-lock';

const nav = document.querySelector('.main-nav');

const initMobileMenu = () => {
  if (!nav) {
    return;
  }

  const btn = nav.querySelector('.main-nav__btn');
  const overlay = nav.querySelector('.main-nav__overlay');

  const onOverlayClick = () => {
    closeMenu();
  };

  const onEscPress = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();

      closeMenu();
    }
  };

  const openMenu = () => {
    nav.classList.add('main-nav--opened');

    disableScrolling();

    overlay.addEventListener('click', onOverlayClick);
    document.addEventListener('keydown', onEscPress);
  };

  const closeMenu = () => {
    nav.classList.remove('main-nav--opened');

    setTimeout(enableScrolling, 300);

    overlay.removeEventListener('click', onOverlayClick);
    document.removeEventListener('keydown', onEscPress);
  };

  const toggleMenu = () => {
    if (nav.classList.contains('main-nav--opened')) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  btn.addEventListener('click', toggleMenu);
};

export {initMobileMenu};
