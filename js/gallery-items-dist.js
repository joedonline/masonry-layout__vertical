'use strict';

(function () {
  // START

  async function getPhotos() {
    var response = await fetch('fake-api/gallery.json');
    var data = await response.json();
    return data;
  }

  getPhotos().then(function (data) {
    console.log('[data]', data);
  });

  var gallery = document.getElementById('gallery');

  var listOpen = '<li id="gallery-item-01" class="gallery-item" style="background: url(images/photo-01.jpg) center/cover no-repeat;">';
  var overlay = '<div id="photo-01-overlay" class="gallery-item-overlay hide"></div>';
  var plus = '<div id="photo-01-plus" class="gallery-item-plus hide">&plus;</div>';
  var img = '<img class="gallery-item" src="images/photo-01.jpg" alt="Hello world">';
  var contentOpen = '<div id="photo-01-content" class="gallery-item-content hide">';
  var contentH3 = '<h3 class="gallery-item-content__title">Some Title Will Go Here</h3>';
  var contentDesc = '<div class="gallery-item-content__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>';
  var contentClose = '</div>';
  var listClose = '</li>';

  var content = contentOpen.concat(contentH3).concat(contentDesc).concat(contentClose);

  var list = listOpen.concat(overlay).concat(plus).concat(img).concat(content).concat(listClose);

  gallery.innerHTML = list;

  // THE END
})();
//# sourceMappingURL=gallery-items-dist.js.map
