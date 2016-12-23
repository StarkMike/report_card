//$('#banner').backstretch("/assets/test.gif");

$('#banner-container form').submit(function(e) {
  e.preventDefault();
  $.ajax({
    url: "/",
    type: "POST",
    data: $(this).serialize(),
    success: function(res) {
      console.log('success!');
      $('#results, #spinner').css('display', 'block');
      setTimeout(function() {
        $('#spinner').css('display', 'none');
        $('html, body').stop(true, true).animate({
          scrollTop: $("#results").offset().top + $("#results").height()
        }, 500);
      }, 4000);
    },
    error: function() {
      console.log('error!');
    }
  });
});
