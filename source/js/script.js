$(function(){
	$('.join').on('click','.js-btn-join',function(e){
		e.preventDefault();
		$btn = $(this)
		$btn.toggleClass('active');
		$('.apply').stop().slideToggle(460);
		var currentScroll = $(window).scrollTop(),
			btnPosition = $btn.offset().top,
			distance = Math.abs(currentScroll - btnPosition),
			speed = 1000,
			time = (distance/speed)*1000;

		$body.animate({scrollTop: btnPosition - 50}, time);

	});


	var $body = $('html, body');

	$body.on('click','.js-smooth-scroll', function() {
		smoothScroll($(this));
		e.preventDefault();
	});

	function smoothScroll(anchor) {
		var $anchor = $(anchor),
			$el = $($anchor.attr('href')),
			distance = Math.abs($el.offset().top - $anchor.offset().top),
			speed = 2000,
			time = (distance/speed)*1000,
			customSpeed = $anchor.data('smoothspeed');

		$body.animate({scrollTop: $el.offset().top}, customSpeed ? customSpeed : time);
		return false;
	}

});