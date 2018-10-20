$(function () {
	"use strict";
	// On Scroll  Nav background color change//
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll > 300) {
			$(".navbar").addClass("nav-background");
		} else {
			$(".navbar").removeClass("nav-background");
		}
	});

	$(document).ready(function() {
		// Counter Up//
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});

		// filter
		var containerEl = document.querySelector('.mixingcon');
		var mixer = mixitup(containerEl, {
			selectors: {
				control: '.mixitup-control button'
			}
		});

		// Testimonial Slider//
		$('.owl2').owlCarousel({
			loop: true,
			margin: 15,
			nav: false,
			autoplay: true,
			dots: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 2
				}
			}
		});

		// PrettyPhoto
		$("a[data-rel^='prettyPhoto']").prettyPhoto();
	});
	//Smooth Scroll//
	$(".navbar-nav .nav-link").on("click", function (e) {
		e.preventDefault();
		var hash = this.hash;
		var position = $(hash).offset().top;
		$("html").animate({
			scrollTop: position - 80
		}, 1000);
		// Navbar collapse on click
		$('.navbar-collapse').collapse('hide');
	});

	// Contact form

});