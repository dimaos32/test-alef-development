import cats from './data-cats';

const list = document.querySelector('.offer__cards');
const filter = document.querySelector('.offer__filter');

const formatPrice = (num) => {
  return num < 1000
    ? String(num)
    : `${formatPrice(String(num).slice(0, -3))} ${String(num).slice(-3)}`;
};

const createCard = (data) => {
  const {name, color, age, paws, price, isLiked, isSoldOut, discount, img} = data;
  const element = document.createElement('li');

  element.innerHTML = `<article class="offer-card">
  <div class="offer-card__img">
    <picture>
      <source srcset="img/content/${img.name}.webp 1x, img/content/${img.name}@2x.webp 2x">
      <!-- 1х: 380px; 2x: 760px -->
      <img src="img/content/${img.name}.${img.format}" srcset="img/content/${img.name}@2x.${img.format} 2x" width="380" height="264" alt="${img.alt}">
    </picture>
    <button class="btn-reset offer-card__like-btn" type="button">
      <svg width="46" height="46">
        <use xlink:href="#icon-heart"></use>
      </svg>
    </button>
    </div>
    <div class="offer-card__desc">
      <h2 class="offer-card__title">${name}</h2>
      <dl class="offer-card__properties">
        <div class="offer-card__property">
          <dt>окрас</dt>
          <dd>${color}</dd>
        </div>
        <div class="offer-card__property offer-card__property--numeric">
          <dt>Возраст</dt>
          <dd>${age} мес.</dd>
        </div>
        <div class="offer-card__property offer-card__property--numeric">
          <dt>Кол-во лап</dt>
          <dd>${paws}</dd>
        </div>
      </dl>
      <div class="offer-card__price">
        <output>${formatPrice(price)}</output> руб.
      </div>
    </div>
    <button class="btn-reset offer-card__btn">Купить</button>
  </article>`;

  if (discount) {
    const pic = element.querySelector('.offer-card__img');
    const discountBadge = document.createElement('div');

    discountBadge.classList.add('offer-card__discount');
    discountBadge.textContent = `-${discount}%`;
    pic.append(discountBadge);
  }

  if (isLiked) {
    const btn = element.querySelector('.offer-card__like-btn');

    btn.classList.add('offer-card__like-btn--is-liked');
  }

  if (isSoldOut) {
    const btn = element.querySelector('.offer-card__btn');

    btn.textContent = 'Продан';
    btn.disabled = true;
  }

  return element;
};

const renderCats = (data) => {
  list.innerHTML = '';

  data.forEach((cat) => {
    list.append(createCard(cat));
  });
};

const onFilterClick = ({target}) => {
  const btn = target.closest('.offer__filter-btn');

  if (btn) {
    const sortField = btn.dataset.filterBy;
    const currentSortField = document.querySelector('button[data-is-sorted="true"]');

    if (currentSortField === btn) {
      if (btn.dataset.isDirectSort === 'true') {
        renderCats(cats.sort((a, b) => b[sortField] - a[sortField]));
        btn.dataset.isDirectSort = false;
      } else {
        renderCats(cats.sort((a, b) => a[sortField] - b[sortField]));
        btn.dataset.isDirectSort = true;
      }
    } else {
      if (currentSortField) {
        currentSortField.dataset.isSorted = false;
        currentSortField.dataset.isDirectSort = false;
      }

      renderCats(cats.sort((a, b) => a[sortField] - b[sortField]));
      btn.dataset.isSorted = true;
      btn.dataset.isDirectSort = true;
    }
  }
};

const renderCards = () => {
  if (!list) {
    return;
  }

  renderCats(cats);

  if (filter) {
    filter.addEventListener('click', onFilterClick);
  }
};

export {renderCards};
