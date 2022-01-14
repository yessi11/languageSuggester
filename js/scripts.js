$(document).ready(function() {
  $("#nameid").sumbit(function(event) {
    const firstname = $(".fname").val();
    const lastname = $(".lname").val();

    const result = add (fname, lname);
    $("#name").text(username);
  
    event.preventDefault();

  });
});