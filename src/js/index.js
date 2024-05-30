// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

//contenedor de todo
let carousel = document.querySelector(".carousel");
//pantalla grande
let slide = document.querySelector(".slide");
//pantalla grande individual
let slideItem = document.querySelector(".slide-item");
//sección cards
let thumbnail = document.querySelector(".thumbnail");
//cards individuales
let miniItem = document.querySelector(".mini-item");

const heroImageElement = document.getElementById("hero-image");

const images = [
  "./assets/images/curso-1.jpg",
  "./assets/images/curso-2.jpg",
  "./assets/images/curso-3.jpg",
  "./assets/images/curso-4.jpg",
  "./assets/images/curso-5.jpg",
];
//dice que así no vale, hay que hacer uno de cada elemento: title, text...
const content = [
  ".course-content-1",
  ".course-content-2",
  ".course-content-3",
  ".course-content-4",
  ".course-content-5",
];

let counter = 0;
function nextCourse() {
  if (counter >= images.length) {
    counter = 0;
  } else {
    counter++;
  }

  heroImageElement.style.backgroundImage = `url(${images[counter]})`;
}

// .textContent =

nextBtn.addEventListener("click", nextCourse);
