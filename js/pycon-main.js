$(document).ready(function(){

    // Place background menu so it extends to one side of the page only.
    function positionBackground(){
        var position = $('.nav').offset();
        var height = $('.nav').height();
        var width = $('html').width() - position.left -20;

        $('.nav-bg').height(height).css({
            left: position.left + 20,
            width: width
        });
    }

    positionBackground();


    // Place dark footer

    function positionFooter(){
        var position = $('.cc-credit').offset();
        var width = $('html').width() - position.left - 40;

        $('.dark-bottom-footer').css({
            left: position.left + 40,
            width: width
        });
    }

    positionFooter();


    $(window).resize(function(){
        positionBackground();
        positionFooter();
    });


    // Toggle mobile menu

    $('.toggle-mobile-menu').click(function(e){
        e.preventDefault();
        $('.mobile-nav').slideToggle();
    });


    // Enable Carousels

    $("#speakers").owlCarousel({
        items: 4,
        autoPlay: 3000
    });

    $("#sponsors").owlCarousel({
        items: 4,
        autoPlay: 3000
    });



    // Embed Google Map

    function initialize() {

        var myLatLng = new google.maps.LatLng(-27.468301, 153.023122)

        var mapOptions = {
            zoom: 14,
            center: myLatLng
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        var infowindow = new google.maps.InfoWindow({
            content: 'Hotel Pullman Brisbane - King George Square'
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hotel Pullman Brisbane - King George Square'
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
    }

    google.maps.event.addDomListener(window, 'resize', initialize);
    google.maps.event.addDomListener(window, 'load', initialize);

});

