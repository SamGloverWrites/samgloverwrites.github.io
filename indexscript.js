"use strict";

///////Selecting Elements
const midLinkText = document.querySelector(".mid-link-text");
const header = document.querySelector(".header");
const title = document.querySelector(".title");
const links = document.querySelectorAll(".link");
const linkTexts = document.querySelectorAll(".link-text");
const spacing = document.querySelector(".spacing");
const subheading = document.querySelector(".subheading");
const mainText = document.querySelector(".main-text");
const footer = document.querySelector(".page-footer");
const labelDate = document.querySelector(".date");

///////////Font Styler - Dynamically changes fonts sizes and margins depending on the viewport.
const fontStyler = function () {
  let pageWidth = window.innerWidth;
  let titleFontSize = pageWidth / 10;
  let linkFontSize = pageWidth / 25;
  let linkPadding = pageWidth / 35;
  let midLinkFontSize = pageWidth / 27.1;
  let textMargin = pageWidth / 20;
  title.style.fontSize = `${titleFontSize}px`;
  if (titleFontSize > 70) {
    title.style.fontSize = "70px";
  }
  links.forEach(function (link) {
    link.style.width = `${pageWidth / 3}px`;
    link.style.height = `${pageWidth / 3}px`;
    if (pageWidth > 626) {
      link.style.height = `208px`;
    }
  });
  linkTexts.forEach(function (linkBlock) {
    linkBlock.style.fontSize = `${linkFontSize}px`;
    linkBlock.style.paddingLeft = `${linkPadding}px`;
    linkBlock.style.paddingRight = `${linkPadding}px`;
    if (linkFontSize > 36) {
      linkBlock.style.fontSize = "36px";
      linkBlock.style.paddingLeft = `${linkPadding ** 1.5}px`;
      linkBlock.style.paddingRight = `${linkPadding ** 1.5}px`;
    }
  });
  midLinkText.style.fontSize = `${midLinkFontSize}px`;
  midLinkText.style.paddingLeft = `${linkPadding}px`;
  midLinkText.style.paddingRight = `${linkPadding}px`;
  if (midLinkFontSize > 34) {
    midLinkText.style.fontSize = "34px";
    midLinkText.style.paddingLeft = `${linkPadding ** 1.2}px`;
    midLinkText.style.paddingRight = `${linkPadding ** 1.2}px`;
  }
  spacing.style.fontSize = `${linkFontSize}px`;
  if (linkFontSize > 25) {
    spacing.style.fontSize = "25px";
  }
  mainText.style.marginLeft = `${textMargin}px`;
  mainText.style.marginRight = `${textMargin}px`;
  footer.style.marginLeft = `${textMargin}px`;
  let textSize = pageWidth / 32.75;
  if (textSize < 16) {
    textSize = 16;
  }
  if (textSize > 20) {
    textSize = 20;
  }
  mainText.style.fontSize = textSize;
  let subheadingSize = pageWidth / 26.45;
  if (subheadingSize < 20) {
    subheadingSize = 20;
  }
  if (subheadingSize > 25) {
    subheadingSize = 25;
  }
  subheading.style.fontSize = subheadingSize;
};

fontStyler();
window.addEventListener("resize", function () {
  fontStyler();
});

///////////Change colours on links when hovered over
links.forEach(function (link) {
  const linkText = link.querySelector("p");
  link.addEventListener("mouseover", function () {
    link.style.backgroundColor = "#333333";
    linkText.style.color = "#ffffe9";
  });
  link.addEventListener("mouseout", function () {
    link.style.backgroundColor = "white";
    linkText.style.color = "black";
  });
});

///////////Input current year on copyright stamp
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
console.log(currentYear);

labelDate.textContent = currentYear;
