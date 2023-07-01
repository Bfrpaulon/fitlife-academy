  const carousel = document.querySelector('.hero-carousel');
  const slides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;

  function nextSlide() {
    slides[currentSlide].style.animation = 'none';
    setTimeout(() => {
      slides[currentSlide].style.animation = '';
      currentSlide = (currentSlide + 1) % slides.length;
      updateCarousel();
    }, 1000); // 1000ms é o tempo de duração da animação definida no CSS
  }

  function updateCarousel() {
    const offset = currentSlide * 100;
    carousel.style.transform = `translateX(-${offset}%)`;
  }

  // Defina a velocidade do carrossel em milissegundos (por exemplo, 5000 para 5 segundos)
  const interval = 1000;
  setInterval(nextSlide, interval);