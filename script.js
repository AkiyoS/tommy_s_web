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

    $(function () {
        var $topBtn = $(".topBtn")
        $topBtn.hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $topBtn.fadeIn();
            } else {
                $topBtn.fadeOut();
            }
        });
        $('a[href^="#"]').click(function () {
            var href = $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top;
            $("html, body").animate({
                scrollTop: position
            }, 500, "swing");
            return false;
        });
    });


});