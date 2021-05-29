const SCROLL_SHIFT = 200; // px

const btn = document.querySelector('.scroll-upp-btn');

const onPageScroll = () => {
  if (pageYOffset > SCROLL_SHIFT) {
    btn.classList.add('scroll-upp-btn--shown');
  } else {
    btn.classList.remove('scroll-upp-btn--shown');
  }
};

const initScrollUppBtn = () => {
  if (!btn) {
    return;
  }

  document.addEventListener('scroll', onPageScroll);
};

export {initScrollUppBtn};
