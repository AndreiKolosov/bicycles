'use strict';

const page = document.querySelector('.page'); // Контейнер страницы
const menuBtn = document.querySelector('.header__menu-icon'); // кнопка меню
const menuBtnLines = document.querySelectorAll('.header__icon-line'); // полоски кнопки
const menu = document.querySelector('.header__menu'); // меню
const footerForm = document.querySelector('.form_place_footer'); // форма в футере
const emailInput = footerForm.querySelector('.form__item_type_email'); // поле ввода email в форме футера
const footerFormBtn = footerForm.querySelector('.form__button'); // Кнопка в форме
const themeSwitcher = document.querySelectorAll('.theme-switcher__button'); // Кнопки переключатели темы
// --------------------------------------------------//
// Slider surfaces
let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const surfacesSliderContainer = document.querySelector('#surfaces-slider-container');
const surfacesSliderTrack = surfacesSliderContainer.querySelector('.slider__track');
const surfacesSliderItems = surfacesSliderContainer.querySelectorAll('.slider__item');
const surfacesItemsCount = surfacesSliderItems.length;
const surfacesItemWidth = surfacesSliderContainer.clientWidth / slidesToShow;
const surfacesMovePosition = slidesToScroll * surfacesItemWidth;
const surfacesBtnPrev = document.querySelector('#btn-prev');
const surfacesBtnNext = document.querySelector('#btn-next');
// --------------------------------------------------//
// Slider bikes

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
    const footer = page.querySelector('footer').classList.toggle('footer_theme_dark');
    element.classList.toggle('theme-switcher__button_active');
  });
});
// --------------------------------------------------//

// Slider surfaces

surfacesSliderItems.forEach((item) => {
  item.style.minWidth = `${surfacesItemWidth}px`;
});

surfacesBtnNext.addEventListener('click', () => {
  const itemsLeft = surfacesItemsCount - (Math.abs(position) + slidesToShow * surfacesItemWidth) / surfacesItemWidth;

  position -= itemsLeft >= slidesToScroll ? surfacesMovePosition : itemsLeft * surfacesItemWidth;

  setPosition();
  checkBtns();
});

surfacesBtnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / surfacesItemWidth;

  position += itemsLeft >= slidesToScroll ? surfacesMovePosition : itemsLeft * surfacesItemWidth;

  setPosition();
  checkBtns();
});

const setPosition = () => {
  surfacesSliderTrack.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  surfacesBtnPrev.disabled = position === 0;
  surfacesBtnNext.disabled = position <= -(surfacesItemsCount - slidesToShow) * surfacesItemWidth;
};

checkBtns();
