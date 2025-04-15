let photoIndex = 1;

// Shows different photo based on index
function viewSlides(i) {
    let slides = document.getElementsByClassName("slides");
    if (i > slides.length) photoIndex = 1;
    if (i < 1) photoIndex = slides.length;
    for (let j = 0; j < slides.length; j++) {
        slides[j].style.display = 'none';
    }
    slides[photoIndex-1].style.display = 'block';
}

viewSlides(photoIndex);

// Previous and Next buttons
function newSlide(i) {
    viewSlides(photoIndex += i);
}

