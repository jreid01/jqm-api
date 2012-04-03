$(document).on("mobileinit", function() {
	$.mobile.loadingMessage = "Hang on a sec...";
	$.mobile.defaultPageTransition = "pop";
	
	/*
	Or you could extend $.mobile using an object literal and jQuery’s $.extend method:
	
	$.extend($.mobile, {
		"loadingMessage" = "Hang on a sec...",
		"defaultPageTransition" = "pop"
	});
	*/

})
