$(function() {
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic.Controller();

  // animation for Latest News
  var animateLatestNews = function() {
  var tween = TweenMax.to('.boxLatestNews', 0.5, {scale: 1});
  var newsScene = new ScrollMagic.Scene({
    triggerElement: '#newsScene',
    offset: -50 /* offset the trigger 150px below #scene's top */
  });
  newsScene.setTween(tween);
  newsScene.addTo(scrollMagicController);
  }

  // animation for Rassegne
  var animateRassegne = function() {
  var tween2 = TweenMax.staggerFromTo('.boxRassegna', 0.8, {scale: 0.5,}, {scale: 1, rotation: 720}, 0.2);
  var rassegnaScene = new ScrollMagic.Scene({
    triggerElement: '#rassegna',
    offset: -30
  });
  rassegnaScene.setTween(tween2);
  rassegnaScene.addTo(scrollMagicController);
  }

  // animation Timeline for Storia del Trofeo page
  var animateTimeline = function() {
    $('.timelineEvent').each(function() {
        new ScrollMagic.Scene({
           triggerElement: this,
           offset: -100
          }).setClassToggle(this, "show").addTo(scrollMagicController);
        });
      }

if ($(".timelineEvent").length > 0 ) animateTimeline();
if ($("#rassegna").length > 0 ) animateRassegne();
if ($("#newsScene").length > 0 ) animateLatestNews();

});
