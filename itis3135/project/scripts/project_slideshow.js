let photoIndex = 1;
let slides = document.getElementsByClassName("slides");
let slidesText = document.getElementsByClassName("slides-text");

// Shows different photo and its text based on index
function viewSlides(i) {
    if (i > slides.length) photoIndex = 1;
    if (i < 1) photoIndex = slides.length;
    for (let j = 0; j < slides.length; j++) {
        slides[j].style.display = 'none';
        slidesText[j].style.display = 'none';
    }
    slides[photoIndex-1].style.display = 'block';
    slidesText[photoIndex-1].style.display = 'block';
}

viewSlides(photoIndex);

// Previous and Next buttons
function newSlide(i) {
    viewSlides(photoIndex += i);
    for (let j = 0; j < slides.length; j++) {
        slides[j].style.animation = "fadeIn 2s";
        slidesText[j].style.animation = "fadeIn 4s";
    }
    
}
