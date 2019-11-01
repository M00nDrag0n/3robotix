$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();

var q1 = $("#q1").val();
var existence;



if (q1 % 3 === 0 && q1 % 5 === 0) {
  existence = [q1 + ": BEEP! BOOP! I SEE YOU HAHAHAHAHAHAHAHAHAHA!!!"];
  // show monster

} else {
  existence = ("0");
//   // css change, text and image that says "you have to enter the asylum before you can experience it, silly"
  }

console.log("data is", q1);

    $("#emptyDiv").text(q1);
  });
});
