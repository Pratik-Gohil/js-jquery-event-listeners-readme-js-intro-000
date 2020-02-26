//define functions here
function getIt() {
  $('p').click(() => alert("Hey!"))
}
function frameIt() {
  $('img').load()
}

$(document).ready(function(){
// call functions here
getIt()
frameIt()
});
