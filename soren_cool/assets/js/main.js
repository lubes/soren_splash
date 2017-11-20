function initSlider() {
    $('.hero-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        // cssEase: 'cubic-bezier(1, 1, 0, 0)',
        // cssEase: 'cubic-bezier(0, 0, 0.5, 0.5)',
        autoplay: true,
        autoplaySpeed: 4000, 
        fade: true,
        appendArrows: $('.navs-wrap'),
        prevArrow: "<div class='prev slider-arrow'><i class='fa fa-angle-left'></i></div>",
        nextArrow: "<div class='next slider-arrow'><i class='fa fa-angle-right'></i></div>", 
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    touchMove: true
                }
            }
        ]
    });
    $('.hero-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        event.preventDefault();
        $('.slider-mask').fadeIn('fast');
        $('.slider-mask').removeClass('reset');
        $('.slider-mask').removeClass('grow');
    });
    $('.hero-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){  
        setTimeout(function() {
            $('.slider-mask').addClass('grow');
        }, 400); 
        setTimeout(function() {
            $('.slider-mask').hide();
            $('.slider-mask').addClass('reset');
        }, 800); 
    });
}

$(window).load(function() {
    
    // Grow Loader
    setTimeout(function() {
        $('#loader').addClass('grow'); 
    }, 1800);
    
    setTimeout(function() {
        $('#loader').addClass('done'); 
        initSlider();
        
        setTimeout(function() {
            $('.slider-mask').addClass('grow');
        }, 400); 
        setTimeout(function() {
            $('.slider-mask').hide();
            $('.slider-mask').addClass('reset');
        }, 800);        
        
    }, 3000);

    setTimeout(function() {
        $('#loader').addClass('remove'); 
        $('.nav-content').addClass('enter'); 
    }, 3200); 
    
});

$(document).ready(function() {
    
    $('#side_nav').click(function(){
        $('#menu_toggle').toggleClass('open');
        $("#side_nav").toggleClass('open');
    });
    $('#side_nav').mouseleave(function() {
        $("#side_nav").removeClass('open');
        $("#menu_toggle").removeClass('open');
    });
    
    $('#side_nav .nav_wrap ul li a').click(function() {
        $("#side_nav").removeClass('open');
        $("#menu_toggle").removeClass('open');
        console.log('HI');
    });

    // Artist Section
    $('.artist_hover').mouseenter(function() {
        var artist = $(this).data('artist');
        $('.'+artist).addClass('current');
        $('.artist_hover').addClass('inactive');
        $(this).removeClass('inactive');
    });
    $('.artist_hover').mouseleave(function() {
        $('.artist_img').removeClass('current');
        $('.artist_hover').removeClass('inactive');
    });

    // Init Fullpage
    $('#fullpage').fullpage({
            hybrid: true,
            fitToSection: false,
            normalScrollElementTouchThreshold: 3,
            responsiveWidth: '992', 
    });
    
	$('a[rel="relativeanchor"]').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});      
});