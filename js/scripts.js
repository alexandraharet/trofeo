$(document).ready(function(){

  var scrollSpy = function(){
      // Add scrollspy to <body>
      $('body').scrollspy({
          target: ".navbar",
          offset: 70
      }); //works with: 70
  }

/* Get latest 3 posts from blog and add to ultime notizie boxes */

$('.carousel').carousel({
  interval: 6000
})

var getLastestPosts = function() {
  var title, link;
  $.ajax({
    url: 'parsefeed.php',
    type: 'GET',
      dataType: 'json',
      success: function(data) {
        var i=0;
        var monthNames = ["Gen", "Feb", "Mar", "Apr", "Mag","Giu", "Lug",	"Ago", "Set", "Ott", "Nov", "Dic"];
        $(".boxLatestNews").each(function(i) {
          var postdate = new Date(data.item[i].date[0]);
          $(this).find(".titleLatestNews").html("<span class='article-date'>" + postdate.getDate() + " " + monthNames[postdate.getMonth()] + " " + postdate.getFullYear() + ": </span><span><a href='" + data.item[i].link[0] + "' target='_blank'> " + data.item[i].title[0] + "</a></span>");
          $(this).find("img").attr("src", data.item[i].image);
          /*if ($(this).find("img").attr("src")==="images/placeholder-branded.jpg") {
            var color = Math.floor(Math.random()*16777215).toString(16)
            $(this).find("img").wrap("<div style='background: #" + color + " ; opacity: 0.25; display: block; overflow: hidden;'></div>");
          }*/
          i++;
        });
      }
    });
}




/* END */

// TODO - decide where to put this as it's executing on the spot
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });

    var scrollSmooth = function(){
        // Add smooth scrolling on all links inside the navbar
        $("#navbar a").on('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();
                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                // modified function to first jump to index.php and then jump to # anchor

                $('html, body').animate({
                    scrollTop: $(hash).offset().top-65 // works with: -60 OR - 80
                }, 800, function(){
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            }  // End if
        });
    }

    var overlay = function(myClass, rad, hover) {
$(myClass).mouseenter(function(){
    var imgWidth = $(this).find('img').outerWidth();
    $(".overlay", this).css(
        {"border-radius": rad,
        "-webkit-border-radius": rad,
        "-moz-border-radius": rad,
        "-ms-border-radius": rad,
        "-o-border-radius": rad,
        "width": imgWidth
    })
    $(this).addClass("hover");
})
// handle the mouseleave functionality
.mouseleave(function(){
    $(this).removeClass("hover");
});
}



/* Modify effect for timeline animation on Trofeo.php page */

var timelineToCenter = function() {
    $(".middleLine").css({"background-position": "center"});
    if ($(".eventArrow").length > 0 ) $(".eventArrow").remove();
    $(".eventContent").filter(":even").after('<div class="text-center eventArrow"><span class="glyphicon glyphicon-chevron-right"></span></div>');
    $(".eventContent").filter(":odd").before('<div class="text-center eventArrow leftArrow"><span class="glyphicon glyphicon-chevron-left"></span></div>');
}

var timelineToLeft = function() {
    $(".middleLine").css({"background-position": "left"});
    if ($(".eventArrow").length > 0 ) $(".eventArrow").remove();
    $(".eventContent").before('<div class="text-center eventArrow leftArrow"><span class="glyphicon glyphicon-chevron-left"></span></div>');

}

var addTimelineArrows = function(isLeft) {
    $(".middleLine").css({
        "visibility": "visible",
    });
    if (isLeft)
    timelineToLeft();
    else timelineToCenter();
}



/* END */


// add links and album title to the top on viewport xs

var changeAlbumTitlesOnXs = function() {
    $(".circleThumbnail").each(function() {
        var url = $(this).find("a").attr("href");
        $(this).children().wrapAll('<a href="' + url + '" target="_blank" class="hidden-sm-up">');
    });
}

// end

// change display of person names on Interviste.php for viewport xs

var changePersonNameDisplay = function() {
    $(".interviste .img").each(function() {
        var personInfo = $(this).find("a").html();
        var url = $(this).find("a").attr("href");
        $(this).append('<div class="hidden-lg hidden-md hidden-sm person-under">'+ personInfo + '</div>').children().wrapAll('<a href="' + url + '">');
    })
}

// end

// show / hide navbar on scroll up / scroll down
var navbarOnMobile = function() {

var scrollTimeOut = true;
var lastYPos = 0;
var yPos = 0;
var yPosDelta = 5;
var nav = $('.navbar-fixed-top');
var navHeight = nav.outerHeight();
var setNavClass = function() {
    scrollTimeOut = false;
    yPos = $(window).scrollTop();
    if(Math.abs(lastYPos - yPos) >= yPosDelta) {
        if (yPos > lastYPos && yPos > navHeight){
            nav.removeClass('show-nav').addClass('hide-nav');
        } else {
            nav.removeClass('hide-nav').addClass('show-nav');
        }
        if ($(".navbar-fixed-top").css("display") !== "none")
          if($("#navbar").css("display") == "flex") $("#navbar").css({"display":"none"});
          if($(".more-menu").hasClass("display-element")) $(".more-menu").removeClass("display-element");
        lastYPos = yPos;
    }
};


$(window).scroll(function(e){
scrollTimeOut = true;
});

setInterval(function() {
if (scrollTimeOut) {
    setNavClass();
}
}, 250);
}


// end




// change display of Rassegna Boxes on archivio-rassegna-stampa.php page for xs viewport

 var changeRassegnaDisplayOnXs = function() {
     $(".img").each(function() {
         var url = $(this).find("a").attr("href");
         $(this).children().wrapAll('<a href="' + url + '" target="_blank" class="hidden-sm-up">');
         var thisRow = $(this).closest(".boxRassegna").find("p").wrap('<a href="' + url + '" target="_blank" class="hidden-sm-up">');
     });
 }

 var changeRassegnaDisplayOnXsHomepage = function() {
     $(".boxRassegna").each(function() {
         var url = $(this).find(".img").find("a").attr("href");
         var title = $(this).find(".img").find("a").html();
         $(this).find(".img").children().wrapAll('<a href="' + url + '" target="_blank" class="hidden-sm-up">');
         $(this).children(":first").after('<p style="text-align: center; font-size: 1.5em; color: #7a7;" class="hidden-lg hidden-md hidden-sm"><a href="' + url + '" target="_blank" style="color: #7a7;">' + title + '</a></p>');
     });
 }

// end

// change manu layout for xs viewport

var xsMenuLayout = function() {
$("button#mobnavbutton").click(function() {
    $(".more-menu").toggleClass("display-element");
});


// back to top button fade-in and fade-out
// hide #back-top first
$("#back-top").hide();

// fade in #back-top
$(function() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();
    }
  });

  // scroll body to 0px on click
  $('#back-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});
}

// end


var getYear = function() {
  var d = new Date();
  $("#currentyear").text(d.getFullYear());
}


var addPlaceNumber = function() {
    for(var i=1; i<=3; i++) {
        $("#clasiffications > .edition div:nth-child(" + (i + 1) + ")").find("p").find(".winnerplace").each(function() {
            $(this).before('<span>' + i + '. </span>');
        });
    }
    $("#clasiffications > .edition").filter(":even").addClass("lightgrey");
    $("#clasiffications > .edition").filter(":odd").addClass("whitebg");
}

var loadYoutubeThumbnails = function() {
    var videos = $(".youtubeVideo");
    videos.each(function() {
        var videoID = $(this).attr("id");
        $(this).prepend('<div class="youtubeThumbnail"><img src="https://i.ytimg.com/vi/' + videoID + '/hqdefault.jpg"><span class="playIcon"><img src="images/YouTube_icon.png" /></span></div>');
        $(".youtubeThumbnail").click(function(){
            $(this).replaceWith('<iframe src="https://www.youtube.com/embed/' + videoID + '?autoplay=1&controls=0" frameborder="0" controls=0 allowfullscreen=1></iframe>')



        });
    });
}

var addLetterLinksMission = function() {
    $(".letters p, .letters span").each(function(){
        if( $(this).attr("id")) $(this).wrap('<a href="docs/letters/' + $(this).attr("id") + '.php">');
    });
}

getYear();
changeRassegnaDisplayOnXsHomepage();
xsMenuLayout();
navbarOnMobile();

if ($('.addScrollSpy').length > 0) scrollSpy();

if ($('.addScrollSmooth').length > 0) scrollSmooth();

if ($('.addScrollSmooth2').length > 0) scrollSmooth2();

if($(".boxLatestNews").length > 0) getLastestPosts();

if ($(".circleThumbnail").length > 0 ) {
    overlay(".circleThumbnail", "100%", "hover");
    changeAlbumTitlesOnXs();
    }

if ($(".interviste").length > 0 ) {
    overlay(".interviste", "100%", "hover");
    changePersonNameDisplay();
    }

if ($(".letters").length > 0 ) addLetterLinksMission();

if ($(".boxRassegna").length > 0 ) {
    overlay(".boxRassegna", "0%", "hover");
    changeRassegnaDisplayOnXs();
    }

if ($("#clasiffications").length > 0 ) {
    addPlaceNumber();
    $("h4").css({"font-weight": "bold"});
    }

if ($(".youtubeVideo").length > 0 ) loadYoutubeThumbnails();

if ($('.eventContent').length > 0 ) {
    var wasLeft = ($("body").width() > 767);
    $(window).on("load resize", function() {
        var isLeft = $("body").width() < 767;
        if (wasLeft != isLeft) {
            addTimelineArrows(isLeft);
            wasLeft = isLeft;
        }
    });
}
});
