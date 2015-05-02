

$( document ).ready(function() {
	var $sideHandLeft = $('.side_handle_left');
	var $leftSide = $('.left_side');
	var $mainContent = $('.main_content');
	var $sideHandRight = $('.side_handle_right');
	var $rightSide = $('.right_side');
	
	$sideHandLeft.click(function(){
		$(this).toggleClass('side_handle_left_active');
		$leftSide.toggleClass('left_side_active');
		$rightSide.removeClass('right_side_active');
		$sideHandRight.removeClass('side_handle_right_active');

	});
	$mainContent.click(function(){
		$leftSide.removeClass('left_side_active');
		$sideHandLeft.removeClass('side_handle_left_active');
		$rightSide.removeClass('right_side_active');
		$sideHandRight.removeClass('side_handle_right_active');
	});
	$sideHandRight.click(function(){
		$(this).toggleClass('side_handle_right_active');
		$rightSide.toggleClass('right_side_active');
		$leftSide.removeClass('left_side_active');
		$sideHandLeft.removeClass('side_handle_left_active');
	});
});	