const images=document.querySelectorAll(".carousel img"),numImages=images.length;let currentIndex=0;function showImage(r){images.forEach((e,n)=>{e.style.display=n===r?"block":"none"})}function nextImage(){showImage(currentIndex=(currentIndex+1)%numImages)}function prevImage(){showImage(currentIndex=(currentIndex-1+numImages)%numImages)}showImage(currentIndex),document.querySelector(".carousel").addEventListener("mouseover",()=>{clearInterval(carouselInterval)}),document.querySelector(".carousel").addEventListener("mouseout",()=>{carouselInterval=setInterval(nextImage,3e3)});let carouselInterval=setInterval(nextImage,3e3);