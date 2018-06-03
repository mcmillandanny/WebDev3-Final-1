'use strict';

var slideShow = function slideShow(time, selector) {
	var $slideshowContainer = document.querySelector(selector);
	var $slides = $slideshowContainer.querySelectorAll('.work-img');
	console.log($slides);
	var currentSlideNumber = 0;
	var intervalID = void 0;

	if (!$slideshowContainer) {
		console.warn("Couldn't create slideShow, element not found");
		return false;
	}

	var hideOldSlide = function hideOldSlide() {
		var $active = $slideshowContainer.querySelector('.active');
	};
};
//# sourceMappingURL=slideshow.js.map
