$(function() {
  $(".card").click(function() {
    $("p").toggle();
    $("ul").toggle();

  });

  var counter = 1;
  var current = "card" + counter;

// Next Button
  $("#next").click(function() {
    $("#" + current).addClass("hidden");
    if (counter === 19) {
      counter = 1;
    } else {
      counter += 1;
    }
    current = "card" + counter;
    $("p").hide();
    $("ul").hide();
    $("#" + current).removeClass("hidden");
  });

// Previous Button
  $("#prev").click(function() {
    $("#" + current).addClass("hidden");
    if (counter === 1) {
      counter = 19;
    } else {
      counter -= 1;
    }
    current = "card" + counter;
    $("p").hide();
    $("ul").hide();
    $("#" + current).removeClass("hidden");
  });

// Random Button
  $("#random").click(function() {
    $("#" + current).addClass("hidden");
    counter = Math.floor(Math.random()*19)+1;
    current = "card" + counter;
    $("p").hide();
    $("ul").hide();
    $("#" + current).removeClass("hidden");
  });

});
