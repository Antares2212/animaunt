$(function () {
    $('.offer__carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        startPosition:1,
        smartSpeed:1500,
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

    $(".all-anime__carousel li").removeClass("col-lg-3");

    $('.all-anime__carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots: false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        startPosition:1,
        smartSpeed:1500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
});