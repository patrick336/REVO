

//Buttons
var btnAssign = document.querySelector("#js-category");
var btnCategory = btnAssign.querySelectorAll("button"); // getElementsByName equivalent

var gallery = document.getElementById('gallery');
var project = gallery.querySelectorAll('.portfolio-item');
var cover = gallery.querySelectorAll('.portfolio-cover');


for (var i = 0 , size = btnCategory.length ; i < size ; i++) {

	btnCategory[i].addEventListener('click',function(evt){
		removeActiveState();
		this.className += ' active';
		setCategory(evt.target.getAttribute('category'));
	});
}


// usuwa klasę active ze wszystkich przycisków
function removeActiveState() {

	var nameClass = /(?:^|\s)active(?!\S)/g;

	for (var i = 0 , size = btnCategory.length ; i < size ; i++ ) {
		btnCategory[i].className = btnCategory[i].className.replace(nameClass,'');
	}
}

function setCategory (category) {

	var test="";
	category = category.toUpperCase();


	for(var i = 0, size = project.length; i < size; i++) {

		test = project[i].getAttribute("category");
		test = test.toUpperCase();

		if(category == test || category == 'ALL') {

			project[i].className = project[i].className.replace( /(?:^|\s)fade(?!\S)/g , '' );
			cover[i].style.display = 'block';
		 }
		 else {

	 		project[i].className += ' fade';
			cover[i].style.display = 'none';
		 }
	}
}

function setCategoriesBtn () {

	var categories = ['All','Photography','WebDesign','WebDevelopment','Graphic'];

	categories.map(function(item, index) {
		btnCategory[index].setAttribute('category',item);
	});

}

// Nasłuchiwanie zdarzeń
window.addEventListener('load',setCategoriesBtn,false);
// Archiwum


	 // 	var isAppliedClassFadeIn,isAppliedClassFadeOut  = false;

		// if (project[i].className.match(/(?:^|\s)fadeInEffect(?!\S)/))  isAppliedClassFadeIn = true;
		// if (project[i].className.match(/(?:^|\s)fadeOutEffect(?!\S)/))  isAppliedClassFadeOut = true;



// function fadeOUT(element) {
//     var op = 1;  // initial opacity
//     var timer = setInterval(function () {
//         if (op <= 0.2){
//             clearInterval(timer);
//             element.style.opacity = op;
//         }
//         element.style.opacity = op;
//         element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op -= op * 0.5;
//     }, 0.1);
// }

// function fadeIN(element) {
//     var op = 0.1;  // initial opacity
//     // element.style.display = 'block';
//     var timer = setInterval(function () {
//         if (op >= 1){
//             clearInterval(timer);
//         }
//         element.style.opacity = op;
//         element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op += op * 0.5;
//     }, 0.1);
// }
