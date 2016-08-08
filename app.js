$(document).ready(function() {
  $("body").append("<div class = 'buttons' id = 'addSpy'></div>");
  $("#addSpy").append("<button>Add Spy</button>");
  var id = 0;
  $("#addSpy").on("click" , function(){
    id++;
    $('#container').append('<div id="' + id + '">' + id + '<span><button class="change">Change</button><button class="delete">Delete Spy</button></span></div>');
  $('#' + id).css('background-color', 'yellow');
  });

  $("#container").on("click", ".change" , function() {
    $('#' + id).css('background-color' , 'red');
  });

  $("#container").on("click" , ".delete", function() {
    $(this).parent().remove();
  });
});
