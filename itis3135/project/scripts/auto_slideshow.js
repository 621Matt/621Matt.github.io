const backgrounds = [
  "images/homepage-background2.jpg",
  "images/homepage-background3.jpg",
  "images/homepage-background.jpg"
];

let index = 0;
const fader = document.getElementById("background-fader");

const changeBackground = () => {
  fader.style.opacity = 0;

  setTimeout(() => {
    fader.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${backgrounds[index]})`;
    fader.style.opacity = 1;
    index = (index + 1) % backgrounds.length;
  }, 700); // half of the fade duration
};

// Start immediately
fader.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${backgrounds[index]})`;
index = (index + 1) % backgrounds.length;

// Run again every 5 secs
setInterval(changeBackground, 5000);
