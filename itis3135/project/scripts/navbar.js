let link = document.getElementsByTagName("a");
let activeIndex = localStorage.getItem("activeIndex");

for (let i = 0; i < link.length; i++) {
  // Applies active class on saved index
  if (String(i) === activeIndex) {
    link[i].classList.add("active");
  }

  link[i].addEventListener("click", () => {
    if (link[i].classList.contains("active")) {
      link[i].classList.remove("active");
    } else {
      link[i].classList.add("active");
      localStorage.setItem("activeIndex", i);
    }
  });
}

for (let i = 0; i < link.length; i++) {
    // Applies active class on saved index
    if (i === Number(activeIndex)) {
      link[i].classList.add("active");
    }
  
    //Adds event listeners to every link and saves active link's index
    link[i].addEventListener("click", () => {
      localStorage.setItem("activeIndex", i);
    });
  }
