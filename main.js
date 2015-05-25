var controller;

controller = new ScrollMagic();
$(document).ready(function(){
	//Adds scaling and fade ins for header text and intro text
	var scene1_tween = new TimelineMax()
		.add(TweenMax.to('#starry_night', 2, {
			transform: 'scale(1)'
		}))
		.add(TweenMax.from('#name', 1, {
			opacity: 0
		}), '2')
		.add(TweenMax.from('.intro_text', 1, {
			opacity: 0,
		}),'0.5')
	var scene1 = new ScrollScene({
		triggerElement: '#scene1',
		//reverse: false,
		offset: 420
	})
	.setTween(scene1_tween).addTo(controller).addIndicators();
	
	//pins the night_sky to screen
	var star_pin = new ScrollScene({
		triggerElement: '#starry_night',
		offset: 320,
		//duration: 500
	}).setPin('#starry_night').addTo(controller);
	
	//Might be used for scene 2
	var scene2_tween = new TimelineMax()
		.add(TweenMax.to('.intro_text', 1, {
			opacity: 0
		}))
		// .add(TweenMax.from)
	var scene2 = new ScrollScene({
		triggerElement: '#scene2',
		offset: -150
	}).setTween(scene2_tween).addTo(controller).addIndicators();
	
});