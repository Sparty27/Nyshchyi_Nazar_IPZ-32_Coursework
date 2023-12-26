let swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 30,

    breakpoints: {
        1024: {
            spaceBetween: 30,
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        
        1538: {
            spaceBetween: 30,
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    },

    pagination: {
        el: '.swiper-pagination',
    },
    keyboard: true,
    });