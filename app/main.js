import "./styles/style.css";
const navToggler = document.getElementById("toggleButton");
const navLinks = document.querySelector(".navbar__links");

navToggler.addEventListener("click", () => {
  navLinks.classList.toggle("navbar__links-show");
});
