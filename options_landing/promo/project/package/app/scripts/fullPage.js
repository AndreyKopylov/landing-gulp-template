$(function () {

	'use strict';

	$(document).ready(function () {
		$('#fullPage').fullpage({
			// Navigation
			menu: false,
			anchors:['firstSlide', 'secondSlide'],
			navigation: false,

			css3: true,
			scrollingSpeed: 700,
			autoScrolling: true,
			fitToSection: true,
			scrollBar: false,
			easing: 'easeInOutCubic',
			easingcss3: 'ease',
			loopBottom: false,
			loopTop: false,
			loopHorizontal: true,
			continuousVertical: false,
			scrollOverflow: false,
			touchSensitivity: 15,
			normalScrollElementTouchThreshold: 5
		});
	});

});

