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

function bodyScrollingToggle(){
    document.body.classList.toggle("hidden-scrolling");
    
}

// experience filter and popup

(() =>{
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    closeBtn = popup.querySelector(".pp-close"),
    projectDetailsContainer = popup.querySelector(".pp-details"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
    
    let itemIndex, slideIndex, screenshots;

    // filter experience items
    filterContainer.addEventListener("click", (event)=>{
        if(event.target.classList.contains("filter-item") &&
        !event.target.classList.contains("active")){
            // deactivate  existing active 'filter-item'
            filterContainer.querySelector(".active").classList.remove("shadow","active");
            // active new 'filter-item'
            event.target.classList.add("active","shadow");
            const traget = event.target.getAttribute("data-target");
            portfolioItems.forEach((item)=>{
                if(traget === item.getAttribute("data-category") || traget === "all"){
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
                else{
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            })
        }
    })

    portfolioItemsContainer.addEventListener("click", (event) =>{
        if(event.target.closest(".portfolio-item-inner")){
            const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;
            // get the portfolioItem index
            itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
            screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");
            // convert screenshort into array
            screenshots = screenshots.split(",");
            if(screenshots.length === 1){
                prevBtn.style.display = "none";
                nextBtn.style.display = "none";
            }
            else{
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
            }
            slideIndex = 0;
            popupToggle();
            popupSlideshow();
            popupDetails();
        }
    })

    closeBtn.addEventListener("click", () =>{
        popupToggle();
        if(projectDetailsContainer.classList.contains("active")){
            popupDetailsToggle();
        }
    })

    function popupToggle() {
        popup.classList.toggle("open");
        bodyScrollingToggle();
    }

    function popupSlideshow(){
        const imgSrc = screenshots[slideIndex];
        const popupImg = popup.querySelector(".pp-img");
        // activate loader untile the popupImg loaded
        popup.querySelector(".pp-loader").classList.add("active");
        popupImg.src = imgSrc;
        popupImg.onload = () =>{
            // deactivate loader after the popupImg loader
            popup.querySelector(".pp-loader").classList.remove("active");
        }
        popup.querySelector(".pp-counter").innerHTML = (slideIndex+1) + " of " + screenshots.length;
    }

    // next slide
    nextBtn.addEventListener("click", () =>{
        if(slideIndex === screenshots.length-1){
            slideIndex = 0;
        }
        else {
            slideIndex++;
        }
        popupSlideshow();
    })

    // prev slide
    prevBtn.addEventListener("click", () =>{
        if(slideIndex === 0){
            slideIndex = screenshots.length-1;
        }
        else {
            slideIndex--;
        }
        popupSlideshow();
    })

    function popupDetails() {
        //if portfolio-item-etails not exists
        if(!portfolioItems[itemIndex].querySelector(".portfolio-item-details")){
            projectDetailsBtn.style.display = "none";
            return;
        }
        projectDetailsBtn.style.display = "block";
        // get the project details
        const details = portfolioItems[itemIndex].querySelector(".portfolio-item-details").innerHTML;
        // set the project details
        popup.querySelector(".pp-project-details").innerHTML = details;
        // get the project title
        const title = portfolioItems[itemIndex].querySelector(".portfolio-item-title").innerHTML;
        // set the project title
        popup.querySelector(".pp-title h2").innerHTML = title;
        // get the project category
        const category = portfolioItems[itemIndex].getAttribute("data-category");     
        // set the project category
        popup.querySelector(".pp-project-category").innerHTML = category.split("-").join(" ");
    }

    projectDetailsBtn.addEventListener("click", () =>{
        popupDetailsToggle();
    })

    function popupDetailsToggle() {
        if(projectDetailsContainer.classList.contains("active")){
            projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
            projectDetailsBtn.querySelector("i").classList.add("fa-plus");
            projectDetailsContainer.classList.remove("active");
            projectDetailsContainer.style.maxHeight = 0 + "px";
        }
        else{
            projectDetailsBtn.querySelector("i").classList.remove("fa-plus");
            projectDetailsBtn.querySelector("i").classList.add("fa-minus");
            projectDetailsContainer.classList.add("active");
            projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + "px";
            popup.scrollTo(0,projectDetailsContainer.offsetTop);
        }
    }
})();