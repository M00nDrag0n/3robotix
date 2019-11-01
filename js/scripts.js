$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();

var q1 = $("#q1").val();
var existence;
var existences = [];

$("#hi").click(function(event) {
  $("body").removeClass();
  $("body").addClass("asylum");
});



if (q1 % 3 === 0 && q1 % 5 === 0) {
  existence = [q1 + ": BEEP! BOOP! I SEE YOU HAHAHAHAHAHAHAHAHAHA!!! I CAN'T HANDLE THESE NUMBERS!!!!!!!!!!!!!!! "];
} else if (q1 % 3 === 0) {
  existence = [q1 + ": Beep! "];

} else if (q1 % 5 === 0) {
  existence = [q1 + ": Boop! "];

} else if (q1 % 2 === 1) {
  prompt("BEEP");
  existence = [q1 + ": BEEEEEEP!! BEEEEEEP!! BEEEEEEP!! BEEEEEEP!! BEEEEEEP!! "];


} else if (q1 === 0) {
  existence = [q1 + ": Boop! "];

} else {
  existence = ("You have to enter the asylum in order to actually win against the creatures within...");
}




if (existence === "You have to enter the asylum in order to actually win against the creatures within..." ) {
  $("body").removeClass();
  $(".container").hide();
  $("#bot1").hide();
  $("body").addClass("outside");
  $("#bot2").show();
  $(".invisiclass").show();
} else if (q1 % 3 === 0 && q1 % 5 === 0){
  console.log("data is", q1);
  $("body").removeClass();
  $(".container").hide();
  $("#bot1").hide();
  $("body").addClass("explosion");
  $("#bot2").show();
} else {
}



    $("#emptyDiv").append(existence);
  }
  });
});
