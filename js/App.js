    
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


