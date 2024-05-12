// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
let next = document.querySelector('.next');
let prev = document.querySelector('prev');

addEventListener('click', function() {
    let items = document.querySelectorAll ('.slide-item')
    document.querySelector('.slide').appendChild(items[0])
} )