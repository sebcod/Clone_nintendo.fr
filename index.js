const menu = document.querySelector("menu");
const burger = document.querySelector(".menuBurger");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const btnFooterHeader = document.querySelector(".btnFooterHeader");
const footerChangeCountry = document.querySelector(".footerChangeCountry");
const menuJeux = document.getElementById("menuJeux");
const sousMenuJeux = document.getElementById("sousMenuJeux");
const menuHardware = document.getElementById("menuHardware");
const subMenuHardware = document.getElementById("subMenuHardware");

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

menuJeux.addEventListener("click", (e) => {
  sousMenuJeux.classList.toggle("sousMenuVisible");
  subMenuHardware.classList.remove("sousMenuVisible");
});

menuHardware.addEventListener("click", (e) => {
  subMenuHardware.classList.toggle("sousMenuVisible");
  sousMenuJeux.classList.remove("sousMenuVisible");
});

// close sub-menu on click outside.
document.addEventListener("click", (e) => {
  let sousMenuVisible = document.querySelector(".sousMenuVisible");
  if (sousMenuVisible !== null) {
    if (
      !(
        e.target.id ||
        e.target.parentElement.id ||
        e.target.parentElement.parentElement.id === sousMenuVisible.id
      )
    ) {
      sousMenuVisible.classList.remove("sousMenuVisible");
    }
  }
});

// close sub-menu on click menuBac
let menuBacks = document.querySelectorAll(".menuBack");
menuBacks.forEach((menuBack) => {
  menuBack.addEventListener("click", () => {
    let sousMenuVisible = document.querySelector(".sousMenuVisible");
    sousMenuVisible.classList.remove("sousMenuVisible");
  });
});
