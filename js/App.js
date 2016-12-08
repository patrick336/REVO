    $('#js-menu-button').click(function () {
        $('.navigation-menu').toggle();
    });
    $(window).scroll(function () {
        if (window.scrollY < 50 && window.innerWidth > 778) {
            $('.navigation').css({
                'background': 'transparent'
            });
            return;
        }
        else {
            $('.navigation').css({
                'background': 'rgba(0,0,0,0.75)'
            });
        }
               if($(this).scrollTop() > 600)    $('#js-pageTop').fadeIn(100);
               else $('#js-pageTop').fadeOut(100);
    });
    // $('.offer').click(function(){
    //     $('.offer').css({'borderColor': '#f0f5f9'});
    //     $('.top-content').removeClass('active');
    //     $(this).find('.top-content').addClass('active');
    //     $(this).css({'borderColor': '#67D5B5'});
    // });
    $('#js-newsletter-form').submit(function (e) {
        e.preventDefault();
        alert("Żądanie do serwera zostało zatrzymane.\nBrak skryptu obsługującego formularz.\nZa utrudnienia przepraszamy.\nTeam REVO STUDIO");
    });
    $('#js-contact-us-form').submit(function (e) {
        confirm('Wysłać wiadomość ?');
        e.preventDefault();
        alert("Żądanie do serwera zostało zatrzymane.\nBrak skryptu obsługującego formularz.\nZa utrudnienia przepraszamy.\nTeam REVO STUDIO");
    });


