jQuery(function ($) {
        //zresetowanie scrolla
        $.scrollTo(0);

        $('#js-about').click(function (e) {
            e.preventDefault();
            $.scrollTo($('#about'), 1000);
        });
		$('#js-portfolio').click(function (e) {
            e.preventDefault();
            $.scrollTo($('#portfolio'), 1000);
        });       
		$('#js-blog').click(function (e) {
            e.preventDefault();
            $.scrollTo($('#blog'), 1000);
        });       
		$('#js-contact').click(function (e) {
            e.preventDefault();
            $.scrollTo($('#contact'), 1000);
        });
        $('#js-pageTop').click(function (e) {
            e.preventDefault();
            $.scrollTo($('#page-top'), 1200);
        });        
		$('#js-home').click(function (e) {
            e.preventDefault();
            $.scrollTo($('#page-top'), 1200);
        });
        $('#js-pages').click(function (e) {
            e.preventDefault();
            $.scrollTo($('#pages'), 1000);
        }); 
  
	$('#js-menu-button').click(function () {
        $('.navigation-menu').toggle();
    });
	
    $(window).scroll(function () {
        if (window.scrollY < 50 && window.innerWidth > 778) {
            $('.navigation').css({'background': 'transparent'});
            return;
        }
        else {
            $('.navigation').css({'background': 'rgba(0,0,0,0.75)'});
        }
	   if($(this).scrollTop() > 600)   $('#js-pageTop').fadeIn(100);
	   else $('#js-pageTop').fadeOut(100);
    }); //scroll
 });//ready