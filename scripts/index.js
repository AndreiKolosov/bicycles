'use strict';

const menuBtn = document.querySelector('.header__menu-icon'); // кнопка меню
const menuBtnLines = document.querySelectorAll('.header__icon-line'); // полоски кнопки
const menu = document.querySelector('.header__menu'); // меню
const footerForm = document.querySelector('.form_place_footer'); // форма в футере
const emailInput = footerForm.querySelector('.form__item_type_email'); // поле ввода email в форме футера
const footerFormBtn = footerForm.querySelector('.form__button'); // Кнопка в форме
const page = document.querySelector('.page'); // Контейнер страницы
const themeSwitcher = document.querySelectorAll('.theme-switcher__button'); // Кнопки переключатели темы
// --------------------------------------------------//
// Slider
let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const sliderContainer = document.querySelector('.slider');
const sliderTrack = sliderContainer.querySelector('.slider__track');
const sliderItems = sliderContainer.querySelectorAll('.slider__item');
const itemsCount = sliderItems.length;
const itemWidth = sliderContainer.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

// --------------------------------------------------//

// Открытие меню-бургер, анимация кнопки
menuBtn.addEventListener('click', () => {
  if (menuBtnLines.length > 0)
    menuBtnLines.forEach((line) => {
      line.classList.toggle('header__icon-line_active');
    });
  menu.classList.toggle('header__menu_active');
});
// --------------------------------------------------//

// Появление / скрытие кнопки в форме

emailInput.onfocus = () => {
  footerFormBtn.classList.remove('form__button_disabled');
};

emailInput.onblur = () => {
  footerFormBtn.classList.add('form__button_disabled');
};
// --------------------------------------------------//

// Переключатель темы

themeSwitcher.forEach((element) => {
  element.addEventListener('click', () => {
    page.classList.toggle('page_theme_dark');
    element.classList.toggle('theme-switcher__button_active');
  });
});
// --------------------------------------------------//

// Slider

sliderItems.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
  const itemsLeft =
    itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;

  position +=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

const setPosition = () => {
  sliderTrack.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();
