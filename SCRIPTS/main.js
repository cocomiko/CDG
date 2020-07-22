//recent proj carousell
    $('.recentproj').slick({
                  dots: true,
                  infinite: false,
                  speed: 300,
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  autoplay: true,
                  autoplaySpeed: 2000,
                  infinite: true,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
              });
//reflection carousell
    $('.reflection').slick({
                  dots: false,
                  infinite: false,
                  speed: 300,
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  autoplay: true,
                  autoplaySpeed: 2000,
                  infinite: true,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 1,
                        dots: true,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        dots: true,
                        slidesToScroll: 1
                      }
                    }
                  ]
              });

// workplace gallery carousel script
              $('.workplacegallery').slick({
                  dots: true,
                  infinite: true,
                  speed: 800,
                  autoplay: true,
                  autoplaySpeed: 2500,
              });  
 
            