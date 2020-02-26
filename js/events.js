//define functions here
function getIt() {
  $('p').click(() => alert("Hey!"))
  console.log("click")
}
function frameIt() {
}

$(document).ready(function(){

// call functions here
getIt()
frameIt()
});
