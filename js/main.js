/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js


/*
 * Custom   образец для сборщика ->    //= partials/app.js
 */

$('[data-opener]').click(function(){
 $('[data-open="'+$(this).data('opener')+'"]').toggle();
 
});