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
          
    });
