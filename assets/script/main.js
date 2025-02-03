$(function () {
    //-----------------------------------------------------
    // スライダー
    //-----------------------------------------------------
    // スライダー機能
    function initSwiper() {
        var swiper;

        function initializeSwiper() {
            swiper = new Swiper('.swiper', {
                spaceBetween: 10,
                loop: true,
                slidesPerView: 1.5,
                centeredSlides: true,
                // loopAdditionalSlides: 2,
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


