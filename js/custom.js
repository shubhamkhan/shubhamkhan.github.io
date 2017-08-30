$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 0});

  // Add smooth scrolling on all links inside the navbar
  $("#navbarNav a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});

$(document).ready(function(){
    $(window).scroll(function(){
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



//Facebook Follow, Like and Share code start
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=273857719778432";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
//Facebook Follow, Like and Share code end
