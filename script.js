var colorBtn = document.querySelector('.colorBtn');
var bodyBcg = document.querySelector('body');

var colors = ['red', 'green', 'blue', 'yellow', '#ccc', '#fff', '#000'];

colorBtn.addEventListener('click',changeColor);

function changeColor() {
	let random = Math.floor(Math.random()*colors.length);
	bodyBcg.style.backgroundColor = colors[random];

	// console.log(random);
}