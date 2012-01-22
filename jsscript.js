
function inView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};

$(document).ready(function() {


	$(window).scroll(function() {
		//alert(inView('#content4'));
		if (inView('#content4')) {
			$('#box').fadeIn(3000);
		}
	});


	//uncomment this to play with onmousemove
  	onmousemove = function(){ 
		//$('#content3').append("mouse moved\n!");
	};

});

