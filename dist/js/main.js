'use strict';

console.log("Webdev-Final");

var btn = document.querySelector('.btn');

var dropDown = document.querySelector('.text-editors-menu');
console.log(dropDown);

btn.addEventListener('click', function () {
	dropDown.classList.toggle('closed');

	console.log("fick");
});
//# sourceMappingURL=main.js.map
