"use strict";
////////////Selecting Elements
const title = document.querySelector(".title");
const header = document.querySelector("header");
const mainText = document.querySelectorAll(".main-text");
const firstTextBlock = document.querySelector(".text-start");

////Title font size coded in javascript in order to cap the size at a max of 120px

////Title always fills the viewport
const titleFillPage = function () {
  let titleMargin = `${(window.innerHeight - title.offsetHeight) / 2}px`;
  header.style.height = `${window.innerHeight}px`;
  title.style.marginTop = titleMargin;
  title.style.marginBottom = titleMargin;
};

titleFillPage();

window.addEventListener("resize", function () {
  titleFillPage();
});

/////////////On title click, scroll to text
title.addEventListener("mouseover", function () {
  title.style.cursor = "pointer";
});

title.addEventListener("click", function () {
  window.scrollTo({
    left: 0,
    top: firstTextBlock.offsetTop + 30,
    behavior: "smooth",
  });
});
