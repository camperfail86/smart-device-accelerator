import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

const breakpoint = window.matchMedia('(max-width: 767px)');
const navigationMinus = document.querySelector('.navigation__minus');
const addressMinus = document.querySelector('.address__minus');
const navigationList = document.querySelector('.navigation__list');
const addressList = document.querySelector('.address__list');

if (breakpoint.matches) {
  navigationList.style.display = 'none';
  addressList.style.display = 'none';

  const addressButton = document.querySelector('.address__title');
  addressButton.addEventListener('click', () => {
    if (addressButton.nextElementSibling.style.display !== 'none') {
      addressButton.nextElementSibling.style.display = 'none';
      addressMinus.classList.add('plus');
    } else {
      addressMinus.classList.remove('plus');
      addressButton.nextElementSibling.style.display = 'block';
      navigationList.style.display = 'none';
      navigationMinus.classList.add('plus');
    }
  });

  const navigationButton = document.querySelector('.navigation__title');
  navigationButton.addEventListener('click', () => {
    if (navigationButton.nextElementSibling.style.display !== 'none') {
      navigationButton.nextElementSibling.style.display = 'none';
      navigationMinus.classList.add('plus');
    } else {
      navigationButton.nextElementSibling.style.display = 'block';
      addressList.style.display = 'none';
      addressMinus.classList.add('plus');
      navigationMinus.classList.remove('plus');
    }
  });
};

const additionAboutText = document.querySelector('.about__content--addition');
const aboutButton = document.querySelector('.about__button');
aboutButton.addEventListener('click', () => {
  if (additionAboutText.style.display !== 'none') {
    additionAboutText.style.display = 'none';
    aboutButton.textContent = 'Подробнее';
  } else {
    additionAboutText.style.display = 'block';
    aboutButton.textContent = 'Свернуть';
  }
});

const openModalButton = document.querySelector('.header__button');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.modal__close-btn');
closeModalButton.addEventListener('click', () => {
  modal.classList.remove('is-active');
});
openModalButton.addEventListener('click', () => {
  modal.classList.add('is-active');
});


const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
