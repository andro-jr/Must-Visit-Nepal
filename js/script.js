
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        smartSpeed: 1500,
        autoplayHoverPause: true
    });
});



window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 160)
})

// for self typing 

let typed = new Typed(".auto_type", {
    strings: ["Travel", "Trek", "Explore", "Hike", "Eat", ""],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

// menu on mobile

const menuBtn = document.querySelector(".menu_icon span");
const cancelBtn = document.querySelector(".cancel_icon");
const items = document.querySelector(".nav_items");
menuBtn.onclick = () => {
    items.classList.add("active");
    menuBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}
cancelBtn.onclick = () => {
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
}

// testmonial slider

//   all ------------------
function initParadoxWay() {
    "use strict";

    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },

            }
        });
    }

}

//   Init All ------------------
$(document).ready(function () {
    initParadoxWay();
});

