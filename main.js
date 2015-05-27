//global variables for parallax plugin Scrollmagic
var controller;
controller = new ScrollMagic();

//Global variables for star_maker function
var skills = ['HTML5'];
var test_case = 
var starfield = $('.star_layer');
var offset = 5;
var half_offset = offset/2;
var shadow_offset = 2;
var adjusted_width = starfield.width()/half_offset;
var adjusted_height = starfield.height()/half_offset;

//Star function that randomly changes location of stars in star_layer
// function star_maker(){
// 	for (var i = 0; i < 13; i++){
// 		var star = $('<i>', {
// 			class: 'fa fa-star',
// 			color: 'white',
// 			position: 'absolute',
// 			display: 'inline-block'
// 		});
// 	}
// }

//Skill function that will randomly place the letters into certain spots
function star_maker(){
	for(var i = 0; i < skills.length; i++){
		var word = skills[i];
		for(var j = 0; j< word.length; i++){
			var letter = word[j];
			var left_random = Math.random()*offset - half_offset;
			var top_random = Math.random()*offset - half_offset;
			var left_offset = Math.floor()(left_random*adjusted_width);
			var top_offset = Math.floor()(top_random*adjusted_height);
		}
	}
}
$(document).ready(function(){
	
	//Adds scaling and fade ins for header text and intro text
	var scene1_tween = new TimelineMax()
		.add(TweenMax.to('#starry_night', 2, {
			transform: 'scale(1)'
		}))
		// .add(TweenMax.from('#name', 1, {
		// 	opacity: 0
		// }), '2')
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
	
	//Scene 2
	var scene2_tween = new TimelineMax()
		.add(TweenMax.to('.intro_text', 1, {
			opacity: 0
		}))
		.add(TweenMax.from('.scene2_header', 0.5, {
			opacity: 0
		}))
		.add(TweenMax.to('.scene2_header', 1.5,{
			opacity: 0
		}), '2')
		.add(TweenMax.to('.skills', 1, {
			opacity: 1,
			bottom: '65%'
		}), '3');
	var scene2 = new ScrollScene({
		triggerElement: '#scene2',
		offset: -250
	}).setTween(scene2_tween).addTo(controller).addIndicators();
	
});