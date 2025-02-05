$(function () {
    //-----------------------------------------------------
    // スライダー
    //-----------------------------------------------------
    function initSwiper() {
        let swiper;

        function initializeSwiper() {
            swiper = new Swiper('.swiper', {
                spaceBetween: 15,
                loop: true,
                slidesPerView: 1.245,
                centeredSlides: true,
                autoHeight: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }

        function destroySwiper() {
            if (swiper) {
                swiper.destroy();
                swiper = undefined;
            }
        }

        function handleResize() {
            var w = $(window).width();
            if (w < 768) {
                if (!swiper) {
                    initializeSwiper();
                }
            } else {
                destroySwiper();
            }
        }

        handleResize();
        $(window).on('resize', handleResize);
    }
    initSwiper();
});


