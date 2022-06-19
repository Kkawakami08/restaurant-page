console.log("RAGNAR");

import "./style.css";

const content = document.getElementById("content");

const header = require("../modules/header.js");
const mainPage = require("../modules/main_page.js");
const menuPage = require("../modules/menu_page.js");
const contactPage = require("../modules/contact_page.js");

header.headerLoad();

const menuSelector = document.getElementById("menu-button");
const homeSelector = document.getElementById("home-button");
const contactSelector = document.getElementById("contact-button");

mainPage.mainPageLoad();
homeSelector.style.backgroundColor = "#3772ff";
// menuPage.menuPageLoad();
// contactPage.contactPageLoad();

console.log(menuSelector);

menuSelector.addEventListener("click", function () {
  menuPage.menuPageLoad();
  menuSelector.style.backgroundColor = "#3772ff";
  homeSelector.style.backgroundColor = "#272932";
  contactSelector.style.backgroundColor = "#272932";
});

homeSelector.addEventListener("click", function () {
  mainPage.mainPageLoad();
  menuSelector.style.backgroundColor = "#272932";
  homeSelector.style.backgroundColor = "#3772ff";
  contactSelector.style.backgroundColor = "#272932";
});

contactSelector.addEventListener("click", function () {
  contactPage.contactPageLoad();
  menuSelector.style.backgroundColor = "#272932";
  homeSelector.style.backgroundColor = "#272932";
  contactSelector.style.backgroundColor = "#3772ff";
});
