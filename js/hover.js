(function() {
  // START

  let galleryItem = document.getElementById('gallery-item-01');
  let photoOverlay = document.getElementById('photo-01-overlay');
  let photoPlus = document.getElementById('photo-01-plus');
  let photoContent = document.getElementById('photo-01-content');

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

  // THE END
})();
