$(document).ready(function(){
    $('.slide').slick({
        slidesToShow: 3.5,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
    });

    $('.card-box').hover(function () {
            // over
        }, function () {
            // out

        }
    );
    $('.card-box').click(percent);
    function percent(){
        $('.card-percent').spincrement({
            duration: 3000,
            // fade: false,
        });
        const layer = document.querySelectorAll('.card-layer');
        layer.forEach(layer => {
            const percent = layer.querySelector('.card-percent').textContent;
            const circle = layer.querySelector('.card-svg__circle');
            const radius = 60;
            const circumference = 2 * Math.PI * radius;
            console.log(circumference);
            const offset = circumference - percent / 100 * circumference;
            circle.style.strokeDasharray = `${circumference} ${circumference}`;
            circle.style.strokeDashoffset = circumference;
            circle.style.strokeDashoffset = offset;
        });
    };
  });