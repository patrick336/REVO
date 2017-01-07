//Buttons
var btnAssign = document.getElementById("js-category");
var btnCategory = btnAssign.querySelectorAll("button"); // getElementsByName equivalent

//Categories
var btnAll = document.getElementById('js-btnAll');
var btnphoto = document.getElementById('js-btnPhoto');
var btnWebDesign = document.getElementById('js-btnWebDesign');
var btnWebDevelopment = document.getElementById('js-btnWebDevelopment');
var btnGraphic = document.getElementById('js-btnGraphic');

var gallery = document.getElementById('gallery');
var project = gallery.querySelectorAll('.portfolio-item');
var cover = gallery.querySelectorAll('.portfolio-cover');


// usuwa klasę active ze wszystkich przycisków
function resetBtn() {
 	
	var nameClass = /(?:^|\s)active(?!\S)/g; 

	for (var i = 0 ; i < btnCategory.length ; i++ ) {
		btnCategory[i].className = btnCategory[i].className.replace(nameClass,'');
	}
}

function setCategory (category) {
	
	var test="";
	category = category.toUpperCase();
	
	

	for(var i = 0; i < project.length ; i++) {	
		 
		test = project[i].getAttribute("category");
		test = test.toUpperCase();

	 // 	var isAppliedClassFadeIn,isAppliedClassFadeOut  = false;

		// if (project[i].className.match(/(?:^|\s)fadeInEffect(?!\S)/))  isAppliedClassFadeIn = true;
		// if (project[i].className.match(/(?:^|\s)fadeOutEffect(?!\S)/))  isAppliedClassFadeOut = true;

		if(category == test) {
		 	// pokazywane elementu na ekranie
		 	// project[i].className = project[i].className.replace(/\s*fadeOutEffect\s*/, ' fadeInEffect ');
		}
		else {

		}
	}
}



//Nasłuchiwanie zdarzeń 
	btnAll.addEventListener('click',function(){ 
	resetBtn();	
	this.className += ' active';
	//kod pokazujacy wszystkie elementy
	});
	btnphoto.addEventListener('click',function(){
	resetBtn();	
	this.className += ' active';
	setCategory('Photography');
	});
	btnWebDesign.addEventListener('click',function(){ 
		resetBtn();	
		this.className += ' active';
		setCategory('WebDesign');
	});
	btnWebDevelopment.addEventListener('click',function(){
		resetBtn();	
		this.className += ' active'; 
		setCategory('WebDevelopment');
	});
	btnGraphic.addEventListener('click',function(){ 
		resetBtn();	
		this.className += ' active';
		setCategory('Graphic');
	});

