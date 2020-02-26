//define functions here
function getIt() {
  $('p').click(() => alert("Hey!"))
}
function frameIt() {
  $('img').on('load', () => {
    
  })
}

$(document).ready(function(){
$('img').addClass('tasty')
// call functions here
getIt()
frameIt()
});
