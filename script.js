
function createCalender() {

    const a = $('<div class="row justify-content-center"><div class="card-group"></div></div>').appendTo("#cardDisplay");
    $('<a href="" data-toggle="modal" data-target="#1" class="custom-card"><div class="card" style="height: 50vh; width: 15vw;"><h5 class="card-header">3</h5><div class="card-body"><ul class="list-group" id="one1"></ul></a></div>').appendTo(a);
    $('<a href="" data-toggle="modal" data-target="#2" class="custom-card"><div class="card" style="height: 50vh; width: 15vw;"><h5 class="card-header">4</h5><div class="card-body"><ul class="list-group" id="one2"></ul></a></div>').appendTo(a);
    $('<a href="" data-toggle="modal" data-target="#3" class="custom-card"><div class="card" style="height: 50vh; width: 15vw;"><h5 class="card-header">5</h5><div class="card-body"><ul class="list-group" id="one3"></ul></a></div>').appendTo(a);
    $('<a href="" data-toggle="modal" data-target="#4" class="custom-card"><div class="card" style="height: 50vh; width: 15vw;"><h5 class="card-header">6</h5><div class="card-body"><ul class="list-group" id="one4"></ul></a></div>').appendTo(a);
    $('<a href="" data-toggle="modal" data-target="#5" class="custom-card"><div class="card" style="height: 50vh; width: 15vw;"><h5 class="card-header">7</h5><div class="card-body"><ul class="list-group" id="one5"></ul></a></div>').appendTo(a);


}


// <div class="input-group"><input type="text" class="form-control" placeholder="subject" id="course1"><select class="custom-select" id="time1"> <option selected>1:00</option><option value="1:30">1:30</option><option value="2:00">2:00</option><option value="2:30">2:30</option></select></div><button class="input-group-text btn btn-outline-info" onclick="run(one1, course1, time1)">Add</button>
// <div class="input-group"><input type="text" class="form-control" placeholder="subject" id="course2"><select class="custom-select" id="time2"> <option selected>1:00</option><option value="1:30">1:30</option><option value="2:00">2:00</option><option value="2:30">2:30</option></select></div><button class="input-group-text btn btn-outline-info" onclick="run(one2, course2, time2)">Add</button>
// <div class="input-group"><input type="text" class="form-control" placeholder="subject" id="course3"><select class="custom-select" id="time3"> <option selected>1:00</option><option value="1:30">1:30</option><option value="2:00">2:00</option><option value="2:30">2:30</option></select></div><button class="input-group-text btn btn-outline-info" onclick="run(one3, course3, time3)">Add</button>
// <div class="input-group"><input type="text" class="form-control" placeholder="subject" id="course4"><select class="custom-select" id="time4"> <option selected>1:00</option><option value="1:30">1:30</option><option value="2:00">2:00</option><option value="2:30">2:30</option></select></div><button class="input-group-text btn btn-outline-info" onclick="run(one4, course4, time4)">Add</button>
// <div class="input-group"><input type="text" class="form-control" placeholder="subject" id="course5"><select class="custom-select" id="time5"> <option selected>1:00</option><option value="1:30">1:30</option><option value="2:00">2:00</option><option value="2:30">2:30</option></select></div><button class="input-group-text btn btn-outline-info" onclick="run(one5, course5, time5)">Add</button>


function run(ulId, courseNum, timeNum) {
  const course = courseNum.value;
  const time = timeNum.value;
  $('<li class="list-group-item"><div class="row justify-content-between"><div class="col-sm">' + course +'</div><div class="col-sm">'+ time + '</div></div></li>').appendTo(ulId)
}


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
