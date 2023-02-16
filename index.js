let colElements = document.querySelectorAll(".col");
let timeoutId;

colElements.forEach(function (colElement) {
  colElement.addEventListener("mouseenter", function () {
    timeoutId = setTimeout(function () {
      colElement.classList.add("col--hover-active");
    }, 800);
  });
  colElement.addEventListener("mouseleave", function () {
    clearTimeout(timeoutId);
    colElement.classList.remove("col--hover-active");
  });
});
