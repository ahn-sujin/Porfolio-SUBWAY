$(function(){

    var mySwiper = new Swiper('#news .swiper-container', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        
        navigation: {
            nextEl: '#news .swiper-button-next',
            prevEl: '#news .swiper-button-prev',
        },
    });



});