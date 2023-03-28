const card = document.querySelector('.card');
const container = document.querySelector('.container');



container.addEventListener('mousemove', (e) => {
	let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
	let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
	card.style.transform = `rotateX(${-yAxis}deg) rotateY(${xAxis}deg)`;
}) 

container.addEventListener('mouseenter', (e) => {
	
	card.style.transition = 'none';
})

container.addEventListener('mouseleave', (e) => {
	card.style.transition = 'all 0.5s ease';
	card.style.transform = `rotateX(0deg) rotateY(0deg)`;
})