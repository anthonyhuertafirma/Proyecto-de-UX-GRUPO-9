const menuItems = [
  {
    image: 'images/menu-1.jpg',
    title: 'Pizza "All the meats"',
    description: 'Pizza familiar con todas las carnes. Queso mozzarella, carne de res, pepperoni, salchicha de cerdo, tocino y jamón.',
    quantity: 8,
    price: 'S/12.99'
  },
  {
    image: 'images/menu-2.jpg',
    title: 'Hamburguesa de carne',
    description: 'Deliciosa hamburguesa con carne de res, pepinillos frescos, tomate, cebollas crocante, palta y deliciosas cremas.',
    quantity: 1,
    price: 'S/12.99'
  },
  {
    image: 'images/menu-3.jpg',
    title: 'Tortilla dulce',
    description: 'Tortilla dulce con jalea de frutas silvestres, un postre ideal para deleitarte en los momentos de ocio junto a tus colegas.',
    quantity: 1,
    price: 'S/12.99'
  },
  {
    image: 'images/menu-4.jpg',
    title: 'Waffle con helado',
    description: 'Con una suave masa esponjosa que se puede consumir acompañado de crema de helado para degustar en cualquier momento.',
    quantity: 1,
    price: 'S/12.99'
  },
  {
    image: 'images/menu-5.jpg',
    title: 'Tarta de vallas dulces',
    description: 'Deliciosa para comer junto con frutas, panes, queso dulce, bañado en manjar blanco chocolate.',
    quantity: 1,
    price: 'S/12.99'
  },
  {
    image: 'images/menu-6.jpg',
    title: 'Cupcake aperlado',
    description: 'Relleno de trozos de chocolate y fruta con una suave crema chantilly sabor a arándanos.',
    quantity: 2,
    price: 'S/12.99'
  },
  {
    image: 'images/menu-7.jpg',
    title: 'Bebidas frutales',
    description: 'Una bebida helada a base, principalmente, de jugos frutales mezclados con agua o leche.',
    quantity: 1,
    price: 'S/12.99'
  },
  {
    image: 'images/menu-8.jpg',
    title: 'Ensalada de frutas',
    description: 'Postre frío elaborado con frutas frescas aromatizadas con jarabe perfumado y chocolate.',
    quantity: 1,
    price: 'S/12.99'
  }
];

const boxContainer = document.getElementById('box-container');

function createBoxItem(menuItem) {
  const box = document.createElement('div');
  box.className = 'box';

  const imageDiv = document.createElement('div');
  imageDiv.className = 'image';

  const img = document.createElement('img');
  img.src = menuItem.image;
  img.alt = menuItem.title;
  imageDiv.appendChild(img);

  const contentDiv = document.createElement('div');
  contentDiv.className = 'content';

  const h3 = document.createElement('h3');
  h3.textContent = menuItem.title;
  contentDiv.appendChild(h3);

  const pDescripcion = document.createElement('p');
  pDescripcion.innerHTML = `<b>Descripción: </b>${menuItem.description}`;
  contentDiv.appendChild(pDescripcion);

  const pCantidad = document.createElement('p');
  pCantidad.innerHTML = `<b>Cantidad: </b>${menuItem.quantity}`;
  contentDiv.appendChild(pCantidad);

  const a = document.createElement('a');
  a.href = '#';
  a.className = 'btn';

  const i = document.createElement('i');
  i.className = 'fa-solid fa-cart-shopping';

  a.appendChild(i);
  contentDiv.appendChild(a);

  const span = document.createElement('span');
  span.className = 'price';
  span.textContent = menuItem.price;

  contentDiv.appendChild(span);
  box.appendChild(imageDiv);
  box.appendChild(contentDiv);

  return box
}

menuItems.forEach(item => {
  boxContainer.appendChild(createBoxItem(item));
});