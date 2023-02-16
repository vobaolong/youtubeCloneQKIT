var menuIcon = document.querySelector(".menu__btn");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".containers");

menuIcon.onclick = Toggle = () => {
  sidebar.classList.toggle("small__sidebar");
  container.classList.toggle("large__containers");
};

// hover video
let colElements = document.querySelectorAll(".col");
let timeOutId;

colElements.forEach(function (colElement) {
  colElement.addEventListener("mouseenter", function () {
    timeOutId = setTimeout(function () {
      colElement.classList.add("col--hover-active");
    }, 800);
  });
  colElement.addEventListener("mouseleave", function () {
    clearTimeout(timeOutId);
    colElement.classList.remove("col--hover-active");
  });
});

// Slick Slider
$(document).ready(function () {
  $(".type").slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class='bx bx-chevron-left'></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class='bx bx-chevron-right'></i></button>`,
  });
});

function resize() {
  if (window.innerWidth >= 900) {
    Toggle();
  }
}

window.addEventListener("resize", resize);
