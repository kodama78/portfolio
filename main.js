//global variables for parallax plugin Scrollmagic
var controller;
controller = new ScrollMagic({
    globalSceneOptions: {triggerHook: .25} 
});

//Global variables for star_maker function
var skills = ['languages', 'html5', 'css3', 'javascript', 'php', 'mysql'];
var libraries = ['libraries', 'bootstrap', 'jquery'];
var productivity = ['productivity', 'git'];
var title = ['technical', 'toolkit'];
var projects = ['calculator', 'tic-tac-toe', 'todo', 'journal']
var starfield = null;
var offset = null;
var half_offset = null;
var shadow_offset = null;
var adjusted_width = null;
var adjusted_height = null;
var title_stars = []; //used in the star_maker function in the document ready to hold the stars created by the same named array above
var skills_stars = [];//used in the star_maker function in the document ready to hold the stars created by the same named array above
var libraries_stars = [];//used in the star_maker function in the document ready to hold the stars created by the same named array above
var productivity_stars = [];//used in the star_maker function in the document ready to hold the stars created by the same named array above
var project_array = [];//used in the star_maker function in the document ready to hold the stars created by the same named array above

//This document ready is used to make sure that the star_maker 
//functions will not error out
$(document).ready(function() {
    starfield = $('.star_layer');
    offset = 2;
    half_offset = offset / 2;
    shadow_offset = 2;
    adjusted_width = starfield.width() / half_offset;
    adjusted_height = starfield.height() / half_offset;

});
/*
===================================================
STARMAKER FUNCTIONS
===================================================
*/
/*Skill function that will place the stars according to their random information given to it
by the star_maker function. Attaches a closure that will cause the stars to shoot back to
their original spots after a timeout which is set by showtime so that they shoot back at
different times*/
function star_object(span, star, letter, position_data, success_function) {
    this.span = span;
    this.star = star;
    this.letter = letter;
    this.position_data = position_data;
    this.success_function = success_function;
    this.go_home = function() {
        var _this = this.span;
        var _this_star = this.star;
        var _this_letter = this.letter;
        var _this_showtime = Math.random() * 2500 + 500;
        // var _this_left_shadow = this.position_data.left_random.toFixed(2) * shadow_offset;
        // var _this_top_shadow = this.position_data.top_random.toFixed(2) * shadow_offset;
        _this = this;
        setTimeout(function() {
            _this_star.removeClass('starshining');
            // .css({
            //     'text-shadow': _this_left_shadow + 'px ' + _this_top_shadow + 'px white',
            //     '-webkit-filter': 'blur(' + _this_top_shadow + 'px)'
            // });
            _this_star.animate({
                left: '2px',
                top: '2px',
                opacity: 1,
                'font-size': '200%',
                'margin-left':'30%'
            }, 400, function() {
                _this_letter.animate({
                    opacity: 1
                }, 150);
                _this_star.css('opacity', 0);
            })
        }, _this_showtime);
    }
}
/*
===================================================
MODAL FUNCTION FOR PROJECTS_STAR_MAKER
===================================================
*/
//This function will create a modal based on the id and strings in the projects array.
//Function will also remove the previous modal and append it to scene 3 each time. The
//ID of the modal will be determined 
function get_projects_modal_info_from_server(projects, project_name){
    for(var i = 0; i < projects.length; i++){
        if(projects[i] == project_name){

            page = 'assets/pages/modal.php?content='+projects[i];
            $.ajax({
                dataType: 'html',
                method: 'GET',
                url: page,
                success: function(response){
                    console.log(response);
                    $('#dreamModal').html('');
                    $('#dreamModal').append(response);
                }
            });
        }
    }
}
/* This does the same as the starmaker function but removes the second for loop and only
creates stars for the words. Done to lower load on CPU and GPU*/
function project_star_maker(array){
    for (var i = 0; i < array.length; i++) {
        var word = array[i];
        var word_div = $('<div>').addClass('projects_position col-sm-3 '+ array[i]).css({
            'height':'150px',
            'text-align':'center',
            'cursor': 'pointer',
            'z-index': 2,
        }).click(function(){
            var project_name = $(this).text();
            get_projects_modal_info_from_server(projects, project_name);
            $('#dreamModal').modal('show');
        });
        var left_random = Math.random() * (offset/2);
        var top_random = Math.random() * -(offset/2);
        var left_offset = Math.floor(left_random * adjusted_width);
        var top_offset = Math.floor((top_random * adjusted_height)/2);
        var position_data = {
            left_random: left_random,
            top_random: top_random,
        }
        var span = $('<span>');
        //var twinkle_start = Math.random() * 5;
        var star = $('<i>').addClass('fa fa-star star').css({
            'left': left_offset + 'px',
            'top': top_offset + 'px',
            // '-webkit-animation-delay': twinkle_start + 's',
        });

        var letter = $('<span>', {
            text: word,
            class: 'project_word'
        });
        var this_star = new star_object(span, star, letter, position_data);
        project_array.push(this_star);
        span.append(star, letter);
        word_div.append(span);
        $('.project_div').append(word_div);
    }
}
//creates the stars by running through the words in the array and then
//running through the letters of each string. It then creates the letter and a star for
//each one and then randomly places the star on the DOM according to the star_object function to create 
//The star_object gives it an animate that will pull it back to its original position from
//its random position. It will then save it to an array and return the array.
function star_maker(array) {
        var star_array = []
        for (var i = 0; i < array.length; i++) {
            var word = array[i];
            word_string = array[0];
            starfield = $('.' + word_string);
            var word_div = $('<div>');
            for (var j = 0; j < word.length; j++) {
                var letter_string = word[j];
                var left_random = Math.random() * offset - half_offset;
                var top_random = Math.random() * offset - half_offset;
                var left_offset = Math.floor(left_random * adjusted_width);
                var top_offset = Math.floor(top_random * adjusted_height);
                var position_data = {
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
            for (var j = 0; j < (word.length) * 3; j++) {
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
                    'transform': 'scale(' + random_scale + ')',
                    '-webkit-animation-delay': twinkle_start + 's',
                });
                span.append(star);
                $('.star_layer1').append(span);
            }
        }
    }
//Calls the star_mover function to move the created stars
function shooting_star(star_array) {
    for (var i = 0; i < star_array.length; i++) {
        star_array[i].go_home();
    }
}
/*
===================================================
RIPPLE FUNCTIONS
===================================================
*/
//creates divs for ripples
function ripple_maker() {
    for (var i = 0; i < projects.length; i++) {
        var tiny_c = $('<div>').addClass('tiny stone');
        var xs_c = $('<div>').addClass('xs stone');
        var small_c = $('<div>').addClass('small stone');
        $('.'+ projects[i]).append(tiny_c, xs_c, small_c);
    }
}

//applies the classes to the divs in ripplemaker to create ripple effect
function ripples() {
    setTimeout(function(){
        $('.project_word').addClass('word_stone');
    }, 500);
    setTimeout(function() {
        $('.tiny').addClass('tiny_stone');
    }, 1000);

    setTimeout(function() {
        $('.xs').addClass('xs_stone');
    }, 1270);

    setTimeout(function() {
        $('.small').addClass('small_stone');
    }, 1800);
    setTimeout(function() {
        $('.small').addClass('small_stone_gone');
    }, 3000);
    setTimeout(function(){
        $('.small_stone_gone').hide();
    },6000);

}
/*
===================================================
DOCUMENT READY
===================================================
*/
$(document).ready(function() {
    // project_star_maker(projects);
    //ripple_maker(); 
    //creates the static stars on star_layer1
    //fake_star_maker(skills);
    //creates the animated stars that will create the letters for each set of arrays
    title_stars = star_maker(title);
    skills_stars = star_maker(skills);
    libraries_stars = star_maker(libraries);
    productivity_stars = star_maker(productivity);var scene1_text_fade_in_offset = $('#scene1_text_fade_in_offset').offset();
    scene1_text_fade_in_offset = scene1_text_fade_in_offset.top;
    var scene1_pin_offset = $('#scene1_pin_offset').offset();
    scene1_pin_offset = scene1_pin_offset.top;
    var scene1_text_fade_out_offset = $('#scene1_text_fade_out_offset').offset();
    scene1_text_fade_out_offset = scene1_text_fade_out_offset.top;
    var scene1_title_star_func_call = $('#scene1_title_star_func_call').offset();
    scene1_title_star_func_call = scene1_title_star_func_call.top;
    var scene1_skill_star_func_call = $('#scene1_skill_star_func_call').offset();
    scene1_skill_star_func_call = scene1_skill_star_func_call.top;
    var scene1_libraries_star_func_call = $('#scene1_libraries_star_func_call').offset();
    scene1_libraries_star_func_call = scene1_libraries_star_func_call.top;
    var scene1_productivity_star_func_call = $('#scene1_productivity_star_func_call').offset();
    scene1_productivity_star_func_call = scene1_productivity_star_func_call.top;
    var scene1_star_pin = $('#scene1_star_pin').offset();
    scene1_star_pin = scene1_star_pin.top;
    /*
    ========================================================
    SCENE 1
    ========================================================
    */
    //Adds scaling and fade ins for header text and intro text
    
    var scene1_tween = new TimelineMax()
        .add(TweenMax.to('#starry_night', 2.5, {
            transform: 'scale(1)'
        }))
        .add(TweenMax.to('.star_layer1', 3.5, {
            transform: 'scale(1)'
        }), '0')
        .add(TweenMax.from('.intro_text', 1.5, {
            opacity: 0,
        }), '2');

    var scene1 = new ScrollScene({
        triggerElement: '#scene1',
        offset: scene1_text_fade_in_offset,
        reverse: false,
    }).setTween(scene1_tween).addTo(controller).addIndicators();

    //pins the night_sky to screen. This will determine where the first scene is in relation
    //to the header. REMEMBER THIS!
    
    var scene1_pin = new ScrollScene({
        triggerElement: '#scene1',
        offset: scene1_pin_offset,
    }).setPin('#starry_night').addTo(controller).addIndicators();

    /*
    ========================================================
    SCENE 2
    ========================================================
    */
    
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
        triggerElement: '#scene1',
        offset: scene1_text_fade_out_offset,
    }).setTween(scene2_tween).addTo(controller).addIndicators();

    //Scene that calls the star_maker function
    
    var title_mover = new ScrollScene({
        triggerElement: '#scene1',
        offset: scene1_title_star_func_call,
        reverse: false,
    }).on('start', function() {
        shooting_star(title_stars);
    }).addTo(controller).addIndicators();

   
    var skills_mover = new ScrollScene({
        triggerElement: '#scene1',
        reverse: false,
        offset: scene1_skill_star_func_call,
    }).on('start', function() {
        shooting_star(skills_stars);
    }).addTo(controller).addIndicators();

    
    var libraries_mover = new ScrollScene({
        triggerElement: '#scene1',
        reverse: false,
        offset: scene1_libraries_star_func_call,
    }).on('start', function() {
        shooting_star(libraries_stars);
    }).addTo(controller).addIndicators();

    
    var productivity_mover = new ScrollScene({
        triggerElement: '#scene1',
        reverse: false,
        offset: scene1_productivity_star_func_call,
    }).on('start', function() {
        shooting_star(productivity_stars);
    }).addTo(controller).addIndicators();
    //pins the star layer to #starry_night
    
    var star_layer_pin = new ScrollScene({
        triggerElement: '#scene1',
        offset: scene1_star_pin,
        duration: 1000
    }).setPin('.star_layer', {
        pushFollowers: true
    }).addTo(controller).addIndicators();
    
    // var skills_fadeout = new TimelineMax()
    //     .add(TweenMax.to('#scene1_title_star_func_call', 1, {
    //         opacity: 0
    //     }))
         // .add(TweenMax.from('.scene2_header', 0.5, {
        //     opacity: 0
        // }))
        // .add(TweenMax.to('.scene2_header', 1.5, {
        //     opacity: 0
        // }), '2')
    // var skill_fader = new ScrollScene({
    //     triggerElement: '#scene1',
    //     offset: scene1_text_fade_out_offset,
    // }).setTween(skills_fadeout).addTo(controller).addIndicators();
    /*
    ========================================================
    SCENE 3
    ========================================================
    */
    var project_mover = new ScrollScene({
        triggerElement: '#scene3',
        offset: -50,
        reverse: false,
    }).on('start', function(){
        shooting_star(project_array);
    }).addTo(controller).addIndicators();
    //ripples the words
    var ripple_start = new ScrollScene({
        triggerElement: '#scene3',
        offset: -50,
    }).on('start', function() {
        setTimeout(function(){
            ripples();
        }, 500);
        
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
