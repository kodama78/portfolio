$( document ).ready(function() {
	
	var $leftside = $('.left_side');

	$leftside.click(function(){
		$(this).toggleClass('left_side_active');
	});

	var $rightside = $('.right_side');

	$rightside.click(function(){
		$(this).toggleClass('right_side_active');
	});
});	