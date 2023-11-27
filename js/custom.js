AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});

$(window).scroll(function() {
    var sticky = $('.header'),
        scroll = $(window).scrollTop();
    if (scroll >= 150) sticky.addClass('menu-fixed');
    else sticky.removeClass('menu-fixed');
});


$(window).scroll(function() {
    var sticky = $('.back-to-product'),
        scroll = $(window).scrollTop();
    if (scroll >= 150) sticky.addClass('back-to-product-fix');
    else sticky.removeClass('back-to-product-fix');
});

$(document).ready(function() {
    $(".nav-open").click(function() {
        $(".menu_outer").animate({
            width: "toggle"
        });
    });
});



$('.nav-open').click(function() {
    if ($(this).hasClass('nav-close')) {
        $(this).removeClass('nav-close');
    } else {
        $('.nav-open').removeClass('nav-close');
        $(this).addClass('nav-close');
    }
});


$('#banner').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1,
        },
        640: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    }
});



$('#product_owl').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        640: {
            items: 1,
            nav: false,
        },
        768: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    }
});



$('#stories').owlCarousel({
    loop: false,
    margin: 30,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 1500,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
            loop: true,
        },
        480: {
            items: 2,
            loop: true,
        },
        640: {
            items: 3,
            loop: true,
        },
        768: {
            items: 3,
            loop: true,
        },
        992: {
            items: 3,
            loop: true,
        },
        1200: {
            items: 4,
        }
    }
});



$('#whychoose').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: false,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        480: {
            items: 2,
        },
        640: {
            items: 2,
        },
        750: {
            items: 3,
        },
        768: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
});



$('#projects').owlCarousel({
    loop: false,
    margin: 15,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 4300,
    autoplayHoverPause: true,
    smartSpeed: 1500,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
            loop: true,
        },
        480: {
            items: 1,
            loop: true,
        },
        640: {
            items: 2,
            loop: true,
        },
        768: {
            items: 3,
            loop: true,
        },
        992: {
            items: 3,
            loop: true,
        },
        1200: {
            items: 4,
        }
    }
});



$('.product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
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

$('.product-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    $('.product-des-right').removeClass('active').hide();
    $('.product-des-right').eq(currentSlide).addClass('active').show();
});


$('#fact').owlCarousel({
    loop: false,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 1500,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
            loop: true,
        },
        580: {
            items: 2,
            loop: true,
        },
        640: {
            items: 2,
            loop: true,
        },
        768: {
            items: 3,
            loop: true,
        },
        1023: {
            items: 3,
            loop: true,
        },
        1200: {
            items: 4,
        }
    }
});


$('#about-product').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        640: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    }
});


$('#categories').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    smartSpeed: 1500,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1,
        },
        640: {
            items: 2,
        },
        991: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
});


$('#easystore').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    smartSpeed: 1500,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    nav: false,
    dots: true,
    autoHeight: true,
    responsive: {
        0: {
            items: 1,
        },
        640: {
            items: 1,
        },
        991: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    }
});




$('.fancybox').fancybox();


$(document).ready(function() {
    $('#horizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
});


$('.product-module-nav a').on('click', function(e) {
    var href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top - $('.header').height()
    }, '300');
    e.preventDefault();

});



$(document).ready(function() {
    var scrollTop = $(".scrollTop");
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();

        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");

        } else {
            $(scrollTop).css("opacity", "0");
        }

    });

    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;

    });

});

const glightbox = GLightbox({
    selector: '.glightbox'
});