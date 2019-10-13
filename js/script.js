$(document).ready(function () {
    //Anchor
    {
        $('a[href^="#"]').on("click", function (e) {
            let anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr("href")).offset().top
            }, 500);
            e.preventDefault();
        });
    }
    //Slider
    {
        $('.slide').slick({
            slidesToShow: 3.5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: true,
            nextArrow: ' <div class="slide-arrow slide-arrow__right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
            prevArrow: '<div class="slide-arrow slide-arrow__left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
            responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    mobileFirst: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1.5,
                    centerMode: true,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
            ]
        });
    }
    // Cards with percent and button backToTop
    {
        let show = true;
        $(window).on("scroll load resize", function () {

            let w_top = $(window).scrollTop();
            let e_top = $('.skills').offset().top;

            let w_height = $(window).height();
            let d_height = $(document).height();

            let e_height = $('.skills').outerHeight();

            if (w_top >= 50) {
                $('#backUp').addClass('active');
            } else {
                $('#backUp').removeClass('active');
            }

            if (!show) return false;

            if (w_top >= 500) {
                percent();
                show = false;
            }
        });

        function percent() {
            $('.card-percent').spincrement({
                duration: 3000,
            });
            const layer = document.querySelectorAll('.card-layer');
            
            layer.forEach(layer => {
                const percent = layer.querySelector('.card-percent').textContent;
                const circle = layer.querySelector('.card-svg__circle');
                
                const radius = 60;
                const circumference = 2 * Math.PI * radius;
                const offset = circumference - percent / 100 * circumference;

                circle.style.strokeDasharray = `${circumference} ${circumference}`;
                circle.style.strokeDashoffset = circumference;
                circle.style.strokeDashoffset = offset;
            });
        };
    }
    // About Me
    {
        function aboutMe1() {
            $('#layerLeft').toggleClass('active');
            $('#layerRight').toggleClass('active');
            $('#aboutInfo').toggleClass('active');
        }
        $('#layerRight').on('transitionend webkitTransitionEnd oTransitionEnd', function (e) {
            $('.about-me-info__img').toggleClass('active');
            $('.about-me-info__desc').toggleClass('active');
        });
        $('.aboutMe').click(function (e) { 
            e.preventDefault();
            $('body').toggleClass('modal-open')
            aboutMe1();
        });
    }
});