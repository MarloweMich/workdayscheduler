var clock = document.getElementById("currentDay");
var dayof = moment().format("MMM Do, YYYY");
var bodyEl = $("#body");

clock.textContent = dayof;
var currentDay = moment().format("MMM Do, YYYY");
var currentHour = moment().hour();
console.log("currentday is: " + currentDay);
console.log("currenthour is: " + currentHour);

//timeblocks section begins
var changers = [
  $('textarea[id="9"]'),
  $('textarea[id="10"]'),
  $('textarea[id="11"]'),
  $('textarea[id="12"]'),
  $('textarea[id="13"]'),
  $('textarea[id="14"]'),
  $('textarea[id="15"]'),
  $('textarea[id="16"]'),
  $('textarea[id="17"]'),
];

changers.forEach(element => {
 parseInt(element.attr('id'));
 console.log(element.attr('id'));
});

     function colorChange(){
      for (i = 0; i <changers.length; i++) {
        console.log("i= " + i);
        console.log("currenthour: " + currentHour);
         console.log(changers[i]);
    if (changers[i].attr('id') < currentHour) {
     changers[i].addClass("past");
   }
   if (changers[i].attr('id') == currentHour) {
     changers[i].addClass("present");
   }
   if (changers[i].attr('id') > currentHour) {
     changers[i].addClass("future");
   }
     }}
     colorChange();

//begin area of local storage and submission buttons
     renderLastRegistered();

var renderLastRegistered = function() {
  var input = localStorage.getItem("input");
  $("textarea").textContent = input;
};
var button = $(".saveBtn");
button.on("click", function (event) {
  event.preventDefault();

  var input = [
    $('textarea[name="9"]').val(),
    $('textarea[name="10"]').val(),
    $('textarea[name="11"]').val(),
    $('textarea[name="12"]').val(),
    $('textarea[name="13"]').val(),
    $('textarea[name="14"]').val(),
    $('textarea[name="15"]').val(),
    $('textarea[name="16"]').val(),
    $('textarea[name="17"]').val(),
  ];

  localStorage.setItem("input", input);
  renderLastRegistered();
});