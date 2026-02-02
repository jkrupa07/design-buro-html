import "slick-carousel";

export class Plugins {

  init() {
    this.HeroSlider();
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

}
