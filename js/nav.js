			(function ($) {
  $(document).ready(function(){
    
	// hide .navbar first
	$(".navbar-scroll").hide();
	
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 400) {
				$('.navbar-scroll').fadeIn();
			} else {
				$('.navbar-scroll').fadeOut();
			}
			});

		
		});

	});
	  }(jQuery));
	