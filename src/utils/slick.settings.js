export const slickSettings = {
   dots: false,
   infinite: false,
   speed: 300,
   slidesToShow: 4,
   slidesToScroll: 1,
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 4,
         },
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 3,
         },
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 2,
         },
      },
      {
         breakpoint: 576,
         settings: {
            slidesToShow: 1,
         },
      },
   ],
};
