$(function() {
    
    $('.process .navigation a').on('click', function(e) {

        e.preventDefault();

        $('.process .navigation a').removeClass('active');

        $(this).addClass('active');

    });

    $('.hero-slider .slider li').first().css('display', 'block');

    $('.big-next').on('click', function(e) {

        e.preventDefault();

        if ($('.hero-slider .slider li.active').next().length) {

            $('.hero-slider .slider li').fadeOut(250);

            $('.hero-slider .slider').find('li.active').removeClass('active').next().addClass('active').fadeIn(250);


        } else {

            $('.hero-slider .slider li').removeClass('active').fadeOut(250);

            $('.hero-slider .slider li').first().addClass('active').fadeIn(250);

        }

        if ($('.hero-slider .slider .s-1').hasClass('active')) {

            $('#index .hero-slider').css({

                'background-color': '#f57c00'

            });

            $('#index .hero-slider .big-next').css({

                'background-color': '#5c6bc0'

            });

        }

        if ($('.hero-slider .slider .s-2').hasClass('active')) {

            $('#index .hero-slider').css({

                'background-color': '#5c6bc0'

            });

            $('#index .hero-slider .big-next').css({

                'background-color': '#f57c00'

            });

        }

    });

});