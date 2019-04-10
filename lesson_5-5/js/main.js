$(document).ready(function () {
  $('.popup-btn').on('click', function (event) {
    event.preventDefault();
    $('.popup').fadeIn();
  });
  $('.popup-close').on('click', function (event) {
    event.preventDefault();
    $('.popup').fadeOut();
  });
  // Слайдер с отзывами
  $('.feedback-slider').slick({
    prevArrow: '<button type="button" class="feedback-slider-btn feedback-prev-btn"><img src="img/feedback/left.svg"/></button>',
    nextArrow: '<button type="button" class="feedback-slider-btn feedback-next-btn"><img src="img/feedback/right.svg"/></button>'

  });
  // Слайдер товаров
  $('.features-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          prevArrow: '<button class="prev arrow"></button>',
          nextArrow: '<button class="next arrow"></button>',
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          prevArrow: '<button class="prev arrow"></button>',
          nextArrow: '<button class="next arrow"></button>',
          slidesToScroll: 1
        }
      }
    ]
  });
});