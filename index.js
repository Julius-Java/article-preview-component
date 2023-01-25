$(document).ready(function () {
    var shareBtn = $('.share')
    
    shareBtn.click(function () {
        $(this).toggleClass('share-click');
        $('.popup').slideToggle(300)
        var shareIconAttr = $('.share img').attr('src')
        var shareIcon = $('.share img');
        if (shareIconAttr == './images/icon-share.svg') {
            shareIcon.attr('src', './images/icon-share-white.svg')
        } else {
            shareIcon.attr('src', './images/icon-share.svg')
        }

        setTimeout(() => {
            $('.social-icon').each(function(i) {
                console.log(i)
                // if (i == 0) {
                //     $(this).css('animation-delay', (0.2 * 0.3) + 's')
                // } else {
                //     $(this).css('animation-delay', (i * 0.3) + 's');
                // }
                $(this).css('animation-delay', (i * 0.2) + 's');
                $(this).addClass('pop');
            });
        }, 300);
    })
});