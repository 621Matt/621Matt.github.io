const currentPage = location.pathname.split("/").pop();
const links = document.querySelectorAll(".nav-link");

// Highlights the active link that matches the current url path
links.forEach((link) => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});
