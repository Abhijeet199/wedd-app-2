var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var element = document.querySelectorAll('.help');
if (isMobile) {
    element[0].style.display = 'flex';
    element[1].style.display = 'flex';
} else {
    element[0].style.display = 'none';
    element[1].style.display = 'none';
}