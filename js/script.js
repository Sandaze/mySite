$(document).ready(function(){
    $('.slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
    });
    $('.card-box').hover(function () {
            // over
            $('.card-percent').spincrement({
                duration: 3000,
                // fade: false,
            });
        }, function () {
            // out
            $('.card-percent').spincrement({
                fade: false,
                // fade: false,
            });
        }
    );
  });