let currentSlide = 0;
const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".card");

function moveSlider(n) {
  currentSlide += n;
  showSlide();
}

function showSlide() {
  if (currentSlide < 0) {
    currentSlide = cards.length - 1;
  } else if (currentSlide >= cards.length) {
    currentSlide = 0;
  }
  slider.style.transform = `translateX(-${currentSlide * 220}px)`;
}

showSlide();
