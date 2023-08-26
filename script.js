const menuIcone = document.querySelector(".menu-icon"),
  header = document.querySelector("header");

menuIcone.addEventListener("click", () => {
  menuIcone.classList.toggle("menu-icon-active");
  header.classList.toggle("header__mobile");
});

/*слайдер с яблоками*/
const sliderArrow = document.querySelector(".slider-arrow"),
  slidesArrow = sliderArrow.querySelectorAll(".slider-arrowa_item"),
  prev = sliderArrow.querySelector(".slider-arrows--left"),
  next = sliderArrow.querySelector(".slider-arrows--right");

let slideIndex = 0;

prev.addEventListener("click", () => {
  showSlideArrow(-1);
});
next.addEventListener("click", () => {
  showSlideArrow(1);
});

function showSlideArrow(n) {
  /*console.log(n);*/
  slideIndex += n;

  if (slideIndex < 0) {
    slideIndex = slidesArrow.length - 1;
  }
  if (slideIndex >= slidesArrow.length) {
    slideIndex = 0;
  }

  slidesArrow.forEach((item) => (item.style.display = "none"));
  slidesArrow[slideIndex].style.display = "block";
}

showSlideArrow(0);

/*слайдер с морковками */

const sliderDots = document.querySelector(".slider-dots");
slidesDots = sliderDots.querySelectorAll(".slider-arrowa_item");
wrapperDots = sliderDots.querySelector(".slider-dots__nav");

const dots = [];

for (let i = 0; i < slidesDots.length; i++) {
  const dot = document.createElement("button");

  dot.dataset.slideTo = i;

  dot.classList.add("slider-dots__nav-item");
  if (i == 0) dot.classList.add("slider-dots__nav-item--active");

  if (i != 0) slidesDots[i].style.display = "none";
  dot.addEventListener("click", showSlideDots);

  wrapperDots.append(dot);
  dots.push(dot);

  function showSlideDots(e) {
    const slideTo = e.target.dataset.slideTo;

    slidesDots.forEach((item) => (item.style.display = "none"));
    slidesDots[slideTo].style.display = "block";

    dots.forEach((dot) =>
      dot.classList.remove("slider-dots__nav-item--active")
    );
    e.target.classList.add("slider-dots__nav-item--active");
  }
}
