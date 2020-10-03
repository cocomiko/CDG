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


// modal image gallery for single project page

            function openModal() {
              document.getElementById("myModal").style.display = "block";
            }
            //
            //// Close the Modal
            function closeModal() {
              document.getElementById("myModal").style.display = "none";
            }

            var slideIndex = 1;
            showSlides(slideIndex);

            // Next/previous controls
            function plusSlides(n) {
              showSlides(slideIndex += n);
            }

            // Thumbnail image controls
            function currentSlide(n) {
              showSlides(slideIndex = n);
            }

            function showSlides(n) {
              var i;
              var slides = document.getElementsByClassName("mySlides");
              var dots = document.getElementsByClassName("demo");
              var captionText = document.getElementById("caption");
              if (n > slides.length) {slideIndex = 1}
              if (n < 1) {slideIndex = slides.length}
              for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
              }
              for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex-1].style.display = "block";
              dots[slideIndex-1].className += " active";
              captionText.innerHTML = dots[slideIndex-1].alt;
            }
          