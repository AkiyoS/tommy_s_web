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

    const news = [
        'レスポンシブ対応になりました',
        'ページTOPに戻るボタンを設置しました'
    ];

    let count = 0;
    const slidenews = () => {
        if (count >= news.length) {
            count = 0;
        } else {
            $('#slideshow > p').html(news[count]);
            count++;
        }
    }

    let slideid = 0;
    const startstop = () => {
        if (slideid === 0) {
            slideid = setInterval(slidenews, 2000);
        } else {
            clearInterval(slideid);
            slideid = 0;
        }
    }

    document.getElementById('onOff').onclick = startstop;


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