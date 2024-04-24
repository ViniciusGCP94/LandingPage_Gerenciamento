document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slider');
  const slideContainer = document.querySelector('.testimonialCarousel');
  const slideWidth = slides[0].clientWidth; // largura de cada slide
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }

  function updateSlider() {
    const offset = -currentIndex * slideWidth;
    slideContainer.style.transform = `translateX(${offset}px)`;
    if (currentIndex === slides.length - 1) {
      setTimeout(() => {
        slideContainer.style.transition = 'none';
        slideContainer.style.transform = `translateX(0px)`;
        setTimeout(() => {
          slideContainer.style.transition = 'transform 0.5s ease';
        });
      }, 500); // tempo de transição
      currentIndex = 0;
    }
  }

  setInterval(nextSlide, 3000); // Altera para o próximo slide a cada 3 segundos
});
