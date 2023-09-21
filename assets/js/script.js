const images = document.querySelectorAll('.carousel img');
const numImages = images.length;
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        if (i === index) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % numImages;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + numImages) % numImages;
    showImage(currentIndex);
}

showImage(currentIndex);

document.querySelector('.carousel').addEventListener('mouseover', () => {
    clearInterval(carouselInterval);
});

document.querySelector('.carousel').addEventListener('mouseout', () => {
    carouselInterval = setInterval(nextImage, 3000);
});

let carouselInterval = setInterval(nextImage, 3000);
