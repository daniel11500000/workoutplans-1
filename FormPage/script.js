"use strict";

// SELECTORS
const menuImg = document.querySelector(".menuImg");
const logo = document.querySelector(".logo");
const sideBar = document.querySelector(".sideBar");
const sbCross = document.querySelector(".SB-cross");
const questions1 = document.querySelector(".questions--1");
const questions2 = document.querySelector(".questions--2");
const questions3 = document.querySelector(".questions--3");
const questions4 = document.querySelector(".questions--4");
const questions5 = document.querySelector(".questions--5");
const questionsDefault = document.querySelectorAll(".questions-default");
const filling = document.querySelector(".filling");
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
logo.addEventListener("click", function (e) {
  window.location.href = "../index.html";
});

// questions
let counter = 1;

document.getElementById(`questions--${counter}`).style.opacity = 100;

questionsDefault.forEach(function (el) {
  el.addEventListener("click", function (e) {
    counter++;
    document.getElementById(`questions--${counter}`).style.opacity = 100;
    document.getElementById(`questions--${counter - 1}`).style.opacity = 0;

    filling.style.width = "20%";
    console.log(filling);
  });
});
