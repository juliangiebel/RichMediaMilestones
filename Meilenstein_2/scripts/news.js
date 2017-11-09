$("document").ready(function () {
  $("[data-month]").each(assignEvent);
});

function assignEvent(index) {
  $("#"+$(this).data("month")).click(toggleDisplay.bind(this));
}

function toggleDisplay() {
  if ($(this).css("display") == "block") {
    $(this).css("display", "none");
  } else {
    $(this).css("display", "block");
  }
}
