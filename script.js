const burgerMenu = document.querySelector("#burger-menu");

burgerMenu.addEventListener("click", (e) => {
  burgerMenu.classList.toggle("burger-menu--active");
});
