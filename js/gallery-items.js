(function() {
  // START

  const ep = 'fake-api/gallery.json';
  getItems(ep).then(data => {
    const list = data.map(item => {
      const gallery = document.getElementById('gallery');
      const listOpen =    `<li id="${item.list_id}" class="gallery-item" style="background: url(${item.img_src}) center/cover no-repeat;">`;
      const overlay =       `<div id="${item.overlay_id}" class="gallery-item-overlay hide"></div>`;
      const plus =          `<div id="${item.plus_id}" class="gallery-item-plus hide">&plus;</div>`;
      const img =           `<img class="gallery-item" src="${item.img_src}" alt="${item.img_alt}">`;
      const contentOpen =   `<div id="${item.content.id}" class="gallery-item-content hide">`;
      const contentH3 =       `<h3 class="gallery-item-content__title">${item.content.title}</h3>`;
      const contentDesc =     `<div class="gallery-item-content__description">${item.content.description}</div>`;
      const contentClose =  `</div>`;
      const listClose =    `</li>`;

      const content = contentOpen.concat(contentH3).concat(contentDesc).concat(contentClose);

      return listOpen.concat(overlay)
                     .concat(plus)
                     .concat(img)
                     .concat(content)
                     .concat(listClose);
    });

    gallery.innerHTML = list.join('');
  })

  // THE END
})();
