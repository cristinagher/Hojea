// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';


const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.slide-item');
const miniItemsContainer = carousel.querySelector('.thumbnail'); // Contenedor de mini-items
const miniItems = Array.from(miniItemsContainer.querySelectorAll('.mini-item, .mini-item-2')); // Convertir en array los mini-items
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentSlideIndex = 0;

// Función para mostrar el slide actual
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

// Función para mostrar los mini-items correspondientes a los slides visibles
function showMiniItems(startIndex, endIndex) {
    miniItems.forEach((item, i) => {
        if (i >= startIndex && i <= endIndex) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Función para mover el primer mini-item al final de la fila
function moveFirstMiniItemToEnd() {
    const firstMiniItem = miniItems[0];
    miniItemsContainer.appendChild(firstMiniItem); // Mover el primer mini-item al final del contenedor
}

// Función para avanzar al siguiente slide y mini-items
function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
    showMiniItems(currentSlideIndex, currentSlideIndex + 4); // Mostrar los siguientes 5 mini-items
}

// Función para retroceder al slide anterior y mini-items
function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
    showMiniItems(currentSlideIndex, currentSlideIndex + 4); // Mostrar los siguientes 5 mini-items
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

// Mover el primer mini-item al final de la fila al cargar la página
moveFirstMiniItemToEnd();

// Mostrar el primer slide y mini-items al cargar la página
showSlide(currentSlideIndex);
showMiniItems(currentSlideIndex, currentSlideIndex + 4);