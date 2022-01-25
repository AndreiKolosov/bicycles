'use strict';

const page = document.querySelector('.page'); // Контейнер страницы
const form = page.querySelector('.form'); // Форма
const menuBtn = document.querySelector('.header__menu-icon'); // кнопка меню
const menuBtnLines = document.querySelectorAll('.header__icon-line'); // полоски кнопки
const menu = document.querySelector('.header__menu'); // меню
const footerForm = document.querySelector('.form_place_footer'); // форма в футере
const emailInput = footerForm.querySelector('.form__item_type_email'); // поле ввода email в форме футера
const footerFormBtn = footerForm.querySelector('.form__button'); // Кнопка в форме
const themeSwitcherBtn = document.querySelectorAll('.theme-switcher__button'); // Кнопки переключатели темы

const highwayBikes = [
  {
    name: 'Cervelo Caledonia-5',
    link: 'https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN',
    src: './images/bikes/highway-bike-1.jpg',
  },
  {
    name: 'Cannondale Systemsix Himod',
    link: 'https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J',
    src: './images/bikes/highway-bike-2.jpg',
  },
  {
    name: 'Trek Domane SL-7',
    link: 'https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF',
    src: './images/bikes/highway-bike-3.jpg',
  },
];

const gravelBikes = [
  {
    name: 'Cervelo Aspero GRX 810',
    link: ' https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE',
    src: './images/bikes/gravel-bike-1.jpg',
  },
  {
    name: 'Specialized S-Works Diverge',
    link: 'https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9',
    src: './images/bikes/gravel-bike-2.jpg',
  },
  {
    name: 'Cannondale Topstone Lefty 3 ',
    link: 'https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8',
    src: './images/bikes/gravel-bike-3.jpg',
  },
];

const ttBikes = [
  {
    name: 'Specialized S-Works Shiv',
    link: 'https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9',
    src: './images/bikes/tt-bike-1.jpg',
  },
  {
    name: 'BMC Timemachine 01 ONE',
    link: 'https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835',
    src: './images/bikes/tt-bike-2.jpg',
  },
  {
    name: 'Cervelo P-Series',
    link: 'https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q',
    src: './images/bikes/tt-bike-3.jpg',
  },
];

// --------------------------------------------------//

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

themeSwitcherBtn.forEach((element) => {
  element.addEventListener('click', () => {
    page.classList.toggle('page_theme_dark');
    const menu = page.querySelector('.header__menu').classList.toggle('header__menu_theme_dark');
    const footer = page.querySelector('.footer').classList.toggle('footer_theme_dark');
    const formInput = form.querySelector('.form__item').classList.toggle('form__item_theme_dark');
    const themeSwitcher = page.querySelectorAll('.theme-switcher').forEach((element) => {
      element.classList.toggle('theme-switcher_theme_dark');
    });
    const themeSwitcherIcons = page
      .querySelectorAll('.theme-switcher__icon-path')
      .forEach((element) => {
        element.classList.toggle('theme-switcher__icon-path_theme_dark');
      });
    const links = page.querySelectorAll('.link').forEach((element) => {
      element.classList.toggle('link_theme_dark');
    });
    const text = page.querySelectorAll('.text').forEach((element) => {
      element.classList.toggle('text_theme_dark');
    });
    const menuIconLines = page.querySelectorAll('.header__icon-line').forEach((element) => {
      element.classList.toggle('header__icon-line_theme_dark');
    });
    element.classList.toggle('theme-switcher__button_active');
  });
});
// --------------------------------------------------//

const bikesButtons = page.querySelectorAll('.bikes__button');
const bikesActiveBtn = page.querySelector('.bikes__button_active');
const bikesButtonsList = page.querySelector('.bikes__buttons');
const bikesCardsContainer = page.querySelector('.bikes__cards-list');
const cardTemplate = page.querySelector('.bikes-card-template').content;
const bikesMenu = page.querySelector('.bikes__menu');

bikesButtons.forEach((element) => {
  element.addEventListener('click', () => {
    bikesMenu.textContent = element.textContent;
    let arr;
    if (bikesMenu.textContent === 'Шоссе') {
      arr = highwayBikes;
    } else if (bikesMenu.textContent === 'Грэвел') {
      arr = gravelBikes;
    } else {
      arr = ttBikes;
    }
    changeCards(arr);
    openBikesMenu();
  });
});

function openBikesMenu() {
  bikesButtonsList.classList.toggle('bikes__buttons_active');
}

function createBikesCard(name, link, src) {
  const bikeCard = cardTemplate.querySelector('.bikes__item').cloneNode(true);
  const itemLink = bikeCard.querySelector('.bikes__item-link');
  const itemImg = bikeCard.querySelector('.bikes__bike-img');
  const itemName = bikeCard.querySelector('.bikes__bike-name');

  itemLink.href = link;
  itemImg.src = src;
  itemName.textContent = name;

  return bikeCard;
}

function clearcardsList() {
  let listItems = bikesCardsContainer.querySelectorAll('.bikes__item');
  listItems.forEach((element) => {
    element.remove();
  });
}

function changeCards(arr) {
  clearcardsList();

  let newCards = arr.map(function (card) {
    return createBikesCard(card.name, card.link, card.src);
  });
  bikesCardsContainer.append(...newCards);
}

let BikesCards = highwayBikes.map(function (card) {
  return createBikesCard(card.name, card.link, card.src);
});

bikesMenu.addEventListener('click', openBikesMenu);
bikesCardsContainer.append(...BikesCards);
bikesMenu.textContent = bikesButtons[0].textContent;
