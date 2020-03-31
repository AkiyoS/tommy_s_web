$(function () {

    $('#topImg').fadeIn(2000);

    $('#menuIcon').on('click', function () {
        $('.menuOpen').show(500);
        $('.modal > button').toggleClass('tg')
    })

    $('#closeIcon').on('click', function () {
        $('.menuOpen').hide(500);
        $('.modal > button').toggleClass('tg');
    });

});