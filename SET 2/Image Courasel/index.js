const carouselSlide = document.querySelector('.carousel-slide');
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselSlide.children.length;
  carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + carouselSlide.children.length) % carouselSlide.children.length;
  carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
}