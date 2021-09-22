import textFunctions from "./textFunctions.js";
///////Selecting Elements
const popup = document.querySelector(".popup");
const okbtn = document.querySelector(".accept");

/////////////On title click, scroll to text
const scrollOnTitleClick = () => {
  ///On hover, cursor becomes a pointer
  textFunctions.pointerCursorOnHover(textFunctions._title);

  ///On click scroll to popup window or text
  textFunctions._title.addEventListener("click", function () {
    if (popup.style.display === "none") {
      textFunctions.scrollToElement(textFunctions._firstTextBlock, -10);
    }
    textFunctions.scrollToElement(popup, -30);
  });
};

/////////////When Ok button is pressed in pop up window, hide window and begin glitch events
const startGlitchEvents = () => {
  okbtn.addEventListener("click", function () {
    popup.style.display = "none";
    textFunctions._title.className += " glitch-movement";
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  });
};

const init = () => {
  textFunctions.elementFillPage(textFunctions._title, textFunctions._header);
  textFunctions.elementFillPageOnResize(
    textFunctions._title,
    textFunctions._header
  );
  scrollOnTitleClick();
  startGlitchEvents();
};

init();
