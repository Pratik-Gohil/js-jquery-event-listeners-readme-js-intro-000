//define functions here
function getIt() {
  $('p').click(() => alert("Hey!"))
  console.log("click")
}
function frameIt() {
  $('img').on('load' () => {
    $('img').addClass('tasty')
  })
}

$(document).ready(function(){

// call functions here
getIt()
frameIt()
});
