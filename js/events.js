//define functions here
function getIt() {
  $('p').click(() => alert("Hey!"))
}
function frameIt() {
  $('img').load(() => {
    $('img').addClass('tasty')
  })
}

$(document).ready(function(){
// call functions here
getIt()
frameIt()
});
