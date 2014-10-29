/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

////////////////QUIMI COLORS///////////////////////
var colorl1 = $(".Color1").css( "color" );
var colorl2 = $(".Color2").css( "color" );
var colorl3 = $(".Color3").css( "color" );

////////////////QUIMI IMG OF FRIENDS///////////////////////
var Src1 = 'img/Sue-Gregor-300-dpi-300x300.jpg';
var Src2 = 'img/hombrex.jpg'; 
var Src3 ='img/marc.jpg';
var controlimg = 0;

////////////////SENDING EMAIL////////////////////////////
var email="misFunciones/sendEmail.php";

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
   navBarOpacity()
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$(document).ready(function(){
    
    navBarOpacity();
    upArrow();
    showIntro();   
       
});
 
 $("#link1").hover(function(){
    $(".brand-heading").css("color",colorl1);
  },function(){
  $(".brand-heading").css("color","white");
    });
 $("#link2").hover(function(){
    $(".brand-heading").css("color",colorl2);
  },function(){
  $(".brand-heading").css("color","white");
    });
  $("#link3").hover(function(){
    $(".brand-heading").css("color",colorl3);
  },function(){
  $(".brand-heading").css("color","white");
});

//Enviar Email AJAX

$('#sendEmail').click(function(){
    $.post(
            email,
            {name:$('#name').val(),
            email:$('#email').val(),
            message:$('#message').val()}, function(data){
                $('#emailReply').html(data);
            });
    $('#name, #email, #message').val('');
});
//Quimi color
window.setInterval(colorQuimi, 500);
//Slider Comments
window.setInterval(changecomments, 9500);


function colorQuimi() {
 
 //PARA CAMBIAR DE COLOR EL LOGO "quimi"//
    if ( $('#link1').hasClass("active") ) {
            $('.myColor').css("color",colorl1)
    }else if ( $('#link2').hasClass("active") ) {
            $('.myColor').css("color",colorl2)
    }else if ( $('#link3').hasClass("active") ) {
            $('.myColor').css("color",colorl3)
    }else {
        $('.myColor').css("color","rgb(255,255,255)")
    } 
}

function changecomments(){
   
    if (controlimg == 0)
    {
        $('img[src="' + Src1 + '"], #textcomments').fadeOut('slow', function(){
        $('img[src="' + Src1 + '"]').attr('src', Src3);
        $('#textcomments p').html('Quimi has been helping me with my portfolio, designing the graphics for the titles and transforming the default template to make it something more personal. This is an asset to my business. The whole thing was really quick and the results exceeded my expectations.<br>I was delighted when I saw the bill.<br><a id="linkquotes" class = "darkColor2" href="http://marcroca.com" target="_blank">MARC ROCA - Photographer.</a><br><br>');
            }).fadeIn('slow');
        controlimg = 1;
    }
    else if (controlimg == 1)
    {
        $('img[src="' + Src3 + '"], #textcomments').fadeOut('slow', function(){
        $('img[src="' + Src3 + '"]').attr('src', Src1);
        $('#textcomments p').html('I used Quimi to design my web site was great to work with, very fast and efficient. I was delighted with my site.<br>My customers told me they found my site very easy to use. A big improvement on my old site. Not only was the design of the site great but the site loading time went from 12 sec. to 2 sec and the bounce rate went down by 60%.<br>I highly recommend you use him.<br><a id="linkquotes" class="darkColor2" href="http://suegregor.co.uk" target="_blank">SUE GREGOR - Contemporary Jewellery.</a>');
            }).fadeIn('slow');
        controlimg = 0;
    }

}

function changecomments3pics(){
   
    if (controlimg == 0)
    {
        $('img[src="' + Src1 + '"],#textcomments').fadeOut('slow', function(){
            $('img[src="' + Src1 + '"]').attr('src', Src2);
            $('#textcomments p').html("Asdfasfd asdf asfd af asdf asdf asdf safd asdfasfasdfasdf as dfasdfasasdfasdfasfddfasd fs, asdfasdf asdfasdfasdfasdfasdffdssaf, asdfasdfasdf asdf asdf asd sdf asdf asdfa fasd.<br>fa asd fasdf asdfdf.<br>XXXX-XXXXX - Ilustrator");
        }).fadeIn('slow');        
        controlimg = 1;
    }
    else if (controlimg == 1)
    {
        $('img[src="' + Src2 + '"], #textcomments').fadeOut('slow', function(){
        $('img[src="' + Src2 + '"]').attr('src', Src3);
        $('#textcomments p').html("Quimi has been helping me with my web site, designing the graphics for the titles and transforming the default template to make it something more personal. This is an asset to my business.  The whole thing was really quick and the results exceeded my expectations.<br>I was delighted when I saw the bill.");
            }).fadeIn('slow');
        controlimg = 2;
    }
    else
    {
        $('img[src="' + Src3 + '"], #textcomments').fadeOut('slow', function(){
        $('img[src="' + Src3 + '"]').attr('src', Src1);
        $('#textcomments p').html("I used Quimi to design my web site was great to work with, very fast and efficient. I was delighted with my site.<br>My customers told me they found my site very easy to use. A big improvement on my old site. Not only was the design of the site great but the site loading time went from 12 sec. to 2 sec and the bounce rate went down by 60%.<br>I highly recommend you use him.");
            }).fadeIn('slow');
        controlimg = 0;
    }
}

function navBarOpacity(){

    if ($(window).width() < 768){
        if ($(window).scrollTop() < 200){
            $('.navbar-custom').css("background-color","rgba(0,0,0,0.5)");
        }else{
            $('.navbar-custom').css("background-color","rgba(0,0,0,1)");
        }
    }
}

function upArrow() {
    // fade in and fade out the arrow
        $(window).scroll(function () {
            if ($(this).scrollTop() > 600) {
                $('#uparrow').fadeIn();
            } else {
                $('#uparrow').fadeOut();
            }
        });
    
        // scroll body to 0px on click
        $('#uparrow').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1500, 'easeInOutExpo');
            return false;
        });    
};

function showIntro(){
    $('.intro-text').fadeIn(2000, function(){
        $('#quimi2').fadeIn(2000);
    });
};