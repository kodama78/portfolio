//global variables for parallax plugin Scrollmagic
var controller;
controller = new ScrollMagic();

//Global variables for star_maker function
var skills = ['languages', 'html5', 'css3', 'javascript', 'php', 'mysql'];
var libraries = ['libraries','bootstrap', 'jquery'];
var productivity = ['productivity','git'];
var title = ['technical', 'toolkit'];
var starfield = null;
var offset = null;
var half_offset = null;
var shadow_offset = null;
var adjusted_width = null;
var adjusted_height = null;
var star_array = [];
var title_stars = [];
$(document).ready(function() {
	starfield = $('.star_layer');
    offset = 2;
    half_offset = offset / 2;
    shadow_offset = 2;
    adjusted_width = starfield.width()/ half_offset;
    adjusted_height =starfield.height()/ half_offset;

});
//Skill function that will randomly place the letters into certain spots
function star_object(span, star, letter, position_data, success_function){
    this.span = span;
    this.star = star;
    this.letter = letter;
    this.position_data = position_data;
    this.success_function = success_function;
    this.go_home = function(){
        var _this = this.span;
        var _this_star = this.star;
        var _this_letter = this.letter;
        var _this_showtime = Math.random() * 2500 + 500;
        var _this_left_shadow = this.position_data.left_random.toFixed(2) * shadow_offset;
        var _this_top_shadow = this.position_data.top_random.toFixed(2) * shadow_offset;
        _this = this;
        setTimeout(function() {
            _this_star.removeClass('starshining').css({
                'text-shadow': _this_left_shadow + 'px ' + _this_top_shadow + 'px white',
                '-webkit-filter': 'blur(' + _this_top_shadow + 'px)'
            });
            _this_star.animate({
                left: '2px',
                top: '2px',
                opacity: .5,
                'font-size': '300%'
            }, 1000, function() {
                _this_letter.animate({
                    opacity: 1
                }, 150);
                _this_star.css('opacity', 0);
            })
        }, _this_showtime);        
    }
}

function star_maker(array) {
    var star_array = []
    for (var i = 0; i < array.length; i++) {
        var word = array[i];
        word_string = array[0];
        starfield = $('.'+word_string);
        var word_div = $('<div>');
        for (var j = 0; j < word.length; j++) {
            var letter_string = word[j];
            var left_random = Math.random() * offset - half_offset;
            var top_random = Math.random() * offset - half_offset;
            var left_offset = Math.floor(left_random * adjusted_width);
            var top_offset = Math.floor(top_random * adjusted_height);
            var position_data={
                left_random: left_random,
                top_random: top_random,
            }
            var span = $('<span>');
            var twinkle_start = Math.random() * 5;
            var star = $('<i>').addClass('fa fa-star starshining star').css({
                'left': left_offset + 'px',
                'top': top_offset + 'px',
                '-webkit-animation-delay': twinkle_start + 's',
            });
            var letter = $('<span>', {
                text: letter_string,
                class: 'letter'
            });
            var this_star = new star_object(span, star, letter, position_data);

            star_array.push(this_star);
            span.append(star, letter);
            word_div.append(span);
        }
    starfield.append(word_div);
    }
    return star_array;
}
//This will make fake stars that will be appended to the static star layer
function fake_star_maker(array) {
    for (var i = 0; i < array.length; i++) {
        var word = skills[i];
        for (var j = 0; j < (word.length)*5; j++) {
            var left_random = Math.random() * offset - half_offset;
            var top_random = Math.random() * offset - half_offset;
            var left_offset = Math.floor(left_random * adjusted_width);
            var top_offset = Math.floor(top_random * adjusted_height);
            var random_scale = Math.random() * 1.3;
            var span = $('<span>');
            var twinkle_start = Math.random() * 5;
            var star = $('<i>').addClass('fa fa-star starshining star').css({
                'left': left_offset + 'px',
                'top': top_offset + 'px',
                'transform': 'scale(' + random_scale +')',
                '-webkit-animation-delay': twinkle_start + 's',
            });
            span.append(star);
            $('.star_layer1').append(span);
        }
    }
}
//Calls the star_mover function to move the created stars
function shooting_star(star_array){
    for(var i = 0; i < star_array.length; i++){
        star_array[i].go_home();
    }
}
for (var i = 0; i < 1; i++){
    var tiny_c = $('<div>').addClass('tiny stone');
    var xs_c = $('<div>').addClass('xs stone');
   var small_c = $('<div>').addClass('small stone');
    //var medium_c = $('<div>').addClass('medium');
    //var large_c = $('<div>').addClass('large');
    
    //xs_c.append(tiny_c);
    //small_c.append(xs_c);
    //medium_c.append(small_c);
    //large_c.append(medium_c);
    $('#scene3').append(tiny_c, xs_c, small_c);
}

function ripples(){
    $('.calculator').addClass('word_move');
    setTimeout(function(){
        $('.calculator').addClass('word_stone');
    }, 1000);
    
    setTimeout(function(){
        $('.tiny').addClass('tiny_stone');
    }, 1200);
    
    setTimeout(function(){
      $('.xs').addClass('xs_stone');  
    }, 1270);
    
    setTimeout(function(){
      $('.small').addClass('small_stone');  
    }, 2000);
     setTimeout(function(){
      $('.small').addClass('small_stone_gone');  
    }, 3000);
    
}
$(document).ready(function() {
    //creates the static stars on star_layer1
    fake_star_maker(skills);
    //creates the animated stars that will create the letters for each set of arrays
    title_stars = star_maker(title);
    skills_stars = star_maker(skills);
    libraries_stars = star_maker(libraries);
    productivity_stars = star_maker(productivity);
    //Adds scaling and fade ins for header text and intro text
    var scene1_tween = new TimelineMax()
        .add(TweenMax.to('#starry_night', 2, {
            transform: 'scale(1)'
        }))
        .add(TweenMax.to('.star_layer1', 2, {
        	transform: 'scale(1)'
        }), '0')
        .add(TweenMax.from('.intro_text', 0.5, {
            opacity: 0,
        }), '0.5')
    var scene1 = new ScrollScene({
            triggerElement: '#scene1',
            reverse: false,
            offset: 400
        }).setTween(scene1_tween).addTo(controller).addIndicators();

    //pins the night_sky to screen
    var scene1_pin = new ScrollScene({
        triggerElement: '#starry_night',
        offset: 320,
        //duration: 500
    }).setPin('#starry_night').addTo(controller).addIndicators();

    //Scene 2
    var scene2_tween = new TimelineMax()
        .add(TweenMax.to('.intro_text', 1, {
            opacity: 0
        }))
        // .add(TweenMax.from('.scene2_header', 0.5, {
        //     opacity: 0
        // }))
        // .add(TweenMax.to('.scene2_header', 1.5, {
        //     opacity: 0
        // }), '2')
    var scene2 = new ScrollScene({
        triggerElement: '#scene2',
        offset: -300
    }).setTween(scene2_tween).addTo(controller).addIndicators();

    //Scene that calls the star_maker function
    var title_mover = new ScrollScene({
        triggerElement: '#scene2',
        reverse: false,
        offset: -250
    }).on('start', function(){
        shooting_star(title_stars);
    }).addTo(controller).addIndicators();
    
     var skills_mover = new ScrollScene({
        triggerElement: '#scene2',
        reverse: false,
        offset: -190
    }).on('start', function(){
        shooting_star(skills_stars);
    }).addTo(controller).addIndicators();

    var libraries_mover = new ScrollScene({
        triggerElement: '#scene2',
        reverse: false,
        offset: -170
    }).on('start', function(){
        shooting_star(libraries_stars);
    }).addTo(controller).addIndicators();

    var productivity_mover = new ScrollScene({
        triggerElement: '#scene2',
        reverse: false,
        offset: -150
    }).on('start', function(){
        shooting_star(productivity_stars);
    }).addTo(controller).addIndicators();
    //pins the star layer to #starry_night
    var star_layer_pin = new ScrollScene({
        triggerElement: '#scene2',
        offset: -170,
        duration: 800
    }).setPin('.star_layer',{
        pushFollowers: true
    }).addTo(controller).addIndicators();

    // var scene3_tween = new TimelineMax()
    //     .add(TweenMax.from('.small_dream', 1, {
    //         opacity: 0,
    //     }), '0.5')
    //     .add(TweenMax.from('.medium_dream', 1, {
    //         opacity: 0,
    //     }), '0.25')
    //     .add(TweenMax.from('.big_dream', 1, {
    //         opacity: 0,
    //     }),'0.25')
    // var scene3_scroll = new ScrollScene({
    //     triggerElement: '#scene3',
    //     offset: -250,
    // }).setTween(scene3_tween).addTo(controller).addIndicators();
});
