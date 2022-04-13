$(function(){
    var swiper1 = new Swiper('.sli',{
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        pagination: {
            el: '.swiper-pagination',
          },
          slidesPerView: 3,
          spaceBetween: 80,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          loop: true,
    });

    var swiper2 = new Swiper('.small_pic',{
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        pagination: {
            el: '.swiper-pagination',
          },
          slidesPerView: 2,
          spaceBetween: 15,

    });

    var swiper3 = new Swiper('.small_pic2',{
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        pagination: {
            el: '.swiper-pagination',
          },
          slidesPerView: 2.5,
          spaceBetween: 20,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          loop: true,

    });

});