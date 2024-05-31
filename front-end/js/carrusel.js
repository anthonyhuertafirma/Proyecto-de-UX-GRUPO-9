// Crear el contenedor principal del swiper
const swiperContainer = document.createElement('div');
swiperContainer.className = 'swiper-container home-slider';

// Crear el contenedor del wrapper
const swiperWrapper = document.createElement('div');
swiperWrapper.className = 'swiper-wrapper wrapper';

const slides = [
  {
    span: 'la casa recomienda',
    h3: 'tallarines a lo Alfredo',
    p: 'Deliciosos tallarines al dente, bañados en salsa fresca de tomate, acompañado de verduras cocidas y queso mozarella.',
    imgSrc: 'images/home-img-1.png'
  },
  {
    span: 'Nuestro plato especial',
    h3: 'Pollo al horno',
    p: 'Elaborado con una sazón a base de finas hierbas y acompañado de vegetales deliciosos. Pide ahora tu plato especial.',
    imgSrc: 'images/home-img-2.png'
  },
  {
    span: 'lo más pedido',
    h3: 'pizza vegetariana',
    p: 'Una opción para vegetarianos, aquellos que pueden tener una dieta con necesidades especiales, o simplemente para aquellos que buscan una alternativa más saludable a la pizza normal.',
    imgSrc: 'images/home-img-3.png'
  }
];

// Función para crear una diapositiva
function createSlide(slideData) {
  var swiperSlide = document.createElement('div');
  swiperSlide.className = 'swiper-slide slide';

  var content = document.createElement('div');
  content.className = 'content';

  var span = document.createElement('span');
  span.textContent = slideData.span;

  var h3 = document.createElement('h3');
  h3.textContent = slideData.h3;

  var p = document.createElement('p');
  p.textContent = slideData.p;

  var a = document.createElement('a');
  a.href = '#';
  a.className = 'btn';
  a.textContent = 'Pedir ahora';

  content.appendChild(span);
  content.appendChild(h3);
  content.appendChild(p);
  content.appendChild(a);

  var image = document.createElement('div');
  image.className = 'image';

  var img = document.createElement('img');
  img.src = slideData.imgSrc;
  img.alt = '';

  image.appendChild(img);

  swiperSlide.appendChild(content);
  swiperSlide.appendChild(image);

  return swiperSlide;
}

// Añadir cada diapositiva al wrapper
slides.forEach(function(slide) {
  swiperWrapper.appendChild(createSlide(slide));
});

// Añadir el wrapper al contenedor principal
swiperContainer.appendChild(swiperWrapper);

// Crear y añadir la paginación
var swiperPagination = document.createElement('div');
swiperPagination.className = 'swiper-pagination';
swiperContainer.appendChild(swiperPagination);

// Añadir el contenedor principal al cuerpo del documento o a cualquier otro contenedor
document.body.appendChild(swiperContainer);

// Inicializar Swiper
var swiper = new Swiper('.home-slider', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
});
