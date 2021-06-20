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

var mySwiper1 = new Swiper('.swiper-container1', {  
  breakpoints: {  
    577: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
    },  
    768: {
      spaceBetween: 35,
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 1,
    },  
    1024: {
      spaceBetween: 35,
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 1,
    },
    1200: {
      spaceBetween: 35,
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 1,
    },
    1631: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerGroup: 1,
    },
  },
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

document.querySelectorAll('.flag').forEach(function (tabsFlag) {
  tabsFlag.addEventListener('click', function (event) {
    document.querySelectorAll('.catalog-names__item').forEach(function(showDescr) {
      showDescr.classList.remove('catalog-names__item--focused')
    });
    const path = event.currentTarget.dataset.path;
    document.querySelectorAll('.flag').forEach(function (tabsFlag) {
      tabsFlag.classList.remove('flag--focused')
    });
    event.currentTarget.classList.add('flag--focused')
    document.querySelectorAll('.catalog-main').forEach(function (tabContent) {
      tabContent.classList.remove('tab-content-active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    document.querySelectorAll('.catalog-main__descr').forEach(function (hideDescr) {
      hideDescr.classList.remove('catalog-main__descr--shown')
    })
    document.querySelector(`[data-target="${path}"]`).firstElementChild.classList.add('catalog-main__descr--shown')
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
  $(".catalog-main__accordion").accordion({
  });
});

document.querySelector('.flag__fr').addEventListener('click', function() {
  $('#accordion-fr').accordion('refresh')
})

document.querySelector('.flag__de').addEventListener('click', function() {
  $('#accordion-de').accordion('refresh')
})

document.querySelector('.flag__ru').addEventListener('click', function() {
  $('#accordion-ru').accordion('refresh')
})

document.querySelector('.flag__be').addEventListener('click', function() {
  $('#accordion-be').accordion('refresh')
})

document.querySelector('.events__btn').addEventListener('click', function(event) {
  document.querySelectorAll('.event-hidden').forEach(function(hideEvent) {
    hideEvent.classList.remove('event-hidden')
  })
  document.querySelector('.events__btn').style.display = 'none';
})

// var mySwiper2 = new Swiper('.swiper-container2', {
  
//   breakpoints: {
//     576: {
//       slidesPerView: 2,
//       spaceBetween: 29,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 29,
//     },
//     1024: {
//       slidesPerView: 2,
//       spaceBetween: 40,
//     },
//     1200: {
//       slidesPerView: 2,
//       spaceBetween: 35,
//     },
//     1630: {
//       slidesPerView: 3,
//       spaceBetween: 50,
//       slidesPerGroup: 3,
//     },    
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'fraction',
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// })

var mySwiper3 = new Swiper('.swiper-container3', {
  slidesPerGroup: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    1630: {
      slidesPerView: 3,
      spaceBetween: 50,
    },    
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.76780602902965,37.624131849997866],
    zoom: 14
  });
  myPlacemark1 = new ymaps.Placemark([55.75846306898368,37.601079499999905], {

    hintContent: 'Метка'
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/yandex-mark.png',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
  });
  myMap.geoObjects
    .add(myPlacemark1);
  myMap.behaviors.disable('scrollZoom');
}

if (screen.width < 1024) {
  document.querySelector('.event:nth-child(3)').classList.add('event-hidden');
}

const slider = document.querySelector('.slider-container');
let mobSlider;
function mobileSlider() {
  if (window.innerWidth <= 576 && slider.dataset.mobile == 'false') {
    document.querySelectorAll('.event').forEach(el => {el.classList.remove('event-hidden')});
    mobSlider = new Swiper(slider, {
      slidesPerView: 1,
      slideClass: 'event',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });
    slider.dataset.mobile = 'true';
  }
  if (window.innerWidth > 576) {
    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-container-initialized')) {
      mobSlider.destroy();
    }
  }
}

const pubSlider = document.querySelector('.swiper-container2');
let publicSlider;

function pubSliderDestroy() {
  if (window.innerWidth >= 576 && pubSlider.dataset.mobile == 'false') {
    publicSlider = new Swiper('.swiper-container2', {
      breakpoints: {
				576: {
          width: null,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 29,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 35,
        },
        1630: {
          slidesPerView: 3,
          spaceBetween: 50,
          slidesPerGroup: 3,
        },
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
  pubSlider.dataset.mobile = 'false';
  if (window.innerWidth < 576) {
    pubSlider.dataset.mobile = 'true';
    if (pubSlider.classList.contains('swiper-container-initialized')) {
      publicSlider.destroy();
    }
		document.querySelector('.swiper-container2').classList.add('swiper-no-swiping');
		document.querySelectorAll('.public-slide').forEach(el => {el.style.width = "48%"});
  }
}

window.addEventListener('resize', () => {
  mobileSlider();
  pubSliderDestroy();
});

mobileSlider();
pubSliderDestroy();

tippy('#projects__tooltop1', {
  content: 'Пример современных тенденций - современная методология разработки',
  theme: 'project',
});

tippy('#projects__tooltop2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  theme: 'project',
});

tippy('#projects__tooltop3', {
  content: 'В стремлении повысить качество',
  theme: 'project',
});