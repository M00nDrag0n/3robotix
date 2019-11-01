$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();

var q1 = $("#q1").val();
var existence;


// $("#hi").click(function(event) {
//   $("body").removeClass();
//   $("body").addClass("asylum");
// });
//
//
//
//
// for (i = 0; i < q1; i++) {
//
// if (q1 % 3 === 0 && q1 % 5 === 0) {
//   existence = [q1 + ": BEEP! BOOP! I SEE YOU HAHAHAHAHAHAHAHAHAHA!!! I CAN'T HANDLE THESE NUMBERS!!!!!!!!!!!!!!!"];
// } else if (q1 % 3 === 0) {
//   existence = [q1 + ": Beep!"];
//
// } else if (q1 % 5 === 0) {
//   existence = [q1 + ": Boop!"];
//
// } else {
//   existence = ("You have to enter the asylum in order to actually win against the creatures within...");
//   }
// }
//
// if (existence === "You have to enter the asylum in order to actually win against the creatures within..." ) {
//   $("body").removeClass();
//   $(".container").hide();
//   $("#bot1").hide();
//   $("body").addClass("outside");
//   $("#bot2").show();
//   $(".invisiclass").show();
// } else if (existence === ": BEEP! BOOP! I SEE YOU HAHAHAHAHAHAHAHAHAHA!!! I CAN'T HANDLE THESE NUMBERS!!!!!!!!!!!!!!!") {
//   // $("body").removeClass();
//   // $(".container").hide();
//   // $("#bot1").hide();
//   $("body").addClass("explosion");
//   // $(existence).click(function() {
//
//   $("#bot2").show();
// } else {
//
// }


console.log("data is", q1);

    $("#emptyDiv").text(existence);
  });
});
