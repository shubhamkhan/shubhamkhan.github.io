//Progress bar effect for Skill
$(function() {
  var current_progress = 0;
  var interval = setInterval(function() {
      current_progress += 1;
      $("#dynamic")
      .css("width", current_progress + "%" )
      .attr("aria-valuenow", current_progress)
      .text("C Programming " + current_progress + "%");
      if (current_progress >= 75)
          clearInterval(interval);
  }, 150);
  var interval1 = setInterval(function() {
      current_progress += 1;
      $("#dynamic1")
      .css("width", current_progress + "%" )
      .attr("aria-valuenow", current_progress)
      .text("PHP " + current_progress + "%");
      if (current_progress >= 65)
          clearInterval(interval1);
  }, 150);
  var interval2 = setInterval(function() {
      current_progress += 1;
      $("#dynamic2")
      .css("width", current_progress + "%" )
      .attr("aria-valuenow", current_progress)
      .text("Python " + current_progress + "%");
      if (current_progress >= 55)
          clearInterval(interval2);
  }, 150);
  var interval3 = setInterval(function() {
      current_progress += 1;
      $("#dynamic3")
      .css("width", current_progress + "%" )
      .attr("aria-valuenow", current_progress)
      .text("HTML & CSS " + current_progress + "%");
      if (current_progress >= 80)
          clearInterval(interval3);
  }, 150);
  var interval4 = setInterval(function() {
      current_progress += 1;
      $("#dynamic4")
      .css("width", current_progress + "%" )
      .attr("aria-valuenow", current_progress)
      .text("Bootstrap " + current_progress + "%");
      if (current_progress >= 85)
          clearInterval(interval4);
  }, 150);
  var interval5 = setInterval(function() {
      current_progress += 1;
      $("#dynamic5")
      .css("width", current_progress + "%" )
      .attr("aria-valuenow", current_progress)
      .text("MySQL " + current_progress + "%");
      if (current_progress >= 60)
          clearInterval(interval5);
  }, 150);
});


//Scroll effect for navbar
$(document).ready(function(){
  $('body').scrollspy({target: ".navbar", offset: 0});
  $("#navbarNav a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    }
  });
});

//Scroll effect for Navbar shadow, Mouse Downs and Buttom to Top button
$(document).ready(function(){
    $(window).scroll(function(){
       // Mouse Downs
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
        // Buttom to Top button
        if ($(this).scrollTop() > 90) {
            $('.scroll-downs').fadeOut();
        } else {
            $('.scroll-downs').fadeIn();
        }
        // Navbar shadow
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
