var controller;

controller = new ScrollMagic();
$(document).ready(function(){
	// var scene1_pin = new ScrollScene({
	// 	triggerElement: '#scene1',
	// 	offset:210,
	// 	duration: 800
	// }).setPin('#scene1_background').addTo(controller).addIndicators();
	
	var fade_in_name_tween = TweenMax.from('#name', 3, {
		opacity: 0
	});
	var fade_in_name_scene = new ScrollScene({
		triggerElement: '#scene1',
		offset:300
	}).setTween(fade_in_name_tween).addTo(controller).addIndicators();

	var star_pin = new ScrollScene({
		triggerElement: '#scene1',
		offset: 200,
	}).setPin('#starry_night').addTo(controller);
	
	var scale_star_tween = new TweenMax.to('#starry_night', 5, {
		transform: 'scale(1)'
	});
	
	var scale_star_scene = new ScrollScene({
		triggerElement: '#scene1',
		reverse: false,
		offset: 400,
		//duration: 200
	}).setTween(scale_star_tween).addTo(controller).addIndicators();
});