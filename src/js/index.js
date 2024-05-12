// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';


// Seleccionar elementos del DOM
const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.slide-item');
const miniItems = carousel.querySelectorAll('.mini-item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentSlideIndex = 0;

// Función para mostrar el slide actual
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
    miniItems.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
    });
}

// Función para avanzar al siguiente slide
function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

// Función para retroceder al slide anterior
function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}

// Event listeners para los botones de navegación
nextButton.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado de los enlaces
    nextSlide();
});
prevButton.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado de los enlaces
    prevSlide();
});

// Mostrar el primer slide al cargar la página
showSlide(currentSlideIndex);

