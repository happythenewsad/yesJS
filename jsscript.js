
function inView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};



$(document).ready(function() {


	$(window).scroll(function() {
		
		if (inView('#content4')) {

			$('#box').fadeIn(1000);

		}
		if (!inView('#content4')) {

			$('#box').fadeOut(500);
		}
		
	});



});

