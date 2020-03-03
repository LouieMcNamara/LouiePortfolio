$(function() {
    var $window = $(window);
    $('.next').on('click', function(){
        $('section').each(function() {
            var pos = $(this).offset().top;   
            if ($window.scrollTop() < pos) {
                $('html, body').animate({
                    scrollTop: pos
                }, 1000);
                return false;
            }
        });
    });

    $('.previous').click(function(){
        $($('section').get().reverse()).each(function() {
            var pos = $(this).offset().top;   
            if ($window.scrollTop() > pos) {
                $('html, body').animate({
                    scrollTop: pos
                }, 1000);
                return false;
            }
        });
    });
});



