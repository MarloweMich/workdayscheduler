var clock = document.getElementById("currentDay");
var dayof = moment().format("MMM Do, YYYY");
var bodyEl = $("#body");

clock.textContent = dayof;
var currentTime = moment().format("MMM Do, YYYY");
var currentHour = moment().hour();
console.log("currenttime is: " + currentTime);
console.log("currenthour is: " + currentHour);

var weekDay = moment("5-15-2022", "M-D-YYYY").format(" MMM Do, YYYY");
console.log("random weekday: " + weekDay);



function colorChange(){
const timeblocks = [9,10,11,12,13,14,15,16,17];
const searchterm = currentHour;
const i = timeblocks.indexOf(searchterm);

   if (moment(timeblocks[i]).isBefore(currentHour)){
       $('textarea').addClass('past');
   }
     if (timeblocks[i]==currentHour){
          $("textarea").addClass('present');
     }
   if (moment(timeblocks[i]).isAfter(currentHour)){
    $('textarea').addClass('future');
}
}

colorChange();


// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// const searchTerm = 'dog';
// const indexOfFirst = paragraph.indexOf(searchTerm);

// console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// // expected output: "The index of the first "dog" from the beginning is 40"

// console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// // expected output: "The index of the 2nd "dog" is 52"



// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value) {
//   txt += value + "<br>";
// }

//var nine = moment("9 am").format("HH a");
//$("#9").text(nine);