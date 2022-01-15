$(document).ready(function() {
//submit form for id name
  $("form#name0form").submit(function(event) {
  const name = $("input#fullname").val();
    
  $("#username").text(name);
  $("#name1").show();
  
  event.preventDefault();
  });
  
//once name input will move on to questions
  $(".clickable").click(function() {
    $(".showAsk").toggle();
    $(".hideAsk").toggle();
  });

//results for questionaire 
  $  


});