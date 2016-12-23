$('#banner').backstretch("/assets/test.gif");

$('#banner-container form').submit(function(e) {
  e.preventDefault();
  $.ajax({
    url: "/",
    type: "POST",
    data: $(this).serialize(),
    success: function(res) {
      console.log('success!');
      $('object').attr('data', "/assets/videographer.pdf");
    },
    error: function() {
      console.log('error!');
    }
  });
});
