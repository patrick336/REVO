// javascript code 
window.onload = function () {

	var bars = document.getElementsByClassName('js-percent-loading');
	var labels = document.getElementsByClassName('js-label');
//Procedury funkcji 
	function playAnimation() {
	var i = 0;
	var timer = setInterval(function () {
		if (i < bars.length) {
			bars[i].style.animationPlayState = "running";
			labels[i].style.animationPlayState = "running";
			i++;
		}
		else clearInterval(timer);
	}, 300);
}
	function startAnimate() {
	var distance = document.getElementById('js-skills').getBoundingClientRect().top;
	if (0 < distance && distance < 150) {
		playAnimation();
	}
}
// NASŁUCHIWANIE ZDARZEŃ 
	window.addEventListener('scroll', startAnimate, false);
}; //primitywne ready 

//window.addEventListener('load',resetValuesAnimation,false);

//jQuery
//var percent = ['80%', '35%', '75%', '99%'];
//
//function start($element, index) {
//	$element.animate({
//		width: percent[index]
//	}, 1500, function () {
//		$('.js-label').eq(index).fadeIn(1000);
//	})
//}
//
//start($('.js-percent-loading').eq(0),0);
//function resetValuesAnimation() {
//	for (i = 0; i < bars.length; i++) {
//		bars[i].style.width = "0px";
//		labels[i].style.opacity = 0;
//	}
//}