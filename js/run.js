const burger = document.querySelector(".burger i");
const navlink = document.querySelector("nav ul");
console.log(navlink)
// burger.addEventListener("click", showHamburger)
function showHamburger() {
  console.log("clicked")
  burger.classList.toggle("fa-times");
  navlink.classList.toggle("nav-active");
}
