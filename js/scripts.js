$(function() {
  $(".card").click(function() {
    $("p").toggle();
  });

  var counter = 1;
  var current = "card" + counter;

  $("#next").click(function() {
    $(current).hide();
    counter += 1;
    $(current).show();
  });
});
