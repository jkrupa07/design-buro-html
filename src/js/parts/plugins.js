import "slick-carousel";

export class Plugins {

  init() {
    this.HeroSlider();
    this.OpenProjectSlider();
  }

  HeroSlider() {
    $(".hero-slider").slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 525,
          settings: {
            slidesToShow: 1,
            infinite: false,
          },
        },
      ],
    });
  }
  OpenProjectSlider() {
    $(document).ready(function () {
      $('.project-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        prevArrow: '.project-slider-section .prev-arrow',
        nextArrow: '.project-slider-section .next-arrow',
        centerMode: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    });

  }

}
