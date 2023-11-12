import $ from 'jquery';
import 'slick-carousel';

export function initSlider() {
  $('.carousel').slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }); 
}

$(document).ready(initSlider());
