const menu = document.querySelector("menu");
const burger = document.querySelector(".menuBurger");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const btnFooterHeader = document.querySelector(".btnFooterHeader");
const footerChangeCountry = document.querySelector(".footerChangeCountry");
const menuJeux = document.getElementById("menuJeux");
const menuJeuxPages = document.getElementById("menuJeuxPages");


//console.log(menuJeux);

burger.addEventListener("click", () => {
  menu.classList.toggle("showMenu");
  main.classList.toggle("blur");
  footer.classList.toggle("blur");

  if (burger.classList.contains("aciveMenuBurger")) {
    burger.classList.toggle("disableMenuBurger");
    menuJeuxPages.classList.remove("menuPages");
  } else {
    burger.classList.toggle("aciveMenuBurger");
  }
});

btnFooterHeader.addEventListener("click", () => {
  btnFooterHeader.classList.toggle("btnFooterHeaderActive");
  footerChangeCountry.classList.toggle("footerChangeCountryActive");
  window.scrollTo(0, document.body.scrollHeight);
});

menuJeux.addEventListener("click", () => {
  menuJeuxPages.classList.toggle("menuPages");
});
