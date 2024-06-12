const swiper = new Swiper('.swiper', {
    on: {
        init: function () {
            console.log('swiper initialized')
        },
    },
    // effect: 'coverflow',

    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    // loop: true,
    // freeMode: true,
    spaceBetween: '15',
    // coverflowEffect: {
    //     rotate: 50,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: true,
    // },
    keyboard: {
        enabled: true,
    },
    mousewheel: {
        enabled: true,
    },

    pagination: {
        el: '.swiper-pagination',
    },
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     767: {
    //         slidesPerView: 3,
    //     },
    // },
})

// Tabs
const tabsBtn = document.querySelectorAll('[data-tab]')
const sliderItems = document.querySelectorAll('[data-tab-value]')

for (const btn of tabsBtn) {
    btn.addEventListener('click', function () {
        for (const btn of tabsBtn) {
            btn.classList.remove('tabs__btn--active')
        }
        this.classList.add('tabs__btn--active')

        for (const item of sliderItems) {
            if (this.dataset.tab === 'all') {
                item.classList.remove('none')
            } else {
                if (item.dataset.tabValue === this.dataset.tab) {
                    item.classList.remove('none')
                } else {
                    item.classList.add('none')
                }
            }
        }
        swiper.update()
    })
}
