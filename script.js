
function createCalender(){
    $('#cardDisplay').empty();
    for(var i=0; i<5; i++){
      if(i === 0) {
        var appendEl = $('<div class="row"></div>').appendTo('#cardDisplay');
        $('<div class="col-lg d-flex align-items-stretch""><div class="card mx-auto"><div class="card-body"><h5 class="card-title">asdfasdf</h5><p class="card-text">Denver International Airport is an international airport serving metropolitan Denver, Colorado, United States. At 33,531 acres, it is the largest airport in the United States by total land area.</p><a href="https://www.flydenver.com/" class="btn btn-primary">Take me there</a></div></div></div>').appendTo(appendEl);
      } else {
        $('<div class="col-lg d-flex align-items-stretch""><div class="card mx-auto"><div class="card-body"><h5 class="card-title">asdfasdf</h5><p class="card-text">Denver International Airport is an international airport serving metropolitan Denver, Colorado, United States. At 33,531 acres, it is the largest airport in the United States by total land area.</p><a href="https://www.flydenver.com/" class="btn btn-primary">Take me there</a></div></div></div><').appendTo(appendEl);
      }
    }
}


(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

var db =
  data = [
  {
    email: "aglasswala@gmail.com",
    password: "123"
  }, 
  {
    email: "mwing123@gmail.com",
    password: "imsmall"
  }, 
  {
    email: "jackv@gmail.com",
    password: "124"
  }

]

   

function signIn() {
  var email = document.getElementById("inputEmail").value;
  var pass = document.getElementById("inputPassword").value;

  for(var j = 0; j < db.length; j++) {
    if(db[j].email === email && db[j].password === pass) {
      document.location.href = "body.html";
      break;
    } else {
      console.log("GO FUCK YOURSELF")
    }
  }

}
function register(){
    var firstName = document.getElementById("inputFirstname").value;
    var lastName = document.getElementById("inputLastname").value;
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
    document.location.href = "index.html";
}

=======
function createCalender(){
    $('#cardDisplay').empty();
    for(var i=0; i<5; i++){
      if(i === 0) {
        var appendEl = $('<div class="row"></div>').appendTo('#cardDisplay');
        $('<div class="col-lg d-flex align-items-stretch""><div class="card mx-auto"><div class="card-body"><h5 class="card-title">asdfasdf</h5><p class="card-text">Denver International Airport is an international airport serving metropolitan Denver, Colorado, United States. At 33,531 acres, it is the largest airport in the United States by total land area.</p><a href="https://www.flydenver.com/" class="btn btn-primary">Take me there</a></div></div></div>').appendTo(appendEl);
      } else {
        $('<div class="col-lg d-flex align-items-stretch""><div class="card mx-auto"><div class="card-body"><h5 class="card-title">asdfasdf</h5><p class="card-text">Denver International Airport is an international airport serving metropolitan Denver, Colorado, United States. At 33,531 acres, it is the largest airport in the United States by total land area.</p><a href="https://www.flydenver.com/" class="btn btn-primary">Take me there</a></div></div></div><').appendTo(appendEl);
      }
    }
}


(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

const db = [
  {
    email: "aglasswala@gmail.com",
    password: "123"
  }, 
  {
    email: "mwing123@gmail.com",
    password: "imsmall"
  }, 
  {
    email: "jackv@gmail.com",
    password: "124"
  }

]

function signIn() {
  const email = document.getElementById("inputEmail").value;
  const pass = document.getElementById("inputPassword").value;

  for(var j = 0; j < db.length; j++) {
    if(db[j].email === email && db[j].password === pass) {
      document.location.href = "body.html";
      break;
    } else {
      console.log("GO FUCK YOURSELF")
    }
  }

}

