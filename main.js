var controller;

controller = new ScrollMagic();
$(document).ready(function(){
	var scene1_pin = new ScrollScene({
		triggerElement: '#scene1',
		offset:210,
		duration: 800
	}).setPin('#scene1_background').addTo(controller).addIndicators();

	var remove_greyscale = TweenMax.to('#scene1_background', 3, {
		'-webkit-filter': 'grayscale(0%)',
		'filter': 'grayscale(0%)',
	});	
	var fadeInName = TweenMax.from('#name', 5, {
		opacity: 0
	});
	var scene1 = new ScrollScene({
		triggerElement: '#scene1',
	}).setTween(fadeInName).addTo(controller).addIndicators();

	var scene2 = new ScrollScene({
		triggerElement: '#scene1',
		offset: 500,
	}).setTween(remove_greyscale).addTo(controller).addIndicators();
});