"use strict";

///////Selecting Elements
const title = document.querySelector(".title");
const header = document.querySelector("header");
const mainText = document.querySelectorAll(".main-text");
const bigText = document.querySelectorAll(".big-text");
const biggerText = document.querySelectorAll(".bigger-text");
const mediumText = document.querySelectorAll(".medium-text");
const tabText = document.querySelectorAll(".tab");
const allText = document.getElementsByTagName("p");
const allTextArr = [...allText];
const firstTextBlock = document.querySelector(".text-start");

///////////Font Styler - Dynamically changes fonts sizes and margins depending on the viewport.
const fontStyler = function () {
  let pageWidth = window.innerWidth;
  let titleSize = pageWidth / 8;
  let biggerSize = pageWidth / 7.7;
  let mediumSize = pageWidth / 9;
  title.style.fontSize = `${titleSize}px`;
  header.style.height = `${window.innerHeight}px`;
  let titleMargin = `${(window.innerHeight - title.offsetHeight) / 2}px`;
  title.style.marginTop = titleMargin;
  title.style.marginBottom = titleMargin;
  let textSize = pageWidth / 45;
  let margin = pageWidth / 15;
  if (textSize < 12) {
    textSize = 12;
  }
  if (textSize > 20) {
    textSize = 20;
  }
  allTextArr.forEach(function (textBlock) {
    textBlock.style.marginLeft = `${margin}px`;
    textBlock.style.marginRight = `${margin}px`;
  });
  tabText.forEach(function (textBlock) {
    textBlock.style.marginLeft = `${margin * 2}px`;
  });
  mainText.forEach(function (textBlock) {
    textBlock.style.fontSize = `${textSize}px`;
  });
  bigText.forEach(function (textBlock) {
    textBlock.style.fontSize = `${titleSize}px`;
  });
  biggerText.forEach(function (textBlock) {
    textBlock.style.fontSize = `${biggerSize}px`;
  });
  mediumText.forEach(function (textBlock) {
    textBlock.style.fontSize = `${mediumSize}px`;
  });
};
fontStyler();
window.addEventListener("resize", function () {
  fontStyler();
});

/////////////On title click, scroll to text
title.addEventListener("mouseover", function () {
  title.style.cursor = "pointer";
});
title.addEventListener("click", function () {
  window.scrollTo({
    left: 0,
    top: firstTextBlock.offsetTop - 30,
    behavior: "smooth",
  });
});
