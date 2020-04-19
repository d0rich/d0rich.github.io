
$(document).ready(function() {
  $("#MenuButton").click(function() {
  if ($("#NavPanel").hasClass('Show'))
  {
    $("#NavPanel").removeClass("Show");
    $("#MenuButton").removeClass("Active");
  }
  else {
    $("#NavPanel").addClass("Show");
    $("#MenuButton").addClass("Active");
  }
  });
});
