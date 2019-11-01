$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();

var q1 = $("#q1").val();
var existence;

for (i = 0; i < q1; i++) {

if (q1 % 3 === 0 && q1 % 5 === 0) {
  existence = [q1 + ": BEEP! BOOP! I SEE YOU HAHAHAHAHAHAHAHAHAHA!!! I CAN'T HANDLE THESE NUMBERS!!!!!!!!!!!!!!!"];
  // show monster
} else if (q1 % 3 === 0) {
  existence = [q1 + ": Beep!"];

} else if (q1 % 5=== 0) {
  existence = [q1 + ": Boop!"];

} else {
  existence = ("You have to enter the asylum in order to actually win against the creatures within...");
//   // css change, text and image that says "you have to enter the asylum before you can experience it, silly"
  }
}
console.log("data is", q1);

    $("#emptyDiv").text(existence);
  });
});
