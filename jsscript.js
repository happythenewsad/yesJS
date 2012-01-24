

//returns true when the top of elem is in the viewport
function inView(elem) {
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    var elemTop = $(elem).offset().top;
	return ((elemTop >= viewportTop) && (elemTop <= viewportBottom));
};

$(document).ready(function() {
	var fadeInTime = 750;
	var fadeOutTime = 500;
	var eventElemName = '#content4';
	var targetElemName = '#box';
	

	
	$(window).scroll(function() {
		if (inView(eventElemName)) {
			//testing:
			//alert("fading in\n docViewTop: " + $(window).scrollTop() + "\ndocViewBottom: " + ($(window).scrollTop() + $(window).height()) + "\nelemTop: " +  $('#content4').offset().top  );
			$(targetElemName).fadeIn(fadeInTime);
		}
		else {
			$(targetElemName).fadeOut(fadeOutTime);

		}
	});



});

