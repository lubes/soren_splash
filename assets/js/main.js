function initSlider() {
    $('.intro-slider-2').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1, 
        slidesToScroll: 1,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        pauseOnHover: false,
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
}
initSlider(); 
$(window).load(function() {
    setTimeout(function() {
        $('#loader').addClass('loaded'); 
    }, 1500); 
    setTimeout(function() {
        $('#loader').addClass('leave');  
    }, 1700); 
    setTimeout(function() {
        $('#loader').addClass('enter');  
        $('.intro-slider-2').addClass('enter');
        $('.navs-wrap').addClass('enter');
    }, 2000);
    setTimeout(function() {
         $('#loader').addClass('done'); 
        $('.nav-content').addClass('enter'); 
    }, 2500); 
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