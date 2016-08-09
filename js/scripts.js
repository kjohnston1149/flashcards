$(function() {
  $(".card").click(function() {
    $("p").toggle();
  });

  var counter = 1;
  var current = "card" + counter;

// Next Button
  $("#next").click(function() {
    $("#" + current).addClass("hidden");
    counter += 1;
    current = "card" + counter;
    $("#" + current).removeClass("hidden");
  });

// Previous Button
  $("#prev").click(function() {
    $("#" + current).addClass("hidden");
    counter -= 1;
    current = "card" + counter;
    $("#" + current).removeClass("hidden");
  });

});
