(function() {
  // START

  async function getPhotos() {
    let response = await fetch('fake-api/gallery.json');
    let data = await response.json();
    return data;
  }

  getPhotos().then(data => {
    console.log('[data]', data);
  })

  let gallery = document.getElementById('gallery');

  const listOpen =    `<li id="gallery-item-01" class="gallery-item" style="background: url(images/photo-01.jpg) center/cover no-repeat;">`;
  const overlay =       `<div id="photo-01-overlay" class="gallery-item-overlay hide"></div>`;
  const plus =          `<div id="photo-01-plus" class="gallery-item-plus hide">&plus;</div>`;
  const img =           `<img class="gallery-item" src="images/photo-01.jpg" alt="Hello world">`;
  const contentOpen =   `<div id="photo-01-content" class="gallery-item-content hide">`;
  const contentH3 =       `<h3 class="gallery-item-content__title">Some Title Will Go Here</h3>`;
  const contentDesc =     `<div class="gallery-item-content__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>`;
  const contentClose =  `</div>`;
  const listClose =    `</li>`;

  const content = contentOpen.concat(contentH3).concat(contentDesc).concat(contentClose);

  const list = listOpen.concat(overlay)
                       .concat(plus)
                       .concat(img)
                       .concat(content)
                       .concat(listClose);

  gallery.innerHTML = list;

  // THE END
})();
