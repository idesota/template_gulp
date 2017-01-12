function $id(id) { return document.getElementById(id); }
function $class(c) { return document.getElementsByClassName(c); }

/*example
var elements = $id('name');
var elements = $class('name').item(0);
*/

var hasClass = function (elem, className) { return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');}
var addClass = function (elem, className) { if (!hasClass(elem, className)) { elem.className += ' ' + className;}}
var removeClass = function (elem, className) { var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' '; if (hasClass(elem, className)) {while (newClass.indexOf(' ' + className + ' ') >= 0 ) { newClass = newClass.replace(' ' + className + ' ', ' '); } elem.className = newClass.replace(/^\s+|\s+$/g, '');}}

/*example
addClass($id('sample'), 'sampleStyle');
removeClass($id('sample'), 'sampleStyle');
*/

// window.addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode == 13) {
//         document.getElementById("button").click();
//     }
// });

// window.scrollTo( 0, 0 ) ;

$(function(){
	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});

	// $("button").click(function(){
	// });

// $(window).scroll(function () {
//        if($(window).scrollTop() >= scrollPosC) {
//        } else {
//        }
//    });

// Waypoint.refreshAll();

// $('.js-p2').waypoint({
//         handler: function() {
//         	addClass(about, 'about_m');
			// this.destroy();
//         },
//         offset: '70%'
// });

// $(".works_box").hover(
// 	  function () {
// 	    $(this).find(".caption").addClass("works_box_on");
// 	    $(this).find(".caption").removeClass("works_box_of");
// 	  },
// 	  function () {
// 	    $(this).find(".caption").addClass("works_box_of");
// 	    $(this).find(".caption").removeClass("works_box_on");
// 	  }
// );


});

/*hoge*/