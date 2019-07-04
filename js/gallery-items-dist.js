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

  // THE END
})();