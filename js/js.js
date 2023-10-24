$(document).ready(function () {
   $('.about__slider ul').slick({
      autoplay: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 500,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 475,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               centerMode: true,
            }
         },
      ]
   });
});
$(document).ready(function () {
   $('.secret__sliders').slick({
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      responsive: [
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 475,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               centerMode: true,
            }
         },
      ]
   });
});
$(window).on('resize', function (e) {
   // Переменная, по которой узнаем запущен слайдер или нет.
   var initLib = $('.secret__testimonials-lists').data('init-slider');

   if (window.innerWidth < 600) {
      // Если слайдер не запущен
      if (initLib != 1) {
         // Запускаем слайдер и записываем в data init-slider = 1
         $('.secret__testimonials-lists').slick({
            arrows: false,
            autoplay: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
         }).data({ 'init-slider': 1 });
      }
   }
   // Если десктоп
   else {
      // Если слайдер запущен
      if (initLib == 1) {
         // Разрушаем слайдер и записываем в data init-slider = 0
         $('.secret__testimonials-lists').slick('unslick').data({ 'init-slider': 0 });
      }
   }
}).trigger('resize')