$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    smartSpeed: 1500,
    autoplayHoverPause: true,
  });
});

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});



// menu on mobile

const menuBtn = document.querySelector(".ram span");
const cancelBtn = document.querySelector(".cancel_icon");
const items = document.querySelector(".nav_items");
menuBtn.onclick = () => {
  alert("hello");
}

menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
};

