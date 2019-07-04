'use strict';

(function () {
  // START

  async function getItems() {
    var response = await fetch('fake-api/gallery.json');
    return await response.json();
  }

  getItems().then(function (data) {
    data.map(function (item) {
      console.log('[getItems] item', item);
      hoverHandler(item.list_id, item.overlay_id, item.plus_id, item.content.id);
      return;
    });
  });

  var hoverHandler = function hoverHandler(list_id, overlay_id, plus_id, content_id) {
    var galleryItem = document.getElementById(list_id);
    var photoOverlay = document.getElementById(overlay_id);
    var photoPlus = document.getElementById(plus_id);
    var photoContent = document.getElementById(content_id);

    galleryItem.addEventListener('mouseenter', function () {
      photoOverlay.classList.remove("hide");
      photoOverlay.classList.add("show");

      photoPlus.classList.remove("hide");
      photoPlus.classList.add("show");

      photoContent.classList.remove("hide");
      photoContent.classList.add("show");
    });

    galleryItem.addEventListener('mouseleave', function () {
      photoOverlay.classList.remove("show");
      photoOverlay.classList.add("hide");

      photoPlus.classList.remove("show");
      photoPlus.classList.add("hide");

      photoContent.classList.remove("show");
      photoContent.classList.add("hide");
    });
  }; // END hoverHandler() function

  // THE END
})();
//# sourceMappingURL=hover-dist.js.map