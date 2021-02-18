const menuItem = document.querySelectorAll('.second-nav__item');
const item = document.querySelectorAll('.second-nav__submenu');
menuItem.forEach(el => {
  el.addEventListener('click', (e) => {
    e.currentTarget.closest('li').querySelector('.second-nav__submenu').classList.add('toggle-visibility');
  });
});

document.addEventListener('click', (e) =>  {
  if (!e.target.classList.contains('second-nav-list__item') && !e.target.classList.contains('second-nav__submenu') && !e.target.classList.contains('second-nav__item')) {
        item.forEach(el => {el.classList.remove('toggle-visibility')});
  }
});


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
