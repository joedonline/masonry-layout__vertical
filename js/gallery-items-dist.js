'use strict';

(function () {
  // START

  var ep = 'fake-api/gallery.json';
  getItems(ep).then(function (data) {
    var list = data.map(function (item) {
      var gallery = document.getElementById('gallery');
      var listOpen = '<li id="' + item.list_id + '" class="gallery-item" style="background: url(' + item.img_src + ') center/cover no-repeat;">';
      var overlay = '<div id="' + item.overlay_id + '" class="gallery-item-overlay hide"></div>';
      var plus = '<div id="' + item.plus_id + '" class="gallery-item-plus hide">&plus;</div>';
      var img = '<img class="gallery-item" src="' + item.img_src + '" alt="' + item.img_alt + '">';
      var contentOpen = '<div id="' + item.content.id + '" class="gallery-item-content hide">';
      var contentH3 = '<h3 class="gallery-item-content__title">' + item.content.title + '</h3>';
      var contentDesc = '<div class="gallery-item-content__description">' + item.content.description + '</div>';
      var contentClose = '</div>';
      var listClose = '</li>';

      var content = contentOpen.concat(contentH3).concat(contentDesc).concat(contentClose);

      return listOpen.concat(overlay).concat(plus).concat(img).concat(content).concat(listClose);
    });

    gallery.innerHTML = list.join('');
  });

  // THE END
})();
//# sourceMappingURL=gallery-items-dist.js.map