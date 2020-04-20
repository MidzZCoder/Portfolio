$(document).ready(function () {

  // Initialize animation on scroll API
  new WOW().init();

  // Initialize background animation (Vanta.js API)
  VANTA.BIRDS({
    el: "#netBackground",
    mouseControls: true,
    touchControls: true,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xff9c6a,
    backgroundColor: 0x131722
  })
});
