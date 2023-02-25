$(document).ready(function() {
    $('.wq-carousel-banner-item').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
      });

    $('.wq-galeria-carousel').slick({
      dots: false,
      infinite: true,
      speed: 500,
      arrows: true,
      fade: true,
      cssEase: 'linear'
    });
});
