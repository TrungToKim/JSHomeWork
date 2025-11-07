function upDate(previewPic) {
  const largeImage = document.getElementById('largeImage');
  const imageText = document.getElementById('imageText');

  if (!largeImage || !previewPic) return;

  largeImage.src = previewPic.src;
  largeImage.alt = previewPic.alt || 'No description';
  imageText.textContent = previewPic.alt || '';
}

function unDo() {
  const largeImage = document.getElementById('largeImage');
  const imageText = document.getElementById('imageText');

  if (!largeImage) return;

  largeImage.src = 'img/red_maple.png';
  largeImage.alt = 'Default large image';
  imageText.textContent = 'Default large image';
}

function setImages() {
  const options = [
    "img/bacon_in_the_woods.png", "img/bacon_near_the_fort.png", "img/BaconGallupPark.jpg",
    "img/bend_in_the_road.png", "img/blooming_trees.png", "img/falling_petals.png",
    "img/hanging_plants.png", "img/hollow_tree.png", "img/huron_river_cascades.JPG",
    "img/lake_view.JPG", "img/mist_over_huron_river.JPG", "img/munising.jpg",
    "img/pink_blossoms.png", "img/red_maple.png", "img/tree_with_white_blooms.png",
    "img/tulips.png", "img/white_buds_on_tree.png"
  ];

  const currentImages = document.querySelectorAll(".flex img");
  for (let i = 0; i < currentImages.length; i++) {
    const randomImg = options[Math.floor(Math.random() * options.length)];
    currentImages[i].src = randomImg;
    currentImages[i].setAttribute("tabindex", "0");
  }
}

function addTabFocus(thumbnails) {
  console.log("onload event triggered → adding tabindex");
  thumbnails.forEach(img => img.setAttribute("tabindex", "0"));
}

window.onload = function() {
  const originalSrc = "img/munising.jpg";
  const originalAlt = "Default large image";

  const largeImage = document.getElementById("largeImage");
  const imageText = document.getElementById("imageText");
  const thumbnails = document.querySelectorAll("#thumbnails img");

  addTabFocus(thumbnails);

  thumbnails.forEach(img => {
    const bigSrc = img.src;
    const altText = img.alt;

    img.addEventListener("mouseover", () => {
      largeImage.src = bigSrc;
      largeImage.alt = altText;
      imageText.textContent = altText;
    });

    img.addEventListener("mouseleave", () => {
      largeImage.src = originalSrc;
      largeImage.alt = originalAlt;
      imageText.textContent = originalAlt;
    });

    img.addEventListener("focus", () => {
      largeImage.src = bigSrc;
      largeImage.alt = altText;
      imageText.textContent = altText;
    });

    img.addEventListener("blur", () => {
      largeImage.src = originalSrc;
      largeImage.alt = originalAlt;
      imageText.textContent = originalAlt;
    });
  });
};


window.onload = function() {
  const thumbnails = document.querySelectorAll('.preview');
  thumbnails.forEach(img => {
    img.addEventListener('mouseover', () => upDate(img));
    img.addEventListener('mouseout', unDo);
    img.setAttribute('tabindex', '0');
    img.addEventListener('focus', () => upDate(img));
    img.addEventListener('blur', unDo);
  });
};
