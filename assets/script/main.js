$(function () {
    //-----------------------------------------------------
    // スライダー
    //-----------------------------------------------------
    let swiper;
    const breakpoint = 768;
    swiper = new Swiper('.swiper', {
        spaceBetween: 15,
        loop: true,
        slidesPerView: 1.245,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 14,
                watchOverflow: true,
                allowTouchMove: false,
                centeredSlides: false
            }
        }
    });
});


