



(function($) { 
	"use strict";

	
//For background slider
$(function() {

	$( '#ri-grid' ).gridrotator( {
		rows		: 4,
		columns		: 8,
		animType	: 'fadeInOut',
		animSpeed	: 1000,
		interval	: 600,
		step		: 1,
		
		w1024		: {
			rows	: 5,
			columns	: 6
		},
		w768		: {
			rows	: 7,
			columns	: 4
		},
		w480		: {
			rows	: 4,
			columns	: 3
		},
		w320		: {
			rows	: 4,
			columns	: 2
		},
		w240		: {
			rows	: 4,
			columns	: 2
		}
	} );

});



// for banner height js
var windowWidth = $(window).width();
var windowHeight =$(window).height();
$('.banner').css({'width':windowWidth ,'height':windowHeight -"60" });




// for portfoli filter jquary
$(window).load(function(){
	var $container = $('.portfolioContainer');
	$container.isotope({
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		}
	});

	$('.portfolioFilter a').click(function(){
		$('.portfolioFilter .current').removeClass('current');
		$(this).addClass('current');

		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
		return false;
	}); 
});






// Somth page scroll
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top -60
				}, 1000);
				return false;
			}
		}
	});
});




}(jQuery));
