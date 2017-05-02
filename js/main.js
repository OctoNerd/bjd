$('.nav--mobile').on('click', function() {
    $('.nav__item-list').toggleClass('showing');
});

$(document).click(function(event) { 
    if(!$(event.target).closest('.nav').length) {
        if($('.nav__item-list').hasClass('showing')) {
            $('.nav__item-list').toggleClass('showing');
        }
    }        
})