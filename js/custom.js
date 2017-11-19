//Scroll effect for navbar
$(document).ready(function(){
  $('body').scrollspy({target: ".navbar", offset: 0});
  $("#navbarNav a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

//Scroll effect for Navbar shadow, Mouse Downs and Top to Buttom button
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 90) {
            $('.scroll-downs').fadeOut();
        } else {
            $('.scroll-downs').fadeIn();
        }
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
        if ($(this).scrollTop() > 675) {
            $('.navbar').addClass('fixed-top nav-shadow');
        } else {
            $('.navbar').removeClass('fixed-top nav-shadow');
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
