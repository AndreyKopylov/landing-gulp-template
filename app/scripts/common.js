$(document).ready(function () {
	$('#fullpage').fullpage({
		// Navigation
		menu: false,
		sectionSelector: '.tab',
		anchors:['firstSlide', 'secondSlide', 'thirdSlide'],
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


