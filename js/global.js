// SITE-WIDE FUNCTIONS AND VARIABLES


/*
 Animation packages - aniHandler() function
 @param cdn - CDN link + markup
 @param loc - Local file ref + markup
*/
const cdnCSSPluginRef = document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/plugins/CSSPlugin.min.js"><\/script>');
const cdnEasePackRef = document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/easing/EasePack.min.js"><\/script>');
const cdnTweenLineMaxRef = document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineMax.min.js"><\/script>');
const cdnTweenLiteRef = document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenLite.min.js"><\/script>');

const locCSSPluginRef = document.write('<script type="text/javascript" src="gsap/CSSPlugin.min.js"><\/script>');
const locEasePackRef = document.write('<script type="text/javascript" src="gsap/EasePack.min.js"><\/script>');
const locTweenLineMaxRef = document.write('<script type="text/javascript" src="gsap/TweenLite.min.js"><\/script>');
const locTweenLiteRef = document.write('<script type="text/javascript" src="gsap/TimelineMax.min.js"><\/script>');

const aniHandler = (cdn, loc) => cdn || loc;

aniHandler(cdnCSSPluginRef, locCSSPluginRef);
aniHandler(cdnEasePackRef, locEasePackRef);
aniHandler(cdnTweenLineMaxRef, locTweenLineMaxRef);
aniHandler(cdnTweenLiteRef, locTweenLiteRef);


/*
 Items fetch function
 @param ep - These are API endpoints to fetch data from.
*/
async function getItems(ep) {
  let response = await fetch(ep);
  return await response.json();
}
