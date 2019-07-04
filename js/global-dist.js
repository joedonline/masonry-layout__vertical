'use strict';

// SITE-WIDE FUNCTIONS AND VARIABLES


/*
 Animation packages - aniHandler() function
 @param cdn - CDN link + markup
 @param loc - Local file ref + markup
*/
var cdnCSSPluginRef = document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/plugins/CSSPlugin.min.js"><\/script>');
var cdnEasePackRef = document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/easing/EasePack.min.js"><\/script>');
var cdnTweenLineMaxRef = document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineMax.min.js"><\/script>');
var cdnTweenLiteRef = document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenLite.min.js"><\/script>');

var locCSSPluginRef = document.write('<script type="text/javascript" src="gsap/CSSPlugin.min.js"><\/script>');
var locEasePackRef = document.write('<script type="text/javascript" src="gsap/EasePack.min.js"><\/script>');
var locTweenLineMaxRef = document.write('<script type="text/javascript" src="gsap/TweenLite.min.js"><\/script>');
var locTweenLiteRef = document.write('<script type="text/javascript" src="gsap/TimelineMax.min.js"><\/script>');

var aniHandler = function aniHandler(cdn, loc) {
  return cdn || loc;
};

aniHandler(cdnCSSPluginRef, locCSSPluginRef);
aniHandler(cdnEasePackRef, locEasePackRef);
aniHandler(cdnTweenLineMaxRef, locTweenLineMaxRef);
aniHandler(cdnTweenLiteRef, locTweenLiteRef);

/*
 Items fetch function
 @param ep - These are API endpoints to fetch data from.
*/
async function getItems(ep) {
  var response = await fetch(ep);
  return await response.json();
}
//# sourceMappingURL=global-dist.js.map