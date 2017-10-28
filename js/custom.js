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
        if ($(this).scrollTop() > 3800) {
          $('.progress .progress-bar').css("width",function(){
               return $(this).attr("aria-valuenow") + "%";
           });
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

// $(document).ready(function() {
//      $('.progress .progress-bar').css("width",function(){
//           return $(this).attr("aria-valuenow") + "%";
//       });
//    });




//Facebook Follow, Like and Share code start
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=273857719778432";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
//Facebook Follow, Like and Share code end
