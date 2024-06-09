const swiper = new Swiper('.swiper', {
    on: {
        init: function () {
            console.log('swiper initialized')
        },
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    keyboard: {
        enabled: true,
    },
    mousewheel: {
        enabled: true,
    },

    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 3,
        },
    },
})
