$('.nav--mobile').on('click', function() {
    $('.nav__item-list').toggleClass('showing');
});

$(document).click(function(event) { 
    if(!$(event.target).closest('.nav').length) {
        if($('.nav__item-list').hasClass('showing')) {
            $('.nav__item-list').toggleClass('showing');
        }
    }        
});

$('.menubar').click(function(){
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
});