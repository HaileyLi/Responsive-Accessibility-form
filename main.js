function validateEmail(email) {
  var str = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return str.test(email);
}

function validateSubmit() {
  var email = $("#email-input").val();
  var selected = $(".form-select").val();
  console.log(selected);
  console.log(email);

  if (email) {
    if (validateEmail(email)) {
      $(".form-submit").text("Submitting ...");
      setTimeout(submitForm, 2000);
    } else {
      $("#error").removeClass("hidden");
      // For Accessibility (AODA)
      $("#email-input").attr("aria-labelledby", "error");
      $("#email-input").focus();
    }
  } else {
    $("#error").removeClass("hidden");
    // For Accessibility (AODA)
    $("#email-input").attr("aria-labelledby", "error");
    $("#email-input").focus();
  }

  return false;
}

function submitForm() {
  console.log("Successfully submitted");
  $("#reply-content").removeClass("hidden");
  $("#email-form").addClass("hidden");
}
