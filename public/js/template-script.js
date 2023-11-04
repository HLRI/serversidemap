$('.menu').mouseover(function() {
    $(this).find('.drop-down-menu').stop(true, true).show();
}).mouseout(function() {
    $(this).find('.drop-down-menu').stop(true, true).hide(20);
});
