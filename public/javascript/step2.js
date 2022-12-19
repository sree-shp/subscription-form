$("#one").toggleClass("current-step");
$("#two").toggleClass("current-step");

$(".plan-button").click(function () {
  if ($(".plan-button").hasClass("plan-selected") === true) {
    $(".plan-button").removeClass("plan-selected");
  }
  $(this).addClass("plan-selected");
});

$(".toggle-input").click(function () {
  if ($(this).is(":checked") === true) {
    $("#arcade").html(
      '$90/yr <br> <span class="plan-offer">2 months free</span>'
    );
    $("#advanced").html(
      '$120/yr <br> <span class="plan-offer">2 months free</span>'
    );
    $("#pro").html(
      '$150/yr <br> <span class="plan-offer">2 months free</span>'
    );
  } else {
    $("#arcade").text("$9/mo");
    $("#advanced").text("$12/mo");
    $("#pro").text("$15/mo");
  }
});
