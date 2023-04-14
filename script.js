"use strict";

// SELECTORS
const menuImg = document.querySelector(".menuImg");
const logo = document.querySelector(".logo");
const sideBar = document.querySelector(".sideBar");
const sbCross = document.querySelector(".SB-cross");

const btnPlan = document.querySelectorAll(".btn-plan");

////////

// Sidebar events
menuImg.addEventListener("click", function (e) {
  sideBar.classList.add("sideBar-Vis");
  sideBar.classList.remove("sideBar-inVis");
});

sbCross.addEventListener("click", function (e) {
  sideBar.classList.remove("sideBar-Vis");
  sideBar.classList.add("sideBar-inVis");
});

// Button events
btnPlan.forEach(function (el) {
  el.addEventListener("click", function (e) {
    window.location.href = "./FormPage/index.html";
  });
});

logo.addEventListener("click", function (e) {
  window.location.href = "index.html";
});
