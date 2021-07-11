const swiper1 = new Swiper(".slider1", {
  speed: 400,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiper2 = new Swiper(".slider2", {
  slidesPerView: 4,
  spaceBetween: 30,
  speed: 2000,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

setInterval(() => swiper2.slideNext(), 4000);
