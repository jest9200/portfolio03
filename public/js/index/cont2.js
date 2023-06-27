const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 1000,
    grabCursor:false,
    effect:'fade',
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next'
    }
});
