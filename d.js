// Add click event listener to box
var box = document.querySelector('.box');
box.addEventListener('click', function() {
	// Toggle class 'rotate' on box
	this.classList.toggle('rotate');
});
