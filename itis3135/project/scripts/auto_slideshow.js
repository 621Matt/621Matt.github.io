// TODO
// Add image transitions because it is to jarring

const backgrounds = [
  'url("images/homepage-background2.jpg")',
  'url("images/homepage-background3.jpg")',
  'url("images/homepage-background.jpg")'
];

let index = 0;

//Changes background to one of the images in backgrounds
const changingBackground = () => {
  let currentBackground = document.getElementById("background");
  index = (index + 1) % backgrounds.length;
  currentBackground.style.background = `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), ${backgrounds[index]}`;
};

// Executes function every 5 seconds
setInterval(changingBackground, 5000);

// Initial function call on page load to set image
changingBackground();
