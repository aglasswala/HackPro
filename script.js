$(function () {
  $("#datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
});

function run(courseNum, whereOne, timeNum, nameNum, dateNum) {
  const where = whereOne.value;
  const course = courseNum.value;
  const time = timeNum.value;
  let name  = nameNum.value;

  const b = $('<tr></tr>').appendTo('#tableMain');

  const a = getDate(dateNum.value, b);

  name = name + " - " + course + " in the " + where;

  $('<td class="agenda-time">' + time + '</td>').appendTo(b);
  $('<td class="agenda-events"><div class="agenda-event"><i class="glyphicon glyphicon-repeat text-muted" title="Repeating event"></i>' + name + '</div></td>').appendTo(b);

}

function getDate(x, b) {
  var arr = x.split("-");
  var month = arr[0];
  var day = arr[1];
  var year = arr[2];


  if(month === "1") month = "Jan";
  else if(month === "2") month = "Feb";
  else if(month === "3") month = "Mar";
  else if(month === "4") month = "Apr";
  else if(month === "5") month = "May";
  else if(month === "6") month = "Jun";
  else if(month === "7") month = "Jul";
  else if(month === "8") month = "Aug";
  else if(month === "9") month = "Sep";
  else if(month === "10") month = "Oct";
  else if(month === "11") month = "Nov";
  else if(month === "12") month = "Dec"; 
  
  month = month + " " + year;

  var thur = 1;
  var fri = 2;
  var sat = 3;
  var sun = 4;
  var mon = 5;
  var tue = 6
  var wed = 7;

  if(day % 7 === thur) day = "Thursday";
  else if(day % 7 === fri) day = "Friday";
  else if(day % 7 === sat) day = "Saturday";
  else if(day % 7 === sun) day = "Sunday";
  else if(day % 7 === mon) day = "Monday";
  else if(day % 7 === tue) day = "Tuesday";
  else if(day % 7 === wed || day % 7 === 0) day = "Wednesday";

  $('<td class="agenda-date" class="active" rowspan="1"><div class="dayofmonth">' + arr[1] + '</div><div class="dayofweek">' + day + '</div><div class="shortdate text-muted">' + month + '</div></td>').appendTo(b);


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
      document.getElementById("demo").innerHTML = "Wrong password or Email"
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

$(function () {
   $('#modalfirst').modal(toggle)
});