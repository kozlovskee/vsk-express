const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  observer: true,
  observeParents: true,
  loop: true,
  // If we need pagination
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})