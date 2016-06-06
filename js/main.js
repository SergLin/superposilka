/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js


/*
 * Custom   образец для сборщика ->    //= partials/app.js
 */
//= partials/lightslider.js



$('[data-opener]').click(function(){
 $('[data-open="'+$(this).data('opener')+'"]').toggle();
 
});

$(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:0,
        loop:true
    });
});