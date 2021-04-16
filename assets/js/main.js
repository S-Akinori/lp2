const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

// FAQの矢印アイコンをクリックしたときに変更する
$(function () {
    $(".section-question__content .question").on('click', function() {
        $collapse = $(this).parent().children('.collapse');
        if($collapse.hasClass('show')) {
            $(this).children('.down-up-icon').html('<i class="fas fa-caret-down fa-lg"></i>')
        } else {
            $(this).children('.down-up-icon').html('<i class="fas fa-caret-up fa-lg"></i>')
        }
    })
})