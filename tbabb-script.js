"use strict";
////////////Selecting Elements
const title = document.querySelector(".title");
const header = document.querySelector("header");
const mainText = document.querySelectorAll(".main-text");

const tabText = document.querySelectorAll(".tab");
const doubleTabText = document.querySelector(".dtab");
const allText = document.getElementsByTagName("p");
const allTextArr = [...allText];
const firstTextBlock = document.querySelector(".text-start");
const lineBreak = document.querySelector(".line-break");
const itSubtitle = document.querySelectorAll(".it-subtitle");

///////////Font Styler - Dynamically changes fonts sizes and margins depending on the viewport.
const fontStyler = function () {
  let pageWidth = window.innerWidth;
  let titleSize = pageWidth / 8;
  let itSubtitleSize = pageWidth / 25;
  let lineSize = pageWidth / 30;

  title.style.fontSize = `${titleSize}px`;
  if (titleSize > 130) {
    title.style.fontSize = "120px";
  }
  header.style.height = `${window.innerHeight}px`;
  let titleMargin = `${(window.innerHeight - title.offsetHeight) / 2}px`;
  title.style.marginTop = titleMargin;
  title.style.marginBottom = titleMargin;
  let textSize = pageWidth / 47;
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
  doubleTabText.style.marginLeft = `${margin * 3}px`;
  mainText.forEach(function (textBlock) {
    textBlock.style.fontSize = `${textSize}px`;
  });
  lineBreak.style.fontSize = `${lineSize}px`;
  itSubtitle.forEach(function (textBlock) {
    textBlock.style.fontSize = `${itSubtitleSize}px`;
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
    top: firstTextBlock.offsetTop + 30,
    behavior: "smooth",
  });
});
