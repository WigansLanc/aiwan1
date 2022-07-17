$(document).ready(function() {

  $("#form").submit(function() {
    $.ajax({
      type: "POST",
      url: "forma_mail.php",
      data: $(this).serialize()
    }).done(function(){
      $(this).find("input").val("");
      alert("bla-bla-bla");
      $("#form").trigger("reset");
    });
    return false;
  });
  
});