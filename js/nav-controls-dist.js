'use strict';

(function () {
  // START

  var timeline = new TimelineMax({ repeat: -1 });
  timeline.from('[caret]', 2, { y: -40, ease: Power3.easeOut });

  // THE END
})();
//# sourceMappingURL=nav-controls-dist.js.map