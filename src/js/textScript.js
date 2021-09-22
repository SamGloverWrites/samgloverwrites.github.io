import textFunctions from "./textFunctions.js";

/////////////On title click, scroll to text
const scrollOnTitleClick = () => {
  ///On hover, cursor becomes a pointer
  textFunctions.pointerCursorOnHover(textFunctions._title);

  ///On click scroll to popup window or text
  textFunctions._title.addEventListener("click", function () {
    textFunctions.scrollToElement(textFunctions._firstTextBlock, -10);
  });
};

const init = () => {
  textFunctions.elementFillPage(textFunctions._title, textFunctions._header);
  textFunctions.elementFillPageOnResize(
    textFunctions._title,
    textFunctions._header
  );
  scrollOnTitleClick();
};

init();
