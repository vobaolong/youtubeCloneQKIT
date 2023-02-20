var menuIcon = document.querySelector(".menu__btn");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".containers");
const overlay = document.querySelector(".overlay");
menuIcon.onclick = Toggle = () => {
  sidebar.classList.toggle("small__sidebar");
  container.classList.toggle("large__containers");
  overlay.classList.toggle("show-overlay");
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

function resize() {
  if (window.innerWidth >= 900) {
    Toggle();
  }
}

window.addEventListener("resize", resize);

// onClick
const link = document.getElementById("col");
link.addEventListener("click", function () {
  window.location.href = "detail.html";
});

const resizeIframe = (obj) => {
  obj.style.height = 0;
  obj.style.height = obj.contentWindow.document.body.scrollHeight + "px";
};

// hide show sidebar
