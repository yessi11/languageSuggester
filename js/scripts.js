$(document).ready(function() {
  $("#name0form").sumbit(function(event) {
    const fname = $("input#fname").val();
    const lname = $("input#lname").val();
    
    
      $("#username").text(".name");
      $(".name").show();
  
    
  
    event.preventDefault();
  });

  $(".clickable").click(funciton() {
    $(".showAsk").toggle();
  });

});