//define functions here
function getIt() {
  $("p").on("click", () => alert("Hey!"))
}
function frameIt(){
  $("img").on("load", function(){
    $("img").addClass("tasty");
  });
}
function pressIt() {
  $("input").bind("keydown", (event) => {
    if (event.which == 72) {
      alert("G")
    }
  })
}

$(document).ready(function(){
// call functions here
getIt()
frameIt()
pressIt()
});
