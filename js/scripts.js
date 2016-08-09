$(function() {
  $(".card").click(function() {
    $("p").toggle();
    $("ul").toggle();
  });

  var counter = 1;
  var current = "card" + counter;

// Next Button
  var newCount = 20
  $("#next").click(function() {
    $("#" + current).addClass("hidden");
    if (counter === newCount-1) {
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
      counter = newCount-1;
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

// Add Term Button
  $("#addTerm").click(function() {
    var term = prompt("What is your new term?");
    var definition = prompt("And its definition?");
    $("#termListItems").append('<li class="term" value="' + newCount + '">' + term + '</li>');
    $("#buttons").before('<div class="card hidden" id="card' + newCount + '"><h2>' + term + '</h2><p>' + definition + '</p></div>');
    newCount += 1;
    $(".card").click(function() {
      $("p").toggle();
      $("ul").toggle();
    });
  });

// Term List
  $(".term").click(function() {
    $("#" + current).addClass("hidden");
    counter = $(this).val();
    current = "card" + counter;
    $("p").hide();
    $("ul").hide();
    $("#" + current).removeClass("hidden");
  });

  $("#termListTitle").click(function() {
    $("#termListItems").toggle();
  });



});
