$(document).ready(function() {
  $("#freeimg").click(function() {
  if ($("#free").hasClass('Show'))
  {
    $("#free").removeClass("Show");
  }
  else {
    $("#free").addClass("Show");
  }
  });
});
