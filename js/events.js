//define functions here
function getIt() {
  $('p').on("click", () => alert("Hey!"))
}
function frameIt() {
  $(document).on("click", () => {
    alert('hello')
  })
}

$(document).ready(function(){
// call functions here
getIt()
frameIt()
});
