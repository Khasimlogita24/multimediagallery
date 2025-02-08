// Open the lightbox
function openLightbox() {
    document.getElementById("lightbox").style.display = "flex";
}

// Close the lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Change image in the lightbox based on the clicked image
function currentSlide(n) {
    var images = document.getElementsByClassName("gallery-image");
    var lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = images[n - 1].src;
}
