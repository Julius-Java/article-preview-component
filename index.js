$(document).ready(function () {
    var shareBtn = $('.share');

    var windowSize = $(window).width();

    var shareBtnMobile = $('.share-icon-mobile')

    if (windowSize <= 960) {
        // Mobile Btn Functionality
        shareBtn.click(function () {
            $('.share-section').slideToggle(100)
            $('.share-section-mobile').slideToggle()
            $('.share-section-mobile').css('display', 'flex')

            setTimeout(() => {
                $('.icon-mobile').each(function(i) {
                    $(this).css('animation-delay', (i * 0.4) + 's');
                    $(this).addClass('pop');
                });
            }, 200);
        });

        $('.icon-mobile').hover(function () {
            var currentSrc = $(this).attr('src');
            $(this).attr('src', $(this).data('hover'));
            $(this).data('hover', currentSrc);
            $(this).animate({width: '+=5%', height: '+=5%'}, 'fast');
        }, function () {
            var currentSrc = $(this).attr('src');
            $(this).attr('src', $(this).data('hover'));
            $(this).data('hover', currentSrc);
            $(this).animate({width: '-=5%', height: '-=5%'}, 'fast');
        })

        shareBtnMobile.click(function () {
            $('.share-section').slideToggle()
            $('.share-section-mobile').slideToggle(100)
        });



    } else {
        // Desktop Btn Functionality
        shareBtn.click(function () {
            $(this).toggleClass('share-click');

            $('.popup').slideToggle(300);

            var shareIconAttr = $('.share img').attr('src')
            var shareIcon = $('.share img');

            if (shareIconAttr == './images/icon-share.svg') {
                shareIcon.attr('src', './images/icon-share-white.svg')
            } else {
                shareIcon.attr('src', './images/icon-share.svg')
            }

            setTimeout(() => {
                $('.social-icon').each(function(i) {
                    $(this).css('animation-delay', (i * 0.4) + 's');
                    $(this).addClass('pop');
                });
            }, 300);

            $('.social-icon').hover(function () {
                var currentSrc = $(this).attr('src');
                $(this).attr('src', $(this).data('hover'));
                $(this).data('hover', currentSrc);
                $(this).animate({width: '+=5%', height: '+=5%'}, 'fast');
            }, function () {
                var currentSrc = $(this).attr('src');
                $(this).attr('src', $(this).data('hover'));
                $(this).data('hover', currentSrc);
                $(this).animate({width: '-=5%', height: '-=5%'}, 'fast');
            })
    
        })
    }

});