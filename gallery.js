// gallery page animation 
// navbar

let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-item img');

function openOverlay(element) {
    const src = element.querySelector('img').src;
    currentImageIndex = Array.from(images).findIndex(img => img.src === src);
    document.getElementById('overlay-image').src = src;
    document.getElementById('overlay').style.display = 'flex';
    event.stopPropagation();
}

function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}

function navigateOverlay(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    document.getElementById('overlay-image').src = images[currentImageIndex].src;
    event.stopPropagation();
}

document.getElementById('overlay').addEventListener('click', closeOverlay);
