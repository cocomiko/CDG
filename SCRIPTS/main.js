//recent proj carousell
    $('.recentproj').slick({
                  dots: true,
                  infinite: false,
                  speed: 300,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  autoplay: false,
                  autoplaySpeed: 2000,
                  infinite: true,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true
                      }
                    },
                    {
                      breakpoint: 425,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
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
                  speed: 300,
                  autoplay: true,
                  autoplaySpeed: 2000,
                  slidesToShow: 1,
                  centerMode: true,
                  background: true,
                  variableWidth: true

              });  
          