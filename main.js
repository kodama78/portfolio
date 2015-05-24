var controller;

controller = new ScrollMagic();
$(document).ready(function(){
	// var scene1_pin = new ScrollScene({
	// 	triggerElement: '#scene1',
	// 	offset:210,
	// 	duration: 800
	// }).setPin('#scene1_background').addTo(controller).addIndicators();
	
	// var fade_in_name_tween = TweenMax.from('#name', 3, {
	// 	opacity: 0
	// });
	// var fade_in_name_scene = new ScrollScene({
	// 	triggerElement: '#scene1',
	// 	offset:300
	// }).setTween(fade_in_name_tween).addTo(controller).addIndicators();
	
	// var star_pin = new ScrollScene({
	// 	triggerElement: '#starry_night',
	// 	offset: 320,
	// }).setPin('#starry_night').addTo(controller);

	var scene1_tween = new TimelineMax()
		// .add(ScrollScene({triggerElement: '#starry_night', offset: 320})
		// 	.setPin('#starry_night'), 0)
		.add(TweenMax.to('#starry_night', 3, {
			transform: 'scale(1)'
		}))
		.add(TweenMax.from('#name', 1, {
			opacity: 0
		}), '2')
		.add(TweenMax.from('.intro_text', 2, {
			opacity: 0
		}), '6');
		var scene1 = new ScrollScene({
			triggerElement: '#scene1',
			// reverse: false,
			offset: 320
		})
		.setTween(scene1_tween).addTo(controller).addIndicators();
		var star_pin = new ScrollScene({
			triggerElement: '#starry_night',
			offset: 320,
		}).setPin('#starry_night').addTo(controller);
	
	// var scale_star_tween = new TweenMax.to('#starry_night', 5, {
	// 	transform: 'scale(1)'
	// });
	
	// var scale_star_scene = new ScrollScene({
	// 	triggerElement: '#scene1',
	// 	reverse: false,
	// 	offset: 420,
	// 	//duration: 200
	// }).setTween(scale_star_tween).addTo(controller).addIndicators();
});