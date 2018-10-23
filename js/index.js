

$(document).ready(function () {

    // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 800);

    $(window).scroll(function () {
        var sc = $(this).scrollTop();

        if (sc > 500){
            $('.arr i').fadeIn();
        }
        else {$('.arr i').fadeOut();}
    });

    // Scroll to Top
    $('.arr').click(function(){
        $('body,html').animate({
            scrollTop : 0
        },900);
    });

    // Smooth scroll
    $('li a ').click( function () {

        $('html,body').animate({
            scrollTop : $ ($(this).attr('href')).offset().top
        });
    });

});
