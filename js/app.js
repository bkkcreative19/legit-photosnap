const toggle = document.querySelector(".toggle");
const cards = document.querySelector(".cards");
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const navBtn = document.querySelector(".nav-btn");

toggle.addEventListener("change", () => {
  cards.classList.toggle("show-monthly");
});
