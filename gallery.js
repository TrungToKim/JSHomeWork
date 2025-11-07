function upDate(previewPic) {
    const imageDiv = document.getElementById('image');
    if (!imageDiv || !previewPic) return;

    imageDiv.style.backgroundImage = 'url("' + previewPic.src + '")';
    imageDiv.textContent = previewPic.alt || '';
    
    console.log('Image updated:', previewPic.alt);
}

function unDo() {
    const imageDiv = document.getElementById('image');
    if (!imageDiv) return;
    
    imageDiv.style.backgroundImage = '';
    imageDiv.textContent = 'Hover over an image below to display here.';
}

const originalSrc = "img/munising.jpg";
const originalAlt = "Default large image";

const largeImage = document.getElementById("largeImage");
const imageText = document.getElementById("imageText");
const thumbnails = document.querySelectorAll("#thumbnails img");

function addTabFocus() {
  console.log("onload event triggered → adding tabindex");

  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].setAttribute("tabindex", "0");
  }
}


thumbnails.forEach(img => {
  const bigSrc = img.src.replace("-thumb", "");
  const altText = img.alt;

  img.onmouseover = function() {
    largeImage.src = bigSrc;
    largeImage.alt = altText;
    imageText.textContent = altText;
  };

  img.onmouseleave = function() {
    largeImage.src = originalSrc;
    largeImage.alt = originalAlt;
    imageText.textContent = originalAlt;
  };

  img.onfocus = function() {
    largeImage.src = bigSrc;
    largeImage.alt = altText;
    imageText.textContent = altText;
  };

  img.onblur = function() {
    largeImage.src = originalSrc;
    largeImage.alt = originalAlt;
    imageText.textContent = originalAlt;
  };
});

