let subMenu = document.querySelector('.second-nav__submenu');
let menuItem = document.querySelector('.second-nav-list__item');
menuItem.onclick = function() {
  subMenu.classList.toggle('dont-show')
}

var mySwiper = new Swiper('.swiper-container', {
  autoHeight: false,
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 1,
  slidesPerColumn: 2,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})


const element = document.querySelector('.gallery-filter__list');
const choices = new Choices(element, {
  searchEnable: false,
  searchChoices: false,
  shouldSort: false,
  itemSelectText: '',

});
