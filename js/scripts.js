$(document).ready(function() {
//submit form for id name
$("form#insurance").submit(function(event) {
  const name = $("input#fullname").val();
    
  $("#name1").text(name);
  $("#username").show();
  
  event.preventDefault();
});
  
//once name input will move on to questions
  $(".clickable").click(function() {
    $(".showAsk").toggle();
  });


});