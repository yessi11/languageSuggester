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
  $("form#Side-length").submit(function(event) {
    let question1 = ("select#question1").val();
    let question2 = ("select#question2").val();
    let question3 = ("select#question3").val();
    let question4 = ("select#question4").val();
    let question5 = ("select#question5").val();

    if (value > 9) {
    $(".javascript").show();
  } else if (value <= 9 ) {
    $(".python").show();
  } else {
    $(".ruby").show();
  }

    event.preventDefault();
  });
});