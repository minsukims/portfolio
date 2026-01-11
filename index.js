const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");

const mq = window.matchMedia("(max-width: 1260px)");

const $innerslider = document.querySelector(".innerslider");
const $slider = document.querySelectorAll(".slider");
const sliderClone = $innerslider.firstElementChild.cloneNode(true);
$innerslider.appendChild(sliderClone);
let currentIndex = 0;

// 초기 로드 시
if (mq.matches) {
  menu.classList.add("collapsed");
} else {
  menu.classList.remove("collapsed");
}

// 토글 버튼 클릭
menuToggle.addEventListener("click", (e) => {
  e.preventDefault();
  if (!mq.matches) return;
  menu.classList.toggle("expanded");
  menu.classList.toggle("collapsed");
});

// 화면 크기 변경 시 메뉴 초기화
mq.addEventListener("change", (e) => {
  if (!e.matches) {
    menu.classList.remove("expanded");
    menu.classList.remove("collapsed");
  } else {
    menu.classList.add("collapsed");
  }
});

// slider

setInterval(() => {
  currentIndex++;
  $innerslider.style.marginLeft = -currentIndex * 100 + "%";
  $innerslider.style.transition = "all 0.6s";

  if (currentIndex == 3) {
    setTimeout(() => {
      $innerslider.style.transition = "0s";
      $innerslider.style.marginLeft = "0";
      currentIndex = 0;
    }, 700);
  }
}, 3000);
