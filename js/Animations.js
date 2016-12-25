	// Zmienne globalne	
	var content = $('.person-container');
	var contentLength = content.find('.person').length;
	var dot = $('.dots').find('.dot');
	var current = 0;
	var offset = 400;
	var timer1 = 0;
	// Funkcje 
	setAnimate();
	timer1 = setTimeout(next, 10000);

	function setAnimate() {
		var temp = $('.dots').find('div');
		temp.each(function (index, value) {
			$(value).attr('data-tmp', index);
		});
		content.first().show();
		dot.first().addClass('active-dot');
	}

	function next() {
		current++;
		change();
	}

	function setDot() {
		dot.removeClass('active-dot');
		dot.eq(current).addClass('active-dot');
	}

	function change() {
		if (current < 0) current = contentLength - 1;
		if (current > contentLength - 1) current = 0;
		setDot();
		content.animate({
			'marginTop': -(current % contentLength) * offset
		}, 1000);
		timer1 = setTimeout(next, 10000);
	}
	// Nasłuchiwanie zdarzeń
	dot.click(function () {
		clearTimeout(timer1);
		current = $(this).attr('data-tmp');
		change();
	});


/////////// 	BLOG SLIDERS ANIMATION   //////////////////////////

///////////////////////////  SLIDER #0 ////////////////////////////
//	var slider0 = ['images/sliders-images/photo-1.jpeg',
//					'images/sliders-images/photo-2.jpeg',
//					'images/sliders-images/photo-3.jpeg'];
//
/////////////////////////////  SLIDER #1 ////////////////////////////
//	var slider1 = ['images/sliders-images/photo-4.jpeg',
//					'images/sliders-images/photo-5.jpeg',
//					'images/sliders-images/photo-6.jpeg'];
//
/////////////////////////////  SLIDER #2 ////////////////////////////
//	var slider2 = ['images/sliders-images/photo-7.jpeg',
//					'images/sliders-images/photo-8.jpeg',
//					'images/sliders-images/photo-9.jpeg'];
//
//
//	var allImages = [];
//
//	allImages[0] = slider0;
//	allImages[1] = slider1;
//	allImages[2] = slider2;
	

	var pos=0;
////////////////////// Funkcje  /////////////////
	



	function setSlider() {
		var temp = $('.blog-sliders');
		temp.each(function (index, value) {
			$(value).attr('data-index',index);
		});
	}
	function setImage () {
	 	var indexImage = $('.blog-sliders > img');
	 	indexImage.each(function (index,value){
	 		$(value).attr('indexImage',0);
	 	});
	}
	
	function fade ($element,nrSlider,pos){
		
		var imgPath = data.slider[nrSlider].position[pos].src;
		var imgTitle = data.slider[nrSlider].position[pos].title;
		var imgAlt = data.slider[nrSlider].position[pos].alt;
		
		$element.fadeOut('fast', function () { 
			$(this).attr({ 
				src: imgPath,
				title: imgTitle,
				alt: imgAlt,
				'indexImage': pos
			}).fadeIn('slow'); 
		});
	}

// Wywołanie funkcji

	setSlider();
	setImage();




///////////////   Nasłuchiwanie zdarzeń ////////////////////////////
	
	$('.next').click(function () {
		//Aktualna pozycja na ekranie
		var pos = $(this).siblings('img').attr('indexImage');
		//Pozycja następnego zdjęcia.
		pos++;
		//Pobieramy index slajdu ,który się uakywnił.
		nrSlider = $(this).parent().attr('data-index');
		//Pobieramy obiekt obrazu,który właśnie się uaktywnił
		$element = $(this).siblings('img');
		// Pobieramy ilość zdjęć aktywnego slajdu,można swobodnie dodawać zdjęcia.
		var imageLength = data.slider[nrSlider].position.length;
		//Sprawdzamy warunek brzegowy i wywołujemy funkcję
		if (pos > imageLength- 1) pos=0;
		//Obiekt obrazu, nr slajdu, pozycja w danym slajdzie
		fade($element,nrSlider,pos);
	}); 

	$('.prev').click(function () {
		
		//Aktualna pozycja na ekranie
		var pos = $(this).siblings('img').attr('indexImage');
		//Pozycja poprzedniego zdjęcia.
		pos--;
		//Pobieramy index slajdu ,który się uakywnił.
		nrSlider = $(this).parent().attr('data-index');
		//Pobieramy obiekt obrazu,który właśnie się uaktywnił
		$element = $(this).siblings('img');
		// Pobieramy ilość zdjęć aktywnego slajdu,można swobodnie dodawać zdjęcia.
		var imageLength = data.slider[nrSlider].position.length;
		//Sprawdzamy warunek brzegowy i wywołujemy funkcję
		if (pos < 0) pos = imageLength - 1;
		//Obiekt obrazu, nr slajdu, pozycja w danym slajdzie
		fade($element,nrSlider,pos);
	}); 



var data =  { 
		
	"slider" : [
		{
			"position" : [
				{
					"src" : "./images/sliders-images/photo-1.jpeg",
					"title" : "photo-1",
					"alt" : "photo-1"
				},
				{
					"src" : "./images/sliders-images/photo-2.jpeg",
					"title" : "photo-2",
					"alt" : "photo-2"
				},
				{
					"src" : "./images/sliders-images/photo-3.jpeg",
					"title" : "photo-3",
					"alt" : "photo-3"
				}
			]
		},
		{
			"position" : [
				{
					"src" : "./images/sliders-images/photo-4.jpeg",
					"title" : "photo-4",
					"alt" : "photo-4"
				},
				{
					"src" : "./images/sliders-images/photo-5.jpeg",
					"title" : "photo-5",
					"alt" : "photo-5"
				},
				{
					"src" : "./images/sliders-images/photo-6.jpeg",
					"title" : "photo-6",
					"alt" : "photo-6"
				}
			]
		},
		{
			"position" : [
				{
					"src" : "./images/sliders-images/photo-7.jpeg",
					"title" : "photo-7",
					"alt" : "photo-7"
				},
				{
					"src" : "./images/sliders-images/photo-8.jpeg",
					"title" : "photo-8",
					"alt" : "photo-8"
				},
				{
					"src" : "./images/sliders-images/photo-9.jpeg",
					"title" : "photo-9",
					"alt" : "photo-9"
				}
			]
		}
	]
};



//Aby uzyskać efekt 'przenikania' zdjęć,należy selektorowi img dla tej sekcji nadać pozycję absolutną, minusem jest to,że traci się 
//responsywność zdjęcia, rozwiązaniem jest nadanie wysokości i szerokości dla różnych szerokości ekranu

//	function fades($element,pos) {
//		
//		//Pobieramy odwołanie do starego obrazka
////		var oldImage = $('.blog-sliders > img');
//		
//		var oldImage = $element;
//		//Pobieramy ściężkę nowego obrazka
//		var imgPath = preloadImages[pos];
//		//Tworzymy kod nowego obrazka,obiekt jest już w pamięci podręcznej 
//		var newImage = $('<img src="' + imgPath + '">');
//		// Dodajemy nowy obraz do modelu DOM
//		$('.blog-sliders').prepend(newImage);
//		//Stopniowo wyświetlamy nowy obrazek.
//		newImage.hide();
//		newImage.fadeIn(500);
//		//Stopniowo wygaszamy stary obrazek i usuwamy go z DOM.
//		oldImage.fadeOut(500, function () {
//			$(this).remove();
//		});
//	}
	







