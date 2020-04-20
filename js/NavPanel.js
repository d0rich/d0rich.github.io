
$(document).ready(function() {
  $("#MenuButton").click(function() {
  if ($("#NavPanel").hasClass('Show'))
  {
    $("#NavPanel").removeClass("Show");
    $("#MenuButton").removeClass("Active");
    $("#block").removeClass("blocked");
  }
  else {
    $("#NavPanel").addClass("Show");
    $("#MenuButton").addClass("Active");
    $("#block").addClass("blocked");
  }
  });
});
