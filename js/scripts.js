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
});
//results for questionaire 
$(document).ready(function() {
  $("form#survey0form").submit(function(event) {
    const question1 = $("#question1").val();
    const question2 = $("#question2").val();
    
    if (question1 === "MacOs") {
      if (question2 === "XBOX") {
        $(".javascript").show();
      } else if (question2 === "PlayStation") {
        $(".python").show();
      } else if (question2 === "Nintendo") {
        $(".ruby").show();
      }
    } else if (question1 === "Windows") {
      if (question2 === "XBOX") {
        $(".javascript").show();
      } else if (question2 === "PlayStation") {
        $(".python").show();
      } else if (question2 === "Nintendo") {
        $(".ruby").show();
      }
    } else (question1 === "Linux") ;{
      if (question2 === "XBOX") {
        $(".javascript").show();
      } else if (question2 === "PlayStation") {
        $(".python").show();
      } else if (question2 === "Nintendo") {
        $(".ruby").show();
      }
    }
    $("#begin").toggle
    event.preventDefault(); 

    });
  
});