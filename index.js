const menu = document.querySelector("menu");
const burger = document.querySelector(".menuBurger");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const btnFooterHeader = document.querySelector(".btnFooterHeader");
const footerChangeCountry = document.querySelector(".footerChangeCountry");
const menuJeux = document.getElementById("menuJeux");
const subMenuJeux = document.getElementById("subMenuJeux");
const menuHardware = document.getElementById("menuHardware");
const subMenuHardware = document.getElementById("subMenuHardware");
const menuNintendoSwitchOnline = document.getElementById(
  "menuNintendoSwitchOnline"
);
const subMenuNintendoSwitchOnline = document.getElementById(
  "subMenuNintendoSwitchOnline"
);
const menuNews = document.getElementById("menuNews");
const subMenuNews = document.getElementById("subMenuNews");
const menuDivers = document.getElementById("menuDivers");
const subMenuDivers = document.getElementById("subMenuDivers");

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 767px)").matches) {
    main.classList.remove("blur");
    footer.classList.remove("blur");
  } else {
    if (burger.classList.contains("aciveMenuBurger")) {
      main.classList.add("blur");
      footer.classList.add("blur");
    }
  }
  if (window.matchMedia("(max-width: 767px)").matches) {
    if (!burger.classList.contains("aciveMenuBurger")) {
      main.classList.remove("blur");
      footer.classList.remove("blur");
    }
  }
});

burger.addEventListener("click", () => {
  menu.classList.toggle("menuMobileActive");
  main.classList.toggle("blur");
  footer.classList.toggle("blur");

  if (burger.classList.contains("aciveMenuBurger")) {
    burger.classList.add("disableMenuBurger");
    burger.classList.remove("aciveMenuBurger");
  } else {
    burger.classList.remove("disableMenuBurger");
    burger.classList.add("aciveMenuBurger");
  }
});

btnFooterHeader.addEventListener("click", () => {
  btnFooterHeader.classList.toggle("btnFooterHeaderActive");
  footerChangeCountry.classList.toggle("footerChangeCountryActive");
  window.scrollTo(0, document.body.scrollHeight);
});

//---------- open sub menu
menuJeux.addEventListener("click", (e) => {
  subMenuJeux.classList.toggle("subMenuVisible");
  subMenuHardware.classList.remove("subMenuVisible");
  subMenuNintendoSwitchOnline.classList.remove("subMenuVisible");
  subMenuNews.classList.remove("subMenuVisible");
  subMenuDivers.classList.remove("subMenuVisible");
});

menuHardware.addEventListener("click", (e) => {
  subMenuHardware.classList.toggle("subMenuVisible");
  subMenuJeux.classList.remove("subMenuVisible");
  subMenuNintendoSwitchOnline.classList.remove("subMenuVisible");
  subMenuNews.classList.remove("subMenuVisible");
  subMenuDivers.classList.remove("subMenuVisible");
});

menuNintendoSwitchOnline.addEventListener("click", (e) => {
  subMenuNintendoSwitchOnline.classList.toggle("subMenuVisible");
  subMenuJeux.classList.remove("subMenuVisible");
  subMenuHardware.classList.remove("subMenuVisible");
  menuNintendoSwitchOnline.classList.remove("subMenuVisible");
  subMenuNews.classList.remove("subMenuVisible");
  subMenuDivers.classList.remove("subMenuVisible");
});

menuNews.addEventListener("click", (e) => {
  subMenuNews.classList.toggle("subMenuVisible");
  subMenuJeux.classList.remove("subMenuVisible");
  subMenuHardware.classList.remove("subMenuVisible");
  subMenuNintendoSwitchOnline.classList.remove("subMenuVisible");
  subMenuDivers.classList.remove("subMenuVisible");
});

menuDivers.addEventListener("click", (e) => {
  subMenuDivers.classList.toggle("subMenuVisible");
  subMenuNews.classList.remove("subMenuVisible");
  subMenuJeux.classList.remove("subMenuVisible");
  subMenuHardware.classList.remove("subMenuVisible");
  subMenuNintendoSwitchOnline.classList.remove("subMenuVisible");
});
//---------

// close sub-menu on click outside.
document.addEventListener("click", (e) => {
  let subMenuVisible = document.querySelector(".subMenuVisible");
  if (subMenuVisible !== null) {
    if (
      !(
        e.target.id ||
        e.target.parentElement.id ||
        e.target.parentElement.parentElement.id === subMenuVisible.id
      )
    ) {
      subMenuVisible.classList.remove("subMenuVisible");
    }
  }
});

// close sub-menu on click menuBac
let menuBacks = document.querySelectorAll(".menuBack");
menuBacks.forEach((menuBack) => {
  menuBack.addEventListener("click", () => {
    let subMenuVisible = document.querySelector(".subMenuVisible");
    subMenuVisible.classList.remove("subMenuVisible");
  });
});
