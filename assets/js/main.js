$(document).ready(function(){
    
    $('.banner-slider').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        nav:true,
        // navText:[<i class="fas fa-chevron-right"></i>,<i class="fas fa-chevron-left"></i>],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.reviews').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        nav:false,
        dots: false,
        // navText:[<i class="fas fa-chevron-right"></i>,<i class="fas fa-chevron-left"></i>],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:1
            }
        }
    });
    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 1000,
      wrap: false
    });
    new WOW().init();
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
      $(document).ready(function() {
        $('.popup').magnificPopup({type:'iframe'});
      });
  });
  