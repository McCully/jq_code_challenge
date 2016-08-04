$(document).ready(function() {
  $("body").append("<div class = 'buttons' id = 'addSpy'></div>");
  $("#addSpy").append("<button>Add Spy</button>");
  $(".buttons").append("<button id = 'change'>Change</button>");
  $(".buttons").append("<button id = 'delete'>Delete</button>");
  var spies = [];
  var id = 1;
  $("#addSpy").on("click" , function(){
    $('body').append("<div id = 'spyguy'></div" + spies.push(randomNumber(0 , 100)));
  });
  // $("#change").on("click" , function(){

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
console.log(spies);
});
