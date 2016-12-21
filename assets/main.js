$('#banner').backstretch("/assets/test.gif");

$('#banner-container form').submit(function(e) {
  e.preventDefault();
  $.ajax({
    url: "/",
    type: "POST",
    data: $(this).serialize(),
    success: function(res) {
      console.log('success!');
      $(this).scrollTop($(this)[0].scrollHeight);
    },
    error: function() {
      console.log('error!');
    }
  });
});
