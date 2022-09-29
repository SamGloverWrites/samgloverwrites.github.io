"use strict";

///////Selecting Elements

const title = document.querySelector(".title");
const strapline = document.querySelector(".strapline");
const links = document.querySelectorAll(".link");
const linkTexts = document.querySelectorAll(".link-text");
const subheading = document.querySelector(".subheading");
const paragraphs = document.querySelector(".paragraphs");
const footer = document.querySelector(".page-footer");
const labelDate = document.querySelector(".date");
const kanji = document.querySelector(".kanji");
const link1 = document.querySelector(".link-1");
const link2 = document.querySelector(".link-2");
const link3 = document.querySelector(".link-3");
const linkGaps = document.querySelectorAll(".space");
console.log(linkGaps);

///////////Change colours on links when hovered over
links.forEach(function (link) {
  const linkText = link.querySelector("p");
  link.addEventListener("mouseover", function () {
    // link.style.backgroundColor = "#333333";
    linkText.style.color = "black";
    linkText.style.textDecoration = "none";
    link.style.cursor = "pointer";
  });
  link.addEventListener("mouseout", function () {
    linkText.style.color = "blue";
    linkText.style.textDecoration = "underline";
  });
});

///////////////Events fire on link click-
//////Kanji appears and is formatted based on viewport
/////Page is redirected

const eventsOnLinkClick = function (linkAddress) {
  kanji.style.height = window.innerHeight;
  kanji.style.marginLeft =
    window.innerWidth - window.innerHeight / (1310 / 690);
  kanji.style.display = "inline";
  title.textContent = "X԰԰԰԰XXXX԰԰԰԰X԰԰";
  strapline.textContent = "where @԰԰԰@԰԰԰@԰԰@԰@԰@";
  subheading.textContent = "Welcome to ¿¥*####¿¥*¥¥¥¥¥********";
  paragraphs.textContent =
    "I've got a bunch of ԰@԰԰԰@԰԰@ which has ¿¥*####¿¥* ¥¥¥¥ ¥****** **********԰@԰԰@԰԰@԰԰@ ¿¥*####¿¥*####¿¥* While ԰԰԰@԰԰԰@԰԰@԰԰@԰԰@԰԰@԰԰԰԰԰@ ¿¥*####¿¥* ¥¥****԰@԰԰@԰԰@԰԰@ ¿¥* ¥¥¥******԰@԰԰@԰԰@ ¿¥*####¿¥* ¥¥¥¥¥************԰@԰԰@԰԰@԰� of ¿¥*####¿¥*####¿¥*####¿¥* ¥¥*******԰@԰԰¥ it's probably because I've �԰@԰԰@԰԰԰@԰԰@԰԰@԰԰@԰԰԰԰@԰԰@԰԰@԰԰@ ¿¥*####¿¥* ¥¥¥¥¥¥¥¥¥¥¥¥¥****************԰@԰԰@԰԰@԰԰@ ¿¥*####¿¥*# at least moderately charming. �԰@԰԰@԰԰԰@԰԰@԰԰@԰԰@԰԰԰԰@԰԰@԰԰@԰԰@ ¿¥*####¿¥* ¥¥¥¥¥¥¥¥¥¥¥¥¥****************԰@԰԰@԰԰@԰԰@ ¿¥*####¿¥*####¿¥*####¿¥* ¥¥****԰@԰԰@԰԰@԰԰@ ¿¥*####¿¥*####¿¥*####¿¥* ¥¥*******԰@԰԰԰@԰԰@԰԰԰@԰԰@԰԰԰԰԰԰@ ¿¥* ¥¥¥¥¥¥¥¥¥¥¥*********԰@԰԰@԰԰԰@԰԰԰԰@԰԰԰@԰԰@԰԰@԰԰@԰԰@԰԰԰԰԰@ ¿¥*####¿¥* ¥¥****԰@԰԰@԰԰@԰԰@ ¿¥* ¥¥¥******԰@԰԰@԰԰@ ¿¥*####¿¥* ¥¥¥¥¥************԰@԰԰@԰԰@԰�l�԰@԰԰@԰԰԰@԰԰@԰԰@԰԰@԰԰԰԰@԰԰@԰԰@԰԰@ ¿¥*####¿¥* ¥¥¥¥¥¥¥¥¥¥¥¥¥****************԰@԰԰@԰԰@԰԰@ ¿¥*####¿¥*####¿¥*####¿¥* ¥¥****԰@԰԰@԰԰@԰԰@ ¿¥*####¿¥*####¿¥*####¿¥* ¥¥*******԰@԰԰԰@԰԰@԰԰԰@԰԰@԰԰԰԰԰԰@ ¿¥* ¥¥¥¥¥¥¥¥¥¥¥*********԰@԰԰@԰԰԰@԰԰԰԰@԰԰԰@԰԰@԰԰@԰԰@԰԰@԰԰԰԰԰@ ¿¥*####¿¥* ¥¥****԰@԰԰@԰԰@԰԰@ ¿¥* ¥¥¥******԰@԰԰@԰԰@ ¿¥*####¿¥* ¥¥¥¥¥************԰@԰԰@԰԰@԰�";
  setTimeout(function () {
    window.location = linkAddress;
  }, 400);
};

//"/deathblender.html"

link1.addEventListener("click", () => {
  eventsOnLinkClick("/death-blender.html");
});
link2.addEventListener(
  "click", ///More click events to be added
  () => (window.location = "/the-black-and-blues-book.html")
);
link3.addEventListener(
  "click", ///More click events to be added
  () => (window.location = "/juliet-in-november.html")
);
///////////Input current year on copyright stamp
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

labelDate.textContent = currentYear;
