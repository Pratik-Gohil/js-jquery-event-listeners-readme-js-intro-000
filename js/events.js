//define functions here
function getIt() {
  $('p').click(() => alert("Hey!"))
}
function frameIt() {
  $('img').on('load', () => {
    alert('hello')
  })
}

$(document).ready(function(){
// call functions here
getIt()
frameIt()
});
