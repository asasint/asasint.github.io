$(document).ready(function () {
    "use strict";
    try {

        /* ==========================================================================
         #PieChart For Skills Page
         ========================================================================== */

        $('.chart').easyPieChart({
            easing: 'easeOutBounce',
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });


        /* ==========================================================================
         #Carousel Popup For Portfolio Page
         ========================================================================== */
        $(".owl-carousel").owlCarousel({
            navigation: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            autoPlay: false
        });

        /* ==========================================================================
         #Text Rotator 
         ========================================================================== */
        $('#rotate1').rotaterator({fadeSpeed: 800, pauseSpeed: 800});
        $('#rotate2').rotaterator({fadeSpeed: 600, pauseSpeed: 600});
        $('#rotate3').rotaterator({fadeSpeed: 800, pauseSpeed: 800});
        $('#rotate4').rotaterator({fadeSpeed: 500, pauseSpeed: 500});

        /* ==========================================================================
         #Orientation change event
         ========================================================================== */
        $(window).on('orientationchange', function (event) {
            window.location.href = window.location.href;
        });

        //Videos
        $(".content-scroller").fitVids();

    } catch (ex) {
    }
});

/* ==========================================================================
 #Progress Bar For Skills Page
 ========================================================================== */
progressBarWithoutPercent($('#progressBarX'));
progressBar(94, $('#progressBar'));
progressBar(87, $('#progressBar2'));
progressBar(90, $('#progressBar3'));
progressBar(89, $('#progressBar4'));
progressBar(87, $('#progressBar5'));
progressBar(93, $('#progressBar6'));
progressBar(84, $('#progressBar7'));
progressBar(96, $('#progressBar8'));
progressBar(95, $('#progressBar9'));
progressBar(92, $('#progressBar10'));





$("#chapter_certification").on('click', function(){
    $("#chapter_certification").removeClass('active');
    $(this).addClass('active');
});
/* ==========================================================================
 #Mobile Menu
 ========================================================================== */

var $menu = $('#menu1'),
        $menulink = $('.menu-link');
$menulink.click(function () {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
});

$('nav#menu1 a').click(function () {
    $('#menu1').removeClass('active');
});



/* ==========================================================================
 #iPad,iPhone,iPod Keyboard issue with position fixed
 ========================================================================== */
var iPad = navigator.userAgent.toLowerCase().indexOf("ipad");
var iPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
var iPod = navigator.userAgent.toLowerCase().indexOf("ipod");
if (iPad > -1 || iPhone > -1 || iPod > -1)
{
    window.onscroll = function () {
        $('.totop-link').css('position', 'absolute');
        $('.totop-link').css('top', (window.pageYOffset + window.innerHeight - 39) + 'px');
    };
}



