$(document).ready(function () {
    $('#best-team-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        mobileFirst: true,
        speed: 1100,
        appendDots: $('.section.best-team')

    });


    $('#clients-says-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        mobileFirst: true,
        speed: 1100
        
    }
    );
});

