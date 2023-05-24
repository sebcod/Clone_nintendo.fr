const menu = document.querySelector("menu");
const burger = document.querySelector(".menuBurger");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const btnFooterHeader = document.querySelector(".btnFooterHeader");
const footerChangeCountry = document.querySelector(".footerChangeCountry");
const menuJeux = document.getElementById("menuJeux");
const sousMenuJeux = document.getElementById("sousMenuJeux");

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
    burger.classList.toggle("disableMenuBurger");
    sousMenuJeux.classList.remove("sousMenuVisible");
  } else {
    burger.classList.toggle("aciveMenuBurger");
  }
});

btnFooterHeader.addEventListener("click", () => {
  btnFooterHeader.classList.toggle("btnFooterHeaderActive");
  footerChangeCountry.classList.toggle("footerChangeCountryActive");
  window.scrollTo(0, document.body.scrollHeight);
});

menuJeux.addEventListener("click", (e) => {
  sousMenuJeux.classList.toggle("sousMenuVisible");
});

// close sous menu on click outside.
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

// close sous menu on click menuBack
document.addEventListener("click", (e) => {
  let menuBack = document.querySelector(".menuBack");
  menuBack.addEventListener("click", () => {
    let sousMenuVisible = document.querySelector(".sousMenuVisible");
    if (sousMenuVisible !== null) {
      sousMenuVisible.classList.toggle("sousMenuVisible");
    }
  });
});
