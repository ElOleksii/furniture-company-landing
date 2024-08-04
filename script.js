const burgerMenu = document.querySelector("#burger-menu");
const mobileMenu = document.querySelector(".mobile-nav__menu");

burgerMenu.addEventListener("click", (e) => {
  burgerMenu.classList.toggle("burger-menu--active");
  mobileMenu.classList.toggle("mobile-nav__menu--active");
});
