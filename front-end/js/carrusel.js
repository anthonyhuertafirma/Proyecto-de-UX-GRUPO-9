// Datos de los slides
const slidesData = [
  {
    span: 'La casa recomienda',
    h3: 'Tallarines a lo Alfredo',
    p: 'Deliciosos tallarines al dente, bañados en salsa fresca de tomate, acompañado de verduras cocidas y queso mozarella.',
    imgSrc: 'images/home-img-1.png',
    imgAlt: 'Tallarines a lo Alfredo'
  },
  {
    span: 'Nuestro plato especial',
    h3: 'Pollo al horno',
    p: 'Elaborado con una sazón a base de finas hierbas y acompañado de vegetales deliciosos. Pide ahora tu plato especial.',
    imgSrc: 'images/home-img-2.png',
    imgAlt: 'Pollo al horno'
  },
  {
    span: 'Lo más pedido',
    h3: 'Pizza vegetariana',
    p: 'Una opción para vegetarianos, aquellos que pueden tener una dieta con necesidades especiales, o simplemente para aquellos que buscan una alternativa más saludable a la pizza normal.',
    imgSrc: 'images/home-img-3.png',
    imgAlt: 'Pizza vegetariana'
  }
];

// Contenedor del slider
const swiperWrapper = document.getElementById('swiper-wrapper wrapper');

// Función para crear un slide
function createSlide(item) {
  // Crear contenedor del slide
  let slide = document.createElement('div');
  slide.className = 'swiper-slide slide';

  let content = document.createElement('div');
  content.className = 'content';

  let span = document.createElement('span');
  span.textContent = item.span;

  let h3 = document.createElement('h3');
  h3.textContent = item.h3;

  let p = document.createElement('p');
  p.textContent = item.p;

  let a = document.createElement('a');
  a.href = '#';
  a.className = 'btn';
  a.textContent = 'Pedir ahora';

  content.appendChild(span);
  content.appendChild(h3);
  content.appendChild(p);
  content.appendChild(a);

  const image = document.createElement('div');
  image.className = 'image';

  const img = document.createElement('img');
  img.src = item.imgSrc;
  img.alt = item.imgAlt;

  image.appendChild(img);

  // Añadir contenido e imagen al slide
  slide.appendChild(content);
  slide.appendChild(image);

  return slide;
}

slidesData.forEach(slideItem => {
  swiperWrapper.appendChild(createSlide(slideItem));
});

