$(document).ready(function(){
  var scrollSpy = function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar"}); //works with: 70
  }

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
          scrollTop: $(hash).offset().top // works with: -60 OR - 80
        }, 800, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });
  }

  var overlay = function (myClass, rad, hover) {
  // handle the adding of hover class when clicked, for touchscreen devices
  /*  if (Modernizr.touch) {
        $(myClass).click(function(e){
          var imgWidth = $(this).find('img').outerWidth();
          $(".overlay", this).css(
            {"border-radius": rad,
            "-webkit-border-radius": rad,
            "-moz-border-radius": rad,
            "-ms-border-radius": rad,
            "-o-border-radius": rad,
            "width": imgWidth
          });
          $(this).addClass("hover");
          $(".albumtitle", this).css( {"display": "block"} );
          });
        }
      else { */
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
//  }

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

  if ($('.eventContent').length > 0 ) {
    var wasLeft = ($("body").width() > 767);
    $(window).on("load resize", function() {
      var isLeft = $("body").width() < 767;
      if (wasLeft != isLeft) {
        addTimelineArrows(isLeft);
        wasLeft = isLeft;
      }
    });
  };

  /* END */


// add links and album title to the top on viewport xs

var changeAlbumTitlesOnXs = function() {
  $(".circleThumbnail").each(function() {
    var url = $(this).find("a").attr("href");
    $(this).children().wrapAll('<a href="' + url + '" target="_blank" class="hidden-sm-up">');
  })
}

// end

// change display of person names on Interviste.php for viewport xs

var changePersonNameDisplay = function() {
  $(".interviste .img").each(function() {
    var personInfo = $(this).find("a").html();
    var url = $(this).find("a").attr("href");
    console.log(url);
    $(this).append('<div class="hidden-lg hidden-md hidden-sm person-under">'+ personInfo + '</div>').children().wrapAll('<a href="' + url + '">');
  })
}

changePersonNameDisplay();

// end


// change manu layout for xs viewport


$("button#mobnavbutton").click(function() {
  $(".more-menu").toggleClass("display-element");
});

/*


$(window).on("resize", function() {
    if ($(".navbar-toggle").attr("display") !== "none") {
    $("ul.dropdown-menu").toggleClass("dropdown-menu mobile-nav");
    $("#navbar-header").toggleClass("hide-element");
    $("a.dropdown-toggle").toggleClass("hide-element");
    }
  });

$(window).on("load", function() {
  var isXs = ($(window).width() < 767);
  if (isXs) {
  $("ul.dropdown-menu").toggleClass("dropdown-menu mobile-nav");
  $("#navbar-header").toggleClass("hide-element");
  $("a.dropdown-toggle").toggleClass("hide-element");
  }
});

if (($(window).width() > 767)) $(window).on("resize", function() {
    if (($(window).width() < 767)) {
    $("ul.dropdown-menu").toggleClass("dropdown-menu mobile-nav");
    $("#navbar-header").toggleClass("hide-element");
    $("a.dropdown-toggle").toggleClass("hide-element");
    }
  });

  if (($(window).width() < 767)) $(window).on("resize", function() {
      if (($(window).width() > 767)) {
      $("ul.dropdown-menu").toggleClass("dropdown-menu mobile-nav");
      $("#navbar-header").toggleClass("hide-element");
      $("a.dropdown-toggle").toggleClass("hide-element");
      }
    });


// styleMobileMenu($(window).width() < 767);

*/
// END

  var addPlaceNumber = function() {
    for(var i=1; i<=3; i++) {
      $("#clasiffications > .edition div:nth-child(" + (i + 1) + ")").find("p").find("span").each(function() {
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
      $(this).replaceWith('<iframe src="https://www.youtube.com/embed/' + videoID + '?autoplay=1" frameborder="0" allowfullscreen></iframe>')
    });
  });
}

  if ($('.addScrollSpy').length > 0) scrollSpy();
  if ($('.addScrollSmooth').length > 0) scrollSmooth();
  if ($('.addScrollSmooth2').length > 0) scrollSmooth2();
  if ($(".circleThumbnail").length > 0 ) {
    overlay(".circleThumbnail", "100%", "hover");
    changeAlbumTitlesOnXs();
    }
  if ($(".interviste").length > 0 ) {
    overlay(".interviste", "100%", "hover");

    }
  if ($(".boxRassegna").length > 0 ) overlay(".boxRassegna", "0%", "hover");
  if ($("#clasiffications").length > 0 ) addPlaceNumber();
  if ($('.eventContent').length > 0 ) addTimelineArrows();
  if ($(".youtubeVideo").length > 0 ) loadYoutubeThumbnails();
});
