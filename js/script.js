const mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  speed: 1000,
  // autoplay: {
  //   delay: 2500,
  // },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

if (window.matchMedia('(max-width: 480px)').matches){
  $('head').append(
    '<style>.swiper-button-prev, .swiper-button-next{display:none;}'
  );
  const mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1800,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}
