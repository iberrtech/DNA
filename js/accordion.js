//home page header slider
$(document).ready(function(){
    $('.home-hr-slr').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        fade:true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
  });






var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//course section
$(document).on('click', '.map-point-sm', function() {
    var show = $(this).data('show');
    $(show).removeClass("hide").siblings().addClass("hide");
    $(show).attr('data-aos', 'fade-left')
  });







  //partners card slider
$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});

//placed students card slider
$(document).ready(function(){
  $('.placed-st').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 3
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 2
          }
      }]
  });
});
  

//cpc exam passed card slider
$(document).ready(function(){
  $('.cpc-exam').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 3
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 1,
              autoplaySpeed: 1200,
          }
      }]
  });
});

//cpc exam passed card slider
$(document).ready(function(){
  $('.yt-sldr').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 2
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 1,
          }
      }]
  });
});


//footer.html  / Function to load and insert HTML content from an external file
function includeHTML(file, elementId) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      });
  }
  // Load the footer
  includeHTML('footer.html', 'footer');


  document.addEventListener("DOMContentLoaded", function() {
    // Function to add a class when an element is in the viewport
    function addClassOnIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                observer.unobserve(entry.target);
            }
        });
    }

    // Create an intersection observer
    var observer = new IntersectionObserver(addClassOnIntersection, { threshold: 0.5 });

    // Observe each animated-div
    var elements = document.querySelectorAll('.aos-class');
    elements.forEach(element => {
        observer.observe(element);
    });
});