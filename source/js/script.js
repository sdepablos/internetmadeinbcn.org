$(function(){
	$('.join').on('click','.js-btn-join',function(e){
		// Dont' follow the link
		e.preventDefault();

		// Scrolling vars
		var $btn = $(this),
			currentScroll = $(window).scrollTop(),
			btnPosition = $btn.offset().top,
			distance = Math.abs(currentScroll - btnPosition),
			speed = 1000,
			time = (distance/speed)*1000;

		// Toggle join form section display
		$btn.toggleClass('active');
		$('.apply').stop().slideToggle(460);

		// Scroll to join form section
		$('html, body').animate({scrollTop: btnPosition - 50}, time);

	});
});