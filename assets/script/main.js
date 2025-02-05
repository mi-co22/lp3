$(function () {
    //-----------------------------------------------------
    // スライダー
    //-----------------------------------------------------
    let swiper;
    const breakpoint = 768;

    function initializeSwiper() {
        swiper = new Swiper('.swiper', {
            spaceBetween: 15,
            loop: true,
            slidesPerView: 1.245,
            centeredSlides: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }

    function destroySwiper() {
        if (swiper) {
            swiper.destroy(true, true);
            swiper = null;
        }
    }

    function handleResize() {
        let w = window.innerWidth;
        if (w < breakpoint) {
            if (!swiper) {
                initializeSwiper();
            }
        } else {
            destroySwiper();
        }
    }

    // 初回実行
    handleResize();

    // リサイズ時に再評価
    window.addEventListener('resize', handleResize);
});


