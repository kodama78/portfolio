$( document ).ready(function() {
	
	var $leftside = $('.left_side');
	var $rightside = $('.right_side');
	var $maininformation = $('.main-information');

	$leftside.click(function(){
		$(this).toggleClass('left_side_active');
		$maininformation.addClass('main-information-active');
		if ($rightside.hasClass('right_side_active')) {
			$rightside.removeClass('right_side_active');
		}
	});

	$rightside.click(function(){
		$(this).toggleClass('right_side_active');
		$maininformation.addClass('main-information-active');
		if ($leftside.hasClass('left_side_active')) {
			$leftside.removeClass('left_side_active');
		}
	});
	$maininformation.click(function(){
		if ($leftside.hasClass('left_side_active') || $rightside.hasClass('right_side_active')) {
			$leftside.removeClass('left_side_active');
			$rightside.removeClass('right_side_active');
		}
		if ($maininformation.hasClass('main-information-active')) {
			$maininformation.removeClass('main-information-active');
		}
	});
});	