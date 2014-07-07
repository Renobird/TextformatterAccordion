$(document).ready(function() {

    $('body').on('click', 'dl.accordion > dt > a', function (){
        $(this).toggleClass('open');
        $(this).parent().next('dd').slideToggle("fast");
        return false;
    });

}); 