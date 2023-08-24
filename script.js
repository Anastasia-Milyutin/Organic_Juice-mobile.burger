const menuIcone = document.querySelector(".menu-icon"),
  header = document.querySelector("header");

menuIcone.addEventListener("click", () => {
  menuIcone.classList.toggle("menu-icon-active");
  header.classList.toggle("header__mobile");
});
