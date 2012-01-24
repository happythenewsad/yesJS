//returns true when the top of elem is in the viewport
function inView(elem) {
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    var elemTop = $(elem).offset().top;
	return ((elemTop >= viewportTop) && (elemTop <= viewportBottom));
};

$(document).ready(function() {

	$(window).scroll(function() {
		if (inView('#content4')) {
			//testing:
			//alert("fading in\n docViewTop: " + $(window).scrollTop() + "\ndocViewBottom: " + ($(window).scrollTop() + $(window).height()) + "\nelemTop: " +  $('#content4').offset().top  );
			$('#box').fadeIn(750);
		}
		if (!inView('#content4')) {
			$('#box').fadeOut(500);
		}
	});



});

