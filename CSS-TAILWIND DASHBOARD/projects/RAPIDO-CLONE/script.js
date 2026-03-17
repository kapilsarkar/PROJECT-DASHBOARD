const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Close menu on click
document.querySelectorAll(".menu-list a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});