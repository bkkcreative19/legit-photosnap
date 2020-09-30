const toggle = document.querySelector(".toggle");
const cards = document.querySelector(".cards");
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const navBtn = document.querySelector(".nav-btn");

const hamburger = document.querySelector(".hamburger");
const dropDown = document.querySelector(".dropdown-nav");
const navBtn = document.querySelector(".nav-btn");
const ul = document.querySelector(".ul");

hamburger.addEventListener("click", () => {
  dropDown.classList.toggle("display");

  if (dropDown.classList.contains("display")) {
    dropDown.style.display = "flex";
  } else {
    dropDown.style.display = "none";
  }
});

toggle.addEventListener("change", () => {
  cards.classList.toggle("show-monthly");
});
