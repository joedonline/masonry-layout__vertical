(function() {
  // START
  const ep = 'fake-api/gallery.json';
  fetchItems(ep).then(data => {
    data.map(item => {
      hoverHandler(item.list_id, item.overlay_id, item.plus_id, item.content.id);
      return;
    });
  });

  const hoverHandler = (list_id, overlay_id, plus_id, content_id) => {
    let galleryItem = document.getElementById(list_id);
    let photoOverlay = document.getElementById(overlay_id);
    let photoPlus = document.getElementById(plus_id);
    let photoContent = document.getElementById(content_id);

    galleryItem.addEventListener('mouseenter', function() {
      photoOverlay.classList.remove("hide");
      photoOverlay.classList.add("show");

      photoPlus.classList.remove("hide");
      photoPlus.classList.add("show");

      photoContent.classList.remove("hide");
      photoContent.classList.add("show");
    });

    galleryItem.addEventListener('mouseleave', function() {
      photoOverlay.classList.remove("show");
      photoOverlay.classList.add("hide");

      photoPlus.classList.remove("show");
      photoPlus.classList.add("hide");

      photoContent.classList.remove("show");
      photoContent.classList.add("hide");
    });
  } // END hoverHandler() function

  // THE END
})();
