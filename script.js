const menuIcone = document.querySelector(".menu-icon"),
  header = document.querySelector("header");

menuIcone.addEventListener("click", () => {
  menuIcone.classList.toggle("menu-icon-active");
  header.classList.toggle("header__mobile");
});


/*слайдеры*/
const sliderArrow = document.querySelector('.slider-arrow'),
      slidesArrow = sliderArrow.querySelectorAll('.slider-arrowa_item'),
      prev = sliderArrow.querySelector('.slider-arrows--left'),
      next = sliderArrow.querySelector('.slider-arrows--right');
console.log(next);


let slideIndex = 0;

prev.addEventListener('click', () => {
 showSlideArrow(-1)
});
next.addEventListener('click', () => {
  showSlideArrow(1)
 });

 function showSlideArrow(n) {
  /*console.log(n);*/
  slideIndex += n;


  if (slideIndex < 0 ) {
    slideIndex = slidesArrow.length - 1;
} 
if (slideIndex >= slidesArrow.length) {
    slideIndex = 0;
};

  slidesArrow.forEach(item => item.style.display = 'none');
  slidesArrow[slideIndex].style.display = 'block';
 }

 showSlideArrow(0);
