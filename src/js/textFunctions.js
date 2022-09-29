class TextFunctions {
  _title = document.querySelector(".title");
  _header = document.querySelector("header");
  _mainText = document.querySelectorAll(".main-text");
  _firstTextBlock = document.querySelector(".text-start");

  //An element fills the viewport
  elementFillPage(element, container) {
    let margin = `${(window.innerHeight - element.offsetHeight) / 2}px`;
    container.style.height = `${window.innerHeight}px`;
    element.style.marginTop = margin;
    element.style.marginBottom = margin;
  }

  //An element fills the viewport when it is resized
  elementFillPageOnResize(element, container) {
    window.addEventListener("resize", () => {
      this.elementFillPage(element, container);
    });
  }

  /////////////An element can be clicked and will scroll to relevant part of page
  pointerCursorOnHover(element) {
    element.addEventListener("mouseover", function () {
      element.style.cursor = "pointer";
    });
  }
  scrollToElement(element, offset) {
    window.scrollTo({
      left: 0,
      top: element.offsetTop + offset,
      behavior: "smooth",
    });
  }
}

export default new TextFunctions();
