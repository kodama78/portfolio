$( document ).ready(function() {
	
	var $leftSide = $('.left_side');
	var $rightSide = $('.right_side');
	var $mainContentHolder = $('.main-content-holder');
	var $mainInformation = $('.main-information');

	$leftSide.click(function(){
		$(this).toggleClass('left_side_active');
		$mainInformation.toggleClass('main-information-active');
		if ($rightSide.hasClass('right_side_active')) {
			$rightSide.removeClass('right_side_active');
		}
	});

	$rightSide.click(function(){
		$(this).toggleClass('right_side_active');
		$mainInformation.addClass('main-information-active');
		if ($leftSide.hasClass('left_side_active')) {
			$leftSide.removeClass('left_side_active');
		}
	});
	$mainContentHolder.click(function(){
		if ($leftSide.hasClass('left_side_active') || $rightSide.hasClass('right_side_active')) {
			$leftSide.removeClass('left_side_active');
			$rightSide.removeClass('right_side_active');
		}
		if ($mainInformation.hasClass('main-information-active')) {
			$mainInformation.removeClass('main-information-active');
		}
	});
	if (!$leftSide.hasClass("left_side_active") && !$rightSide.hasClass("right_side_active")) {
    	$mainnformation.removeClass('main-information-active');
    }
});	