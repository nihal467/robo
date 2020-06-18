


(function ($) {
	"use strict";

	new WOW().init();
	

}(jQuery));
$(function () {


	$(window).on("scroll", function () {
		var bodyScroll = $(window).scrollTop(),
			navbar = $(".navbar")
		if (bodyScroll > 300) {
			navbar.addClass("fixed-top");
		} else {
			navbar.removeClass("fixed-top");
		}
	});
	

});


