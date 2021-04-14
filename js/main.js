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


document.querySelectorAll('.flag').forEach(function(tabsFlag) {
  tabsFlag.addEventListener('click', function(event) {
    const path = event.currentTarget.dataset.path;
    document.querySelectorAll('.flag').forEach(function(tabsFlag) {
      tabsFlag.classList.remove('flag--focused')
    });
    event.currentTarget.classList.add('flag--focused')
    document.querySelectorAll('.catalog-main').forEach(function(tabContent) {
      tabContent.classList.remove('tab-content-active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')

  })
})


document.querySelectorAll('.catalog-names__item').forEach(function(showDescr) {
  showDescr.addEventListener('click', function(event) {
    const path = event.currentTarget.dataset.path;
    document.querySelectorAll('.catalog-names__item').forEach(function(showDescr) {
      showDescr.classList.remove('catalog-names__item--focused')
    });
    event.currentTarget.classList.add('catalog-names__item--focused')
    document.querySelectorAll('.catalog-main__descr').forEach(function(tabContent) {
      tabContent.classList.remove('catalog-main__descr--shown')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog-main__descr--shown')
  })
})

$(function () {
  $("#accordion-it").accordion({
  });
});

$(function () {
  $("#accordion-fr").accordion({
    active: 1
  });
});

$(function () {
  $("#accordion-de").accordion({
  });
});

$(function () {
  $("#accordion-ru").accordion({
  });
});

$(function () {
  $("#accordion-be").accordion({
  });
});

document.querySelector('.events__btn').addEventListener('click', function(event) {
  document.querySelectorAll('.event-hidden').forEach(function(hideEvent) {
    hideEvent.classList.remove('event-hidden')
  })
  document.querySelector('.events__btn').style.display = 'none';
})

var mySwiper2 = new Swiper('.swiper-container2', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

