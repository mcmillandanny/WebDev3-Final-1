console.log("Webdev-Final");



let btn = document.querySelector('.btn');

let dropDown = document.querySelector('.text-editors-menu');
console.log(dropDown)

btn.addEventListener('click', function() {
	dropDown.classList.toggle('closed');

	console.log("fick");
})
	